"use client";

import { type FormEvent, useMemo, useState } from "react";

import { profile } from "../content";
import { Card, ContactLinks, PageHeader, SiteShell } from "../components";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string;
};

type SubmitState = "idle" | "sending" | "success" | "error" | "fallback";

const initialForm: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
  website: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const mailtoHref = useMemo(() => {
    const subject = form.subject || "Portfolio contact";
    const body = [
      form.name ? "Name: " + form.name : "Name:",
      form.email ? "Email: " + form.email : "Email:",
      "",
      form.message || "Message:",
    ].join("\n");

    return "mailto:" + profile.email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  }, [form]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("sending");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = (await response.json().catch(() => ({}))) as { message?: string };

      if (response.ok) {
        setSubmitState("success");
        setStatusMessage("Message sent. Thank you for reaching out.");
        setForm(initialForm);
        return;
      }

      if (response.status === 500 && result.message === "Contact form email service is not configured.") {
        setSubmitState("fallback");
        setStatusMessage("Email service is not configured yet. Please contact me directly by email.");
        window.location.href = mailtoHref;
        return;
      }

      setSubmitState("error");
      setStatusMessage(result.message || "Message could not be sent right now. Please contact me directly by email.");
    } catch {
      setSubmitState("fallback");
      setStatusMessage("Email service is not available right now. Please contact me directly by email.");
      window.location.href = mailtoHref;
    }
  }

  const isSending = submitState === "sending";

  return (
    <SiteShell>
      <PageHeader
        eyebrow="CONTACT"
        title="Contact"
        description="Interested in QA automation, release quality, product QA or practical QA audits?"
        intro="I’m open to relevant QA automation, release quality, product QA, internal tooling and practical audit conversations."
      />

      <section className="mx-auto grid w-full max-w-6xl gap-5 px-4 pb-14 sm:px-6 sm:pb-20 md:px-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-start lg:px-10">
        <Card>
          <h2 className="text-xl font-semibold text-ink">Direct contact</h2>
          <p className="mt-3 text-sm leading-7 text-muted">For urgent or direct contact, use email or LinkedIn.</p>
          <div className="mt-5">
            <ContactLinks />
          </div>
        </Card>

        <form onSubmit={handleSubmit} className="rounded-lg border border-sky-300/[0.14] bg-sky-300/[0.055] p-4 shadow-soft backdrop-blur sm:p-6">
          <h2 className="text-xl font-semibold text-ink">Send a message</h2>
          <p className="mt-3 text-sm leading-7 text-muted">
            The form tries the secure contact endpoint first. If email sending is not configured, it will guide you to direct email.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <TextField id="name" label="Name" value={form.name} maxLength={120} required disabled={isSending} onChange={(value) => setForm((current) => ({ ...current, name: value }))} />
            <TextField id="email" label="Email" type="email" value={form.email} maxLength={160} required disabled={isSending} onChange={(value) => setForm((current) => ({ ...current, email: value }))} />
            <div className="sm:col-span-2">
              <TextField id="subject" label="Subject" value={form.subject} maxLength={160} required disabled={isSending} onChange={(value) => setForm((current) => ({ ...current, subject: value }))} />
            </div>
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={(event) => setForm((current) => ({ ...current, website: event.target.value }))} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-slate-200">
                Message <span className="text-sky-200">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                maxLength={3000}
                rows={6}
                disabled={isSending}
                value={form.message}
                onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                className="mt-2 min-h-36 w-full resize-y rounded-lg border border-white/12 bg-slate-950/55 px-3 py-3 text-sm text-ink outline-none transition placeholder:text-slate-500 invalid:border-rose-300/40 focus:border-sky-300/55 focus:ring-2 focus:ring-sky-300/20 disabled:cursor-not-allowed disabled:opacity-60"
              />
              <p className="mt-2 text-xs text-muted">Maximum 3000 characters.</p>
            </div>
          </div>

          {statusMessage ? (
            <p
              role="status"
              className={
                "mt-5 rounded-lg border px-3 py-2 text-sm " +
                (submitState === "success"
                  ? "border-emerald-200/20 bg-emerald-300/10 text-emerald-100"
                  : "border-amber-200/20 bg-amber-300/10 text-amber-100")
              }
            >
              {statusMessage}
            </p>
          ) : null}

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="submit"
              disabled={isSending}
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-sky-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-300/50 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSending ? "Sending..." : "Send message"}
            </button>
            <a href={mailtoHref} className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/16 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-sky-300/50">
              Email directly
            </a>
          </div>
        </form>
      </section>
    </SiteShell>
  );
}

function TextField({
  id,
  label,
  value,
  onChange,
  type = "text",
  required = false,
  disabled = false,
  maxLength,
}: Readonly<{
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "email";
  required?: boolean;
  disabled?: boolean;
  maxLength?: number;
}>) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-slate-200">
        {label} {required ? <span className="text-sky-200">*</span> : null}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        maxLength={maxLength}
        disabled={disabled}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 min-h-11 w-full rounded-lg border border-white/12 bg-slate-950/55 px-3 py-2.5 text-sm text-ink outline-none transition placeholder:text-slate-500 invalid:border-rose-300/40 focus:border-sky-300/55 focus:ring-2 focus:ring-sky-300/20 disabled:cursor-not-allowed disabled:opacity-60"
      />
    </div>
  );
}
