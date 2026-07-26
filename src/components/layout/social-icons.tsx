// src/components/footer/social-icons.tsx
import type { SVGProps } from "react";

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.25c0-.87.24-1.46 1.5-1.46H16.5V4.14C16.24 4.1 15.36 4 14.33 4c-2.16 0-3.63 1.32-3.63 3.75V10.5H8.2v3h2.5V21h2.8Z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 8.5H4.06V20h2.88V8.5ZM5.5 4a1.68 1.68 0 1 0 0 3.36A1.68 1.68 0 0 0 5.5 4ZM20 13.2c0-3.14-1.68-4.6-3.92-4.6-1.81 0-2.62 1-3.07 1.7V8.5H10.1c.04.85 0 11.5 0 11.5h2.9v-6.42c0-.34.03-.68.13-.93.28-.68.9-1.4 1.96-1.4 1.38 0 1.93 1.05 1.93 2.6V20H20v-6.8Z" />
    </svg>
  );
}

// "X" (formerly Twitter) glyph
export function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.9 10.62 20.9 3h-1.66l-6.07 6.62L8.3 3H3.5l7.34 10.06L3.5 21h1.66l6.42-7 5.13 7h4.8l-7.6-10.38Zm-2.27 2.48-.74-1.01L5.1 4.2h2.55l4.77 6.5.75 1.02 6.2 8.45h-2.55l-5.19-7.07Z" />
    </svg>
  );
}
