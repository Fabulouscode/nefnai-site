import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';

/** The frame for sign-in, register and password pages. */
export function AuthShell({ title, intro, children, footer }: { title: string; intro: React.ReactNode; children: React.ReactNode; footer: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-mint">
      <div aria-hidden="true" className="absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-sky/10 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-52 -left-40 h-[440px] w-[440px] rounded-full bg-green/10 blur-3xl" />
      <div className="relative mx-auto w-full max-w-lg px-5 py-16 sm:py-24">
        <div className="text-center">
          <Image src="/logo.jpg" alt="" width={72} height={72} className="mx-auto h-18 w-18 rounded-full ring-4 ring-white" />
          <h1 className="mt-6 text-4xl">{title}</h1>
          <p className="mt-3 text-lg leading-relaxed text-muted">{intro}</p>
        </div>
        <div className="mt-10">{children}</div>
        <div className="mt-6 text-center text-[15px] text-muted">{footer}</div>
      </div>
    </section>
  );
}

export const accountsNotice = (
  <>
    Member accounts are being set up and will open soon. To join NEFNAI now, call <strong>{site.phones[0]}</strong> or email{' '}
    <Link href={`mailto:${site.email}`} className="font-semibold text-sky-deep underline">{site.email}</Link>.
  </>
);
