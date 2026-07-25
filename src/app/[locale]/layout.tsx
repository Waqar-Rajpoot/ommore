import type { Metadata } from 'next';
import { Poppins, Inter, Noto_Sans_Arabic } from 'next/font/google';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/layout/WhatsAppFloat';
import '../globals.css';

// English faces (Frontend Spec section 2)
const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
});

// Arabic face — Poppins/Inter do not support Arabic glyphs (Frontend Spec section 2)
const notoSansArabic = Noto_Sans_Arabic({
  variable: '--font-noto-arabic',
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ommore — Your Gateway to Global Markets',
  description:
    'US LLC formation, marketplace account setup, and digital marketing services for international entrepreneurs.',
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  const fontVars =
    locale === 'ar'
      ? notoSansArabic.variable
      : `${poppins.variable} ${inter.variable}`;
  const fontClass = locale === 'ar' ? 'font-arabic' : 'font-sans';

  return (
    <html lang={locale} dir={dir} className={`${fontVars} h-full`}>
      <body className={`${fontClass} flex min-h-full flex-col bg-base text-text-primary antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
