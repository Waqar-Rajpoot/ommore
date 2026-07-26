// src/data/faqs.ts

export type FAQ = { question: string; answer: string };

export const faqs: FAQ[] = [
  {
    question: "How long does a typical project take?",
    answer:
      "Most projects run 6–12 weeks depending on scope. A landing page or brand refresh can ship in 2–3 weeks, while a full product build with backend work typically takes 10–14 weeks. You'll get a specific timeline after the discovery call, not a generic range.",
  },
  {
    question: "What's included in your pricing?",
    answer:
      "Every quote covers design, development, QA, and a defined revision window. Hosting setup and a documented handoff are included by default; ongoing maintenance is a separate optional retainer so you're never paying for support you don't need.",
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer:
      "Yes — every project ships with 30 days of free bug-fix support. After that, we offer monthly maintenance retainers covering updates, monitoring, and small feature requests, or you're free to take the codebase in-house.",
  },
  {
    question: "Can you work with our existing team or codebase?",
    answer:
      "Regularly. We can slot into an existing sprint process, work inside your repo with your conventions, or take ownership of a specific module while your team handles the rest. We'll ask about your stack and workflow on the first call.",
  },
  {
    question: "What's your process for starting a new project?",
    answer:
      "It starts with a discovery call to understand goals and constraints, followed by a written scope and fixed quote. Once approved, we work in weekly milestones with a shared board so you can see progress instead of waiting for a big reveal at the end.",
  },
  {
    question: "Do you sign NDAs?",
    answer:
      "Yes — we sign NDAs before any discovery call that involves sensitive product details, and we're comfortable working under your company's standard contractor agreement if you have one.",
  },
];
