import Link from "next/link";
import {
  ArrowRight,
  Camera,
  Clock,
  Download,
  Sparkles,
} from "lucide-react";
import MarketingNavbar from "@/components/marketing/MarketingNavbar";
import MarketingFooter from "@/components/marketing/MarketingFooter";
import { purchaseUrl } from "@/data/commercialPages";

const SITE_URL = "https://kivora.collabtower.com";

export const metadata = {
  title: "Best Kitchen Remodel Tool for Beginners (2026)",
  description:
    "Best kitchen remodel tool for beginners in 2026 — compare easy photo-based AI tools, simple planners, and beginner-friendly design apps. No design experience required.",
  keywords:
    "best kitchen remodel tool for beginners, kitchen remodel for beginners, easy kitchen design tool, beginner kitchen remodel software 2026",
  alternates: {
    canonical: `${SITE_URL}/best-kitchen-remodel-tool-for-beginners`,
  },
  openGraph: {
    title: "Best Kitchen Remodel Tool for Beginners | Kivora",
    description:
      "Practical guide to kitchen remodel tools for beginners — photo AI, simple planners, no design experience needed.",
    url: `${SITE_URL}/best-kitchen-remodel-tool-for-beginners`,
    siteName: "Kivora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Kitchen Remodel Tool for Beginners 2026",
    description:
      "Compare kitchen remodel tools built for beginners — easy start, clear results.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Best Kitchen Remodel Tool for Beginners",
      description:
        "Guide to the best kitchen remodel tools for beginners.",
      url: `${SITE_URL}/best-kitchen-remodel-tool-for-beginners`,
      isPartOf: {
        "@type": "WebSite",
        name: "Kivora",
        url: SITE_URL,
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the best kitchen remodel tool for beginners?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The best kitchen remodel tool for beginners is usually one that starts from a photo, needs no 3D training, and shows clear remodel concepts quickly. Photo-based AI tools like Kivora are designed for that first step.",
          },
        },
        {
          "@type": "Question",
          name: "Can a beginner plan a kitchen remodel without hiring a designer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes for early direction. Beginners can use photo AI to explore styles and share ideas with family or a contractor, then bring in professionals for measured plans and construction if needed.",
          },
        },
      ],
    },
  ],
};

const tools = [
  {
    name: "Kivora",
    blurb:
      "Photo-based AI kitchen remodel tool for beginners — upload one kitchen photo and generate realistic remodel concepts without learning design software.",
    bestFor: "First remodel ideas from your real kitchen",
    href: "/",
    cta: "Try Kivora",
  },
  {
    name: "RoomGPT",
    blurb:
      "General AI room restyler — simple for beginners exploring style across rooms; less kitchen-focused than dedicated tools.",
    bestFor: "Quick multi-room style experiments",
    href: "/kivora-vs-roomgpt",
    cta: "Kivora vs RoomGPT",
  },
  {
    name: "REimagineHome",
    blurb:
      "Photo-based home redesign tool — useful when beginners are exploring looks beyond the kitchen.",
    bestFor: "Broad home redesign exploration",
    href: "/kivora-vs-reimaginehome",
    cta: "Kivora vs REimagineHome",
  },
  {
    name: "Remodel AI",
    blurb:
      "General remodel exploration tool — inspiration-first looks for beginners comparing remodel ideas.",
    bestFor: "General remodel look exploration",
    href: "/kivora-vs-remodel-ai",
    cta: "Kivora vs Remodel AI",
  },
  {
    name: "HomeDesignsAI",
    blurb:
      "Broader AI home design tool — useful when beginners want AI ideas across more of the home.",
    bestFor: "Broader AI home design",
    href: "/kivora-vs-homedesignsai",
    cta: "Kivora vs HomeDesignsAI",
  },
  {
    name: "Planner 5D",
    blurb:
      "2D/3D floor planner — more setup than photo AI; better once a beginner has dimensions and wants layout control.",
    bestFor: "Layout planning when you have measurements",
    href: "/kivora-vs-planner-5d",
    cta: "Kivora vs Planner 5D",
  },
  {
    name: "Homestyler",
    blurb:
      "Traditional online design tool — steeper learning curve; useful later for floor plans and detailed scenes.",
    bestFor: "Measured plans once you’re past the idea stage",
    href: "/kivora-vs-homestyler",
    cta: "Kivora vs Homestyler",
  },
];

const pickByGoal = [
  {
    title: "I’ve never designed a kitchen — show me options from a photo",
    pick: "Kivora",
  },
  {
    title: "I want quick style ideas for a few rooms",
    pick: "RoomGPT",
  },
  {
    title: "I’m exploring looks beyond the kitchen",
    pick: "REimagineHome or HomeDesignsAI",
  },
  {
    title: "General remodel inspiration",
    pick: "Remodel AI",
  },
  {
    title: "I have measurements and want a simple layout",
    pick: "Planner 5D (after style is clearer)",
  },
];

const tips = [
  {
    title: "Start with a photo, not a blank plan",
    description:
      "Beginners get clearer feedback when they see remodel ideas on their actual kitchen instead of building a floor plan from scratch.",
  },
  {
    title: "Skip the steep learning curve first",
    description:
      "Photo AI tools are usually faster for first decisions. Traditional planners can wait until you need exact dimensions.",
  },
  {
    title: "Share early with family or a contractor",
    description:
      "Simple, realistic concepts help everyone agree on direction before money and labor are committed.",
  },
  {
    title: "One tool can be enough at the start",
    description:
      "You don’t need a full software stack on day one. Lock style with an easy tool, then add planning software only if the project requires it.",
  },
];

export default function BestKitchenRemodelToolForBeginnersPage() {
  return (
    <div className="min-h-screen bg-kivora-cream text-kivora-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <MarketingNavbar />

      <main>
        <header className="px-5 pb-20 pt-32 md:px-8 md:pb-28 md:pt-40">
          <div className="mx-auto max-w-7xl">
            <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm font-medium text-kivora-ink/45">
              <Link href="/" className="hover:text-kivora-ink">
                Home
              </Link>
              <span>/</span>
              <Link href="/resources" className="hover:text-kivora-ink">
                Resources
              </Link>
              <span>/</span>
              <Link href="/comparisons" className="hover:text-kivora-ink">
                Comparisons
              </Link>
              <span>/</span>
              <span className="text-kivora-ink">For beginners</span>
            </nav>

            <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
              Best-of · By user
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">
              Best kitchen remodel tool for beginners
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-kivora-ink/70 md:text-xl">
              A practical list of kitchen remodel tools for beginners — photo-based
              AI, simple apps, and options that don’t require design experience
              before you see useful results.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={purchaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-kivora-yellow px-6 py-3 text-base font-semibold text-kivora-ink transition-colors hover:bg-kivora-purple"
              >
                Try Kivora
                <ArrowRight size={18} />
              </a>
              <Link
                href="/best-ai-kitchen-designer-for-homeowners"
                className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/15 px-6 py-3 text-base font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-white"
              >
                Best AI designer for homeowners
              </Link>
            </div>
          </div>
        </header>

        <section className="bg-white px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
                How to choose
              </p>
              <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                What beginners should optimize for
              </h2>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {tips.map((item) => (
                <article
                  key={item.title}
                  className="border border-kivora-ink/10 bg-kivora-cream p-6"
                >
                  <h3 className="text-lg font-semibold text-kivora-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-kivora-ink/70">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              Best remodel tools for beginners at a glance
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-kivora-ink/70">
              Use these when comparing kitchen remodel tools as a beginner. Each
              card links to a deeper head-to-head where available.
            </p>
            <div className="mt-12 space-y-4">
              {tools.map((tool) => (
                <article
                  key={tool.name}
                  className="border border-kivora-ink/10 bg-white p-6 sm:p-8"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="max-w-2xl">
                      <h3 className="text-xl font-semibold text-kivora-ink">
                        {tool.name}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-kivora-ink/70">
                        {tool.blurb}
                      </p>
                      <p className="mt-3 text-sm font-medium text-kivora-ink/55">
                        Best for:{" "}
                        <span className="text-kivora-ink">{tool.bestFor}</span>
                      </p>
                    </div>
                    {tool.name === "Kivora" ? (
                      <a
                        href={purchaseUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-11 shrink-0 items-center justify-center gap-2 bg-kivora-yellow px-5 text-sm font-semibold text-kivora-ink transition-colors hover:bg-kivora-purple"
                      >
                        {tool.cta}
                        <ArrowRight size={16} />
                      </a>
                    ) : (
                      <Link
                        href={tool.href}
                        className="inline-flex h-11 shrink-0 items-center justify-center border border-kivora-ink/15 px-5 text-sm font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-kivora-cream"
                      >
                        {tool.cta}
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              Quick picks by beginner goal
            </h2>
            <ul className="mt-10 space-y-4">
              {pickByGoal.map((item) => (
                <li
                  key={item.title}
                  className="flex flex-col gap-1 border-b border-kivora-ink/10 pb-4 sm:flex-row sm:items-baseline sm:justify-between"
                >
                  <span className="text-base font-medium text-kivora-ink">
                    {item.title}
                  </span>
                  <span className="text-sm font-semibold text-kivora-purple">
                    {item.pick}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
                How Kivora works
              </p>
              <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                From kitchen photo to remodel ideas in three steps
              </h2>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {[
                {
                  name: "Upload",
                  desc: "Start with a clear photo of your current kitchen.",
                  icon: Camera,
                },
                {
                  name: "Style",
                  desc: "Choose a remodel direction you want to explore.",
                  icon: Sparkles,
                },
                {
                  name: "Generate",
                  desc: "See polished remodel concepts in seconds — no design course required.",
                  icon: Download,
                },
              ].map((step, index) => (
                <article
                  key={step.name}
                  className="border-t border-kivora-ink/15 pt-8"
                >
                  <div className="mb-10 flex items-center justify-between">
                    <step.icon className="h-6 w-6 text-kivora-purple" />
                    <span className="text-sm font-medium text-kivora-pink">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold">{step.name}</h3>
                  <p className="mt-4 leading-7 text-kivora-ink/70">{step.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl border-y border-kivora-ink/10 py-16 text-center">
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-kivora-purple/10">
              <Clock className="h-6 w-6 text-kivora-purple" />
            </div>
            <h2 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
              Ready to try a kitchen remodel tool built for beginners?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-kivora-ink/70">
              Upload one kitchen photo and generate realistic remodel concepts in
              seconds — no design experience required.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={purchaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-kivora-yellow px-6 py-3 text-base font-semibold text-kivora-ink transition-colors hover:bg-kivora-purple"
              >
                Visualize My Kitchen
                <ArrowRight size={18} />
              </a>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/best-ai-kitchen-remodel-tools"
                  className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/20 px-5 py-3 text-sm font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-kivora-cream"
                >
                  Best AI remodel tools
                </Link>
                <Link
                  href="/comparisons"
                  className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/20 px-5 py-3 text-sm font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-kivora-cream"
                >
                  All comparisons
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}
