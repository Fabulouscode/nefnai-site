import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { PreviewForm } from '@/components/preview-form';
import { SectionTitle, container } from '@/components/ui';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Get help & contact',
  description: 'Contact NEFNAI for urgent help or legal advice, career opportunities, or anything else. Offices in Makurdi, Benue State.',
};

export default function GetHelpPage() {
  return (
    <>
      <PageHero
        eyebrow="Get help"
        title={<>We’re here to <span className="hl">help.</span></>}
        intro="For urgent help or advice, legal or otherwise, call our hotlines or send us an email."
      />

      <section className="py-20 sm:py-24">
        <div className={`${container} grid gap-5 lg:grid-cols-3`}>
          <div className="rounded-md bg-forest p-8 text-white lg:col-span-1">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-sky">Legal advice & urgent help</p>
            <ul className="mt-6 space-y-3">
              {site.phones.map((phone) => (
                <li key={phone}>
                  <a href={`tel:${phone.replace(/\s/g, '')}`} className="font-display text-2xl font-bold text-white hover:text-sun">{phone}</a>
                </li>
              ))}
              <li>
                <a href={`mailto:${site.email}`} className="break-all text-lg text-white/80 underline hover:text-white">{site.email}</a>
              </li>
            </ul>
          </div>
          <div className="rounded-md bg-white p-8 ring-1 ring-line lg:col-span-2">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-green-deep">Career opportunities</p>
            <p className="mt-4 text-lg leading-relaxed">
              NEFNAI offers short, medium and long-term opportunities in areas from character development to education, health and
              housing, for genuine African patriots across the continent.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              We look for people whose goal is fixing the nations of Africa, and seeing the continent rise from hopelessness to
              greatness, not personal success at Africa’s expense. Send your interest to {site.email}.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-mint py-20 sm:py-28">
        <div className={`${container} grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16`}>
          <div>
            <SectionTitle eyebrow="Contact us" title="Send us a message" intro="Questions, partnerships, media or anything else: we’ll get back to you." />
            <div className="mt-10 space-y-5">
              <div>
                <p className="font-display font-bold text-ink">Head office</p>
                <p className="mt-1 leading-relaxed">
                  {site.offices.map((office) => (
                    <span key={office} className="block">{office}</span>
                  ))}
                  {site.state}
                </p>
              </div>
            </div>
          </div>
          <PreviewForm
            submitLabel="Send message"
            fields={[
              { name: 'name', label: 'Your name', required: true },
              { name: 'phone', label: 'Phone or WhatsApp', type: 'tel' },
              { name: 'email', label: 'Email', type: 'email', required: true, wide: true },
              { name: 'topic', label: 'What is it about?', type: 'select', options: ['Urgent help or legal advice', 'Partnership', 'Volunteering', 'Training', 'Media', 'Something else'], wide: true },
              { name: 'message', label: 'Message', type: 'textarea', required: true },
            ]}
          />
        </div>
      </section>
    </>
  );
}
