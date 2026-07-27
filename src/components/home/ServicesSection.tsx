import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/services/ServiceCard';
import { SERVICES } from '@/data/services-data';

const HOME_FEATURED_LIMIT = 4;

export default function ServicesSection() {
  const featured = SERVICES.filter((s) => s.featured).slice(0, HOME_FEATURED_LIMIT);

  return (
    <section className="mx-auto max-w-[1280px] px-20 py-12 max-md:px-5 max-md:py-8">
      <SectionHeading
        eyebrow="What We Do"
        heading="Business, Technology, and Marketing"
      />
      <p className="mx-auto mt-4 max-w-2xl text-center text-text-secondary">
        From registering your company to building the product and driving the traffic that
        grows it — a few of the services clients come to us for most.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((service) => (
          <ServiceCard key={service.slug} service={service} learnMoreLabel="Learn More" />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/services"
          className="rounded-full border border-border-glass bg-glass px-6 py-2.5 text-sm font-medium text-text-primary backdrop-blur-glass transition-colors hover:border-primary/50 hover:text-primary"
        >
          View All Services
        </Link>
      </div>
    </section>
  );
}
