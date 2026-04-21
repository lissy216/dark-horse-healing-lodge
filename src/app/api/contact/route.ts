import { NextResponse } from "next/server";

type ContactBody = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
};

export async function POST(req: Request) {
  let body: ContactBody;
  try {
    body = (await req.json()) as ContactBody;
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  const { name, email, subject, message } = body;
  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "Name, email, subject, and message are required." },
      { status: 400 }
    );
  }

  const to = process.env.INQUIRY_EMAIL_TO ?? "hello@darkhorsehealinglodge.com";
  const apiKey = process.env.RESEND_API_KEY;

  const textLines = [
    `Name: ${name}`,
    `Email: ${email}`,
    body.phone ? `Phone: ${body.phone}` : null,
    `Subject: ${subject}`,
    "",
    "Message:",
    message,
  ].filter(Boolean);

  if (!apiKey) {
    console.log("[contact] (no RESEND_API_KEY; logging only)");
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
      subject: `[Contact] ${subject}`,
      text: textLines.join("\n"),
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("[contact] Resend failed:", res.status, detail);
    return NextResponse.json(
      { error: "Could not send message. Please email us directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true, delivered: true });
}
