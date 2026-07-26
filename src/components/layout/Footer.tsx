import Link from "next/link";
import { MapPin, Mail, Phone, Clock3, ArrowUpRight } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "./social-icons";

const PAGES = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const SOCIALS = [
  { label: "Facebook", href: "https://facebook.com/ommore", icon: FacebookIcon },
  { label: "Instagram", href: "https://instagram.com/ommore", icon: InstagramIcon },
  { label: "LinkedIn", href: "https://linkedin.com/company/ommore", icon: LinkedinIcon },
  { label: "Twitter", href: "https://twitter.com/ommore", icon: TwitterIcon },
];

const ADDRESS = "M3GR+5HR, Farid Town, Sahiwal, Pakistan";
const MAPS_SEARCH_URL =
  "https://www.google.com/maps/search/?api=1&query=M3GR%2B5HR+Farid+Town+Sahiwal+Pakistan";
const MAPS_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  ADDRESS
)}&output=embed`;

export default function Footer() {
  return (
    <footer className="border-t border-border-glass">
      <div className="mx-auto max-w-[1280px] px-20 py-20 max-md:px-5 max-md:py-14">

        {/* Main columns */}
        <div className="mt-16 flex flex-col gap-10 sm:flex-row sm:flex-wrap sm:justify-between lg:flex-nowrap lg:gap-8">
          {/* Column 1 — logo + description */}
          <div className="max-w-xs">
            <Link href="/" className="inline-flex items-center gap-2">
              {/* <Image
                src="/logo.svg"
                alt="Ommore"
                width={36}
                height={36}
                className="h-9 w-9"
              /> */}
              <span className="font-display text-lg font-bold text-text-primary">
                Ommore
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              Ommore is a software house helping founders and growing teams design,
              build, and ship products that actually move the business forward. From
              first prototype to production.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border-glass bg-glass text-text-secondary transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          {/* Column 2 — pages */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-[0.14em] text-text-muted">
              Company
            </h4>
            <ul className="mt-5 space-y-3">
              {PAGES.map((page) => (
                <li key={page.label}>
                  <Link
                    href={page.href}
                    className="text-sm text-text-secondary transition-colors hover:text-primary"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* Column 3 — contact */}
          <div className="max-w-[220px]">
            <h4 className="text-sm font-medium uppercase tracking-[0.14em] text-text-muted">
              Contact us
            </h4>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href={MAPS_SEARCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-sm text-text-secondary transition-colors hover:text-primary"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-text-muted" />
                  <span>{ADDRESS}</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@ommore.com"
                  className="flex items-center gap-2.5 text-sm text-text-secondary transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4 shrink-0 text-text-muted" />
                  info@ommore.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+923000767291"
                  className="flex items-center gap-2.5 text-sm text-text-secondary transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4 shrink-0 text-text-muted" />
                  +92 300 0767291
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-text-secondary">
                <Clock3 className="h-4 w-4 shrink-0 text-text-muted" />
                Mon – Fri, 9am – 6pm PKT
              </li>
            </ul>
          </div>

          {/* Column 4 — visit us / map */}
          <div className="w-full sm:w-[220px]">
            <h4 className="text-sm font-medium uppercase tracking-[0.14em] text-text-muted">
              Visit us
            </h4>
            <div className="mt-5 overflow-hidden rounded-2xl border border-border-glass shadow-glass">
              <iframe
                src={MAPS_EMBED_SRC}
                title="Ommore office location"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-40 w-full grayscale-[20%]"
              />
            </div>
            <a
              href={MAPS_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-opacity hover:opacity-80"
            >
              Get directions
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border-glass pt-8 sm:flex-row">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} Ommore. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-text-muted transition-colors hover:text-text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-text-muted transition-colors hover:text-text-primary"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}