import Image from 'next/image';
import Link from 'next/link';
import { container } from './ui';
import { nav, site } from '@/lib/site';

export function SiteFooter() {
  return (
    <footer className="bg-forest text-white/75">
      <div className={`${container} grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1.2fr]`}>
        <div>
          <div className="flex items-center gap-3">
            <Image src="/logo.jpg" alt="" width={52} height={52} className="h-13 w-13 rounded-full" />
            <div>
              <p className="font-display text-xl font-extrabold text-white">NEFNAI</p>
              <p className="text-sm">{site.fullName}</p>
            </div>
          </div>
          <p className="mt-6 max-w-sm leading-relaxed">
            Reviving integrity and patriotic values in Africans since 2018. <span className="font-semibold text-sky">{site.motto}</span>
          </p>
        </div>
        <div>
          <p className="font-display font-bold text-white">Explore</p>
          <ul className="mt-4 space-y-2.5">
            {[...nav, { href: '/volunteer', label: 'Volunteer' }, { href: '/donate', label: 'Donate' }].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-display font-bold text-white">Contact</p>
          <ul className="mt-4 space-y-3">
            {site.phones.map((phone) => (
              <li key={phone}>
                <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-white">{phone}</a>
              </li>
            ))}
            <li>
              <a href={`mailto:${site.email}`} className="break-all hover:text-white">{site.email}</a>
            </li>
            <li className="leading-relaxed">
              {site.offices.map((office) => (
                <span key={office} className="block">{office}</span>
              ))}
              <span className="block">{site.state}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className={`${container} py-6 text-sm text-white/55`}>© {new Date().getFullYear()} {site.fullName}. All rights reserved.</p>
      </div>
    </footer>
  );
}
