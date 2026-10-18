import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHero } from '@/components/page-hero';
import { Button, container } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Programmes',
  description: 'NEFNAI’s programmes and initiatives: anti-corruption campaigns, business summits, out-of-school enrolment, welfare, health insurance and more.',
};

const PROGRAMMES: { years: string; title: string; summary: string; goals: string[] }[] = [
  {
    years: '2018 – present',
    title: 'Anti-corruption sensitisation campaigns',
    summary: 'Large-scale campaigns reforming citizens towards absolute patriotism and good governance.',
    goals: [
      'Mobilise people from all walks of life to stand against corruption and embrace patriotism.',
      'Bring reformed people onto the NEFNAI platform as consistent “Change Heroes” in their communities.',
      'Bridge the trust gap between government and the public, and increase public participation in governance.',
    ],
  },
  {
    years: '2020 – 2021',
    title: 'Campus anti-corruption campaign',
    summary: 'A campus campaign organised with the ICPC.',
    goals: ['Mobilise university communities to stand up against corruption.', 'Reform students and bring them onto the NEFNAI platform as Change Heroes.'],
  },
  {
    years: '2018 – present',
    title: 'Annual business summit & trainings',
    summary: 'A business summit and trainings for unemployed people, alongside other empowerment programmes.',
    goals: [
      'Equip participants with financial knowledge and an entrepreneurial mindset.',
      'Give vulnerable people skills and take-off resources or grants.',
      'Provide technical assistance and management support to businesses.',
    ],
  },
  {
    years: '2022 – present',
    title: 'Out-of-school enrolment programme (NOSEP)',
    summary: '22 vulnerable children in Benue State already enrolled in school.',
    goals: ['Reduce the number of out-of-school children.', 'Make sure every child of school age has access to education.'],
  },
  {
    years: '2023 – present',
    title: 'NEFNAI special welfare scheme (NSEWS)',
    summary: 'Many families have already benefited from this welfare initiative.',
    goals: [
      'Ease the heavy burden that comes with losing a relative.',
      'Help members give their registered relatives a decent burial.',
      'Promote a culture of planning and investing for the future.',
    ],
  },
  {
    years: '2021 – present',
    title: 'Universal health insurance coverage campaign (NUHICC)',
    summary: 'A campaign for universal health insurance coverage in Benue State.',
    goals: ['Bring the informal and semi-formal sector onto health insurance.', 'Work with health insurance agencies towards universal coverage.'],
  },
  {
    years: '2018 – present',
    title: 'Independence Day public sanitation',
    summary: 'A yearly public sanitation and sensitisation exercise on Nigeria’s Independence Day.',
    goals: ['Encourage members and the public to serve their communities.', 'Contribute to a clean and safe environment.', 'Promote patriotic values in public.'],
  },
  {
    years: 'Ongoing',
    title: 'National Ethics & Integrity Policy campaign',
    summary: 'A campaign in Benue State for the National Ethics and Integrity Policy (NEIP) designed by the ICPC.',
    goals: [
      'Strengthen efforts towards positive national transformation.',
      'Protect the country from the erosion of ethics and values.',
      'Encourage citizens to put Nigeria above all else.',
    ],
  },
];

export default function ProgrammesPage() {
  return (
    <>
      <PageHero
        eyebrow="Programmes & initiatives"
        title={<>Programmes that are <span className="text-green-deep">making a difference.</span></>}
        intro="From anti-corruption campaigns to getting children back into school, most of our programmes have run every year since NEFNAI began."
      />

      <section className="py-20 sm:py-28">
        <div className={`${container} grid gap-6 md:grid-cols-2`}>
          {PROGRAMMES.map((item) => (
            <article key={item.title} className="flex flex-col rounded-3xl bg-white p-7 ring-1 ring-line sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-sky-deep">{item.years}</p>
              <h2 className="mt-3 text-2xl leading-tight sm:text-[1.7rem]">{item.title}</h2>
              <p className="mt-3 leading-relaxed text-body">{item.summary}</p>
              <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
                {item.goals.map((goal) => (
                  <li key={goal} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                    <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-green" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    {goal}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-forest py-20 text-white sm:py-24">
        <div className={`${container} grid items-center gap-12 lg:grid-cols-2`}>
          <div className="overflow-hidden rounded-3xl ring-1 ring-white/10">
            <Image src="/photos/engagement-hall.webp" alt="Participants at a NEFNAI engagement" width={2040} height={1530} sizes="(min-width: 1024px) 540px, 100vw" className="h-auto w-full" />
          </div>
          <div>
            <h2 className="text-[2.25rem] text-white sm:text-5xl">Help us reach more communities.</h2>
            <p className="mt-5 text-lg leading-relaxed text-white/75">Every programme runs on volunteers and support from people who want a better Africa.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/volunteer" tone="light">Volunteer with us</Button>
              <Button href="/donate" tone="sun">Support a programme</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
