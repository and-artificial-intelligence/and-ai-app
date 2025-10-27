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

  return mg.messages
    .create(process.env.MAILGUN_DOMAIN || '', {
      from: `AndAI <mailgun@${process.env.MAILGUN_DOMAIN}>`,
      to: ['caleb@tryandai.com'],
      subject: 'New Demo Request',
      template: process.env.MAILGUN_TEMPLATE_NAME || 'demo-request',
      'h:X-Mailgun-Variables': JSON.stringify({
        name: formData.name,
        email: formData.email,
        useCase: formData.useCase,
        referralSource: formData.referralSource,
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
