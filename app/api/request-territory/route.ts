import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Optional: forward to a webhook (Zapier/Make/Sheet) if you add it later.
    // Set REQUEST_WEBHOOK_URL in Vercel env vars.
    const webhook = process.env.REQUEST_WEBHOOK_URL;

    if (webhook) {
      await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ source: 'instinctrise', type: 'territory_request', ...data }),
      });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
