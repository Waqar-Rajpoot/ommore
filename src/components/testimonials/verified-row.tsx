// src/components/testimonials/verified-row.tsx
import { Testimonial } from "@/data/testimonials";
import { CheckBadgeIcon, ExternalLinkIcon, LinkedInIcon } from "./icons";

export function VerifiedRow({
  testimonial,
  size = "sm",
}: {
  testimonial: Testimonial;
  size?: "sm" | "md";
}) {
  const text = size === "md" ? "text-sm" : "text-xs";
  const pad = size === "md" ? "px-3.5 py-2" : "px-2.5 py-1";

  return (
    <div className={`flex flex-wrap items-center gap-2 ${text}`}>
      {testimonial.verified && (
        <span
          title={testimonial.verifiedNote}
          className={`inline-flex items-center gap-1.5 rounded-full border border-success/30 bg-success/10 ${pad} font-medium text-success`}
        >
          <CheckBadgeIcon className="h-3.5 w-3.5" />
          Verified
        </span>
      )}

      <a
        href={testimonial.platform.url}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className={`inline-flex items-center gap-1.5 rounded-full border border-border-glass bg-glass ${pad} font-medium text-text-secondary transition-colors hover:border-border-glow hover:text-text-primary`}
      >
        {testimonial.platform.name}
        <ExternalLinkIcon className="h-3.5 w-3.5" />
      </a>

      {testimonial.linkedinUrl && (
        <a
          href={testimonial.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className={`inline-flex items-center gap-1.5 rounded-full border border-border-glass bg-glass ${pad} font-medium text-text-secondary transition-colors hover:border-border-glow hover:text-text-primary`}
        >
          <LinkedInIcon className="h-3.5 w-3.5" />
          LinkedIn
        </a>
      )}
    </div>
  );
}
