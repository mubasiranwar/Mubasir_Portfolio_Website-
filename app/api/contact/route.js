import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Forward the message to Formspree endpoint (free tier, sends directly to mubasiranwar70@gmail.com)
    // or standard webhook
    const response = await fetch('https://formspree.io/f/mldgpjzy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        subject: subject || `Portfolio Message from ${name}`,
        message,
        _replyto: email,
      }),
    });

    if (response.ok) {
      return NextResponse.json({ success: true, message: 'Message delivered successfully!' });
    } else {
      // Fallback response with success so user can also use mailto directly
      return NextResponse.json({ success: true, fallback: true });
    }
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error while transmitting message.' },
      { status: 500 }
    );
  }
}
