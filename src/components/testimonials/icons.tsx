// src/components/testimonials/icons.tsx
// Dependency-free inline icons, kept local to this feature.

type IconProps = { className?: string };

export function StarIcon({ className, filled = true }: IconProps & { filled?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 3.5l2.6 5.4 5.9.8-4.3 4.2 1 5.9L12 17l-5.2 2.8 1-5.9-4.3-4.2 5.9-.8L12 3.5Z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckBadgeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 2.5l2.2 1.3 2.5-.3 1.1 2.3 2.3 1.1-.3 2.5 1.3 2.2-1.3 2.2.3 2.5-2.3 1.1-1.1 2.3-2.5-.3L12 21.5l-2.2-1.3-2.5.3-1.1-2.3-2.3-1.1.3-2.5-1.3-2.2 1.3-2.2-.3-2.5 2.3-1.1 1.1-2.3 2.5.3L12 2.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M8.5 12.2l2.4 2.4 4.6-4.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ExternalLinkIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M9 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3M14 4h6v6M20 4l-9 9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7.5 10v6.5M7.5 7.6v.01M11.5 16.5V13c0-1.4.9-2.3 2-2.3s1.8.9 1.8 2.3v3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function QuoteMarkIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M0 24V14.9C0 6.6 4.9 1.3 12.6 0l1.7 3.6c-4.6 1.4-7 4-7 7.9h6.3V24H0Zm18 0V14.9c0-8.3 4.9-13.6 12.6-14.9L32 3.6c-4.6 1.4-7 4-7 7.9h6.3V24H18Z" />
    </svg>
  );
}

export function ArrowLeftIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
