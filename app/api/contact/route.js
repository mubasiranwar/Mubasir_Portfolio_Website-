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

    // Direct transmission to FormSubmit pointed to Mubasir's Gmail
    const response = await fetch('https://formsubmit.co/ajax/mubasiranwar70@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        _subject: subject || `New Portfolio Inquiry from ${name}`,
        message,
        _replyto: email,
        _template: 'table',
      }),
    });

    const data = await response.json();

    if (response.ok && data.success !== 'false' && data.success !== false) {
      return NextResponse.json({ success: true, message: 'Message delivered directly to Mubasir!' });
    } else {
      // If activation is pending or error, provide specific message
      return NextResponse.json({
        success: false,
        message: data.message || 'Form needs confirmation or temporary provider error.',
      }, { status: 400 });
    }
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error while transmitting message.' },
      { status: 500 }
    );
  }
}
