import SectionHeading from '@/components/ui/SectionHeading';
import { REASONS } from '@/data/why-chose-us';

export default function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-[1280px] px-20 py-12 max-md:px-5 max-md:py-8">
      <SectionHeading
        eyebrow="Why Ommore"
        heading="Why Founders Choose Us"
      />

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {REASONS.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="flex gap-4 rounded-2xl border border-border-glass bg-glass p-6 shadow-glass backdrop-blur-glass backdrop-saturate-[180%]"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-muted text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-text-primary">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
