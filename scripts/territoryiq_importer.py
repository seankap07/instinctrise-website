import csv
import json
import os
import re
import sys
from datetime import datetime
from typing import Dict, List, Optional
from urllib import request

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_SERVICE_ROLE_KEY = os.getenv("SUPABASE_SERVICE_ROLE_KEY")
DATA_DIR = os.getenv("TERRITORYIQ_DATA_DIR", os.getcwd())

FILES = [
    "REEXPORT_Martin_Residential_Enriched.csv",
    "REEXPORT_Martin_Commercial_Enriched.csv",
    "REEXPORT_StLucie_Residential.csv",
    "REEXPORT_StLucie_Commercial.csv",
]

if not SUPABASE_URL or not SUPABASE_SERVICE_ROLE_KEY:
    print("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in environment.")
    sys.exit(1)

SUPABASE_URL = SUPABASE_URL.rstrip("/")


def normalize_header(header: str) -> str:
    return re.sub(r"_+", "_", re.sub(r"[^a-z0-9]+", "_", header.lower())).strip("_")


def to_number(value: Optional[str]) -> Optional[float]:
    if value is None:
        return None
    stripped = str(value).strip()
    if stripped == "":
        return None
    stripped = re.sub(r"[$,%]", "", stripped)
    try:
        return float(stripped)
    except ValueError:
        return None


def to_boolean(value: Optional[str]) -> Optional[bool]:
    if value is None:
        return None
    if isinstance(value, bool):
        return value
    stripped = str(value).strip().lower()
    if stripped in {"true", "yes", "y", "1", "t"}:
        return True
    if stripped in {"false", "no", "n", "0", "f"}:
        return False
    try:
        return float(stripped) > 0
    except ValueError:
        return None


def pick(row: Dict[str, str], keys: List[str]) -> Optional[str]:
    for key in keys:
        value = row.get(key)
        if value not in (None, ""):
            return value
    return None


def map_row(row: Dict[str, str], source_file: str) -> Optional[Dict[str, object]]:
    parcel_id = pick(
        row,
        [
            "parcel_id",
            "parcelid",
            "parcel_number",
            "parcel",
            "parid",
            "folio",
            "folio_number",
        ],
    )
    situs_address = pick(
        row,
        [
            "situs_address",
            "situsaddress",
            "site_address",
            "property_address",
            "address",
            "full_address",
            "location_address",
        ],
    )
    county = pick(row, ["county", "county_name"])
    city = pick(row, ["city", "situs_city"])
    state = pick(row, ["state", "situs_state"])
    zip_code = pick(row, ["zip", "zipcode", "postal_code", "zip_code"])
    lead_score = to_number(pick(row, ["lead_score_100", "lead_score", "score", "leadscore", "score_100"]))
    priority_tier = pick(row, ["priority_tier", "priority", "tier"])
    hvac_15plus = to_boolean(pick(row, ["hvac_15plus", "hvac_15_plus", "hvac_15years", "hvac_15_years"]))
    roof_15plus = to_boolean(pick(row, ["roof_15plus", "roof_15_plus", "roof_15years", "roof_15_years"]))
    solar_15plus = to_boolean(pick(row, ["solar_15plus", "solar_15_plus", "solar_15years", "solar_15_years"]))
    replacement_value = to_number(
        pick(
            row,
            [
                "replacement_value",
                "replacement_value_total",
                "total_replacement_value",
                "replacement_cost",
                "rplc_value",
            ],
        )
    )
    industry = pick(row, ["industry", "vertical", "trade", "service", "service_type"])
    latitude = to_number(pick(row, ["latitude", "lat"]))
    longitude = to_number(pick(row, ["longitude", "lng", "lon", "long"]))

    address_key = "|".join(part for part in [situs_address, zip_code] if part)
    dedupe_key = None
    if parcel_id:
        dedupe_key = f"parcel:{parcel_id}"
    elif address_key:
        dedupe_key = f"address:{address_key}"
    elif situs_address:
        dedupe_key = f"address:{situs_address}"

    if not dedupe_key:
        return None

    return {
        "dedupe_key": dedupe_key,
        "parcel_id": parcel_id,
        "situs_address": situs_address,
        "county": county,
        "city": city,
        "state": state,
        "zip": zip_code,
        "lead_score_100": lead_score,
        "priority_tier": priority_tier,
        "hvac_15plus": hvac_15plus,
        "roof_15plus": roof_15plus,
        "solar_15plus": solar_15plus,
        "replacement_value": replacement_value,
        "industry": industry,
        "latitude": latitude,
        "longitude": longitude,
        "source_file": source_file,
        "raw": row,
        "updated_at": datetime.utcnow().isoformat(),
    }


def load_csv(file_path: str) -> List[Dict[str, str]]:
    with open(file_path, newline="", encoding="utf-8-sig") as csv_file:
        reader = csv.reader(csv_file)
        try:
            raw_headers = next(reader)
        except StopIteration:
            return []
        headers = [normalize_header(header) for header in raw_headers]
        rows = []
        for row in reader:
            if not any(cell.strip() for cell in row if isinstance(cell, str)):
                continue
            normalized = {headers[index]: value for index, value in enumerate(row) if index < len(headers)}
            rows.append(normalized)
        return rows


def merge_by_score(existing: Dict[str, object], incoming: Dict[str, object]) -> Dict[str, object]:
    existing_score = existing.get("lead_score_100")
    incoming_score = incoming.get("lead_score_100")
    existing_score = existing_score if isinstance(existing_score, (int, float)) else -1
    incoming_score = incoming_score if isinstance(incoming_score, (int, float)) else -1
    return incoming if incoming_score > existing_score else existing


def upsert_rows(table: str, rows: List[Dict[str, object]]) -> None:
    chunk_size = 500
    for i in range(0, len(rows), chunk_size):
        chunk = rows[i : i + chunk_size]
        payload = json.dumps(chunk).encode("utf-8")
        url = f"{SUPABASE_URL}/rest/v1/{table}?on_conflict=dedupe_key"
        req = request.Request(
            url,
            data=payload,
            method="POST",
            headers={
                "apikey": SUPABASE_SERVICE_ROLE_KEY,
                "Authorization": f"Bearer {SUPABASE_SERVICE_ROLE_KEY}",
                "Content-Type": "application/json",
                "Prefer": "resolution=merge-duplicates,return=minimal",
            },
        )
        try:
            with request.urlopen(req) as response:
                if response.status >= 300:
                    raise RuntimeError(response.read().decode("utf-8"))
        except Exception as exc:
            print(f"Upsert failed for {table}: {exc}")
            sys.exit(1)


def main() -> None:
    residential_map: Dict[str, Dict[str, object]] = {}
    commercial_map: Dict[str, Dict[str, object]] = {}

    for file_name in FILES:
        file_path = os.path.join(DATA_DIR, file_name)
        if not os.path.exists(file_path):
            print(f"Missing file: {file_path}. Skipping.")
            continue
        records = load_csv(file_path)
        is_residential = re.search(r"residential", file_name, re.IGNORECASE) is not None
        target = residential_map if is_residential else commercial_map
        for record in records:
            mapped = map_row(record, file_name)
            if not mapped:
                continue
            existing = target.get(mapped["dedupe_key"])
            target[mapped["dedupe_key"]] = merge_by_score(existing, mapped) if existing else mapped

    residential_rows = list(residential_map.values())
    commercial_rows = list(commercial_map.values())

    print(f"Residential rows: {len(residential_rows)}")
    print(f"Commercial rows: {len(commercial_rows)}")

    if residential_rows:
        upsert_rows("residential_leads", residential_rows)
    if commercial_rows:
        upsert_rows("commercial_leads", commercial_rows)

    print("Import complete.")


if __name__ == "__main__":
    main()
