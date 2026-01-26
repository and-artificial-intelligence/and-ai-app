import FormData from 'form-data';
import Mailgun from 'mailgun.js';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const formData = await request.json();

  // Check if required environment variables are set
  if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
    console.error('Missing Mailgun configuration');
    return NextResponse.json(
      { message: 'Email service not configured' },
      { status: 500 },
    );
  }

  const mailgun = new Mailgun(FormData);
  const mg = mailgun.client({
    username: 'api',
    key: process.env.MAILGUN_API_KEY,
  });

  return mg.messages
    .create(process.env.MAILGUN_DOMAIN, {
      from: `AndAI <mailgun@${process.env.MAILGUN_DOMAIN}>`,
      to: ['caleb@tryandai.com'],
      subject: 'New Sample Chart Request',
      template: process.env.MAILGUN_SAMPLE_CHART_TEMPLATE_NAME || 'sample-chart-request',
      'h:X-Mailgun-Variables': JSON.stringify({
        name: formData.name,
        email: formData.email,
        firmCompany: formData.firmCompany,
        targetPatent: formData.targetPatent,
        claimNumbers: formData.claimNumbers,
        referencePatents: formData.referencePatents,
      }),
    })
    .then(() =>
      NextResponse.json(
        { message: 'Email sent successfully' },
        { status: 200 },
      ),
    )
    .catch((error) =>
      NextResponse.json(
        { message: 'Failed to send email', error: error.message },
        { status: 500 },
      ),
    );
}
