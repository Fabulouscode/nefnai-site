'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { nav } from '@/lib/site';

export function SiteHeader() {
  const pathname = usePathname();
  // Open only for the page it was opened on, so navigating closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/95 backdrop-blur-md">
      <div className="tricolor" />
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="NEFNAI home">
          <Image src="/logo.jpg" alt="" width={44} height={44} className="h-11 w-11 rounded-full" priority />
          <span className="leading-tight">
            <span className="block font-display text-xl font-semibold tracking-tight text-ink">NEFNAI</span>
            <span className="hidden text-[11px] font-semibold text-muted sm:block lg:hidden 2xl:block">New Followership, New Africa Initiative</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-5 lg:flex xl:gap-7">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`whitespace-nowrap text-[15px] font-semibold transition-colors hover:text-green-deep ${pathname === item.href ? 'text-green-deep' : 'text-ink/80'}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/account/login" className="hidden whitespace-nowrap px-2 text-[15px] font-semibold text-ink/80 hover:text-green-deep xl:inline-flex">
            Sign in
          </Link>
          <Link href="/volunteer" className="hidden whitespace-nowrap rounded-md px-4 py-2.5 text-[15px] font-bold text-green-deep ring-1 ring-inset ring-green/30 hover:bg-green-soft sm:inline-flex">
            Volunteer
          </Link>
          <Link href="/donate" className="hidden rounded-md bg-sun px-5 py-2.5 text-[15px] font-bold text-forest hover:bg-[#ffc21f] sm:inline-flex">
            Donate
          </Link>
          <button
            type="button"
            onClick={() => setOpenOn(open ? null : pathname)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex h-11 w-11 items-center justify-center rounded-md text-ink ring-1 ring-inset ring-line lg:hidden"
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Main" className="border-t border-line bg-white px-5 pb-6 pt-2 lg:hidden">
          <ul className="divide-y divide-line">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block py-4 text-lg font-semibold text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/account/login" className="mt-2 block py-3 text-lg font-semibold text-sky-deep">
            Sign in or become a member
          </Link>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <Link href="/volunteer" className="rounded-md py-3.5 text-center font-bold text-green-deep ring-1 ring-inset ring-green/30">
              Volunteer
            </Link>
            <Link href="/donate" className="rounded-md bg-sun py-3.5 text-center font-bold text-forest">
              Donate
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
