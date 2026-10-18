import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHero } from '@/components/page-hero';
import { Gallery } from '@/components/gallery';
import { Button, SectionTitle, container } from '@/components/ui';
import { photos } from '@/lib/photos';

export const metadata: Metadata = {
  title: 'News & events',
  description: 'NEFNAI news, events and programmes: the local government autonomy campaign, the welfare scheme, anti-corruption campaigns, out-of-school enrolment and more.',
};

const NEWS = [
  {
    date: '2026',
    tag: 'Campaign',
    title: 'Let local government autonomy work for Nigerians',
    text: 'Our campaign for full implementation of the Supreme Court judgment on local government autonomy, with a petition, a survey and the 10 for 10 challenge.',
    photo: photos.tenForTen,
    href: '/local-government-autonomy',
    cta: 'Join the campaign',
  },
  {
    date: 'Nov 2024 – Apr 2025',
    tag: 'Welfare',
    title: 'Welfare scheme benefits presented to families',
    text: 'NEFNAI Special Welfare Scheme benefits were presented to the families of members who lost registered relatives, including in Ushongo LGA.',
    photo: photos.welfare2,
    href: '#welfare',
    cta: 'See the welfare scheme',
  },
  {
    date: '2024',
    tag: 'Event',
    title: '2024 Annual General Conference, Makurdi',
    text: 'Members, partners and guests gathered in Makurdi for our Annual General Conference to review the year and plan ahead.',
    photo: photos.conference,
    href: '/who-we-are',
    cta: 'About NEFNAI',
  },
];

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

export default function NewsEventsPage() {
  return (
    <>
      <PageHero
        eyebrow="News & events"
        title={<>What we’re doing, <span className="text-green-deep">and where.</span></>}
        intro="The latest from NEFNAI, and the programmes that have run in our communities since 2018."
      />

      <section className="py-20 sm:py-28">
        <div className={container}>
          <SectionTitle eyebrow="Latest" title="News & updates" />
          <ul className="mt-12 grid gap-6 lg:grid-cols-3">
            {NEWS.map((item) => (
              <li key={item.title} className="flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-line">
                <div className="relative aspect-[16/10] bg-mint">
                  <Image src={item.photo.src} alt={item.photo.alt} fill sizes="(min-width: 1024px) 360px, 100vw" className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="flex items-center gap-3 text-sm font-semibold">
                    <span className="rounded-full bg-green-soft px-2.5 py-0.5 text-green-deep">{item.tag}</span>
                    <span className="text-muted">{item.date}</span>
                  </p>
                  <h3 className="mt-4 text-xl leading-snug">{item.title}</h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">{item.text}</p>
                  <a href={item.href} className="mt-6 inline-flex items-center gap-2 font-bold text-green-deep">
                    {item.cta} <span aria-hidden="true">→</span>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line bg-mint py-20 sm:py-28">
        <div className={container}>
          <SectionTitle
            eyebrow="Programmes & initiatives"
            title={<>Programmes that are <span className="text-green-deep">making a difference.</span></>}
            intro="From anti-corruption campaigns to getting children back into school, most of our programmes have run every year since NEFNAI began."
          />
        </div>
        <div className={`${container} mt-12 grid gap-6 md:grid-cols-2`}>
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

      <section id="welfare" className="py-20 sm:py-28">
        <div className={container}>
          <SectionTitle
            eyebrow="NEFNAI special welfare scheme"
            title="Standing with families when it matters most"
            intro="The scheme helps members give their registered relatives a decent burial, and eases the burden that comes with loss."
          />
          <div className="mt-12">
            <Gallery
              items={[
                { photo: photos.welfare1, caption: 'Presenting a welfare scheme benefit to a member’s family.' },
                { photo: photos.welfare3, caption: 'A family receiving their welfare scheme benefit.' },
                { photo: photos.welfareFamily, caption: 'Supporting a family in Ushongo LGA.' },
              ]}
            />
          </div>
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
