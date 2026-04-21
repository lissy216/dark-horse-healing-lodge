"use client";

import { useState } from "react";
import { Button } from "./Button";

type Status = "idle" | "submitting" | "success" | "error";

const SUBJECTS = [
  "General Inquiry",
  "Booking Question",
  "Tour Request",
  "Partnership / Collaboration",
  "Other",
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
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
          Your message has arrived. We&rsquo;ll get back to you within one
          business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label="Name" name="name" type="text" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label="Phone (optional)" name="phone" type="tel" />
        <label className="block">
          <span className="block text-cream/80 text-xs uppercase tracking-[0.15em] mb-2">
            Subject<span className="text-gold ml-1">*</span>
          </span>
          <select
            name="subject"
            required
            defaultValue=""
            className="w-full bg-charcoal border border-gold/30 text-cream px-4 py-3 text-sm focus:outline-none focus:border-gold"
          >
            <option value="" disabled>
              Select one...
            </option>
            {SUBJECTS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="block">
        <span className="block text-cream/80 text-xs uppercase tracking-[0.15em] mb-2">
          Message<span className="text-gold ml-1">*</span>
        </span>
        <textarea
          name="message"
          required
          rows={6}
          placeholder="Tell us what you need..."
          className="w-full bg-charcoal border border-gold/30 text-cream px-4 py-3 text-sm focus:outline-none focus:border-gold placeholder:text-cream/30 resize-y"
        />
      </label>

      {status === "error" && (
        <p className="text-red-400 text-sm">{errorMessage}</p>
      )}

      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
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
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
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
        className="w-full bg-charcoal border border-gold/30 text-cream px-4 py-3 text-sm focus:outline-none focus:border-gold"
      />
    </label>
  );
}
