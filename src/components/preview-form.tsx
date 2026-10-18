'use client';

import { useState } from 'react';
import { site } from '@/lib/site';

export interface Field {
  name: string;
  label: string;
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  options?: readonly string[];
  required?: boolean;
  wide?: boolean;
}

const input =
  'mt-1.5 w-full rounded-xl border border-line bg-white px-4 py-3 text-[15px] text-ink outline-none transition focus:border-green focus:ring-4 focus:ring-green/15';

/**
 * A form laid out and validated in the browser. It isn't connected to a
 * server yet (that comes with the backend), so submitting says so plainly
 * and points to phone and WhatsApp instead of pretending to send.
 */
export function PreviewForm({ fields, submitLabel }: { fields: Field[]; submitLabel: string }) {
  const [submitted, setSubmitted] = useState(false);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
      className="grid gap-5 rounded-3xl bg-white p-6 ring-1 ring-line sm:grid-cols-2 sm:p-8"
    >
      {fields.map((field) => (
        <label key={field.name} className={`block text-sm font-semibold text-ink ${field.wide || field.type === 'textarea' ? 'sm:col-span-2' : ''}`}>
          {field.label}
          {field.required && <span className="text-green-deep"> *</span>}
          {field.type === 'textarea' ? (
            <textarea name={field.name} required={field.required} rows={4} className={input} />
          ) : field.type === 'select' ? (
            <select name={field.name} required={field.required} defaultValue="" className={input}>
              <option value="" disabled>Choose one</option>
              {field.options?.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          ) : (
            <input name={field.name} type={field.type ?? 'text'} required={field.required} className={input} />
          )}
        </label>
      ))}
      <div className="sm:col-span-2">
        <button type="submit" className="w-full rounded-full bg-green-deep px-6 py-3.5 font-bold text-white transition hover:bg-[#005d30] sm:w-auto">
          {submitLabel}
        </button>
        {submitted && (
          <p role="status" className="mt-4 rounded-2xl bg-sky-soft px-4 py-3 text-[15px] text-ink ring-1 ring-sky/20">
            Online forms are being connected. Until then, please call us on <strong>{site.phones[0]}</strong> or email{' '}
            <a href={`mailto:${site.email}`} className="font-semibold text-sky-deep underline">{site.email}</a>, and we’ll get back to you.
          </p>
        )}
      </div>
    </form>
  );
}
