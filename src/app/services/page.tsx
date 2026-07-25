import type { Metadata } from 'next';
import SectionHeading from '@/components/ui/SectionHeading';
import ServicesGrid from '@/components/services/ServicesGrid';

export const metadata: Metadata = {
  title: 'Services — Ommore',
  description:
    'Company registration, tax filing, banking, marketplace accounts, and digital marketing for international entrepreneurs.',
};

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-[1280px] px-20 py-24 max-md:px-5 max-md:py-16">
      <SectionHeading eyebrow="Our Services" heading="Everything Your Business Needs to Go Global" />
      <ServicesGrid />
    </section>
  );
}