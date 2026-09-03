import { NextRequest, NextResponse } from "next/server";

interface ContactBody {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactBody = await request.json();
    const { name, email, subject, message } = body;

    // Validate
    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const toEmail = process.env.CONTACT_TO_EMAIL ?? "abdulrahmanmahmoudrezk@gmail.com";
    const resendKey = process.env.RESEND_API_KEY;

    if (!resendKey) {
      // Stub mode — log and return success (so dev works without API key)
      console.log("[contact] RESEND_API_KEY not set. Stubbing email send.", {
        to: toEmail,
        from: email,
        name,
        subject,
      });
      return NextResponse.json({ ok: true, stub: true });
    }

    // Send via Resend
    const { Resend } = await import("resend");
    const resend = new Resend(resendKey);

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: toEmail,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;">
          <h2 style="color:#22d3ee;margin-bottom:4px;">New Portfolio Message</h2>
          <hr style="border:none;border-top:1px solid #1e293b;margin:16px 0;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="border:none;border-top:1px solid #1e293b;margin:16px 0;" />
          <p style="white-space:pre-wrap;">${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
