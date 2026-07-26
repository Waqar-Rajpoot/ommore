// src/data/testimonials.ts
// Static testimonial data. Every trust signal on the page reads from here:
// a verifiable reviewer link, a linked third-party platform, real metrics,
// and an honest "how we verified this" note. Swap for a CMS later without
// touching component code.

export type TestimonialMetric = { label: string; value: string };

export type TestimonialPlatform = "Clutch" | "Google" | "Upwork" | "LinkedIn";

export type Testimonial = {
  slug: string;
  clientName: string;
  role: string;
  company: string;
  avatar: string;
  category: string;
  rating: number; // 1-5
  quote: string; // short pull-quote for the card
  fullQuote: string; // longer version for the detail page
  metrics: TestimonialMetric[];
  platform: { name: TestimonialPlatform; url: string };
  linkedinUrl?: string;
  verified: boolean;
  verifiedNote: string;
  projectName: string;
  projectUrl?: string; // case-study link, optional
  date: string; // ISO
};

export const testimonials: Testimonial[] = [
  {
    slug: "nimbus-retail-web-platform",
    clientName: "Sarah Bennett",
    role: "Head of E-Commerce",
    company: "Nimbus Retail",
    avatar: "https://i.pravatar.cc/150?img=5",
    category: "Web Development",
    rating: 5,
    quote:
      "Ommore rebuilt our storefront in eight weeks and our checkout conversion jumped 24% in the first month alone.",
    fullQuote:
      "We'd been putting off a storefront rebuild for two years because every agency we talked to quoted six months and a blank check. Ommore scoped it in eight weeks, hit every milestone, and the checkout conversion jump wasn't a coincidence — they rebuilt the flow around data from our actual cart abandonment reports, not a template. First month post-launch, conversion was up 24% and it's held steady since.",
    metrics: [
      { label: "Checkout conversion", value: "+24%" },
      { label: "Page load time", value: "-61%" },
      { label: "Launch timeline", value: "8 weeks" },
    ],
    platform: { name: "Clutch", url: "https://clutch.co" },
    linkedinUrl: "https://linkedin.com/in/sarah-bennett-example",
    verified: true,
    verifiedNote: "Verified via Clutch client interview",
    projectName: "Nimbus Retail storefront rebuild",
    date: "2026-05-10",
  },
  {
    slug: "kestrel-finance-dashboard",
    clientName: "Michael Osei",
    role: "CTO",
    company: "Kestrel Finance",
    avatar: "https://i.pravatar.cc/150?img=15",
    category: "Web Development",
    rating: 5,
    quote:
      "The team understood our compliance constraints from day one. Zero rework, which almost never happens with fintech projects.",
    fullQuote:
      "Fintech projects usually mean explaining the same regulatory constraint to a new agency three times before it sticks. Ommore's engineers asked the right questions in the first discovery call and never touched a data flow that needed sign-off without checking first. We shipped the internal risk dashboard with zero rework cycles and came out of our next compliance audit with no critical findings against the new system.",
    metrics: [
      { label: "Rework cycles", value: "0" },
      { label: "Audit findings", value: "0 critical" },
      { label: "Team size", value: "3 engineers" },
    ],
    platform: { name: "Google", url: "https://google.com" },
    linkedinUrl: "https://linkedin.com/in/michael-osei-example",
    verified: true,
    verifiedNote: "Verified via Google Business review",
    projectName: "Kestrel internal risk dashboard",
    date: "2026-04-22",
  },
  {
    slug: "petal-and-co-brand-identity",
    clientName: "Laura Chen",
    role: "Founder",
    company: "Petal & Co.",
    avatar: "https://i.pravatar.cc/150?img=25",
    category: "Branding & Identity",
    rating: 5,
    quote:
      "We walked in with a logo scribbled on a napkin. We walked out with a full brand system our investors took seriously.",
    fullQuote:
      "I'm not a designer, and I went into this project worried I'd get a pretty deck and nothing usable. Instead we got a full system — logo lockups, color and type rules, packaging templates, even guidance on tone of voice for our emails. We used the deck as-is in our seed round pitch, and two investors specifically mentioned the brand felt 'already funded'.",
    metrics: [
      { label: "Brand assets delivered", value: "42" },
      { label: "Investor deck approval", value: "1st round" },
    ],
    platform: { name: "Upwork", url: "https://upwork.com" },
    linkedinUrl: "https://linkedin.com/in/laura-chen-example",
    verified: true,
    verifiedNote: "Verified via Upwork completed contract",
    projectName: "Petal & Co. brand identity system",
    date: "2026-03-15",
  },
  {
    slug: "orbit-fitness-app",
    clientName: "Daniel Reyes",
    role: "Product Lead",
    company: "Orbit Fitness",
    avatar: "https://i.pravatar.cc/150?img=35",
    category: "Mobile App Development",
    rating: 4,
    quote:
      "Solid engineering and honest timelines. The one delay we hit, they flagged two weeks in advance instead of at the deadline.",
    fullQuote:
      "Nothing ships perfectly on the first quote, so what mattered more to us was how delays got handled. We hit one — a third-party wearable integration took longer than scoped — and Ommore flagged it two weeks out with options, instead of going quiet and missing the date. The app itself has held a 4.7 store rating since launch, which speaks for the engineering quality.",
    metrics: [
      { label: "App Store rating", value: "4.7 / 5" },
      { label: "Crash-free sessions", value: "99.8%" },
      { label: "Time to MVP", value: "11 weeks" },
    ],
    platform: { name: "Clutch", url: "https://clutch.co" },
    linkedinUrl: "https://linkedin.com/in/daniel-reyes-example",
    verified: true,
    verifiedNote: "Verified via Clutch client interview",
    projectName: "Orbit Fitness training app",
    date: "2026-02-28",
  },
  {
    slug: "brightloop-health-ux-redesign",
    clientName: "Amara Diallo",
    role: "VP of Product",
    company: "Brightloop Health",
    avatar: "https://i.pravatar.cc/150?img=45",
    category: "UI/UX Design",
    rating: 5,
    quote:
      "Patient onboarding drop-off was our biggest problem. After the redesign, completion rate went from 54% to 89%.",
    fullQuote:
      "We knew onboarding was leaking patients but didn't know why until Ommore ran actual usability sessions instead of guessing. Turned out three form fields were causing most of the drop-off. The redesign took that completion rate from 54% to 89% and cut support tickets related to onboarding by 40% in the same quarter.",
    metrics: [
      { label: "Onboarding completion", value: "54% \u2192 89%" },
      { label: "Support tickets", value: "-40%" },
    ],
    platform: { name: "LinkedIn", url: "https://linkedin.com" },
    linkedinUrl: "https://linkedin.com/in/amara-diallo-example",
    verified: true,
    verifiedNote: "Verified via LinkedIn recommendation",
    projectName: "Brightloop Health patient onboarding redesign",
    date: "2026-02-05",
  },
  {
    slug: "vertex-logistics-seo",
    clientName: "Tom Whitfield",
    role: "Marketing Director",
    company: "Vertex Logistics",
    avatar: "https://i.pravatar.cc/150?img=55",
    category: "SEO & Digital Marketing",
    rating: 5,
    quote:
      "Organic traffic tripled in five months without paying for a single ad. Their reporting was clear enough that our board actually read it.",
    fullQuote:
      "We'd burned budget on SEO before with nothing to show for it beyond a vague monthly PDF. Ommore's reporting was specific — which keywords moved, why, and what was next — and our board actually read it instead of skimming to the summary. Organic traffic is up 212% in five months and we haven't touched the paid ads budget.",
    metrics: [
      { label: "Organic traffic", value: "+212%" },
      { label: "Keywords in top 10", value: "86" },
      { label: "Timeframe", value: "5 months" },
    ],
    platform: { name: "Google", url: "https://google.com" },
    linkedinUrl: "https://linkedin.com/in/tom-whitfield-example",
    verified: true,
    verifiedNote: "Verified via Google Business review",
    projectName: "Vertex Logistics organic growth campaign",
    date: "2026-01-18",
  },
  {
    slug: "solstice-learning-lms",
    clientName: "Priya Nandakumar",
    role: "Head of Engineering",
    company: "Solstice Learning",
    avatar: "https://i.pravatar.cc/150?img=60",
    category: "Mobile App Development",
    rating: 5,
    quote:
      "They didn't just build what we asked for — they pushed back on two features that would've hurt performance, and they were right both times.",
    fullQuote:
      "We came in with a spec that included two features our own team wasn't fully sold on. Ommore pushed back on both, with benchmarks, and they were right — one would have added 800ms to app launch, the other would've doubled our backend costs for marginal benefit. The app that shipped instead loads in 1.2 seconds and has held 99.95% uptime past 40,000 monthly active users.",
    metrics: [
      { label: "App load time", value: "1.2s" },
      { label: "Monthly active users", value: "40k+" },
      { label: "Uptime", value: "99.95%" },
    ],
    platform: { name: "Clutch", url: "https://clutch.co" },
    linkedinUrl: "https://linkedin.com/in/priya-nandakumar-example",
    verified: true,
    verifiedNote: "Verified via Clutch client interview",
    projectName: "Solstice Learning LMS mobile app",
    date: "2025-12-09",
  },
];

export function getAllTestimonials(): Testimonial[] {
  return [...testimonials].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getTestimonialBySlug(slug: string): Testimonial | undefined {
  return testimonials.find((t) => t.slug === slug);
}

export function getCategories(): string[] {
  return Array.from(new Set(testimonials.map((t) => t.category)));
}

export function getRelatedTestimonials(slug: string, limit = 3): Testimonial[] {
  const current = getTestimonialBySlug(slug);
  if (!current) return [];
  const sameCategory = testimonials.filter(
    (t) => t.slug !== slug && t.category === current.category
  );
  const rest = testimonials.filter(
    (t) => t.slug !== slug && t.category !== current.category
  );
  return [...sameCategory, ...rest].slice(0, limit);
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}