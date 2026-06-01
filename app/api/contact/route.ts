import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  segment?: string;
  area?: string;
  budget?: string;
  timeline?: string;
  message?: string;
};

const requiredFields: Array<keyof ContactPayload> = ["name", "email", "phone"];

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
  }

  const missingField = requiredFields.find((field) => !payload[field]?.trim());

  if (missingField) {
    return NextResponse.json({ error: "Please fill in Name, Email, and Phone number." }, { status: 400 });
  }

  const webhookUrl = process.env.CONTACT_GOOGLE_SCRIPT_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      { error: "Contact form is not configured yet. Please call or email AluEdge directly." },
      { status: 503 }
    );
  }

  const forwardedPayload = {
    ...payload,
    notifyEmail: process.env.CONTACT_NOTIFY_EMAIL ?? "aluedge.co@gmail.com",
    secret: process.env.CONTACT_WEBHOOK_SECRET ?? "",
    submittedAt: new Date().toISOString(),
    source: "AluEdge website contact form",
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(forwardedPayload),
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Google Script returned ${response.status}`);
    }

    const result = await response.json().catch(() => ({ ok: true }));

    if (result.ok === false) {
      throw new Error(result.error ?? "Google Script rejected the inquiry.");
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form delivery failed", error);

    return NextResponse.json(
      { error: "Inquiry could not be submitted right now. Please call or email AluEdge directly." },
      { status: 502 }
    );
  }
}
