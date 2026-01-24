import { NextRequest, NextResponse } from 'next/server';

// Lead scoring algorithm
function calculateLeadScore(data: any): number {
  let score = 0;

  // Revenue scoring (40 points max)
  const revenueScores: { [key: string]: number } = {
    'Over $10M': 40,
    '$3M - $10M': 35,
    '$1M - $3M': 30,
    '$500K - $1M': 20,
    'Under $500K': 10,
  };
  score += revenueScores[data.revenue] || 0;

  // Territory scoring (30 points max)
  const territoryScores: { [key: string]: number } = {
    'St. Lucie County - Full': 30,
    'Palm Beach County - Full': 30,
    'Broward County - Full': 30,
    'Miami-Dade County - Full': 30,
    'City Territory': 20,
    'ZIP Territory': 15,
    'Not Sure - Need Help': 10,
  };
  score += territoryScores[data.territory] || 0;

  // Speed bonus (30 points max)
  // If they submit within first hour of seeing site = high intent
  // This would require tracking session start, but we'll give 30 points by default
  score += 30;

  return score;
}

function classifyLead(score: number): string {
  if (score >= 80) return 'HOT';
  if (score >= 60) return 'WARM';
  if (score >= 40) return 'COLD';
  return 'LOW';
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Calculate lead score
    const leadScore = calculateLeadScore(data);
    const leadTier = classifyLead(leadScore);

    const enrichedData = {
      ...data,
      leadScore,
      leadTier,
      timestamp: new Date().toISOString(),
      ipAddress: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip'),
      userAgent: request.headers.get('user-agent'),
    };

    // Send to multiple destinations in parallel
    const results = await Promise.allSettled([
      // 1. Send to Google Sheets
      sendToGoogleSheets(enrichedData),

      // 2. Send email notification to Sean
      sendEmailNotification(enrichedData),

      // 3. Add to email marketing (optional - uncomment when ready)
      // addToEmailList(enrichedData),
    ]);

    // Check if at least one integration succeeded
    const hasSuccess = results.some(r => r.status === 'fulfilled');

    if (hasSuccess) {
      return NextResponse.json({
        success: true,
        message: 'Lead captured successfully',
        leadTier,
      });
    } else {
      throw new Error('All integrations failed');
    }

  } catch (error) {
    console.error('Lead capture error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to capture lead' },
      { status: 500 }
    );
  }
}

// Integration 1: Google Sheets (via Google Apps Script Web App)
async function sendToGoogleSheets(data: any) {
  const GOOGLE_SHEETS_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!GOOGLE_SHEETS_URL) {
    console.warn('Google Sheets webhook URL not configured');
    return;
  }

  const response = await fetch(GOOGLE_SHEETS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to send to Google Sheets');
  }

  return response.json();
}

// Integration 2: Email notification to Sean
async function sendEmailNotification(data: any) {
  // Option A: Using Resend (modern, developer-friendly)
  const RESEND_API_KEY = process.env.RESEND_API_KEY;

  if (RESEND_API_KEY) {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'TerritoryIQ <leads@instinctrise.com>',
        to: ['skaplan@instinctrise.com'],
        subject: `🔥 ${data.leadTier} LEAD: ${data.name} - ${data.territory}`,
        html: generateEmailHTML(data),
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send email via Resend');
    }

    return response.json();
  }

  // Option B: Using mailto fallback (works without API keys)
  // This doesn't actually send, but provides a way to contact
  console.log('Email notification would be sent:', {
    to: 'skaplan@instinctrise.com',
    subject: `${data.leadTier} LEAD: ${data.name}`,
    data,
  });
}

// Integration 3: Email marketing (ConvertKit, Mailchimp, etc.)
async function addToEmailList(data: any) {
  const CONVERTKIT_API_KEY = process.env.CONVERTKIT_API_KEY;
  const CONVERTKIT_FORM_ID = process.env.CONVERTKIT_FORM_ID;

  if (!CONVERTKIT_API_KEY || !CONVERTKIT_FORM_ID) {
    console.warn('ConvertKit not configured');
    return;
  }

  const response = await fetch(
    `https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: CONVERTKIT_API_KEY,
        email: data.email,
        first_name: data.name.split(' ')[0],
        fields: {
          company: data.company,
          phone: data.phone,
          territory: data.territory,
          revenue: data.revenue,
          lead_score: data.leadScore,
          lead_tier: data.leadTier,
        },
      }),
    }
  );

  if (!response.ok) {
    throw new Error('Failed to add to email list');
  }

  return response.json();
}

// Generate HTML email for Sean
function generateEmailHTML(data: any): string {
  const urgencyColor = data.leadTier === 'HOT' ? '#DC2626' :
                       data.leadTier === 'WARM' ? '#F59E0B' :
                       data.leadTier === 'COLD' ? '#3B82F6' : '#6B7280';

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #3B82F6, #8B5CF6); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
        .score-badge { display: inline-block; background: ${urgencyColor}; color: white; padding: 8px 16px; border-radius: 20px; font-weight: bold; font-size: 14px; margin-top: 10px; }
        .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
        .info-row { margin: 15px 0; padding: 15px; background: white; border-left: 4px solid #3B82F6; border-radius: 4px; }
        .label { font-weight: bold; color: #6B7280; font-size: 12px; text-transform: uppercase; margin-bottom: 5px; }
        .value { font-size: 16px; color: #111827; }
        .cta-button { display: inline-block; background: linear-gradient(135deg, #3B82F6, #8B5CF6); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; margin-top: 20px; }
        .footer { text-align: center; margin-top: 20px; color: #6B7280; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="margin: 0;">🚨 New Lead Alert</h1>
          <div class="score-badge">${data.leadTier} LEAD - Score: ${data.leadScore}/100</div>
        </div>

        <div class="content">
          <div class="info-row">
            <div class="label">Contact Name</div>
            <div class="value">${data.name}</div>
          </div>

          <div class="info-row">
            <div class="label">Company</div>
            <div class="value">${data.company}</div>
          </div>

          <div class="info-row">
            <div class="label">Email</div>
            <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
          </div>

          <div class="info-row">
            <div class="label">Phone</div>
            <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
          </div>

          <div class="info-row">
            <div class="label">Interested Territory</div>
            <div class="value">${data.territory}</div>
          </div>

          <div class="info-row">
            <div class="label">Annual Revenue</div>
            <div class="value">${data.revenue}</div>
          </div>

          ${data.message ? `
          <div class="info-row">
            <div class="label">Message</div>
            <div class="value">${data.message}</div>
          </div>
          ` : ''}

          <div style="margin-top: 30px; padding: 20px; background: #FEF3C7; border-left: 4px solid #F59E0B; border-radius: 4px;">
            <strong>⚡ Quick Actions:</strong>
            <ul style="margin: 10px 0; padding-left: 20px;">
              <li>Run territory analysis for ${data.territory}</li>
              <li>Send sample properties within 30 minutes</li>
              <li>Schedule demo call</li>
            </ul>
          </div>

          <div style="text-align: center;">
            <a href="mailto:${data.email}?subject=Your Free Territory Analysis - ${data.territory}" class="cta-button">
              📧 Reply to Lead
            </a>
          </div>
        </div>

        <div class="footer">
          <p>Lead received at ${new Date(data.timestamp).toLocaleString()}</p>
          <p>Source: ${data.source || 'Unknown'}</p>
        </div>
      </div>
    </body>
    </html>
  `;
}
