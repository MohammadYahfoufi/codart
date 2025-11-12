// app/api/send-email/route.ts
import { NextResponse } from "next/server";
import { brevo } from "@/lib/brevo";
import type * as Brevo from "@getbrevo/brevo";

export const runtime = "nodejs";
export const dynamic = "force-dynamic"; // avoid caching

function isEmail(x: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(x);
}

export async function POST(req: Request) {
  try {
    // Robust JSON parse
    let body: any;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }

    const { email, message, subject, name } = body || {};

    if (!email || !message) {
      return NextResponse.json(
        { error: "email and message are required" },
        { status: 400 }
      );
    }
    if (!isEmail(email)) {
      return NextResponse.json({ error: "invalid email" }, { status: 400 });
    }

    // ✨ Send the email TO YOU (owner/admin), not to the visitor
    const ownerEmail = process.env.CONTACT_INBOX ?? process.env.BREVO_SENDER_EMAIL!;
    const ownerName = process.env.CONTACT_INBOX_NAME ?? (process.env.BREVO_SENDER_NAME || "CODART");


    const sendSmtpEmail: Brevo.SendSmtpEmail = {
      to: [{ email: ownerEmail, name: ownerName }],          // <-- you receive it
      sender: {
        email: process.env.BREVO_SENDER_EMAIL!,              // verified sender in Brevo
        name: process.env.BREVO_SENDER_NAME || "CODART",
      },
      replyTo: { email, name: name || undefined },           // <-- hitting Reply goes to the visitor
      subject: subject || "New contact form message",
      templateId: 1,                                         // your Brevo template ID
      params: {
        MESSAGE_BODY: message,
        USER_EMAIL: email,
        USER_NAME: name || "",
        COMPANY_NAME: "CODART",
        SUPPORT_EMAIL: "support@codart.com",
        LOGO_URL: "https://codart.vercel.app/codart1.png",
        // SUBJECT: subject || "New contact form message",   // if your template uses {{ params.SUBJECT }}
      },
      // Optional: also cc yourself/teammates, or bcc for archives
      // cc: [{ email: "teammate@codart.dev" }],
      // bcc: [{ email: "archive@codart.dev" }],
      // tags: ["contact-form"],
    };

    const result = await brevo.sendTransacEmail(sendSmtpEmail);
    const messageId =
      (result as any)?.messageId ||
      (result as any)?.body?.messageId ||
      null;

    return NextResponse.json({ ok: true, messageId }, { status: 200 });
  } catch (err: any) {
    // Brevo errors often hide under response.body or response.text
    const detail =
      err?.response?.text ||
      err?.response?.body?.message ||
      err?.message ||
      "Unknown error";
    console.error("Brevo send error:", detail);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}

// (Optional) reject other methods:
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
