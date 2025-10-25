import FormData from 'form-data';
import Mailgun from 'mailgun.js';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  console.log('Received request:', request);
  const formData = await request.json();
  console.log('Form data:', formData);

  const urlRegex =
    /^(?:(?:https?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=]*)$/;
  if (!urlRegex.test(formData.companyWebsite)) {
    return NextResponse.json(
      { message: 'Invalid website URL format' },
      { status: 400 },
    );
  }

  const mailgun = new Mailgun(FormData);
  const mg = mailgun.client({
    username: 'api',
    key: process.env.MAILGUN_API_KEY || '',
  });

  return mg.messages
    .create(process.env.MAILGUN_DOMAIN || '', {
      from: `AndAI <mailgun@${process.env.MAILGUN_DOMAIN}>`,
      to: ['caleb@tryandai.com'],
      subject: 'New Contact Form Submission',
      text: `
      New contact form submission:
      Name: ${formData.name}
      Email: ${formData.email}
      Company: ${formData.company}
      Company Website: ${formData.companyWebsite}
      Primary Location: ${formData.primaryLocation}
      Organization Type: ${formData.organizationType}
      Number of Lawyers: ${formData.numberOfLawyers}
      How did you hear about us?: ${formData.referralSource}
    `,
      html: `
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Company:</strong> ${formData.company}</p>
      <p><strong>Company Website:</strong> <a href="${formData.companyWebsite}">${formData.companyWebsite}</a></p>
      <p><strong>Primary Location:</strong> ${formData.primaryLocation}</p>
      <p><strong>Organization Type:</strong> ${formData.organizationType}</p>
      <p><strong>Number of Lawyers:</strong> ${formData.numberOfLawyers}</p>
      <p><strong>How did you hear about us?:</strong> ${formData.referralSource}</p>
    `,
    })
    .then((result) => {
      console.log('Email sent successfully:', result);
      return NextResponse.json(
        { message: 'Email sent successfully' },
        { status: 200 },
      );
    })
    .catch((error) => {
      console.error('Failed to submit form:', error);
      console.error('Error details:', JSON.stringify(error, null, 2));
      return NextResponse.json(
        { message: 'Failed to send email', error: error.message },
        { status: 500 },
      );
    });
}
