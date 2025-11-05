import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // TODO: Implement email sending logic without Resend
    console.log('Contact form submission:', { name, email, message });

    return NextResponse.json({ status: 'success' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 'error' }, { status: 500 });
  }
}
