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
          className={`inline-flex items-center gap-1.5 rounded-full border border-[#4FD1C5]/30 bg-[#4FD1C5]/10 ${pad} font-medium text-[#4FD1C5]`}
        >
          <CheckBadgeIcon className="h-3.5 w-3.5" />
          Verified
        </span>
      )}

      <a
        href={testimonial.platform.url}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className={`inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 ${pad} font-medium text-[#C4C9D4] transition-colors hover:border-white/25 hover:text-white`}
      >
        {testimonial.platform.name}
        <ExternalLinkIcon className="h-3.5 w-3.5" />
      </a>

      {testimonial.linkedinUrl && (
        <a
          href={testimonial.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className={`inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 ${pad} font-medium text-[#C4C9D4] transition-colors hover:border-white/25 hover:text-white`}
        >
          <LinkedInIcon className="h-3.5 w-3.5" />
          LinkedIn
        </a>
      )}
    </div>
  );
}
