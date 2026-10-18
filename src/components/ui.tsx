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
      className={`inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-[15px] font-bold tracking-wide transition ${TONES[tone]}`}
    >
      {children}
    </Link>
  );
}

/** The rising sun from the logo: a small mark of rays. */
export function SunMark({ className = 'h-4 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 14" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M12 13V3M12 13 5.5 5M12 13l6.5-8M12 13 2 9.5M12 13l10-3.5" />
    </svg>
  );
}

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`flex items-center gap-2.5 text-[12.5px] font-bold uppercase tracking-[0.2em] ${light ? 'text-sky' : 'text-green-deep'}`}>
      <SunMark className={`h-3.5 w-6 ${light ? 'text-sun' : 'text-sky'}`} />
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
