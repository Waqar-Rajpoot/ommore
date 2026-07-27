import type { ServiceCategory } from "./services-data";

export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: string; alt: string; caption?: string };

export type BlogAuthor = {
  name: string;
  role: string;
  avatar: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: ServiceCategory;
  relatedService: string;
  tags: string[];
  coverImage: string;
  date: string; // ISO date
  readTime: string;
  featured?: boolean;
  author: BlogAuthor;
  content: BlogBlock[];
};

const authors = {
  waqar: {
    name: "Waqar Rajpoot",
    role: "Founder & Lead Engineer",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  ayesha: {
    name: "Ayesha Khan",
    role: "Product Designer",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  daniyal: {
    name: "Daniyal Ahmed",
    role: "Frontend Engineer",
    avatar: "https://i.pravatar.cc/150?img=51",
  },
  hina: {
    name: "Hina Malik",
    role: "Marketing Lead",
    avatar: "https://i.pravatar.cc/150?img=45",
  },
} satisfies Record<string, BlogAuthor>;

export const blogPosts: BlogPost[] = [
  // ── Business ────────────────────────────────────────────────
  {
    slug: "uk-company-registration-guide",
    title: "UK LTD Registration for Non-Residents: What Actually Trips People Up",
    excerpt:
      "Registering a UK LTD from abroad is simpler than most guides make it sound — until you hit the registered-office and director-verification steps. Here's what to get right the first time.",
    category: "Business",
    relatedService: "uk-company",
    tags: ["UK Company", "Company Formation", "Compliance"],
    coverImage: "https://picsum.photos/seed/uk-company-registration-guide/1600/900",
    date: "2026-06-20",
    readTime: "6 min read",
    featured: false,
    author: authors.waqar,
    content: [
      {
        type: "paragraph",
        text: "Most non-resident founders assume UK company registration will be the hard part. In practice, Companies House filing itself is fast — it's the decisions around registered office and share structure made before filing that cause the most rework later.",
      },
      { type: "heading", text: "Where founders get stuck" },
      {
        type: "list",
        items: [
          "Using a home address as the registered office, then needing to change it later once it becomes public record.",
          "Choosing a share structure without thinking through future investors or co-founders.",
          "Missing the first confirmation statement deadline because nobody set a reminder.",
        ],
      },
      {
        type: "paragraph",
        text: "None of this is complicated once it's flagged early. It only becomes a problem when it's discovered after the fact.",
      },
    ],
  },
  {
    slug: "us-llc-non-resident-founders",
    title: "US LLC Formation for Non-Residents: Delaware vs. Wyoming, and What Comes After",
    excerpt:
      "Picking a state is the easy 10% of forming a US LLC as a non-resident. The EIN and banking steps are where most DIY attempts stall for months.",
    category: "Business",
    relatedService: "us-llc",
    tags: ["US LLC", "Company Formation", "Non-Resident"],
    coverImage: "https://picsum.photos/seed/us-llc-non-resident-founders/1600/900",
    date: "2026-06-05",
    readTime: "7 min read",
    featured: true,
    author: authors.waqar,
    content: [
      {
        type: "paragraph",
        text: "Delaware and Wyoming both come up constantly in non-resident founder forums, usually with strong opinions and little context. The honest answer is that the right state depends on what you're optimizing for — investor familiarity, ongoing fees, or privacy.",
      },
      { type: "heading", text: "Where DIY attempts usually stall" },
      {
        type: "list",
        items: [
          "Filing the LLC is quick — getting an EIN without a US Social Security Number takes longer and has its own paperwork.",
          "Most traditional banks won't open an account remotely, which is where founders get stuck for months.",
          "First-year compliance deadlines aren't obvious from the state filing confirmation alone.",
        ],
      },
      {
        type: "quote",
        text: "The filing takes days. Getting an EIN and a working bank account is the part that actually determines your timeline.",
        cite: "Waqar Rajpoot, Founder & Lead Engineer",
      },
    ],
  },
  {
    slug: "annual-tax-filing-compliance",
    title: "The Annual Filings That Quietly Put Non-Resident Companies at Risk",
    excerpt:
      "Missing an annual report or tax filing rarely causes an immediate problem — until it does, at the worst possible time. Here's what to track from day one.",
    category: "Business",
    relatedService: "tax",
    tags: ["Tax", "Compliance", "Annual Filing"],
    coverImage: "https://picsum.photos/seed/annual-tax-filing-compliance/1600/900",
    date: "2026-05-15",
    readTime: "5 min read",
    featured: false,
    author: authors.waqar,
    content: [
      {
        type: "paragraph",
        text: "Companies rarely fail because of one dramatic mistake. More often, it's a missed annual report or an IRS filing deadline that goes unnoticed for a year, then surfaces as a much bigger problem during a bank review or an investor's due diligence.",
      },
      { type: "heading", text: "What to track from formation onward" },
      {
        type: "list",
        items: [
          "Your state's annual report deadline, which is separate from your federal tax filing deadline.",
          "Registered agent renewal — letting this lapse can put your company out of good standing.",
          "Which filings apply to your specific entity type; requirements differ between an LLC and a corporation.",
        ],
      },
      {
        type: "paragraph",
        text: "None of this requires deep tax expertise to stay on top of. It requires a calendar and someone accountable for checking it.",
      },
    ],
  },
  {
    slug: "banking-for-non-resident-founders",
    title: "Wise, Payoneer, or a Physical US Bank Account — What Non-Resident Founders Actually Need",
    excerpt:
      "Most founders don't need a physical US bank account on day one. Here's how to sequence banking so you're not blocked from collecting payments while you sort it out.",
    category: "Business",
    relatedService: "banking",
    tags: ["Banking", "Payments", "Non-Resident"],
    coverImage: "https://picsum.photos/seed/banking-for-non-resident-founders/1600/900",
    date: "2026-04-28",
    readTime: "6 min read",
    featured: false,
    author: authors.waqar,
    content: [
      {
        type: "paragraph",
        text: "The instinct is to chase a physical US bank account first, since it feels like the 'real' step. In practice, Wise and Payoneer get most non-resident founders collecting payments faster, with a physical account added later once volume justifies it.",
      },
      { type: "heading", text: "A workable sequence" },
      {
        type: "list",
        items: [
          "Set up Wise or Payoneer first — verification is faster and neither requires a US address.",
          "Connect Stripe once you have a business entity and EIN in place, so you can accept card payments directly.",
          "Add a physical US bank account only once you have a concrete reason — a specific vendor or investor requirement.",
        ],
      },
      {
        type: "paragraph",
        text: "Doing it in this order means you're never blocked from collecting revenue while paperwork for a physical account works through underwriting.",
      },
    ],
  },

  // ── Technology ──────────────────────────────────────────────
  {
    slug: "server-components-explained",
    title: "Server Components, Explained the Way We Wish Someone Had Explained Them to Us",
    excerpt:
      "No hand-waving, no hype. Just what React Server Components actually change about how you fetch data, ship JavaScript, and structure a Next.js app.",
    category: "Technology",
    relatedService: "web-development",
    tags: ["Web Development", "Next.js", "React"],
    coverImage: "https://picsum.photos/seed/server-components-explained/1600/900",
    date: "2026-06-10",
    readTime: "9 min read",
    featured: true,
    author: authors.daniyal,
    content: [
      {
        type: "paragraph",
        text: "The first time we read the React Server Components docs, we came away with the vague sense that something important had changed, without a clear picture of what to actually do differently on Monday morning. This is the explanation we wish we'd had.",
      },
      { type: "heading", text: "The one-sentence version" },
      {
        type: "paragraph",
        text: "A Server Component runs only on the server and never ships its own code to the browser. A Client Component runs on the server for the first paint and then again in the browser, so its code does ship — it's the only place hooks like useState work.",
      },
      { type: "heading", text: "What actually changes in practice" },
      {
        type: "list",
        items: [
          "Data fetching moves next to the component that needs it, with a plain async function — no useEffect, no loading flicker on first load.",
          "Your JavaScript bundle only includes the components that truly need interactivity.",
          "You draw a real boundary between 'this needs a browser' and 'this is just rendering'.",
        ],
      },
    ],
  },
  {
    slug: "wordpress-without-the-plugin-bloat",
    title: "Building WordPress Sites That Don't Slow Down After Launch",
    excerpt:
      "Most slow WordPress sites aren't slow because of WordPress — they're slow because of forty plugins nobody audited. Here's our setup checklist.",
    category: "Technology",
    relatedService: "wordpress",
    tags: ["WordPress", "Performance", "CMS"],
    coverImage: "https://picsum.photos/seed/wordpress-without-plugin-bloat/1600/900",
    date: "2026-05-22",
    readTime: "6 min read",
    featured: false,
    author: authors.daniyal,
    content: [
      {
        type: "paragraph",
        text: "WordPress gets blamed for slow sites more often than it deserves. In most audits we run, the real cause is plugin sprawl — five plugins doing overlapping jobs, none of them removed when a new one was added.",
      },
      { type: "heading", text: "What we do differently on setup" },
      {
        type: "list",
        items: [
          "Start with a minimal plugin list and add only what a specific requirement justifies.",
          "Choose a lightweight, well-maintained theme over a heavy page-builder theme by default.",
          "Set up caching and image optimization before content goes in, not after launch.",
        ],
      },
      {
        type: "paragraph",
        text: "A WordPress site set up this way stays fast a year later, not just on launch day.",
      },
    ],
  },
  {
    slug: "shopify-store-setup-checklist",
    title: "The Shopify Setup Checklist We Run on Every New Store",
    excerpt:
      "Before a single product goes live, there's a short list of settings that determine whether checkout, shipping, and tax actually work correctly on day one.",
    category: "Technology",
    relatedService: "shopify",
    tags: ["Shopify", "E-Commerce", "Setup"],
    coverImage: "https://picsum.photos/seed/shopify-store-setup-checklist/1600/900",
    date: "2026-05-08",
    readTime: "5 min read",
    featured: false,
    author: authors.daniyal,
    content: [
      {
        type: "paragraph",
        text: "New Shopify stores usually work in a demo. Whether they work correctly with real tax rates, real shipping zones, and a real payment gateway is a different question — one that only shows up once actual customers try to check out.",
      },
      { type: "heading", text: "What we confirm before launch" },
      {
        type: "list",
        items: [
          "Tax settings match the jurisdictions the store actually sells into.",
          "Shipping rates are tested against real product weights, not the default flat rate.",
          "Payment gateway is fully verified, not just connected — a test transaction goes through end to end.",
        ],
      },
    ],
  },
  {
    slug: "when-to-build-custom-software",
    title: "When an Off-the-Shelf Tool Stops Being Enough",
    excerpt:
      "Most businesses don't need custom software. Here's the honest checklist for when a spreadsheet or SaaS tool has actually become the bottleneck.",
    category: "Technology",
    relatedService: "programming",
    tags: ["Programming", "Custom Software", "Automation"],
    coverImage: "https://picsum.photos/seed/when-to-build-custom-software/1600/900",
    date: "2026-04-20",
    readTime: "6 min read",
    featured: false,
    author: authors.daniyal,
    content: [
      {
        type: "paragraph",
        text: "Every custom software conversation starts the same way: someone is manually copying data between two tools, twice a week, and has been for a year. That's usually the actual signal, more than any grand product vision.",
      },
      { type: "heading", text: "Signs it's worth building" },
      {
        type: "list",
        items: [
          "The same manual task happens on a fixed schedule and takes real hours each time.",
          "No existing tool combination covers the workflow without a workaround.",
          "The cost of the workaround, in hours per month, already exceeds what a small build would cost.",
        ],
      },
    ],
  },
  {
    slug: "what-a-saas-mvp-actually-needs",
    title: "What a SaaS MVP Actually Needs (and What Can Wait)",
    excerpt:
      "Founders over-scope their first SaaS build constantly. Here's the honest cut list for what ships in v1 versus what waits for real users to ask for it.",
    category: "Technology",
    relatedService: "saas",
    tags: ["SaaS", "Product Strategy", "MVP"],
    coverImage: "https://picsum.photos/seed/what-a-saas-mvp-actually-needs/1600/900",
    date: "2026-03-30",
    readTime: "7 min read",
    featured: false,
    author: authors.waqar,
    content: [
      {
        type: "paragraph",
        text: "Nearly every first SaaS spec we see includes team roles, an admin dashboard, and three subscription tiers before a single user has confirmed the core problem is worth solving.",
      },
      { type: "heading", text: "What actually belongs in v1" },
      {
        type: "list",
        items: [
          "The single workflow that solves the core problem, done well, for one type of user.",
          "Just enough billing to charge one plan — multiple tiers can wait for real pricing data.",
          "Enough onboarding that a first-time user doesn't need a support ticket to get started.",
        ],
      },
      {
        type: "quote",
        text: "The feature list that matters is the one your first ten users actually ask for, not the one you predicted in week one.",
        cite: "Waqar Rajpoot, Founder & Lead Engineer",
      },
    ],
  },

  // ── Marketing ───────────────────────────────────────────────
  {
    slug: "technical-seo-audit-checklist",
    title: "The Technical SEO Issues That Quietly Cap Your Organic Traffic",
    excerpt:
      "Great content can't rank on top of a broken technical foundation. Here's what we check first in every SEO audit, before touching a single page of copy.",
    category: "Marketing",
    relatedService: "seo",
    tags: ["SEO", "Technical Audit", "Organic Traffic"],
    coverImage: "https://picsum.photos/seed/technical-seo-audit-checklist/1600/900",
    date: "2026-06-14",
    readTime: "7 min read",
    featured: true,
    author: authors.hina,
    content: [
      {
        type: "paragraph",
        text: "We've seen well-written content stall in rankings for months because of a technical issue nobody had checked — duplicate pages competing against each other, or a robots.txt file accidentally blocking key sections.",
      },
      { type: "heading", text: "What we check before touching content" },
      {
        type: "list",
        items: [
          "Whether important pages are actually indexable, not accidentally blocked or noindexed.",
          "Duplicate content across parameterized URLs or staging subdomains.",
          "Core Web Vitals scores, since page experience is a ranking factor on its own.",
        ],
      },
      {
        type: "paragraph",
        text: "Fixing the technical layer first means every piece of content written afterward actually has a chance to rank.",
      },
    ],
  },
  {
    slug: "google-ads-budget-mistakes",
    title: "The Google Ads Budget Mistakes That Look Like Success on the Surface",
    excerpt:
      "High click-through rate and rising spend can look like a healthy campaign while quietly bleeding budget on the wrong keywords. Here's what to check instead.",
    category: "Marketing",
    relatedService: "google-ads",
    tags: ["Google Ads", "PPC", "Campaign Strategy"],
    coverImage: "https://picsum.photos/seed/google-ads-budget-mistakes/1600/900",
    date: "2026-05-30",
    readTime: "6 min read",
    featured: false,
    author: authors.hina,
    content: [
      {
        type: "paragraph",
        text: "A campaign with a strong click-through rate can still be losing money quietly, if those clicks are coming from broad-match keywords with no buying intent behind them.",
      },
      { type: "heading", text: "What actually matters more than CTR" },
      {
        type: "list",
        items: [
          "Cost per acquisition against your actual margin, not just cost per click.",
          "Search term reports, reviewed weekly, to catch irrelevant queries burning budget.",
          "Conversion tracking that's actually verified, not just assumed to be working.",
        ],
      },
    ],
  },
  {
    slug: "pinterest-for-product-brands",
    title: "Why Pinterest Still Works for Product Brands Nobody Else Is Using It For",
    excerpt:
      "Pinterest drives long-tail discovery traffic other platforms miss entirely — if your pin strategy matches how people actually search there.",
    category: "Marketing",
    relatedService: "pinterest",
    tags: ["Pinterest", "Organic Growth", "Product Marketing"],
    coverImage: "https://picsum.photos/seed/pinterest-for-product-brands/1600/900",
    date: "2026-05-01",
    readTime: "5 min read",
    featured: false,
    author: authors.hina,
    content: [
      {
        type: "paragraph",
        text: "Most brands treat Pinterest as an afterthought — a place to repost Instagram content. Pins that are built for how people actually search Pinterest behave completely differently, and drive traffic that compounds over months, not days.",
      },
      { type: "heading", text: "What we set up differently" },
      {
        type: "list",
        items: [
          "Boards organized around search terms customers actually use, not internal product categories.",
          "Pin descriptions written as search copy, not captions.",
          "A consistent posting cadence, since Pinterest rewards accounts that publish regularly over time.",
        ],
      },
    ],
  },
  {
    slug: "youtube-as-a-growth-channel",
    title: "Treating YouTube as a Growth Channel, Not Just a Video Host",
    excerpt:
      "Most brands upload videos and stop there. The brands that actually grow on YouTube treat it as a retargeting and search channel from day one.",
    category: "Marketing",
    relatedService: "youtube",
    tags: ["YouTube", "Video Marketing", "Retargeting"],
    coverImage: "https://picsum.photos/seed/youtube-as-a-growth-channel/1600/900",
    date: "2026-04-08",
    readTime: "6 min read",
    featured: false,
    author: authors.hina,
    content: [
      {
        type: "paragraph",
        text: "YouTube is the second-largest search engine, but most brand channels are treated like a folder for finished ads instead of a discovery channel with its own audience behavior.",
      },
      { type: "heading", text: "What changes the outcome" },
      {
        type: "list",
        items: [
          "Titles and thumbnails written for search intent, not just brand aesthetics.",
          "Video ad campaigns layered on top of organic content, not run in isolation.",
          "Retargeting audiences built from video viewers, since watch time is a strong intent signal.",
        ],
      },
    ],
  },
  {
    slug: "brand-identity-that-survives-scrutiny",
    title: "Building a Brand Identity That Survives Investor and Vendor Scrutiny",
    excerpt:
      "A logo that looks good in a pitch deck can fall apart the moment it meets a real packaging vendor or a second designer. Here's how we build systems that hold up.",
    category: "Marketing",
    relatedService: "branding",
    tags: ["Branding", "Visual Identity", "Design Systems"],
    coverImage: "https://picsum.photos/seed/brand-identity-that-survives-scrutiny/1600/900",
    date: "2026-06-01",
    readTime: "6 min read",
    featured: false,
    author: authors.ayesha,
    content: [
      {
        type: "paragraph",
        text: "Early-stage brand work often produces a pretty deck that falls apart the moment it meets a real packaging vendor or a second designer. The client needs something usable, not just presentable.",
      },
      { type: "heading", text: "What a durable identity system includes" },
      {
        type: "list",
        items: [
          "Primary and secondary logo lockups that work at every size, not just the hero placement.",
          "A defined color and type system documented well enough that a new designer can follow it without guessing.",
          "Written tone-of-voice guidance, so copy stays consistent across every channel.",
        ],
      },
      {
        type: "quote",
        text: "A brand system isn't a deliverable you hand over once. It's the shared vocabulary your whole team keeps speaking long after the project ends.",
        cite: "Ayesha Khan, Product Designer",
      },
    ],
  },
];

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

// Kept for any existing single-post consumers. Prefer getFeaturedPosts()
// for anything showing more than one featured post.
export function getFeaturedPost(): BlogPost {
  return blogPosts.find((p) => p.featured) ?? blogPosts[0];
}

export function getFeaturedPosts(limit = 3): BlogPost[] {
  const flagged = blogPosts.filter((p) => p.featured);
  const source = flagged.length > 0 ? flagged : blogPosts;
  return source.slice(0, limit);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

// Articles supporting a specific service (e.g. for a "Learn more" section on
// a service detail page). Matches BlogPost.relatedService against a SERVICES
// slug — mirrors getProjectsByService in portfolio-data.ts.
export function getPostsByService(serviceSlug: string): BlogPost[] {
  return blogPosts.filter((p) => p.relatedService === serviceSlug);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(slug);
  if (!current) return [];
  const sameService = blogPosts.filter(
    (p) => p.slug !== slug && p.relatedService === current.relatedService
  );
  const sameCategory = blogPosts.filter(
    (p) =>
      p.slug !== slug &&
      p.relatedService !== current.relatedService &&
      p.category === current.category
  );
  const rest = blogPosts.filter(
    (p) => p.slug !== slug && p.category !== current.category
  );
  return [...sameService, ...sameCategory, ...rest].slice(0, limit);
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}