import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { PreviewForm } from '@/components/preview-form';
import { Button, SectionTitle, container } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Volunteer',
  description: 'Volunteer with NEFNAI: there is something everyone can do to change Africa for the better.',
};

const ROLES: [string, string][] = [
  ['Resource person', 'Help with enlightenment campaigns, leadership trainings and similar programmes.'],
  ['Data collector or analyst', 'Collect and analyse data where it’s needed, for better decisions.'],
  ['Cluster representative', 'Coordinate members and activities in a cluster within your community.'],
  ['Legal committee', 'Join our legal team to provide legal services wherever they’re needed, quickly.'],
  ['Education committee', 'Help enrol out-of-school children in schools, in your community and beyond.'],
  ['Fundraising committee', 'Help raise funds for NEFNAI’s activities.'],
  ['ICT & research', 'Strengthen our technology, and carry out research where it’s needed.'],
  ['Environment committee', 'Coordinate your community in good environmental practice, and build programmes for a safe, hygienic environment.'],
  ['Health & traffic committee', 'Train people in first aid, so they can get badly injured accident victims to care when help is late.'],
  ['Housing & water committee', 'Support programmes for affordable housing and drinkable water for the most vulnerable.'],
  ['Public relations committee', 'Package and share NEFNAI’s programmes, and raise public awareness.'],
  ['Office & administration', 'Support the work of an office or centre near you.'],
];

export default function VolunteerPage() {
  return (
    <>
      <PageHero
        eyebrow="Volunteer"
        title={<>There is something <span className="hl">everyone</span> can do.</>}
        intro="Fixing Africa is an enormous task that needs every man and woman of goodwill, old or young. Civil servant, business owner, professional or job seeker: there is a role for you."
      >
        <Button href="#form" tone="light">Join us now</Button>
        <Button href="#roles" tone="ghost-light">See the opportunities</Button>
      </PageHero>

      <section className="py-16 sm:py-20">
        <div className={`${container} max-w-4xl`}>
          <blockquote className="border-l-4 border-sky pl-6 font-display text-2xl font-bold leading-snug text-ink sm:text-3xl">
            “No matter who you are or where you may be, you can do something to change Africa for the better.”
          </blockquote>
          <p className="mt-3 pl-7 text-muted">Dr. Edward Kramer</p>
        </div>
      </section>

      <section id="roles" className="bg-mint py-20 sm:py-28">
        <div className={container}>
          <SectionTitle
            center
            eyebrow="Volunteer opportunities"
            title="Find where you fit"
            intro="Our main focus is reforming character towards patriotism, but there are many ways to help. Give your time, energy, talent, resources or profession."
          />
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ROLES.map(([name, text]) => (
              <li key={name} className="rounded-md bg-white p-6 ring-1 ring-line">
                <h3 className="text-lg">{name}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{text}</p>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-10 max-w-2xl text-center leading-relaxed">
            Don’t see your area? Fill in the form anyway and tell us what you’d like to do. We’ll assign you a task that fits.
          </p>
        </div>
      </section>

      <section id="form" className="py-20 sm:py-28">
        <div className={`${container} grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16`}>
          <SectionTitle eyebrow="Volunteer form" title="Sign up to volunteer" intro="Tell us a little about yourself, and we’ll match you to where you’re needed, in your community or beyond." />
          <PreviewForm
            submitLabel="Sign up as a volunteer"
            fields={[
              { name: 'name', label: 'Full name', required: true },
              { name: 'phone', label: 'Phone or WhatsApp', type: 'tel', required: true },
              { name: 'email', label: 'Email', type: 'email' },
              { name: 'location', label: 'Town and state', required: true },
              { name: 'area', label: 'Area of interest', type: 'select', options: [...ROLES.map(([name]) => name), 'Something else'], required: true, wide: true },
              { name: 'about', label: 'Your skills or profession, and anything else we should know', type: 'textarea' },
            ]}
          />
        </div>
      </section>
    </>
  );
}
