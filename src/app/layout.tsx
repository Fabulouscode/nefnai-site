import type { Metadata, Viewport } from 'next';
import { Fraunces, Public_Sans } from 'next/font/google';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { site } from '@/lib/site';
import './globals.css';

const body = Public_Sans({ variable: '--font-body', subsets: ['latin'] });
// A warm serif with gravitas for headlines: a movement, not a startup.
const heading = Fraunces({ variable: '--font-heading', subsets: ['latin'], axes: ['opsz', 'SOFT'] });

export const metadata: Metadata = {
  title: { default: `${site.name}: ${site.fullName}`, template: `%s · ${site.name}` },
  description: site.description,
};

export const viewport: Viewport = { themeColor: '#062b1d' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${heading.variable}`}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
