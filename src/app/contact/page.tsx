// src/app/contact/page.tsx
import type { Metadata } from 'next';
import { Mail, MessageCircle, Globe, Clock } from 'lucide-react';
import Link from 'next/link';
import GlassCard from '@/components/ui/GlassCard';
import SectionHeading from '@/components/ui/SectionHeading';
import ContactForm from '@/components/contact/ContactForm';
import FAQAccordion from '@/components/contact/FAQAccordion';
import { buildWhatsAppURL } from '@/lib/constants';
import { faqs } from '@/data/faqs';

export const metadata: Metadata = {
  title: 'Contact Us | Ommore',
  description:
    "Tell us about your project and we'll get back to you within one business day. No sales call required to get a straight answer.",
};

const infoCards = [
  {
    icon: Mail,
    label: 'Email',
    value: 'ommorecommerce@gmail.com',
    href: 'mailto:ommorecommerce@gmail.com',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+92 300 0767291',
    href: buildWhatsAppURL(),
  },
  {
    icon: Globe,
    label: 'Website',
    value: 'ommore.com',
    href: 'https://ommore.com',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-[1280px] px-20 pb-8 pt-24 text-center max-md:px-5 max-md:pb-6 max-md:pt-16">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          
        </span>
        <SectionHeading eyebrow="Get In Touch" heading="Let&apos;s build something worth shipping" />
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-text-muted sm:text-lg">
          Tell us about your project and we&apos;ll get back to you within one
          business day — no sales call required to get a straight answer.
        </p>
      </section>

      {/* Form + contact info */}
      <section className="mx-auto max-w-[1280px] px-20 py-16 max-md:px-5 max-md:py-10">
        <div className="grid grid-cols-2 gap-10 max-lg:grid-cols-1">
          <GlassCard>
            <ContactForm />
          </GlassCard>

          <div className="space-y-4">
            {infoCards.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <GlassCard className="flex items-center gap-4 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary-muted">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.08em] text-text-muted">
                      {label}
                    </p>
                    <p className="text-sm text-text-primary">{value}</p>
                  </div>
                </GlassCard>
              </a>
            ))}

            <GlassCard className="flex items-center gap-4 p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary-muted">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.08em] text-text-muted">
                  Response Time
                </p>
                <p className="text-sm text-text-primary">
                  Usually within 1 business day
                </p>
              </div>
            </GlassCard>

            <Link
              href={buildWhatsAppURL()}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg border-[1.5px] border-border-glow px-8 py-3.5 text-center font-display font-semibold text-primary transition-colors hover:bg-primary-muted"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface px-20 py-24 max-md:px-5 max-md:py-16">
        <div className="mx-auto max-w-[900px]">
          <SectionHeading eyebrow="FAQ" heading="Frequently Asked Questions" />
          <div className="mt-12">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
