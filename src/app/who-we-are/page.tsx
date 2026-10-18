import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHero } from '@/components/page-hero';
import { Button, SectionTitle, container } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Who we are',
  description: 'NEFNAI’s story, vision, mission, aims and core values: reviving integrity and patriotism in Africans since 2018.',
};

const AIMS = [
  'Create a platform where Africans of goodwill come together, are reformed, and become patriotic citizens rebuilding a new Africa.',
  'Contribute to a hygienic and safe living environment, and to housing and drinkable water for African people.',
  'Help reduce illiteracy and the number of out-of-school children on the continent.',
  'Save accident victims by helping them get medical attention in time.',
  'Promote the defence and protection of the fundamental human rights of everyone on the African continent.',
];

const VALUES = [
  ['Integrity', 'We uphold absolute honesty and strong moral principles.'],
  ['Dignity', 'We uphold the inherent worth of every person, and act in ways that earn honour and respect.'],
  ['Transparency & inclusivity', 'We are open in all our dealings, and make sure everyone can take part in our programmes. No one is left behind.'],
  ['Accountability', 'We welcome public evaluation, and take responsibility for our policies, our actions and their consequences.'],
  ['Hard work', 'We work smartly and vigorously for the best results, and encourage every African to succeed through hard work and innovation.'],
  ['Gender equality & fairness', 'We advocate for equal opportunities and rights for all, regardless of gender or status.'],
  ['Obedience to the law', 'We keep the law, and encourage every person, organisation and government on the continent to do the same.'],
  ['Partnerships', 'We value working with stakeholders, recognising what each brings, and using every resource well for mutual benefit.'],
];

const STRATEGIES = [
  'Sensitisation and enlightenment programmes that help citizens do the right thing, insist on it wherever they are, and stand together against those destroying African nations.',
  'Mobilising men and women of goodwill, on the continent and beyond, onto the NEFNAI platform.',
  'Engaging every stakeholder in the African project.',
  'Supporting and promoting the education of the African child.',
  'Working with governments and other partners towards a clean and safe Africa.',
  'Instilling patriotic values in the younger generation, so the change lasts.',
];

const EDUCATION = [
  'Find school-age children who are out of school in our areas of operation, and enrol them.',
  'Teach members and the public why educating their children and wards matters.',
  'Support school infrastructure and equipment where it’s needed.',
  'Partner with organisations and government agencies that promote education.',
];

export default function WhoWeArePage() {
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        title={<>A new breed of Africans, for a <span className="hl">greater Africa.</span></>}
        intro="New Followership, New Africa Initiative (NEFNAI) is a non-governmental organisation founded in 2018 to help rescue African states from system collapse, by reviving integrity and patriotic values in their citizens."
      />

      <section className="py-20 sm:py-28">
        <div className={`${container} grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20`}>
          <div className="space-y-5 text-lg leading-relaxed">
            <p>
              We believe the lack of true love of country is at the root of Africa’s challenges: putting other interests above the
              nation, disregarding its laws, and failing to serve it selflessly.
            </p>
            <p>
              Through civic education and other strategic means, we mobilise citizens to arise and become the solution to the
              challenges facing their communities and states, and to put Africa on the path of sustainable development.
            </p>
          </div>
          <div className="overflow-hidden rounded-md ring-1 ring-line">
            <Image src="/photos/members-audience.webp" alt="NEFNAI members and community members at an engagement" width={2126} height={1594} sizes="(min-width: 1024px) 540px, 100vw" className="h-auto w-full" />
          </div>
        </div>
      </section>

      <section className="bg-mint py-20 sm:py-28">
        <div className={`${container} grid gap-5 md:grid-cols-2`}>
          <div className="rounded-md bg-white p-8 ring-1 ring-line sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-green-deep">Our vision</p>
            <p className="mt-4 font-display text-2xl font-bold leading-snug text-ink">
              A new Africa where propriety, discipline and absolute patriotism are the pride of every African, passed on to
              generations yet unborn: an outstanding, shining example for the whole world.
            </p>
          </div>
          <div className="rounded-md bg-forest p-8 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-sky">Our mission</p>
            <p className="mt-4 font-display text-2xl font-bold leading-snug text-white">
              To bring every African of goodwill on board, through enlightenment programmes, campaigns and advocacy, to make
              re-shaping our countries and continent the number one priority, and to persist until we see the Africa of our dreams.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className={`${container} grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20`}>
          <SectionTitle eyebrow="Aims & objectives" title="What we set out to do" />
          <ol className="space-y-4">
            {AIMS.map((aim, i) => (
              <li key={aim} className="flex gap-5 rounded-md bg-white p-6 ring-1 ring-line">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-green-soft font-display font-extrabold text-green-deep">{i + 1}</span>
                <p className="leading-relaxed text-body">{aim}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-mint py-20 sm:py-28">
        <div className={container}>
          <SectionTitle
            center
            eyebrow="Culture & core values"
            title="The values we live by"
            intro="We bring people from different backgrounds together around honesty, accountability, hard work, unity of purpose, selflessness and patriotism, and purge ourselves of corruption, laziness and sentiments of tribe, religion and region."
          />
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(([name, text]) => (
              <li key={name} className="rounded-md bg-white p-7 ring-1 ring-line">
                <span aria-hidden="true" className="block h-1.5 w-10 rounded-full bg-sky" />
                <h3 className="mt-5 text-lg">{name}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className={`${container} grid gap-14 lg:grid-cols-2 lg:gap-20`}>
          <div>
            <SectionTitle eyebrow="How we work" title="Our strategies for change" />
            <ul className="mt-10 space-y-4">
              {STRATEGIES.map((item) => (
                <li key={item} className="flex gap-4 leading-relaxed">
                  <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-green" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-md bg-forest p-8 text-white sm:p-10">
            <p className="font-display text-2xl font-bold leading-snug text-white">“Education is the most powerful weapon which you can use to change the world.”</p>
            <p className="mt-3 text-white/60">Nelson Mandela</p>
            <p className="mt-8 leading-relaxed text-white/80">
              Many of Africa’s development challenges are tied to illiteracy, so the education of every African child must be
              everyone’s concern. In our areas of operation, we:
            </p>
            <ul className="mt-5 space-y-3">
              {EDUCATION.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed text-white/85">
                  <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-sun" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-mint py-16">
        <div className={`${container} flex flex-col items-start justify-between gap-6 md:flex-row md:items-center`}>
          <h2 className="text-3xl sm:text-4xl">Ready to be part of a new Africa?</h2>
          <div className="flex flex-wrap gap-3">
            <Button href="/volunteer">Become a volunteer</Button>
            <Button href="/donate" tone="sun">Donate</Button>
          </div>
        </div>
      </section>
    </>
  );
}
