// import type { Metadata } from 'next';
// import SectionHeading from '@/components/ui/SectionHeading';
// import ProjectFilterGrid from '@/components/portfolio/project-filter-grid';
// import { getAllProjects, getProjectCategories } from '@/data/portfolio-data';

// export const metadata: Metadata = {
//   title: 'Portfolio — Ommore',
//   description:
//     'Case studies from web development, branding, business services, technology, and digital marketing projects delivered by Ommore.',
// };

// export default function PortfolioPage() {
//   const projects = getAllProjects();
//   const categories = getProjectCategories();

//   return (
//     <section className="mx-auto max-w-[1280px] px-20 py-24 max-md:px-5 max-md:py-16">
//       <SectionHeading
//         eyebrow="Our Portfolio"
//         heading="Real Projects, Real Results, Verified by the Clients Behind Them"
//       />
//       <p className="mx-auto mt-4 max-w-2xl text-center text-text-secondary">
//         Every case study below links back to the client, the metric, and — where the project
//         is public — the live site itself. Nothing here is a mockup.
//       </p>

//       <div className="mx-auto mt-10 flex max-w-xl flex-wrap items-center justify-center gap-x-10 gap-y-4 rounded-2xl border border-border-glass bg-glass px-8 py-6 shadow-glass backdrop-blur-glass backdrop-saturate-[180%]">
//         <div className="flex flex-col items-center">
//           <span className="font-display text-xl font-bold text-text-primary">
//             {projects.length}
//           </span>
//           <span className="text-xs text-text-muted">projects delivered</span>
//         </div>
//         <div className="h-8 w-px bg-border-glass" />
//         <div className="flex flex-col items-center">
//           <span className="font-display text-xl font-bold text-primary">{categories.length}</span>
//           <span className="text-xs text-text-muted">service categories</span>
//         </div>
//         <div className="h-8 w-px bg-border-glass" />
//         <div className="flex flex-col items-center">
//           <span className="font-display text-xl font-bold text-text-primary">
//             {projects.filter((p) => p.liveUrl).length}
//           </span>
//           <span className="text-xs text-text-muted">live client sites</span>
//         </div>
//       </div>

//       <ProjectFilterGrid categories={categories} />
//     </section>
//   );
// }








import type { Metadata } from 'next';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectFilterGrid from '@/components/portfolio/project-filter-grid';
import { getAllProjects, getProjectCategories } from '@/data/portfolio-data';

export const metadata: Metadata = {
  title: 'Portfolio — Ommore',
  description:
    'Case studies from business setup, technology, and marketing projects delivered by Ommore — company formation, web development, SEO, branding, and more.',
};

export default function PortfolioPage() {
  const projects = getAllProjects();
  const categories = getProjectCategories();

  return (
    <section className="mx-auto max-w-[1280px] px-20 py-24 max-md:px-5 max-md:py-16">
      <SectionHeading
        eyebrow="Our Portfolio"
        heading="Real Projects, Real Results, Verified by the Clients Behind Them"
      />
      <p className="mx-auto mt-4 max-w-2xl text-center text-text-secondary">
        Every case study below links back to the client, the metric, and — where the project
        is public — the live site itself. Nothing here is a mockup.
      </p>

      <div className="mx-auto mt-10 flex max-w-xl flex-wrap items-center justify-center gap-x-10 gap-y-4 rounded-2xl border border-border-glass bg-glass px-8 py-6 shadow-glass backdrop-blur-glass backdrop-saturate-[180%]">
        <div className="flex flex-col items-center">
          <span className="font-display text-xl font-bold text-text-primary">
            {projects.length}
          </span>
          <span className="text-xs text-text-muted">projects delivered</span>
        </div>
        <div className="h-8 w-px bg-border-glass" />
        <div className="flex flex-col items-center">
          <span className="font-display text-xl font-bold text-primary">{categories.length}</span>
          <span className="text-xs text-text-muted">service categories</span>
        </div>
        <div className="h-8 w-px bg-border-glass" />
        <div className="flex flex-col items-center">
          <span className="font-display text-xl font-bold text-text-primary">
            {projects.filter((p) => p.liveUrl).length}
          </span>
          <span className="text-xs text-text-muted">live client sites</span>
        </div>
      </div>

      <ProjectFilterGrid categories={categories} />
    </section>
  );
}