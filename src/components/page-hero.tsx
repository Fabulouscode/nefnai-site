import { Eyebrow, container } from './ui';

export function PageHero({ eyebrow, title, intro, children }: { eyebrow: string; title: React.ReactNode; intro?: React.ReactNode; children?: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-mint">
      <div aria-hidden="true" className="absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-sky/10 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-52 -left-40 h-[440px] w-[440px] rounded-full bg-green/10 blur-3xl" />
      <div className={`${container} relative py-16 sm:py-24`}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-4xl text-[2.5rem] sm:text-6xl">{title}</h1>
        {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl">{intro}</p>}
        {children && <div className="mt-9 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}
