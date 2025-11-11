import { NextResponse } from 'next/server';

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_SENDER_EMAIL =
  process.env.BREVO_SENDER_EMAIL ?? 'yahfoufim91@gmail.com';
const BREVO_SENDER_NAME =
  process.env.BREVO_SENDER_NAME ?? 'Codart Shop';
const BREVO_RECIPIENT_EMAIL =
  process.env.BREVO_RECIPIENT_EMAIL ?? 'yahfoufim91@gmail.com';
const BREVO_API_URL =
  process.env.BREVO_API_URL ?? 'https://api.brevo.com/v3/smtp/email';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { status: 'error', message: 'Missing required fields' },
        { status: 400 },
      );
    }

    if (!BREVO_API_KEY || !BREVO_SENDER_EMAIL || !BREVO_RECIPIENT_EMAIL) {
      console.error('Brevo configuration is missing. Check environment variables.');
      return NextResponse.json(
        { status: 'error', message: 'Email service is not configured.' },
        { status: 500 },
      );
    }

    const subject = `New contact request from ${name}`;
    const htmlContent = `
      <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.5; color: #1a1a2e;">
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br />')}</p>
        </body>
      </html>
    `;

    const textContent = `New message from ${name} (${email}):\n\n${message}`;

    const brevoResponse = await fetch(BREVO_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          email: BREVO_SENDER_EMAIL,
          name: BREVO_SENDER_NAME,
        },
        to: [
          {
            email: BREVO_RECIPIENT_EMAIL,
            name: BREVO_SENDER_NAME,
          },
        ],
        replyTo: {
          email,
          name,
        },
        subject,
        textContent,
        htmlContent,
        tags: ['portfolio-contact'],
      }),
    });

    if (!brevoResponse.ok) {
      const errorText = await brevoResponse.text();
      console.error('Brevo API error:', brevoResponse.status, errorText);
      return NextResponse.json(
        {
          status: 'error',
          message: 'Failed to send message. Please try again later.',
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ status: 'success' });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        status: 'error',
        message: 'Unexpected server error. Please try again later.',
      },
      { status: 500 },
    );
  }
}
