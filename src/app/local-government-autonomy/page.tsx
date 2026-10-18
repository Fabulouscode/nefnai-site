import type { Metadata } from 'next';
import Image from 'next/image';
import { Button, Eyebrow, SectionTitle, container } from '@/components/ui';
import { site } from '@/lib/site';
import { photos } from '@/lib/photos';
import { SunRays } from '@/components/sun-rays';

export const metadata: Metadata = {
  title: 'Local government autonomy',
  description: 'Let local government autonomy work for Nigerians: support the petition for full implementation of the Supreme Court judgment of 11 July 2024.',
};

const WHY = [
  ['Financial autonomy', 'Local governments will have the funds to meet the needs of their people.'],
  ['Administrative autonomy', 'Local governments can function independently, and serve better.'],
  ['Grassroots development', 'Communities get the infrastructure and services they deserve.'],
  ['Better accountability', 'Government closer to the people means more transparency and responsiveness.'],
  ['Stronger local governance', 'Empowered local governments build a stronger, united Nigeria.'],
];

const STEPS = [
  ['Sign', 'Sign the local government autonomy petition, if you haven’t already.'],
  ['Reach 10', 'Share the petition with at least 10 people: friends, family, colleagues, neighbours, classmates, your church or mosque, and your groups.'],
  ['Follow up', 'Don’t just send the link. Personally encourage those 10 people to read, understand and sign it.'],
  ['Start the chain', 'Encourage each of your 10 to reach 10 more. That’s how a citizen’s voice becomes a movement.'],
];

export default function LocalGovernmentAutonomyPage() {
  const { petitionUrl, surveyUrl, whatsapp, whatsappHref } = site.campaign;
  return (
    <>
      <section className="relative overflow-hidden bg-forest text-white">
        <SunRays className="absolute -bottom-2 right-[-12%] h-[110%] w-auto opacity-60" />
        <div className={`${container} relative py-20 sm:py-28`}>
          <Eyebrow light>Campaign · Local government autonomy</Eyebrow>
          <h1 className="mt-5 max-w-4xl text-[2.5rem] text-white sm:text-6xl">
            Let local government autonomy <span className="text-sun">work for Nigerians.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
            A call for the full implementation of the Supreme Court judgment on the financial and administrative autonomy of local governments.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href={petitionUrl} tone="sun" external>Support the petition</Button>
            <Button href={surveyUrl} tone="ghost-light" external>Take the quick survey</Button>
          </div>
          <p className="mt-6 text-white/60">Your voice can help strengthen grassroots democracy in Nigeria.</p>
        </div>
        <div className="tricolor" />
      </section>

      <section className="py-20 sm:py-28">
        <div className={`${container} grid gap-12 lg:grid-cols-2 lg:gap-20`}>
          <SectionTitle eyebrow="The Supreme Court judgment" title={<>A historic decision. <span className="hl">A pending implementation.</span></>} />
          <div className="space-y-5 text-lg leading-relaxed">
            <p>
              On <strong className="text-ink">11 July 2024</strong>, Nigeria’s Supreme Court delivered a historic judgment affirming the financial and
              administrative autonomy of all <strong className="text-ink">774 local governments</strong>.
            </p>
            <p>Two years on, millions of Nigerians are still waiting to see this landmark decision fully implemented.</p>
            <p className="font-display text-xl font-bold text-ink">This is more than a legal issue. It is about the future of our communities.</p>
          </div>
        </div>
      </section>

      <section className="bg-mint py-20 sm:py-28">
        <div className={container}>
          <SectionTitle center eyebrow="Why this matters" title="What autonomy changes" />
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {WHY.map(([name, text]) => (
              <li key={name} className="rounded-md bg-white p-6 ring-1 ring-line">
                <span aria-hidden="true" className="block h-1.5 w-10 rounded-full bg-green" />
                <h3 className="mt-5 text-lg">{name}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className={`${container} max-w-4xl text-center`}>
          <Eyebrow>Our voice. Our responsibility.</Eyebrow>
          <blockquote className="mt-6 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
            “A small group of committed citizens can change the world. Indeed, it’s the only thing that ever has.”
          </blockquote>
          <p className="mt-4 text-muted">Margaret Mead</p>
          <p className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed">
            Change does not come from waiting. We don’t need a big title to make a big difference: we just need to refuse to be silent.
            Let us use our power as responsible citizens to demand complete local government autonomy now, so Nigeria can see true
            development and better security, especially in our rural communities.
          </p>
          <p className="mt-6 font-display text-xl font-bold text-green-deep">Speak. Organise. Participate. Demand action.</p>
        </div>
      </section>

      <section className="bg-mint py-20 sm:py-28">
        <div className={container}>
          <SectionTitle center eyebrow="The 10 for 10 challenge" title="How one voice becomes a movement" />
          <div className="mt-14 grid gap-5 lg:grid-cols-[1fr_1.4fr]">
          <div className="self-start overflow-hidden rounded-md ring-1 ring-line">
            <Image src={photos.tenForTen.src} alt={photos.tenForTen.alt} width={photos.tenForTen.width} height={photos.tenForTen.height} sizes="(min-width: 1024px) 440px, 100vw" className="h-auto w-full" />
          </div>
          <ol className="grid gap-5 sm:grid-cols-2">
            {STEPS.map(([name, text], i) => (
              <li key={name} className="rounded-md bg-white p-7 ring-1 ring-line">
                <span className="font-display text-4xl font-extrabold text-sky">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 text-xl">{name}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{text}</p>
              </li>
            ))}
          </ol>
          </div>
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <div className="rounded-md bg-forest p-8 text-white">
              <h3 className="text-2xl text-white">Get recognised</h3>
              <p className="mt-3 leading-relaxed text-white/75">
                When your first 10-for-10 cycle is complete and verified, tell the campaign team. Verified participants receive a{' '}
                <strong className="text-sun">Digital Grassroots Democracy Champion</strong> badge and certificate, and more cycles earn higher recognition.
              </p>
            </div>
            <div className="rounded-md bg-white p-8 ring-1 ring-line">
              <h3 className="text-2xl">Contact the campaign team</h3>
              <ul className="mt-4 space-y-2 text-lg">
                <li>WhatsApp: <a href={whatsappHref} className="font-semibold text-green-deep underline">{whatsapp}</a></li>
                <li>Email: <a href={`mailto:${site.email}`} className="font-semibold text-green-deep underline">{site.email}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className={`${container} grid items-center gap-12 lg:grid-cols-2`}>
          <div className="overflow-hidden rounded-md ring-1 ring-line">
            <Image src="/photos/engagement-hall.webp" alt="Participants at a NEFNAI stakeholder engagement" width={2040} height={1530} sizes="(min-width: 1024px) 540px, 100vw" className="h-auto w-full" />
          </div>
          <div>
            <Eyebrow>In the field</Eyebrow>
            <h2 className="mt-4 text-[2.25rem] sm:text-5xl">All patriotic Nigerians, home and abroad.</h2>
            <p className="mt-5 text-lg leading-relaxed">
              Through stakeholder engagement, dialogue and community participation, we are building support for stronger grassroots
              governance. Nigeria cannot keep postponing grassroots development.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href={petitionUrl} tone="sun" external>Add your voice</Button>
              <Button href={surveyUrl} tone="outline" external>Take the survey</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
