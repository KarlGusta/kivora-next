import Link from "next/link";
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  Clock,
  Download,
  Sparkles,
} from "lucide-react";
import MarketingNavbar from "@/components/marketing/MarketingNavbar";
import MarketingFooter from "@/components/marketing/MarketingFooter";
import { purchaseUrl } from "@/data/commercialPages";

const SITE_URL = "https://kivora.collabtower.com";

export const metadata = {
  title: "Best AI Kitchen Design Tools (2026) | Comparison Guide",
  description:
    "Best AI kitchen design tools in 2026 — compare photo-based remodel visualizers, floor planners, and general room AI. See which tools fit homeowners, designers, and remodel teams.",
  keywords:
    "best ai kitchen design tools, best ai kitchen designer, ai kitchen design software, best kitchen design ai 2026, ai kitchen remodel tools",
  alternates: {
    canonical: `${SITE_URL}/best-ai-kitchen-design-tools`,
  },
  openGraph: {
    title: "Best AI Kitchen Design Tools | Kivora",
    description:
      "Practical guide to the best AI kitchen design tools — photo remodel concepts, floor planners, and general room AI.",
    url: `${SITE_URL}/best-ai-kitchen-design-tools`,
    siteName: "Kivora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best AI Kitchen Design Tools 2026",
    description:
      "Compare the best AI kitchen design tools for remodel visualization and layout planning.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Best AI Kitchen Design Tools",
      description:
        "Guide to the best AI kitchen design tools for remodel visualization and planning.",
      url: `${SITE_URL}/best-ai-kitchen-design-tools`,
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
          name: "What are the best AI kitchen design tools?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The best AI kitchen design tools depend on your goal. Photo-based tools like Kivora are strong for realistic remodel concepts from a real kitchen photo. Floor planners like Planner 5D and Homestyler suit measured layouts. General room AI tools like RoomGPT suit multi-room inspiration.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best AI tool for kitchen remodel visualization?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For kitchen-focused remodel visualization from a photo, tools built for kitchens (such as Kivora) are usually a better fit than general room restylers or blank-canvas floor planners.",
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
      "Photo-based AI kitchen remodel visualizer — upload one kitchen photo and generate realistic remodel concepts in seconds.",
    bestFor: "Kitchen remodel decisions and shareable concepts",
    href: "/",
    cta: "Try Kivora",
    external: false,
  },
  {
    name: "Planner 5D",
    blurb:
      "2D/3D floor-planning tool with catalogs — strong when you need measured layouts and object placement from a blank slate.",
    bestFor: "Layout planning and catalog-driven designs",
    href: "/kivora-vs-planner-5d",
    cta: "Kivora vs Planner 5D",
    external: false,
  },
  {
    name: "RoomGPT",
    blurb:
      "General AI room restyler — fast style exploration across bedrooms, living rooms, and other room types.",
    bestFor: "Multi-room inspiration and quick restyles",
    href: "/kivora-vs-roomgpt",
    cta: "Kivora vs RoomGPT",
    external: false,
  },
  {
    name: "REimagineHome",
    blurb:
      "Photo-based home redesign across rooms — useful for broader redesign inspiration beyond the kitchen.",
    bestFor: "Broad home redesign exploration",
    href: "/kivora-vs-reimaginehome",
    cta: "Kivora vs REimagineHome",
    external: false,
  },
  {
    name: "Remodel AI",
    blurb:
      "General remodel AI tools for exploring remodel looks across spaces — inspiration-first rather than kitchen-only.",
    bestFor: "General remodel inspiration",
    href: "/kivora-vs-remodel-ai",
    cta: "Kivora vs Remodel AI",
    external: false,
  },
  {
    name: "HomeDesignsAI",
    blurb:
      "Broader AI home design product — useful when you want AI design across more than the kitchen.",
    bestFor: "Broader AI home design",
    href: "/kivora-vs-homedesignsai",
    cta: "Kivora vs HomeDesignsAI",
    external: false,
  },
  {
    name: "Homestyler",
    blurb:
      "Traditional 2D/3D design and planning — strong for floor plans and catalog placement, heavier learning curve.",
    bestFor: "Measured plans and 3D scene building",
    href: "/kivora-vs-homestyler",
    cta: "Kivora vs Homestyler",
    external: false,
  },
];

const pickByGoal = [
  {
    title: "Realistic kitchen remodel from a photo",
    pick: "Kivora",
  },
  {
    title: "Measured floor plans and catalogs",
    pick: "Planner 5D or Homestyler",
  },
  {
    title: "Fast restyles across many room types",
    pick: "RoomGPT",
  },
  {
    title: "Broad home redesign inspiration",
    pick: "REimagineHome or HomeDesignsAI",
  },
  {
    title: "General remodel look exploration",
    pick: "Remodel AI",
  },
];

const tips = [
  {
    title: "Match the tool to the decision",
    description:
      "Need style direction from your real kitchen? Use a photo-based kitchen tool. Need measured walls and cabinets? Use a floor planner.",
  },
  {
    title: "Kitchen-only vs whole-home",
    description:
      "General room AI is flexible but not always optimized for cabinets, work triangles, and remodel sharing. Kitchen-first tools usually win for remodel decisions.",
  },
  {
    title: "Shareable output matters",
    description:
      "If family, clients, or contractors need to agree on a direction, prioritize tools that produce clear, high-quality remodel concepts from your space.",
  },
  {
    title: "You can use more than one",
    description:
      "Many people explore style with AI photos first, then refine layout in a planner — or the reverse. Pick the primary job for each stage.",
  },
];

export default function BestAIKitchenDesignToolsPage() {
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
              <span className="text-kivora-ink">Best AI kitchen design tools</span>
            </nav>

            <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
              Best-of · Competitor Comparisons
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">
              Best AI kitchen design tools
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-kivora-ink/70 md:text-xl">
              A practical list of AI kitchen design and remodel tools — photo
              visualizers, floor planners, and general room AI — so you can match
              the product to the job.
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
                href="/comparisons"
                className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/15 px-6 py-3 text-base font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-white"
              >
                All comparisons
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
                What to optimize for
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
              Best tools at a glance
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-kivora-ink/70">
              Use these when comparing AI kitchen design options. Each card links
              to a deeper head-to-head where available.
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
              Quick picks by goal
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
                From kitchen photo to remodel direction in three steps
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
                  desc: "Choose the design direction you want to explore.",
                  icon: Sparkles,
                },
                {
                  name: "Generate",
                  desc: "Receive polished kitchen remodel concepts in seconds.",
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
              Ready to try a kitchen-first AI design tool?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-kivora-ink/70">
              Upload one kitchen photo and generate realistic remodel concepts in
              seconds — built for remodel decisions and sharing.
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
              <Link
                href="/comparisons"
                className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/20 px-6 py-3 text-base font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-kivora-cream"
              >
                All comparisons
              </Link>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}
