import { NextResponse } from "next/server";

/**
 * POST /api/booking-inquiry
 * Receives a booking inquiry from the Events page form.
 *
 * If RESEND_API_KEY + INQUIRY_EMAIL_TO are set, the inquiry is emailed.
 * Otherwise the submission is logged to the server console as a fallback.
 *
 * Swap the body/recipient rules when email provider is finalized.
 */

type InquiryBody = {
  name?: string;
  email?: string;
  phone?: string;
  eventType?: string;
  date?: string;
  duration?: string;
  attendees?: string;
  message?: string;
};

export async function POST(req: Request) {
  let body: InquiryBody;
  try {
    body = (await req.json()) as InquiryBody;
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  const { name, email, message } = body;
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing required fields: name, email, and message." },
      { status: 400 }
    );
  }

  const to = process.env.INQUIRY_EMAIL_TO ?? "hello@darkhorsehealinglodge.com";
  const apiKey = process.env.RESEND_API_KEY;

  const subject = `New booking inquiry — ${body.eventType || "event"} by ${name}`;
  const textLines = [
    `Name: ${name}`,
    `Email: ${email}`,
    body.phone ? `Phone: ${body.phone}` : null,
    body.eventType ? `Event type: ${body.eventType}` : null,
    body.date ? `Preferred date: ${body.date}` : null,
    body.duration ? `Rental length: ${body.duration}` : null,
    body.attendees ? `Expected attendees: ${body.attendees}` : null,
    "",
    "Message:",
    message,
  ].filter(Boolean);

  if (!apiKey) {
    // Fallback: log so we at least see inquiries during pre-launch
    console.log("[booking-inquiry] (no RESEND_API_KEY; logging only)");
    console.log(textLines.join("\n"));
    return NextResponse.json({ ok: true, delivered: false });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from: `Dark Horse Healing Lodge <noreply@darkhorsehealinglodge.com>`,
      to: [to],
      reply_to: email,
      subject,
      text: textLines.join("\n"),
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("[booking-inquiry] Resend failed:", res.status, detail);
    return NextResponse.json(
      { error: "Could not send inquiry. Please try again or email us directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true, delivered: true });
}
