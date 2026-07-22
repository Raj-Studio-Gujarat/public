"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FrameLabel } from "@/components/ui/FrameLabel";
import {
  formatInquiryMessage,
  inquirySchema,
  type InquiryFormValues,
} from "@/lib/inquiry";
import { openWhatsApp } from "@/lib/whatsapp";

type Errors = Partial<Record<keyof InquiryFormValues, string>>;

const fieldCls =
  "mt-2 w-full rounded-sm border border-line bg-background px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 focus:border-ink focus:outline-none focus:ring-2 focus:ring-accent";
const labelCls =
  "font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink-soft";

/**
 * Client validation → WhatsApp draft. Swap this body later for a backend POST
 * without changing the form UI.
 */
function submitInquiry(values: InquiryFormValues): void {
  openWhatsApp(formatInquiryMessage(values));
}

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      eventType: String(formData.get("eventType") ?? "Wedding"),
      eventDate: String(formData.get("eventDate") ?? ""),
      message: String(formData.get("message") ?? ""),
      preferredBranch: String(formData.get("preferredBranch") ?? ""),
      packageName: String(formData.get("packageName") ?? "") || undefined,
    };

    const parsed = inquirySchema.safeParse(data);
    if (!parsed.success) {
      const next: Errors = {};
      parsed.error.issues.forEach((issue) => {
        next[issue.path[0] as keyof Errors] = issue.message;
      });
      setErrors(next);
      return;
    }

    setErrors({});
    submitInquiry(parsed.data);
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="border border-line bg-bg-alt p-8"
    >
      <FrameLabel>Enquiry — 01/01</FrameLabel>
      <h2 className="mt-3 font-display text-2xl md:text-3xl">
        Tell us about the shoot
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <label className="block">
          <span className={labelCls}>Name</span>
          <input
            name="name"
            required
            maxLength={100}
            className={fieldCls}
            placeholder="Your full name"
            autoComplete="name"
          />
          {errors.name ? (
            <p className="mt-1 text-xs text-destructive">{errors.name}</p>
          ) : null}
        </label>
        <label className="block">
          <span className={labelCls}>Phone</span>
          <input
            name="phone"
            required
            maxLength={20}
            className={fieldCls}
            placeholder="+91 …"
            inputMode="tel"
            autoComplete="tel"
          />
          {errors.phone ? (
            <p className="mt-1 text-xs text-destructive">{errors.phone}</p>
          ) : null}
        </label>
        <label className="block">
          <span className={labelCls}>Event type</span>
          <select name="eventType" defaultValue="Wedding" className={fieldCls}>
            <option>Wedding</option>
            <option>Pre-Wedding</option>
            <option>Studio</option>
            <option>Event</option>
            <option>Video</option>
            <option>Other</option>
          </select>
        </label>
        <label className="block">
          <span className={labelCls}>Event date</span>
          <input name="eventDate" type="date" className={fieldCls} />
        </label>
        <label className="block md:col-span-2">
          <span className={labelCls}>Message</span>
          <textarea
            name="message"
            rows={4}
            maxLength={1000}
            className={fieldCls}
            placeholder="Venue, guest count, anything else that helps us plan."
          />
          {errors.message ? (
            <p className="mt-1 text-xs text-destructive">{errors.message}</p>
          ) : null}
        </label>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <p className="max-w-md text-xs text-ink-soft">
          Submitting opens WhatsApp with your message pre-filled. Nothing is
          stored on our servers yet.
        </p>
        <Button type="submit" variant="primary">
          Send on WhatsApp
        </Button>
      </div>
    </form>
  );
}
