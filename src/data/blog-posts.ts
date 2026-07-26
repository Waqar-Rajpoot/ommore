// src/data/blog-posts.ts
// Static blog data. Swap this out for a CMS/DB call later without touching
// any of the page/component code — every consumer only relies on this shape.

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
  category: string;
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
} satisfies Record<string, BlogAuthor>;

export const blogPosts: BlogPost[] = [
  {
    slug: "design-systems-before-features",
    title:
      "Why Your Next Product Needs a Design System Before It Needs More Features",
    excerpt:
      "Teams keep shipping features on top of shaky foundations. Here's why we make every client invest in a design system first — and what it saves them six months later.",
    category: "Product Design",
    tags: ["Design Systems", "UI/UX", "Product Strategy"],
    coverImage: "https://picsum.photos/seed/design-systems-before-features/1600/900",
    date: "2026-06-18",
    readTime: "7 min read",
    featured: true,
    author: authors.ayesha,
    content: [
      {
        type: "paragraph",
        text: "Almost every client comes to us with a feature list, not a foundation. That's natural — features are what stakeholders can see and approve. But we've learned, sometimes the hard way, that a product built feature-first accumulates a debt that eventually costs far more than the time it saved.",
      },
      { type: "heading", text: "The feature trap" },
      {
        type: "paragraph",
        text: "When every screen is designed in isolation, small inconsistencies creep in: three shades of the same blue, five different button paddings, two competing definitions of 'primary action'. None of it looks wrong in a single screenshot. It looks wrong the moment a user moves between screens and the product stops feeling like one coherent thing.",
      },
      {
        type: "quote",
        text: "A design system isn't a deliverable you hand over once. It's the shared vocabulary your whole team keeps speaking long after the project ends.",
        cite: "Ayesha Khan, Product Designer",
      },
      { type: "heading", text: "What a real design system buys you" },
      {
        type: "list",
        items: [
          "New screens ship in days instead of weeks, because the components already exist and already match brand.",
          "Design and engineering stop relitigating spacing and color in every sprint review.",
          "Accessibility gets solved once, at the component level, instead of being patched screen by screen.",
          "Onboarding a new designer or developer takes hours, not months, because the rules are written down.",
        ],
      },
      {
        type: "paragraph",
        text: "None of this shows up on a feature roadmap, which is exactly why it gets skipped. Our job is to make the invisible cost visible early, before the fifth inconsistent button pattern makes it into production.",
      },
    ],
  },
  {
    slug: "server-components-explained",
    title:
      "Server Components, Explained the Way We Wish Someone Had Explained Them to Us",
    excerpt:
      "No hand-waving, no hype. Just what React Server Components actually change about how you fetch data, ship JavaScript, and structure a Next.js app.",
    category: "Engineering",
    tags: ["Next.js", "React", "Architecture"],
    coverImage: "https://picsum.photos/seed/server-components-explained/1600/900",
    date: "2026-05-02",
    readTime: "9 min read",
    author: authors.daniyal,
    content: [
      {
        type: "paragraph",
        text: "The first time we read the React Server Components docs, we came away with the vague sense that something important had changed, without a clear picture of what to actually do differently on Monday morning. This is the explanation we wish we'd had.",
      },
      { type: "heading", text: "The one-sentence version" },
      {
        type: "paragraph",
        text: "A Server Component runs only on the server, renders to a lightweight description of the UI, and never ships its own code to the browser. A Client Component runs on the server for the first paint and then again in the browser, so its code does ship, and it's the only place hooks like useState work.",
      },
      { type: "heading", text: "What actually changes in practice" },
      {
        type: "list",
        items: [
          "Data fetching moves next to the component that needs it, with a plain async function — no useEffect, no loading flicker on first load.",
          "Your JavaScript bundle only includes the components that truly need interactivity, which for most pages is a small fraction of the tree.",
          "You draw a real boundary between 'this needs a browser' and 'this is just rendering', and that boundary becomes a design decision, not an afterthought.",
        ],
      },
      {
        type: "quote",
        text: "The mental model shift isn't 'server vs. client', it's 'does this piece of UI need a browser at all, or just data'.",
        cite: "Daniyal Ahmed, Frontend Engineer",
      },
      {
        type: "paragraph",
        text: "In practice, we push interactivity as far down the tree as possible — a single 'like' button becomes a small client island inside an otherwise fully server-rendered card. Everything upstream of it stays server-only, which is most of the page.",
      },
    ],
  },
  {
    slug: "real-cost-of-slow-websites",
    title: "The Real Cost of a Slow Website (And How We Cut Load Times by 68%)",
    excerpt:
      "A slow site isn't just an engineering embarrassment — it's a revenue problem. Here's the audit process we used to take a client from a 4.8s load time to 1.5s.",
    category: "Performance",
    tags: ["Performance", "Core Web Vitals", "Case Study"],
    coverImage: "https://picsum.photos/seed/real-cost-of-slow-websites/1600/900",
    date: "2026-04-14",
    readTime: "6 min read",
    author: authors.daniyal,
    content: [
      {
        type: "paragraph",
        text: "A client came to us convinced their conversion problem was a copywriting problem. It wasn't. Their landing page took 4.8 seconds to become interactive on an average mobile connection, and a third of visitors never waited that long.",
      },
      { type: "heading", text: "Where the time was actually going" },
      {
        type: "list",
        items: [
          "An unoptimized hero video that loaded before any text was visible.",
          "Three separate analytics and chat scripts, all render-blocking, all loaded synchronously.",
          "Images served at their original resolution and shrunk down with CSS instead of being resized at the source.",
          "A font loading strategy that caused two visible layout shifts on every visit.",
        ],
      },
      { type: "heading", text: "What we changed" },
      {
        type: "paragraph",
        text: "We moved the video behind a poster image with lazy playback, deferred every third-party script until after first interaction, converted images to responsive AVIF with correct sizing, and switched to font-display: swap with matched fallback metrics.",
      },
      {
        type: "quote",
        text: "None of these fixes were exotic. The hard part was having the discipline to measure each one instead of guessing.",
        cite: "Daniyal Ahmed, Frontend Engineer",
      },
      {
        type: "paragraph",
        text: "Load time dropped from 4.8s to 1.5s. Within three weeks, mobile conversion rate was up 22% — with the exact same copy the client had originally wanted to rewrite.",
      },
    ],
  },
  {
    slug: "figma-to-production-handoff",
    title: "From Figma to Production: Our Handoff Process at Ommore",
    excerpt:
      "Handoff is where good designs quietly die. This is the exact checklist we run between 'design approved' and 'first pull request'.",
    category: "Workflow",
    tags: ["Design Ops", "Collaboration", "Figma"],
    coverImage: "https://picsum.photos/seed/figma-to-production-handoff/1600/900",
    date: "2026-03-09",
    readTime: "5 min read",
    author: authors.ayesha,
    content: [
      {
        type: "paragraph",
        text: "Most handoff problems aren't technical — they're conversations that never happened. A spacing value that only exists in the designer's head, an edge case nobody designed for, a hover state that was assumed rather than specified.",
      },
      { type: "heading", text: "Our checklist before a file leaves design" },
      {
        type: "list",
        items: [
          "Every component has its empty, loading, and error states designed — not just the happy path.",
          "Spacing and type use tokens from the shared library, never one-off pixel values.",
          "Interactive states (hover, focus, active, disabled) are specified for anything clickable.",
          "Content is written in real sentences, at realistic lengths — no 'Lorem ipsum' hiding a truncation bug.",
        ],
      },
      {
        type: "quote",
        text: "If a developer has to guess, we've already failed the handoff — no matter how polished the file looks.",
        cite: "Ayesha Khan, Product Designer",
      },
      {
        type: "paragraph",
        text: "The last step is always a 30-minute walkthrough, designer and engineer in the same call, going through the file screen by screen. It feels slow. It's the single highest-leverage half hour in the whole project.",
      },
    ],
  },
  {
    slug: "ai-pair-programming-2026",
    title: "AI Pair Programming: What Actually Changed for Our Team This Year",
    excerpt:
      "Less hype, more honesty: where AI coding tools genuinely sped us up this year, and the three places we still don't trust them unsupervised.",
    category: "Engineering",
    tags: ["AI", "Developer Tools", "Productivity"],
    coverImage: "https://picsum.photos/seed/ai-pair-programming-2026/1600/900",
    date: "2026-02-21",
    readTime: "8 min read",
    author: authors.waqar,
    content: [
      {
        type: "paragraph",
        text: "A year ago we treated AI coding assistants as a novelty for autocomplete. That's no longer true, but it's also not the whole story people tell at conferences. Here's the plain version.",
      },
      { type: "heading", text: "Where it genuinely helped" },
      {
        type: "list",
        items: [
          "Scaffolding boilerplate — API routes, form validation, test setup — dropped from hours to minutes.",
          "Reading unfamiliar code got dramatically faster; asking 'what does this function actually do' beats tracing call stacks manually.",
          "Refactors that touch dozens of files became something one engineer could do safely in an afternoon.",
        ],
      },
      { type: "heading", text: "Where we still don't trust it alone" },
      {
        type: "list",
        items: [
          "Architecture decisions with long-term consequences — the tools optimize for the code in front of them, not the system in five years.",
          "Anything touching authentication, payments, or data deletion gets a human review, every time, no exceptions.",
          "Performance-critical code, where the 'obviously correct' suggestion is sometimes the slow one.",
        ],
      },
      {
        type: "quote",
        text: "The tools changed how fast we write code. They didn't change how much we're responsible for it.",
        cite: "Waqar Rajpoot, Founder & Lead Engineer",
      },
    ],
  },
  {
    slug: "client-onboarding-questions",
    title: "Client Onboarding: The Questions We Ask Before Writing a Line of Code",
    excerpt:
      "The projects that go smoothly aren't luck — they're the ones where we asked the uncomfortable questions in week one instead of week ten.",
    category: "Process",
    tags: ["Client Work", "Discovery", "Strategy"],
    coverImage: "https://picsum.photos/seed/client-onboarding-questions/1600/900",
    date: "2026-01-11",
    readTime: "6 min read",
    author: authors.waqar,
    content: [
      {
        type: "paragraph",
        text: "Every project that went badly in our first two years had the same root cause: we started building before we'd agreed, in writing, what 'done' actually meant. Now discovery is a non-negotiable first step, not a formality before the real work starts.",
      },
      { type: "heading", text: "The questions we always ask" },
      {
        type: "list",
        items: [
          "Who is the one person with final sign-off authority — not the committee, the individual?",
          "What does this product need to do on day one that it doesn't need to do on day ninety?",
          "What's the actual budget for maintenance after launch, not just for building it?",
          "If we could only fix one metric in the first quarter, which one matters most?",
        ],
      },
      {
        type: "quote",
        text: "Clients don't remember how fast we built something. They remember whether it solved the problem they actually had.",
        cite: "Waqar Rajpoot, Founder & Lead Engineer",
      },
      {
        type: "paragraph",
        text: "None of these questions are clever. They're just uncomfortable enough that teams skip them under deadline pressure — which is exactly why asking them early is worth protecting on every project we take on.",
      },
    ],
  },
];

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getFeaturedPost(): BlogPost {
  return blogPosts.find((p) => p.featured) ?? blogPosts[0];
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(slug);
  if (!current) return [];
  const sameCategory = blogPosts.filter(
    (p) => p.slug !== slug && p.category === current.category
  );
  const rest = blogPosts.filter(
    (p) => p.slug !== slug && p.category !== current.category
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