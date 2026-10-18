import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { Button, container } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Training & certification',
  description: 'NEFNAI training and certification: membership, leadership, digital skills, first aid, water safety, staff and instructor training.',
};

const TRAININGS = [
  ['Membership training', 'Every new member is trained, inducted and certified, in person at our centres or online, with certificates sent on completion.'],
  ['Leadership training', 'Leadership skills for young people especially, to become patriotic, successful leaders and lasting change makers in their communities.'],
  ['Computer literacy & digital skills', 'Computer skills, the internet, and digital and AI tools, for people starting from scratch.'],
  ['Empowerment to reduce poverty', 'With government institutions and other partners: skill acquisition programmes, information and support that help fight poverty.'],
  ['First aid training', 'Open to all members, with experts and partners, so members can help badly injured accident victims get medical care in time.'],
  ['Lifeguard & water safety', 'Awareness and training on water hygiene for communities with water challenges, to reduce the use of contaminated water.'],
  ['Staff training', 'Our staff at every level are trained to deliver the projects and tasks assigned to them, and certified.'],
  ['Instructor training', 'Special training and certification for people who will in turn train others in each area of need.'],
];

export default function TrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="Training & certification"
        title={<>Skills that change people, and <span className="text-green-deep">communities.</span></>}
        intro="Every NEFNAI training ends with a certificate. Some are for members, others are open to the communities we serve."
      >
        <Button href="/volunteer">Join NEFNAI</Button>
        <Button href="/get-help#contact" tone="outline">Ask about a training</Button>
      </PageHero>

      <section className="py-20 sm:py-28">
        <ul className={`${container} grid gap-5 sm:grid-cols-2 lg:grid-cols-4`}>
          {TRAININGS.map(([name, text], i) => (
            <li key={name} className="flex flex-col rounded-3xl bg-white p-7 ring-1 ring-line">
              <span className="font-display text-sm font-extrabold text-sky-deep">{String(i + 1).padStart(2, '0')}</span>
              <h2 className="mt-3 text-xl leading-snug">{name}</h2>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">{text}</p>
              <p className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-green-soft px-3 py-1 text-xs font-bold text-green-deep">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
                Certificate on completion
              </p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
