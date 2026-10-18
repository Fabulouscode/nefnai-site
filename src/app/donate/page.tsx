import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { Button, SectionTitle, container } from '@/components/ui';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Donate',
  description: 'Support NEFNAI’s civic education, anti-corruption campaigns, out-of-school enrolment and welfare programmes.',
};

const SUPPORTS = [
  ['Children in school', 'Enrolling out-of-school children and supporting school infrastructure.'],
  ['Civic education', 'Campaigns that instil integrity and patriotism in communities and on campuses.'],
  ['Empowerment', 'Skills, training and take-off support for unemployed and vulnerable people.'],
  ['Welfare', 'Support for families through the NEFNAI special welfare scheme.'],
];

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Donate"
        title={<>Give a little. <span className="hl">Change a lot.</span></>}
        intro="Your gift funds the work of reviving integrity, education and opportunity in communities across Nigeria."
      />

      <section className="py-20 sm:py-28">
        <div className={container}>
          <SectionTitle eyebrow="What your gift supports" title="Where your donation goes" />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SUPPORTS.map(([name, text]) => (
              <li key={name} className="rounded-md bg-white p-7 ring-1 ring-line">
                <span aria-hidden="true" className="block h-1.5 w-10 rounded-full bg-sun" />
                <h3 className="mt-5 text-xl">{name}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-mint py-20 sm:py-28">
        <div className={`${container} grid gap-5 lg:grid-cols-2`}>
          <div className="rounded-md bg-forest p-8 text-white sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-sun">Online giving</p>
            <h2 className="mt-4 text-3xl text-white">Card and bank transfer, coming soon</h2>
            <p className="mt-4 leading-relaxed text-white/75">
              We’re setting up secure online donations in naira. Until then, contact us and we’ll share how to give.
            </p>
          </div>
          <div className="rounded-md bg-white p-8 ring-1 ring-line sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-green-deep">Give today</p>
            <h2 className="mt-4 text-3xl">Talk to us</h2>
            <p className="mt-4 leading-relaxed text-muted">For donations, partnerships or giving in kind, call or email us.</p>
            <ul className="mt-6 space-y-2 text-lg">
              {site.phones.map((phone) => (
                <li key={phone}><a href={`tel:${phone.replace(/\s/g, '')}`} className="font-semibold text-green-deep underline">{phone}</a></li>
              ))}
              <li><a href={`mailto:${site.email}`} className="break-all font-semibold text-green-deep underline">{site.email}</a></li>
            </ul>
            <div className="mt-8">
              <Button href="/volunteer" tone="outline">Or give your time: volunteer</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
