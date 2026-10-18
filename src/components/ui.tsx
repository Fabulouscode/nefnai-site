import Link from 'next/link';

export const container = 'mx-auto w-full max-w-6xl px-5 sm:px-8';

type Tone = 'green' | 'sun' | 'outline' | 'light' | 'ghost-light';
const TONES: Record<Tone, string> = {
  green: 'bg-green-deep text-white hover:bg-[#005d30] shadow-[0_10px_24px_-10px_rgb(0_112_58/0.6)]',
  sun: 'bg-sun text-forest hover:bg-[#ffc21f] shadow-[0_10px_24px_-10px_rgb(245_179_1/0.7)]',
  outline: 'bg-white text-ink ring-1 ring-inset ring-line hover:ring-green',
  light: 'bg-white text-forest hover:bg-mint',
  'ghost-light': 'text-white ring-1 ring-inset ring-white/30 hover:bg-white/10',
};

export function Button({ href, tone = 'green', external = false, children }: { href: string; tone?: Tone; external?: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener' } : {})}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-bold transition ${TONES[tone]}`}
    >
      {children}
    </Link>
  );
}

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.16em] ${light ? 'text-sky' : 'text-green-deep'}`}>
      <span aria-hidden="true" className={`h-1.5 w-6 rounded-full ${light ? 'bg-sky' : 'bg-green'}`} />
      {children}
    </p>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  intro,
  light = false,
  center = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center [&>p:first-child]:justify-center' : ''}`}>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2 className={`mt-4 text-[2.25rem] sm:text-5xl ${light ? 'text-white' : ''}`}>{title}</h2>
      {intro && <p className={`mt-5 text-lg leading-relaxed sm:text-xl ${light ? 'text-white/75' : 'text-muted'}`}>{intro}</p>}
    </div>
  );
}
