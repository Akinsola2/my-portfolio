"use client";

import type { FormEvent } from "react";
import { useState } from "react";

const fieldClassName =
  "mt-2 min-h-12 w-full rounded-xl border border-blue-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-500 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-400 dark:focus:border-blue-300";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const subject = `Portfolio message from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    window.location.href = `mailto:akinsolatemiloluwa28@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus(
      "Your email app should open with the message ready. Review it there and press Send.",
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-7 grid gap-5 sm:grid-cols-2">
      <div>
        <label
          htmlFor="contact-name"
          className="text-sm font-semibold text-slate-800 dark:text-slate-100"
        >
          Your name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          maxLength={100}
          required
          className={fieldClassName}
          placeholder="Jane Smith"
        />
      </div>
      <div>
        <label
          htmlFor="contact-email"
          className="text-sm font-semibold text-slate-800 dark:text-slate-100"
        >
          Your email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          maxLength={254}
          required
          className={fieldClassName}
          placeholder="jane@example.com"
        />
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="contact-message"
          className="text-sm font-semibold text-slate-800 dark:text-slate-100"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          maxLength={5000}
          required
          className={`${fieldClassName} resize-y`}
          placeholder="Tell me a little about what you have in mind..."
        />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-blue-950 px-6 text-sm font-semibold text-white shadow-[0_8px_24px_-12px_rgba(23,54,95,0.65)] transition hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 dark:bg-blue-600 dark:hover:bg-blue-500 sm:w-auto"
        >
          Open email app <span aria-hidden="true">↗</span>
        </button>
        <p className="mt-3 text-xs leading-5 text-slate-500 dark:text-slate-300">
          This opens your email app with the message prefilled; it won&apos;t be
          sent until you review and send it.
        </p>
        <p aria-live="polite" role="status" className="mt-2 text-sm text-blue-800 dark:text-blue-200">
          {status}
        </p>
      </div>
    </form>
  );
}
