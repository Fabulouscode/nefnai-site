import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHero } from '@/components/page-hero';
import { Button, container } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Training & Certification',
  description: 'NEFNAI training and certification: membership, staff, leadership, empowerment, digital skills, first aid, instructor, and lifeguard and water safety training.',
};

const photo = {
  audience: { src: '/photos/training/audience.jpg', width: 1280, height: 804, alt: 'Participants listening at a training session' },
  staff: { src: '/photos/training/staff-session.jpg', width: 1280, height: 853, alt: 'A trainer presenting to a small group' },
  leadership: { src: '/photos/training/leadership-session.jpg', width: 1280, height: 853, alt: 'A leadership training session in progress' },
  skills: { src: '/photos/training/skills.jpg', width: 1280, height: 853, alt: 'Gears labelled skills, knowledge, training, learning and education' },
  notes: { src: '/photos/training/note-taking.jpg', width: 1280, height: 1024, alt: 'Participants taking notes during a training' },
};

const TRAININGS = [
  {
    title: 'Membership Training',
    text: 'All new members of NEFNAI are properly trained, inducted and certified. Trainings are carried out across many centres as soon as people sign up to join the struggle. New entrants are contacted and trainings arranged for them physically, or they can access membership training online as they sign up on their membership page and follow the guidelines to undergo their training. Upon successful completion of the process, their certificates are sent to them online.',
    photo: photo.audience,
  },
  {
    title: 'Train My Employees',
    text: 'All employees at all levels are always adequately trained to effectively handle the projects and tasks assigned to them from time to time. Necessary certificates are also issued to trained employees.',
    photo: photo.staff,
  },
  {
    title: 'Leadership Training',
    text: 'NEFNAI reforms and trains people, especially the youth, to acquire the leadership skills they need to become patriotic and successful leaders and sustainable change makers for a better society in communities around Africa. Certificates are issued to participants at the end of all leadership trainings.',
    photo: photo.leadership,
  },
  {
    title: 'Empowerment to Reduce Poverty',
    text: 'In partnership with key stakeholders, including relevant government institutions, we offer result-oriented skill acquisition programmes, provide relevant information and give other empowerment support to help fight poverty in communities around us. Certificates are offered to participants accordingly.',
    photo: photo.skills,
  },
  {
    title: 'Computer Literacy / Digital Skills Training',
    text: 'We train and certify people who are not computer literate to acquire computer skills, use digital and AI tools and make excellent use of the internet, to empower people as well as advance the cause of our organisation.',
    photo: photo.notes,
  },
  {
    title: 'First Aid Training',
    text: 'First aid training and certification is open to all members of NEFNAI, to enable them attend to emergency situations, especially helping badly injured accident victims access timely medical care in order to save the endangered lives of Africans. Experts and other partners will always be involved.',
    photo: photo.audience,
  },
  {
    title: 'Instructors Training',
    text: 'These are special trainings and certification given to people who will in turn train others in the various areas of need.',
    photo: photo.staff,
  },
  {
    title: 'Lifeguard and Water Safety Training',
    text: 'Special awareness creation and training for water hygiene is often organised for communities with water challenges. This is in order to reduce the number of Africans currently consuming contaminated water.',
    photo: photo.notes,
  },
];

export default function TrainingCertificationPage() {
  return (
    <>
      <PageHero
        eyebrow="Learn with NEFNAI"
        title={<>Training & <span className="hl">Certification</span></>}
        intro="Every NEFNAI training ends with a certificate. Some are for members, others are open to the communities we serve."
      >
        <Button href="/account/register" tone="light">Join us now</Button>
        <Button href="/get-help#contact" tone="ghost-light">Ask about a training</Button>
      </PageHero>

      <section className="py-20 sm:py-28">
        <ol className={`${container} space-y-16 sm:space-y-24`}>
          {TRAININGS.map((t, i) => (
            <li key={t.title} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
              <div className={`overflow-hidden rounded-md ring-1 ring-line ${i % 2 ? 'lg:order-2' : ''}`}>
                <Image src={t.photo.src} alt={t.photo.alt} width={t.photo.width} height={t.photo.height} sizes="(min-width: 1024px) 540px, 100vw" className="aspect-[4/3] h-auto w-full object-cover" />
              </div>
              <div>
                <span className="font-display text-sm font-extrabold text-sky-deep">{String(i + 1).padStart(2, '0')}</span>
                <h2 className="mt-3 text-3xl sm:text-4xl">{t.title}</h2>
                <p className="mt-5 text-lg leading-relaxed">{t.text}</p>
                <p className="mt-6 inline-flex w-fit items-center gap-2 rounded-md bg-green-soft px-3 py-1.5 text-xs font-bold text-green-deep">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
                  Certificate on completion
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-forest text-white">
        <div className={`${container} flex flex-col items-start justify-between gap-8 py-16 sm:py-20 lg:flex-row lg:items-center`}>
          <div>
            <h2 className="text-3xl text-white sm:text-4xl">Ready to be <span className="hl">trained and certified?</span></h2>
            <p className="mt-4 max-w-xl text-lg text-white/75">Sign up as a member and we’ll arrange your training, in person or online.</p>
          </div>
          <Button href="/account/register" tone="sun">Join us now</Button>
        </div>
      </section>
      <div className="tricolor" />
    </>
  );
}
