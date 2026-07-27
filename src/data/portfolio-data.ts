export type ProjectCategory = 'Business' | 'Technology' | 'Marketing';

export type ProjectMetric = { label: string; value: string };

export type ProjectTestimonial = {
  quote: string;
  authorName: string;
  authorRole: string;
};

export type Project = {
  slug: string;
  clientName: string;
  category: ProjectCategory;
  relatedService: string;
  title: string;
  tagline: string;
  summary: string; // short card description
  year: string;
  liveUrl?: string;
  servicesProvided: string[];
  metrics: ProjectMetric[];
  overview: string;
  challenge: string;
  solution: string;
  results: string;
  testimonial?: ProjectTestimonial;
  featured?: boolean;
};

export const PLACEHOLDER_PROJECTS: Project[] = [
  {
    slug: 'northbridge-storefront-rebuild',
    clientName: 'Northbridge Goods',
    category: 'Technology',
    relatedService: 'web-development',
    title: 'A storefront rebuild that cut checkout drop-off in half',
    tagline: 'E-commerce replatform for a US-based DTC retailer',
    summary:
      'Rebuilt a slow, template-based storefront into a fast custom build, restructuring checkout around actual cart-abandonment data.',
    year: '2026',
    liveUrl: 'https://example-northbridge.com',
    servicesProvided: ['Web Development', 'UX Audit', 'Performance Optimization'],
    metrics: [
      { label: 'Checkout conversion', value: '+24%' },
      { label: 'Page load time', value: '-58%' },
      { label: 'Launch timeline', value: '8 weeks' },
    ],
    overview:
      'Northbridge Goods came to us with a storefront built on a generic theme that hadn\u2019t been touched in three years. Load times were slow, checkout was a four-step flow with no mobile optimization, and nobody on their team could explain why cart abandonment sat above 70%.',
    challenge:
      'The existing checkout flow buried the payment step behind three unnecessary screens, and image assets weren\u2019t optimized, pushing mobile load time past six seconds. Every fix the client had tried was cosmetic \u2014 a new theme, a new plugin \u2014 without addressing the underlying structure.',
    solution:
      'We rebuilt the storefront from the data layer up: a single-page checkout, image pipeline with responsive delivery, and a component structure the client\u2019s own team could maintain going forward. Every decision was checked against the client\u2019s actual cart-abandonment reports rather than best-practice assumptions.',
    results:
      'Checkout conversion rose 24% in the first month post-launch and has held steady since. Mobile load time dropped from 6.1s to 2.6s. The client\u2019s internal team has since shipped two feature updates on the new codebase without our involvement.',
    testimonial: {
      quote:
        'They rebuilt the flow around data from our actual cart abandonment reports, not a template.',
      authorName: 'Client contact name',
      authorRole: 'Head of E-Commerce',
    },
    featured: true,
  },
  {
    slug: 'petal-and-co-brand-system',
    clientName: 'Petal & Co.',
    category: 'Marketing',
    relatedService: 'branding',
    title: 'A full brand system built for a seed-round pitch',
    tagline: 'Identity design for an early-stage consumer goods founder',
    summary:
      'Took a founder from a napkin sketch to a complete brand system \u2014 logo lockups, packaging, and tone-of-voice guidelines used in a successful seed round.',
    year: '2026',
    servicesProvided: ['Brand Strategy', 'Logo Design', 'Packaging Design'],
    metrics: [
      { label: 'Brand assets delivered', value: '42' },
      { label: 'Investor deck approval', value: '1st round' },
    ],
    overview:
      'Petal & Co. approached us pre-seed with a hand-drawn logo and no formal brand direction. The founder needed a system credible enough to survive investor scrutiny, not just a nicer logo.',
    challenge:
      'Early-stage brand work often produces a pretty deck that falls apart the moment it meets a real packaging vendor or a second designer. The client needed something usable, not just presentable.',
    solution:
      'We delivered a full system: primary and secondary logo lockups, a defined color and type system, packaging templates ready for print, and written tone-of-voice guidance for customer-facing copy.',
    results:
      'The founder used the brand deck as-is in their seed round pitch. Two investors specifically referenced the brand\u2019s polish in follow-up conversations, and the round closed within the quarter.',
    testimonial: {
      quote:
        'We walked in with a logo scribbled on a napkin. We walked out with a full brand system our investors took seriously.',
      authorName: 'Client contact name',
      authorRole: 'Founder',
    },
    featured: true,
  },
  {
    slug: 'kestrel-finance-risk-dashboard',
    clientName: 'Kestrel Finance',
    category: 'Technology',
    relatedService: 'programming',
    title: 'An internal risk dashboard with zero compliance rework',
    tagline: 'Fintech engineering under real regulatory constraints',
    summary:
      'Delivered a compliance-sensitive internal dashboard with zero rework cycles and no critical findings in the following audit.',
    year: '2025',
    servicesProvided: ['Custom Software Development', 'Compliance Review'],
    metrics: [
      { label: 'Rework cycles', value: '0' },
      { label: 'Audit findings', value: '0 critical' },
      { label: 'Team size', value: '3 engineers' },
    ],
    overview:
      'Kestrel Finance needed an internal risk-monitoring dashboard, but every prior vendor had required multiple rounds of rework after failing to account for their compliance obligations up front.',
    challenge:
      'Fintech data flows carry regulatory constraints that aren\u2019t always documented anywhere a new team can find them. Getting this wrong late in a build means expensive rework or a failed audit.',
    solution:
      'Our engineers front-loaded compliance discovery before writing any code, flagging every data flow that needed internal sign-off and confirming handling with the client\u2019s compliance lead before implementation.',
    results:
      'The dashboard shipped with zero rework cycles. Kestrel\u2019s next scheduled compliance audit returned no critical findings against the new system.',
    testimonial: {
      quote:
        'The team understood our compliance constraints from day one. Zero rework, which almost never happens with fintech projects.',
      authorName: 'Client contact name',
      authorRole: 'CTO',
    },
    featured: true,
  },
  {
    slug: 'vertex-logistics-organic-growth',
    clientName: 'Vertex Logistics',
    category: 'Marketing',
    relatedService: 'seo',
    title: 'Tripling organic traffic without touching the ad budget',
    tagline: 'SEO campaign for a B2B logistics provider',
    summary:
      'Grew organic search traffic 212% in five months through technical SEO and content restructuring, with reporting specific enough for board review.',
    year: '2026',
    servicesProvided: ['SEO', 'Content Strategy', 'Technical Audit'],
    metrics: [
      { label: 'Organic traffic', value: '+212%' },
      { label: 'Keywords in top 10', value: '86' },
      { label: 'Timeframe', value: '5 months' },
    ],
    overview:
      'Vertex Logistics had run SEO campaigns before with little to show beyond a vague monthly report. They needed both real growth and reporting their board would actually read.',
    challenge:
      'The site\u2019s existing content targeted broad, high-competition terms with no realistic path to ranking, while technical issues \u2014 slow indexing, duplicate content \u2014 went unaddressed.',
    solution:
      'We ran a technical audit first, fixed indexing and duplication issues, then rebuilt the content strategy around specific, winnable long-tail terms tied to actual buyer intent.',
    results:
      'Organic traffic grew 212% over five months with 86 keywords reaching page-one rankings \u2014 without any change to the paid advertising budget.',
    testimonial: {
      quote:
        'Their reporting was clear enough that our board actually read it.',
      authorName: 'Client contact name',
      authorRole: 'Marketing Director',
    },
    featured: false,
  },
  {
    slug: 'summit-ventures-us-llc-formation',
    clientName: 'Summit Ventures',
    category: 'Business',
    relatedService: 'us-llc',
    title: 'US LLC formation and banking, handled remotely end to end',
    tagline: 'Company registration for a non-resident founder',
    summary:
      'Registered a Delaware LLC, secured EIN and a US business bank account, and filed first-year compliance for a founder with no US presence.',
    year: '2026',
    servicesProvided: ['Company Registration', 'Bank Account Setup', 'Tax Filing'],
    metrics: [
      { label: 'Time to incorporation', value: '9 days' },
      { label: 'Bank account approval', value: '3 weeks' },
    ],
    overview:
      'The founder needed a US LLC to contract with US clients but had no US address, credit history, or prior experience with American business formation.',
    challenge:
      'Non-resident founders routinely get stuck at the banking stage \u2014 most banks require an in-person visit or a US-based signer that doesn\u2019t exist yet.',
    solution:
      'We handled Delaware incorporation, EIN registration, and matched the client with a remote-friendly banking partner suited to non-resident founders, then filed their first annual report ahead of deadline.',
    results:
      'The client had a fully operational US LLC with an active bank account within three weeks of engagement, and has since renewed compliance filings for a second year without issue.',
    testimonial: {
      quote:
        'I never had to fly anywhere or explain my situation twice.',
      authorName: 'Client contact name',
      authorRole: 'Founder',
    },
    featured: false,
  },
];

export function getAllProjects(): Project[] {
  return [...PLACEHOLDER_PROJECTS].sort((a, b) => Number(b.year) - Number(a.year));
}

export function getProjectBySlug(slug: string): Project | undefined {
  return PLACEHOLDER_PROJECTS.find((p) => p.slug === slug);
}

export function getProjectCategories(): ProjectCategory[] {
  return Array.from(new Set(PLACEHOLDER_PROJECTS.map((p) => p.category)));
}

export function getFeaturedProjects(): Project[] {
  return PLACEHOLDER_PROJECTS.filter((p) => p.featured);
}

export function getProjectsByService(serviceSlug: string): Project[] {
  return PLACEHOLDER_PROJECTS.filter((p) => p.relatedService === serviceSlug);
}

export function getRelatedProjects(slug: string, limit = 3): Project[] {
  const current = getProjectBySlug(slug);
  if (!current) return [];
  const sameService = PLACEHOLDER_PROJECTS.filter(
    (p) => p.slug !== slug && p.relatedService === current.relatedService
  );
  const sameCategory = PLACEHOLDER_PROJECTS.filter(
    (p) => p.slug !== slug && p.relatedService !== current.relatedService && p.category === current.category
  );
  const rest = PLACEHOLDER_PROJECTS.filter(
    (p) => p.slug !== slug && p.category !== current.category
  );
  return [...sameService, ...sameCategory, ...rest].slice(0, limit);
}