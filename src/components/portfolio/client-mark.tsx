// src/components/portfolio/client-mark.tsx
// Same convention as testimonials/company-mark.tsx: we don't fabricate client
// logos we don't have rights to display. An honest initials mark next to the
// real client name is more trustworthy than a placeholder that looks official
// but isn't. Recolored to the site's primary token instead of the
// testimonials page's hardcoded palette, to match the services page system.

function getInitials(name: string): string {
  const words = name.replace(/[&.]/g, '').trim().split(/\s+/);
  return words
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('');
}

export default function ClientMark({
  name,
  className = 'h-10 w-10 text-sm',
}: {
  name: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex flex-shrink-0 items-center justify-center rounded-xl bg-primary-muted font-display font-bold text-primary ${className}`}
      aria-hidden="true"
    >
      {getInitials(name)}
    </span>
  );
}
