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
  title: "Best AI Kitchen Remodel Tools (2026) | Comparison Guide",
  description:
    "Best AI kitchen remodel tools in 2026 — compare photo-based remodel visualizers, general remodel AI, and floor planners. See which tools fit homeowners and remodel teams.",
  keywords:
    "best ai kitchen remodel tools, ai kitchen remodel software, best kitchen remodel ai 2026, ai remodel visualization, kitchen remodel design tools",
  alternates: {
    canonical: `${SITE_URL}/best-ai-kitchen-remodel-tools`,
  },
  openGraph: {
    title: "Best AI Kitchen Remodel Tools | Kivora",
    description:
      "Practical guide to the best AI kitchen remodel tools — photo remodel concepts, general remodel AI, and planners.",
    url: `${SITE_URL}/best-ai-kitchen-remodel-tools`,
    siteName: "Kivora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best AI Kitchen Remodel Tools 2026",
    description:
      "Compare the best AI kitchen remodel tools for visualization and planning.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Best AI Kitchen Remodel Tools",
      description:
        "Guide to the best AI kitchen remodel tools for visualization and planning.",
      url: `${SITE_URL}/best-ai-kitchen-remodel-tools`,
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
          name: "What are the best AI kitchen remodel tools?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The best AI kitchen remodel tools depend on your goal. Photo-based tools like Kivora are strong for realistic remodel concepts from a real kitchen photo. General remodel AI and room tools suit broader inspiration. Floor planners suit measured layouts after you choose a direction.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best AI tool for kitchen remodel visualization?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For kitchen-focused remodel visualization from a photo, tools built for kitchens are usually a better fit than general room restylers or blank-canvas floor planners alone.",
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
      "Photo-based AI kitchen remodel visualizer — upload one kitchen photo and generate realistic remodel concepts for decisions and sharing.",
    bestFor: "Kitchen remodel direction from a real photo",
    href: "/",
    cta: "Try Kivora",
  },
  {
    name: "Remodel AI",
    blurb:
      "General remodel AI for exploring remodel looks across spaces — inspiration-first rather than kitchen-only workflows.",
    bestFor: "General remodel inspiration",
    href: "/kivora-vs-remodel-ai",
    cta: "Kivora vs Remodel AI",
  },
  {
    name: "RoomGPT",
    blurb:
      "General AI room restyler — fast style exploration across room types; kitchens are one of many options.",
    bestFor: "Multi-room restyle inspiration",
    href: "/kivora-vs-roomgpt",
    cta: "Kivora vs RoomGPT",
  },
  {
    name: "REimagineHome",
    blurb:
      "Photo-based home redesign across rooms — useful when remodel ideas span more than the kitchen.",
    bestFor: "Broad home redesign exploration",
    href: "/kivora-vs-reimaginehome",
    cta: "Kivora vs REimagineHome",
  },
  {
    name: "HomeDesignsAI",
    blurb:
      "Broader AI home design product — useful when you want AI design across more of the home.",
    bestFor: "Broader AI home design",
    href: "/kivora-vs-homedesignsai",
    cta: "Kivora vs HomeDesignsAI",
  },
  {
    name: "Planner 5D",
    blurb:
      "2D/3D floor-planning with catalogs — strong after you have a style direction and need measured layout control.",
    bestFor: "Layout planning and catalog placement",
    href: "/kivora-vs-planner-5d",
    cta: "Kivora vs Planner 5D",
  },
  {
    name: "Homestyler",
    blurb:
      "Traditional 2D/3D design and planning — useful for floor plans once remodel direction is clear.",
    bestFor: "Measured plans and 3D scene building",
    href: "/kivora-vs-homestyler",
    cta: "Kivora vs Homestyler",
  },
];

const pickByGoal = [
  {
    title: "Realistic remodel concepts from my kitchen photo",
    pick: "Kivora",
  },
  {
    title: "General remodel look exploration",
    pick: "Remodel AI",
  },
  {
    title: "Fast restyles across many rooms",
    pick: "RoomGPT",
  },
  {
    title: "Broad home redesign inspiration",
    pick: "REimagineHome or HomeDesignsAI",
  },
  {
    title: "Measured plans after style is chosen",
    pick: "Planner 5D or Homestyler",
  },
];

const tips = [
  {
    title: "Remodel first, then measure",
    description:
      "Many teams lock style and overall direction from photo concepts before investing time in detailed floor plans.",
  },
  {
    title: "Kitchen-first vs general remodel AI",
    description:
      "General remodel and room tools are flexible. Kitchen-first tools usually produce clearer cabinet, layout, and finish direction for remodel decisions.",
  },
  {
    title: "Share early with decision-makers",
    description:
      "If family, clients, or contractors need to agree, prioritize tools that produce clear concepts from the actual space.",
  },
  {
    title: "Stack tools by stage",
    description:
      "Use photo AI for direction, then a planner for measurements — or the reverse if layout constraints come first.",
  },
];

export default function BestAIKitchenRemodelToolsPage() {
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
              <span className="text-kivora-ink">Best AI kitchen remodel tools</span>
            </nav>

            <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
              Best-of · Competitor Comparisons
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">
              Best AI kitchen remodel tools
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-kivora-ink/70 md:text-xl">
              A practical list of AI tools for kitchen remodels — photo-based
              visualizers, general remodel AI, and floor planners — matched to
              the stage of your project.
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
                href="/best-ai-kitchen-design-tools"
                className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/15 px-6 py-3 text-base font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-white"
              >
                Best AI kitchen design tools
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
              Best remodel tools at a glance
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-kivora-ink/70">
              Use these when comparing AI kitchen remodel options. Each card
              links to a deeper head-to-head where available.
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
              Quick picks by remodel goal
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
              Ready to try a kitchen-first remodel tool?
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
