import { SunRays } from './sun-rays';
import { Eyebrow, container } from './ui';

export function PageHero({ eyebrow, title, intro, children }: { eyebrow: string; title: React.ReactNode; intro?: React.ReactNode; children?: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-forest text-white">
      <SunRays className="absolute -bottom-2 right-[-12%] h-[115%] w-auto opacity-70 sm:right-[-4%]" />
      <div className={`${container} relative py-16 sm:py-24`}>
        <Eyebrow light>{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-4xl text-[2.6rem] text-white sm:text-6xl lg:text-[4.25rem]">{title}</h1>
        {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">{intro}</p>}
        {children && <div className="mt-9 flex flex-wrap gap-3">{children}</div>}
      </div>
      <div className="tricolor" />
    </section>
  );
}
