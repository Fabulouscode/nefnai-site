import type { Metadata, Viewport } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { site } from '@/lib/site';
import './globals.css';

const body = Inter({ variable: '--font-body', subsets: ['latin'] });
const heading = Plus_Jakarta_Sans({ variable: '--font-heading', subsets: ['latin'], weight: ['600', '700', '800'] });

export const metadata: Metadata = {
  title: { default: `${site.name}: ${site.fullName}`, template: `%s · ${site.name}` },
  description: site.description,
  icons: { icon: '/logo.jpg' },
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
