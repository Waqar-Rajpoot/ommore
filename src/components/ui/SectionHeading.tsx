export default function SectionHeading({
  eyebrow,
  heading,
  align = 'center',
}: {
  eyebrow: string;
  heading: string;
  align?: 'center' | 'left';
}) {
  return (
    <div className={align === 'center' ? 'text-center' : 'text-left rtl:text-right'}>
      <span className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.08em] text-primary">
        <span className="h-1 w-4 rounded-sm bg-primary" />
        {eyebrow}
        <span className="h-1 w-4 rounded-sm bg-primary" />
      </span>
      <h2 className="font-display text-4xl font-bold leading-[1.15] text-text-primary max-md:text-2xl">
        {heading}
      </h2>
    </div>
  );
}
