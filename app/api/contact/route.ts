import { NextResponse } from "next/server";

const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL;
const MAX_LENGTHS = {
  name: 120,
  email: 160,
  subject: 160,
  message: 3000,
};
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  website?: unknown;
};

function cleanField(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function validationError(message: string) {
  return NextResponse.json({ message }, { status: 400 });
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return validationError("Invalid contact form payload.");
  }

  const website = cleanField(payload.website);

  if (website) {
    return NextResponse.json({ message: "Message received." });
  }

  const name = cleanField(payload.name);
  const email = cleanField(payload.email);
  const subject = cleanField(payload.subject);
  const message = cleanField(payload.message);

  if (!name || !email || !subject || !message) {
    return validationError("Please complete all required fields.");
  }

  if (name.length > MAX_LENGTHS.name) {
    return validationError("Name is too long.");
  }

  if (email.length > MAX_LENGTHS.email || !EMAIL_PATTERN.test(email)) {
    return validationError("Please enter a valid email address.");
  }

  if (subject.length > MAX_LENGTHS.subject) {
    return validationError("Subject is too long.");
  }

  if (message.length > MAX_LENGTHS.message) {
    return validationError("Message is too long.");
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !fromEmail || !CONTACT_TO_EMAIL) {
    return NextResponse.json(
      { message: "Contact form email service is not configured." },
      { status: 500 },
    );
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: CONTACT_TO_EMAIL,
      reply_to: email,
      subject: "Portfolio contact: " + subject,
      text: [
        "Name: " + name,
        "Email: " + email,
        "Subject: " + subject,
        "",
        message,
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { message: "Message could not be sent right now. Please contact me directly by email." },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: "Message sent." });
}
