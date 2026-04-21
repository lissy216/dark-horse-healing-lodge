"use client";

import { useState } from "react";
import { Button } from "./Button";

type Status = "idle" | "submitting" | "success" | "error";

export function BookingInquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/booking-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const { error } = await res.json().catch(() => ({ error: "" }));
        throw new Error(error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Unknown error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-10">
        <p className="font-script text-gold text-3xl mb-4">Thank you.</p>
        <p className="text-cream/85 text-base leading-relaxed max-w-md mx-auto">
          Your booking inquiry has been received. We&rsquo;ll get back to you
          within one business day to confirm availability and next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label="Your name" name="name" type="text" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label="Phone (optional)" name="phone" type="tel" />
        <Field label="Event type" name="eventType" type="text" placeholder="e.g. Sound bath, yoga workshop, retreat" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Field label="Preferred date" name="date" type="date" />
        <SelectField
          label="Rental length"
          name="duration"
          options={[
            "Hourly",
            "Half-day (4 hours)",
            "Full-day (8 hours)",
            "Multi-day / recurring",
          ]}
        />
        <Field label="Expected attendees" name="attendees" type="number" min={1} max={60} />
      </div>
      <TextAreaField
        label="Tell us about your event"
        name="message"
        required
        placeholder="What are you hosting? What do you need the space for?"
      />

      {status === "error" && (
        <p className="text-red-400 text-sm">{errorMessage}</p>
      )}

      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending..." : "Send Inquiry"}
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required,
  placeholder,
  min,
  max,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
  min?: number;
  max?: number;
}) {
  return (
    <label className="block">
      <span className="block text-cream/80 text-xs uppercase tracking-[0.15em] mb-2">
        {label}
        {required && <span className="text-gold ml-1">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        min={min}
        max={max}
        className="w-full bg-charcoal border border-gold/30 text-cream px-4 py-3 text-sm focus:outline-none focus:border-gold placeholder:text-cream/30"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-cream/80 text-xs uppercase tracking-[0.15em] mb-2">
        {label}
        {required && <span className="text-gold ml-1">*</span>}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="w-full bg-charcoal border border-gold/30 text-cream px-4 py-3 text-sm focus:outline-none focus:border-gold"
      >
        <option value="" disabled>
          Select one...
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextAreaField({
  label,
  name,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="block text-cream/80 text-xs uppercase tracking-[0.15em] mb-2">
        {label}
        {required && <span className="text-gold ml-1">*</span>}
      </span>
      <textarea
        name={name}
        required={required}
        placeholder={placeholder}
        rows={5}
        className="w-full bg-charcoal border border-gold/30 text-cream px-4 py-3 text-sm focus:outline-none focus:border-gold placeholder:text-cream/30 resize-y"
      />
    </label>
  );
}
