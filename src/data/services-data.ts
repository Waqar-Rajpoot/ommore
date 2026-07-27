export type ServiceCategory = 'Business' | 'Technology' | 'Marketing';

export interface ServiceSummary {
  slug: string;
  category: ServiceCategory;
  icon:
    | 'Building2'
    | 'Briefcase'
    | 'FileText'
    | 'Landmark'
    | 'Code2'
    | 'Layout'
    | 'ShoppingBag'
    | 'Code'
    | 'Cloud'
    | 'Search'
    | 'Target'
    | 'Image'
    | 'PlaySquare'
    | 'Palette';
  title: string;
  featured: boolean;
  description: string;
  longDescription: string;
  features: string[];
  comingSoon?: boolean;
}

export const SERVICES: ServiceSummary[] = [
  // ── Business ──────────────────────────────────────────────
  {
    slug: 'uk-company',
    category: 'Business',
    icon: 'Building2',
    title: 'UK Company',
    featured: true,
    description: 'UK LTD registration and ongoing compliance for non-resident founders.',
    longDescription:
      'We register your UK Limited Company from the ground up — company name, registered office, share structure, and Companies House filing — then keep it compliant year over year.',
    features: [
      'UK LTD registration with Companies House',
      'Registered office and director service',
      'Share structure and articles setup',
      'Annual confirmation statement filing',
    ],
  },
  {
    slug: 'us-llc',
    category: 'Business',
    icon: 'Briefcase',
    title: 'US LLC',
    featured: false,
    description: 'US LLC formation (Delaware, Wyoming, and other states) for non-residents.',
    longDescription:
      'We handle end-to-end LLC formation for entrepreneurs based outside the US — choosing the right state and entity structure, filing with the state registry, and getting your EIN sorted.',
    features: [
      'State selection (Delaware, Wyoming, and others)',
      'Articles of organization filing',
      'Registered agent setup',
      'EIN application support',
    ],
  },
  {
    slug: 'tax',
    category: 'Business',
    icon: 'FileText',
    title: 'Tax',
    featured: false,
    description: 'IRS business tax filing and annual report compliance, handled for you.',
    longDescription:
      'Keep your company in good standing with recurring tax and compliance filings, so a missed deadline doesn\u2019t put your business at risk.',
    features: [
      'Annual IRS business tax filing',
      'State annual report filing',
      'Compliance deadline tracking',
      'Guidance on filing requirements by entity type',
    ],
  },
  {
    slug: 'banking',
    category: 'Business',
    icon: 'Landmark',
    title: 'Banking',
    featured: false,
    description: 'Wise, Stripe, Payoneer, and physical US bank account setup.',
    longDescription:
      'Get your business banking and payment processing set up so you can collect from customers and pay suppliers without friction.',
    features: [
      'Wise and Payoneer business account setup',
      'Stripe payment processing setup',
      'Physical US bank account guidance',
      'Documentation support for verification',
    ],
  },

  // ── Technology ────────────────────────────────────────────
  {
    slug: 'web-development',
    category: 'Technology',
    icon: 'Code2',
    title: 'Web Development',
    featured: true,
    description: 'Custom websites and web apps built for speed, SEO, and conversions.',
    longDescription:
      'From marketing sites to full web applications, we design and build fast, maintainable products tailored to how your business actually operates.',
    features: [
      'Custom website and web app builds',
      'Performance and SEO-first architecture',
      'Responsive, accessible UI',
      'Ongoing maintenance and support',
    ],
  },
  {
    slug: 'wordpress',
    category: 'Technology',
    icon: 'Layout',
    title: 'WordPress',
    featured: true,
    description: 'WordPress site builds, theme customization, and plugin setup.',
    longDescription:
      'We build and customize WordPress sites that are easy for your team to manage, without sacrificing design quality or page speed.',
    features: [
      'Custom theme setup and customization',
      'Plugin selection and configuration',
      'Page speed and Core Web Vitals optimization',
      'Content migration',
    ],
  },
  {
    slug: 'shopify',
    category: 'Technology',
    icon: 'ShoppingBag',
    title: 'Shopify',
    featured: false,
    description: 'Shopify store setup, theme customization, and app integrations.',
    longDescription:
      'We set up and customize Shopify stores that are ready to sell from day one — theme, product catalog, checkout, and the apps that support your workflow.',
    features: [
      'Store setup and theme customization',
      'Product catalog and collection structure',
      'Payment and shipping configuration',
      'App integrations (inventory, reviews, upsells)',
    ],
  },
  {
    slug: 'programming',
    category: 'Technology',
    icon: 'Code',
    title: 'Programming',
    featured: false,
    description: 'Custom software, automation scripts, and internal tools.',
    longDescription:
      'When off-the-shelf tools aren\u2019t enough, we build custom software — internal tools, automations, and integrations — to fit your exact workflow.',
    features: [
      'Custom internal tools and dashboards',
      'Workflow automation scripts',
      'Third-party API integrations',
      'Bug fixes and legacy code support',
    ],
  },
  {
    slug: 'saas',
    category: 'Technology',
    icon: 'Cloud',
    title: 'SaaS',
    featured: false,
    description: 'End-to-end SaaS product design and development.',
    longDescription:
      'From idea to MVP to scale, we help founders design, build, and ship SaaS products — architecture, UI, billing, and everything in between.',
    features: [
      'Product architecture and MVP scoping',
      'Full-stack SaaS development',
      'Billing and subscription setup',
      'Post-launch iteration support',
    ],
    comingSoon: true,
  },

  // ── Marketing ─────────────────────────────────────────────
  {
    slug: 'seo',
    category: 'Marketing',
    icon: 'Search',
    title: 'SEO',
    featured: false,
    description: 'Technical, on-page, and content SEO to grow organic traffic.',
    longDescription:
      'We audit, fix, and build on your site\u2019s SEO foundation — technical health, on-page structure, and content — so you rank for the searches that actually drive customers.',
    features: [
      'Technical SEO audits and fixes',
      'On-page optimization',
      'Keyword and content strategy',
      'Ongoing rank tracking and reporting',
    ],
  },
  {
    slug: 'google-ads',
    category: 'Marketing',
    icon: 'Target',
    title: 'Google Ads',
    featured: true,
    description: 'Search, Shopping, and Display campaign setup and management.',
    longDescription:
      'We build and manage Google Ads campaigns around measurable goals — cost per acquisition, ROAS, and lead quality — not just clicks.',
    features: [
      'Campaign strategy and setup',
      'Search, Shopping, and Display ads',
      'Conversion tracking configuration',
      'Ongoing bid and budget optimization',
    ],
  },
  {
    slug: 'pinterest',
    category: 'Marketing',
    icon: 'Image',
    title: 'Pinterest',
    featured: false,
    description: 'Pinterest marketing and ad campaigns for product-led brands.',
    longDescription:
      'Pinterest drives long-tail discovery traffic that other platforms miss. We build pin strategy, boards, and paid campaigns suited to your catalog.',
    features: [
      'Profile and board setup',
      'Organic pin strategy and scheduling',
      'Pinterest ad campaign management',
      'Performance reporting',
    ],
  },
  {
    slug: 'youtube',
    category: 'Marketing',
    icon: 'PlaySquare',
    title: 'YouTube',
    featured: false,
    description: 'YouTube channel strategy, video ads, and growth management.',
    longDescription:
      'From channel setup to ad campaigns, we help brands use YouTube as a growth and retargeting channel, not just a video host.',
    features: [
      'Channel setup and optimization',
      'Video ad campaign management',
      'Thumbnail and title strategy',
      'Audience retargeting setup',
    ],
  },
  {
    slug: 'branding',
    category: 'Marketing',
    icon: 'Palette',
    title: 'Branding',
    featured: true,
    description: 'Logo, visual identity, and brand guidelines that scale.',
    longDescription:
      'We build a visual identity — logo, color, typography, and guidelines — that holds up across your website, packaging, and ads as you grow.',
    features: [
      'Logo and visual identity design',
      'Brand guideline documentation',
      'Marketing and packaging design assets',
      'Consistency support across channels',
    ],
  },
];