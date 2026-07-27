// import type { Metadata } from 'next';
// import { notFound } from 'next/navigation';
// import Link from 'next/link';
// import { CheckCircle2, ArrowLeft } from 'lucide-react';
// import { SERVICES } from '@/data/services-data';
// import ServiceCard from '@/components/services/ServiceCard';
// import GlassCard from '@/components/ui/GlassCard'; 

// export function generateStaticParams() {
//   return SERVICES.map((service) => ({ slug: service.slug }));
// }

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }): Promise<Metadata> {
//   const { slug } = await params;
//   const service = SERVICES.find((s) => s.slug === slug);
//   if (!service) return {};
//   return {
//     title: `${service.title} — Ommore`,
//     description: service.description,
//   };
// }

// export default async function ServiceDetailPage({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;
//   const service = SERVICES.find((s) => s.slug === slug);
//   if (!service) notFound();

//   const related = SERVICES.filter((s) => s.category === service.category && s.slug !== service.slug).slice(0, 2);

//   return (
//     <section className="mx-auto max-w-[1000px] px-20 py-24 max-md:px-5 max-md:py-16">
//       <Link
//         href="/services"
//         className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-primary"
//       >
//         <ArrowLeft className="h-4 w-4" />
//         All Services
//       </Link>

//       <span className="mb-4 inline-block rounded bg-primary-muted px-2.5 py-1 text-xs font-medium uppercase tracking-[0.08em] text-primary">
//         {service.category}
//       </span>
//       <h1 className="font-display text-4xl font-bold leading-[1.15] text-text-primary max-md:text-3xl">
//         {service.title}
//       </h1>
//       <p className="mt-6 text-lg leading-relaxed text-text-secondary">{service.longDescription}</p>

//       <GlassCard className="mt-10">
//         <h2 className="mb-5 font-display text-lg font-semibold text-text-primary">What&apos;s Included</h2>
//         <ul className="space-y-3">
//           {service.features.map((feature) => (
//             <li key={feature} className="flex items-start gap-3 text-sm text-text-secondary">
//               <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
//               {feature}
//             </li>
//           ))}
//         </ul>
//       </GlassCard>

//       <div className="mt-10">
//         <Link
//           href="/contact"
//           className="inline-block rounded-lg bg-gradient-to-br from-primary to-[#0077AA] px-8 py-3.5 font-display text-base font-semibold text-white shadow-glow-md transition-transform hover:-translate-y-px"
//         >
//           Get Started
//         </Link>
//       </div>

//       {related.length > 0 && (
//         <div className="mt-20">
//           <h2 className="mb-6 font-display text-2xl font-bold text-text-primary">Related Services</h2>
//           <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
//             {related.map((r) => (
//               <ServiceCard key={r.slug} service={r} learnMoreLabel="Learn More" />
//             ))}
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }






import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle2, ArrowLeft, Clock } from 'lucide-react';
import { SERVICES } from '@/data/services-data';
import ServiceCard from '@/components/services/ServiceCard';
import GlassCard from '@/components/ui/GlassCard';

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title} — Ommore`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const related = SERVICES.filter((s) => s.category === service.category && s.slug !== service.slug).slice(0, 2);

  return (
    <section className="mx-auto max-w-[1000px] px-20 py-24 max-md:px-5 max-md:py-16">
      <Link
        href="/services"
        className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" />
        All Services
      </Link>

      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="inline-block rounded bg-primary-muted px-2.5 py-1 text-xs font-medium uppercase tracking-[0.08em] text-primary">
          {service.category}
        </span>
        {service.comingSoon && (
          <span className="inline-flex items-center gap-1 rounded bg-text-muted/15 px-2.5 py-1 text-xs font-medium uppercase tracking-[0.08em] text-text-muted">
            <Clock className="h-3 w-3" />
            Coming Soon
          </span>
        )}
      </div>

      <h1 className="font-display text-4xl font-bold leading-[1.15] text-text-primary max-md:text-3xl">
        {service.title}
      </h1>

      <p className="mt-6 text-lg leading-relaxed text-text-secondary">{service.longDescription}</p>

      <GlassCard className="mt-10">
        <h2 className="mb-5 font-display text-lg font-semibold text-text-primary">What&apos;s Included</h2>
        <ul className="space-y-3">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm text-text-secondary">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {feature}
            </li>
          ))}
        </ul>
      </GlassCard>

      <div className="mt-10">
        <Link
          href="/contact"
          className="inline-block rounded-lg bg-gradient-to-br from-primary to-[#0077AA] px-8 py-3.5 font-display text-base font-semibold text-white shadow-glow-md transition-transform hover:-translate-y-px"
        >
          {service.comingSoon ? 'Get Notified When This Launches' : 'Get Started'}
        </Link>
      </div>

      {related.length > 0 && (
        <div className="mt-20">
          <h2 className="mb-6 font-display text-2xl font-bold text-text-primary">Related Services</h2>
          <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
            {related.map((r) => (
              <ServiceCard key={r.slug} service={r} learnMoreLabel="Learn More" />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}