import FormData from 'form-data';
import Mailgun from 'mailgun.js';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const formData = await request.json();

  const mailgun = new Mailgun(FormData);
  const mg = mailgun.client({
    username: 'api',
    key: process.env.MAILGUN_API_KEY || '',
  });

  // Get template name and remove any trailing slashes
  const templateName = (
    process.env.MAILGUN_SAMPLE_CHART_TEMPLATE_NAME || 'chart-sample'
  ).replace(/\/+$/, '');

  return mg.messages
    .create(process.env.MAILGUN_DOMAIN || '', {
      from: `AndAI <mailgun@${process.env.MAILGUN_DOMAIN}>`,
      to: ['caleb@tryandai.com'],
      subject: 'New Sample Chart Request',
      template: templateName,
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
