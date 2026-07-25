'use client';

import { Building2, ShoppingCart, Megaphone, Landmark, FileText, Store, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import GlassCard from '@/components/ui/GlassCard';
import type { ServiceSummary } from '@/lib/services-data';

const ICONS = {
  Building2,
  ShoppingCart,
  Megaphone,
  Landmark,
  FileText,
  Store,
};

export default function ServiceCard({
  service,
  learnMoreLabel,
}: {
  service: ServiceSummary;
  learnMoreLabel: string;
}) {
  const Icon = ICONS[service.icon];

  return (
    <GlassCard className="relative flex min-h-[240px] flex-col overflow-hidden">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-muted">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <span className="mb-2 text-xs font-medium uppercase tracking-[0.08em] text-primary">
        {service.category}
      </span>
      <h3 className="mb-3 font-display text-lg font-semibold text-text-primary">{service.title}</h3>
      <p className="mb-6 text-sm leading-relaxed text-text-secondary">{service.description}</p>
      <Link
        href={`/services/${service.slug}`}
        className="mt-auto inline-flex items-center gap-1.5 font-display text-sm font-semibold text-primary"
      >
        {learnMoreLabel}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </GlassCard>
  );
}






// 'use client';

// import { useState, useMemo } from 'react';
// import { motion } from 'framer-motion';
// import ServiceCard from '@/components/services/ServiceCard';
// import { SERVICES, type ServiceCategory } from '@/lib/services-data';
// import { fadeUp, staggerContainer } from '@/lib/motion';

// const tabs: { key: ServiceCategory | 'All'; label: string }[] = [
//   { key: 'All', label: 'All' },
//   { key: 'Business Setup', label: 'Business Setup' },
//   { key: 'Marketplace Accounts', label: 'Marketplace Accounts' },
//   { key: 'Digital Services', label: 'Digital Services' },
// ];

// export default function ServicesGrid() {
//   const [active, setActive] = useState<ServiceCategory | 'All'>('All');

//   // Memoize visible items to avoid unnecessary recalculations
//   const visible = useMemo(() => {
//     return active === 'All' ? SERVICES : SERVICES.filter((s) => s.category === active);
//   }, [active]);

//   // Memoize stagger variants so functions aren't recreated on every frame
//   const staggerVariants = useMemo(() => staggerContainer(), []);

//   return (
//     <>
//       <div className="mt-10 flex flex-wrap justify-center gap-2">
//         {tabs.map((tab) => (
//           <button
//             key={tab.key}
//             type="button"
//             onClick={() => setActive(tab.key)}
//             className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
//               active === tab.key
//                 ? 'bg-primary-muted text-primary'
//                 : 'text-text-secondary hover:text-text-primary'
//             }`}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>

//       <motion.div
//         key={active}
//         variants={staggerVariants}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, margin: '-80px' }}
//         className="mt-12 grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1"
//       >
//         {visible.map((service) => (
//           <motion.div key={service.slug} variants={fadeUp}>
//             <ServiceCard service={service} learnMoreLabel="Learn More" />
//           </motion.div>
//         ))}
//       </motion.div>
//     </>
//   );
// }