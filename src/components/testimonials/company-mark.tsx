// src/components/testimonials/company-mark.tsx
// We don't fabricate client logos we don't actually have rights to display —
// a plain, honest initials mark next to the real company name is more
// trustworthy than a placeholder "logo" that looks official but isn't.

const PALETTE = ["#7C6FF0", "#FF9F5A", "#4FD1C5", "#F76E9C", "#6EA8FE"];

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function getInitials(company: string): string {
  const words = company.replace(/[&.]/g, "").trim().split(/\s+/);
  return words
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

export function CompanyMark({ company, className }: { company: string; className?: string }) {
  const color = PALETTE[hashString(company) % PALETTE.length];
  return (
    <span
      className={`inline-flex items-center justify-center rounded-lg text-xs font-bold text-white ${className ?? "h-6 w-6"}`}
      style={{ backgroundColor: color }}
      aria-hidden="true"
    >
      {getInitials(company)}
    </span>
  );
}
