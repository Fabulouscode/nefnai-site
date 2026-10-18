import Image from 'next/image';
import Link from 'next/link';
import { Button, Eyebrow, SectionTitle, container } from '@/components/ui';
import { site } from '@/lib/site';
import { Gallery } from '@/components/gallery';
import { photos } from '@/lib/photos';

const STATS = [
  { value: '2018', label: 'Founded in Makurdi, Benue State' },
  { value: '774', label: 'Local governments in our autonomy campaign' },
  { value: '22', label: 'Out-of-school children enrolled through NOSEP' },
  { value: '5', label: 'Training and certification programmes' },
];

const WORK = [
  {
    title: 'Civic education',
    text: 'Sensitisation and enlightenment programmes that instil integrity, discipline and love of country in citizens of every age.',
    icon: 'M4 19V6a2 2 0 0 1 2-2h12v15H6a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M8 8h6M8 11h4',
  },
  {
    title: 'Anti-corruption campaigns',
    text: 'Campaigns in communities and on campuses, including with the ICPC, that mobilise people to stand against corruption.',
    icon: 'M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3Zm-3 9 2 2 4-4',
  },
  {
    title: 'Training & certification',
    text: 'Leadership, digital skills and membership training, with certificates for every participant who completes them.',
    icon: 'M12 4 2 9l10 5 10-5-10-5Zm-6 7.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5M22 9v5',
  },
  {
    title: 'Empowerment',
    text: 'Business summits, skills programmes and support for vulnerable people, including getting out-of-school children back into school.',
    icon: 'M4 20h16M6 16l4-5 3 3 5-7M15 7h3v3',
  },
];

const PROGRAMMES = [
  { years: '2018 – present', title: 'Anti-corruption sensitisation', text: 'Reforming citizens towards patriotism and good governance, and rebuilding trust between the public and institutions.' },
  { years: '2020 – 2021', title: 'Campus anti-corruption campaign', text: 'Run with the ICPC, mobilising university communities to stand up against corruption.' },
  { years: '2018 – present', title: 'Annual business summit & trainings', text: 'Financial knowledge, entrepreneurship and take-off support for unemployed and vulnerable people.' },
  { years: '2022 – present', title: 'Out-of-school enrolment (NOSEP)', text: '22 vulnerable children in Benue State already enrolled, so every child of school age is in school.' },
];

function Icon({ d }: { d: string }) {
  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-soft text-green-deep">
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d={d} />
      </svg>
    </span>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-mint">
        <div aria-hidden="true" className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-sky/10 blur-3xl" />
        <div aria-hidden="true" className="absolute -bottom-48 -left-40 h-[480px] w-[480px] rounded-full bg-green/10 blur-3xl" />
        <div className={`${container} relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-24`}>
          <div>
            <Eyebrow>New Followership, New Africa Initiative</Eyebrow>
            <h1 className="mt-5 text-[2.6rem] sm:text-6xl lg:text-[4.1rem]">
              Raising Africans who put <span className="text-green-deep">Africa</span> <span className="text-sky-deep">first.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-body sm:text-xl">
              Since 2018, NEFNAI has worked to revive integrity and patriotic values in Africans, through civic education,
              anti-corruption campaigns, training and empowerment.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/volunteer">Become a volunteer</Button>
              <Button href="/donate" tone="sun">Donate to the cause</Button>
            </div>
            <p className="mt-8 font-display text-lg font-bold italic text-ink/70">“Save Africa at all cost.”</p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[28px] shadow-[0_30px_60px_-20px_rgb(6_43_29/0.35)] ring-1 ring-black/5">
              <Image
                src="/photos/conference-2024.webp"
                alt="NEFNAI members and guests at the 2024 Annual General Conference in Makurdi"
                width={1630}
                height={1114}
                priority
                sizes="(min-width: 1024px) 540px, 100vw"
                className="h-auto w-full"
              />
            </div>
            <div className="absolute -bottom-6 left-4 right-4 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-line sm:left-auto sm:right-[-18px] sm:w-72">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-sky-deep">Annual General Conference 2024</p>
              <p className="mt-1 font-display font-bold leading-snug text-ink">Members and partners gathered in Makurdi to plan the year ahead.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section aria-label="NEFNAI in numbers" className="border-y border-line bg-white pt-14 sm:pt-12">
        <dl className={`${container} grid grid-cols-2 gap-x-6 gap-y-8 pb-12 lg:grid-cols-4`}>
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col border-l-2 border-green pl-4">
              <dt className="order-2 mt-1 text-[15px] leading-snug text-muted">{stat.label}</dt>
              <dd className="font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Who we are */}
      <section className="py-20 sm:py-28">
        <div className={`${container} grid gap-12 lg:grid-cols-2 lg:gap-20`}>
          <SectionTitle
            eyebrow="Who we are"
            title={<>A movement to rescue Africa from <span className="text-green-deep">system collapse.</span></>}
          />
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              NEFNAI is a non-governmental organisation that brings Africans of goodwill together on one platform: to be
              reformed, to lead by example, and to become the solution to the challenges facing their communities.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-mint p-6 ring-1 ring-line">
                <h3 className="text-lg text-green-deep">Our vision</h3>
                <p className="mt-2 text-[15px] leading-relaxed">
                  A new Africa where propriety, discipline and patriotism are the pride of every African, and an example to the world.
                </p>
              </div>
              <div className="rounded-2xl bg-sky-soft p-6 ring-1 ring-sky/20">
                <h3 className="text-lg text-sky-deep">Our mission</h3>
                <p className="mt-2 text-[15px] leading-relaxed">
                  To bring every African of goodwill on board, through enlightenment, campaigns and advocacy, to put re-shaping our nations first.
                </p>
              </div>
            </div>
            <Link href="/who-we-are" className="inline-flex items-center gap-2 font-bold text-green-deep hover:gap-3 transition-all">
              Read our story <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-mint py-20 sm:py-28">
        <div className={container}>
          <SectionTitle
            center
            eyebrow="What we do"
            title="Four ways we build a better Africa"
            intro="From the classroom to the community hall, our work starts with people: how they think, how they lead and how they serve."
          />
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WORK.map((item) => (
              <li key={item.title} className="rounded-3xl bg-white p-7 ring-1 ring-line transition hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgb(6_43_29/0.25)]">
                <Icon d={item.icon} />
                <h3 className="mt-6 text-xl">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Campaign */}
      <section className="relative overflow-hidden bg-forest py-20 text-white sm:py-28">
        <div aria-hidden="true" className="absolute -right-32 top-0 h-[460px] w-[460px] rounded-full bg-sky/15 blur-3xl" />
        <div className={`${container} relative grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]`}>
          <div>
            <Eyebrow light>Current campaign</Eyebrow>
            <h2 className="mt-4 text-[2.25rem] text-white sm:text-5xl">
              Let local government autonomy <span className="text-sun">work for Nigerians.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              On 11 July 2024, the Supreme Court affirmed the financial and administrative autonomy of all 774 local governments.
              Millions of Nigerians are still waiting for it to be implemented. Add your voice.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href={site.campaign.petitionUrl} tone="sun" external>Support the petition</Button>
              <Button href="/local-government-autonomy" tone="ghost-light">Learn about the campaign</Button>
            </div>
          </div>
          <ul className="grid gap-3">
            {[
              ['Financial autonomy', 'Funds that reach the needs of local people.'],
              ['Grassroots development', 'Infrastructure and services communities deserve.'],
              ['Better accountability', 'Government close enough to answer to its people.'],
            ].map(([title, text]) => (
              <li key={title} className="rounded-2xl bg-white/[0.06] p-5 ring-1 ring-white/10">
                <h3 className="text-lg text-white">{title}</h3>
                <p className="mt-1 text-[15px] text-white/70">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Programmes */}
      <section className="py-20 sm:py-28">
        <div className={`${container} grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-20`}>
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionTitle
              eyebrow="Programmes"
              title="Work that is already making a difference"
              intro="Campaigns, summits and enrolment drives across Nigeria, most of them running every year since we began."
            />
            <div className="mt-8 overflow-hidden rounded-3xl ring-1 ring-line">
              <Image
                src="/photos/engagement-hall.webp"
                alt="Participants at a NEFNAI community engagement"
                width={2040}
                height={1530}
                sizes="(min-width: 1024px) 460px, 100vw"
                className="h-auto w-full"
              />
            </div>
          </div>
          <ol className="relative space-y-5 border-l-2 border-line pl-8">
            {PROGRAMMES.map((item) => (
              <li key={item.title} className="relative rounded-3xl bg-white p-7 ring-1 ring-line">
                <span aria-hidden="true" className="absolute -left-[41px] top-9 h-4 w-4 rounded-full border-4 border-white bg-green ring-2 ring-green/30" />
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-sky-deep">{item.years}</p>
                <h3 className="mt-2 text-xl">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* In the community */}
      <section className="border-t border-line py-20 sm:py-28">
        <div className={container}>
          <SectionTitle
            eyebrow="In the community"
            title={<>Our work, <span className="text-sky-deep">on the ground.</span></>}
            intro="Conferences, outreaches and welfare support in communities across Benue State and beyond."
          />
          <div className="mt-12">
            <Gallery
              items={[
                { photo: photos.speaker, caption: 'Addressing participants at a NEFNAI event.' },
                { photo: photos.presentation, caption: 'NEFNAI members making a presentation to a guest.' },
                { photo: photos.audience, caption: 'Members and the community at a NEFNAI engagement.' },
                { photo: photos.registration, caption: 'Signing up participants at an outreach.' },
                { photo: photos.welfare2, caption: 'A NEFNAI Special Welfare Scheme benefit being presented.' },
                { photo: photos.welfareFamily, caption: 'A family in Ushongo LGA supported by the welfare scheme.' },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Get involved */}
      <section className="bg-mint py-20 sm:py-28">
        <div className={container}>
          <SectionTitle center eyebrow="Get involved" title="There is something everyone can do" intro="No matter who you are or where you are, you can help change Africa for the better." />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              { title: 'Volunteer', text: 'Give your time, skills or profession in your community or beyond. We’ll match you to where you’re needed.', href: '/volunteer', cta: 'Become a volunteer', tone: 'green' as const },
              { title: 'Donate', text: 'Fund civic education, campaigns and support for vulnerable children and families across Nigeria.', href: '/donate', cta: 'Donate now', tone: 'sun' as const },
              { title: 'Partner with us', text: 'Organisations, institutions and companies: work with us on programmes that build a better society.', href: '/get-help#contact', cta: 'Talk to us', tone: 'outline' as const },
            ].map((card) => (
              <div key={card.title} className="flex flex-col rounded-3xl bg-white p-8 ring-1 ring-line">
                <h3 className="text-2xl">{card.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted">{card.text}</p>
                <div className="mt-8">
                  <Button href={card.href} tone={card.tone}>{card.cta}</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
