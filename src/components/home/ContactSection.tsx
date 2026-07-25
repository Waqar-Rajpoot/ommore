'use client';

import { Mail, MessageCircle, Globe } from 'lucide-react';
import Link from 'next/link';
import GlassCard from '@/components/ui/GlassCard';
import SectionHeading from '@/components/ui/SectionHeading';
import ContactForm from '@/components/contact/ContactForm';
import { buildWhatsAppURL } from '@/lib/constants';

const infoCards = [
  { icon: Mail, label: 'Email', value: 'ommorecommerce@gmail.com', href: 'mailto:ommorecommerce@gmail.com' },
  { icon: MessageCircle, label: 'WhatsApp', value: '+92 300 0767291', href: buildWhatsAppURL() },
  { icon: Globe, label: 'Website', value: 'ommore.com', href: 'https://ommore.com' },
];

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-[1280px] px-20 py-24 max-md:px-5 max-md:py-16">
      <SectionHeading eyebrow="Get In Touch" heading="Get In Touch" />

      <div className="mt-12 grid grid-cols-2 gap-10 max-lg:grid-cols-1">
        <GlassCard>
          <ContactForm />
        </GlassCard>

        <div className="space-y-4">
          {infoCards.map(({ icon: Icon, label, value, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="block">
              <GlassCard className="flex items-center gap-4 p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary-muted">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.08em] text-text-muted">{label}</p>
                  <p className="text-sm text-text-primary">{value}</p>
                </div>
              </GlassCard>
            </a>
          ))}

          <Link
            href="/contact"
            className="block rounded-lg border-[1.5px] border-border-glow px-8 py-3.5 text-center font-display text-base font-semibold text-primary transition-colors hover:bg-primary-muted"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </section>
  );
}
