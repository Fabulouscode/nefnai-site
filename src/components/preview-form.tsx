'use client';

import { useState } from 'react';
import { site } from '@/lib/site';

export interface Field {
  name: string;
  label: string;
  type?: 'text' | 'email' | 'tel' | 'password' | 'textarea' | 'select';
  options?: readonly string[];
  required?: boolean;
  wide?: boolean;
}

const input =
  'mt-1.5 w-full rounded-md border border-line bg-white px-4 py-3 text-[15px] text-ink outline-none transition focus:border-green focus:ring-4 focus:ring-green/15';

/**
 * A form laid out and validated in the browser. It isn't connected to a
 * server yet (that comes with the backend), so submitting says so plainly
 * and points to phone and WhatsApp instead of pretending to send.
 */
export function PreviewForm({
  fields,
  submitLabel,
  notice,
  single = false,
}: {
  fields: Field[];
  submitLabel: string;
  /** What to say on submit while the form isn't connected. */
  notice?: React.ReactNode;
  /** One column, for narrow forms like sign-in. */
  single?: boolean;
}) {
  const [submitted, setSubmitted] = useState(false);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
      className={`grid gap-5 rounded-md bg-white p-6 ring-1 ring-line sm:p-8 ${single ? '' : 'sm:grid-cols-2'}`}
    >
      {fields.map((field) => (
        <label key={field.name} className={`block text-sm font-semibold text-ink ${!single && (field.wide || field.type === 'textarea') ? 'sm:col-span-2' : ''}`}>
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
      <div className={single ? '' : 'sm:col-span-2'}>
        <button type="submit" className={`w-full rounded-md bg-green-deep px-6 py-3.5 font-bold text-white transition hover:bg-[#005d30] ${single ? '' : 'sm:w-auto'}`}>
          {submitLabel}
        </button>
        {submitted && (
          <p role="status" className="mt-4 rounded-md bg-sky-soft px-4 py-3 text-[15px] text-ink ring-1 ring-sky/20">
            {notice ?? <>Online forms are being connected. Until then, please call us on <strong>{site.phones[0]}</strong> or email{' '}
            <a href={`mailto:${site.email}`} className="font-semibold text-sky-deep underline">{site.email}</a>, and we’ll get back to you.</>}
          </p>
        )}
      </div>
    </form>
  );
}
