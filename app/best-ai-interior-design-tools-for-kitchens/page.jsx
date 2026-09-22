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
  title: "Best AI Interior Design Tools for Kitchens (2026)",
  description:
    "Best AI interior design tools for kitchens in 2026 — compare photo-based kitchen remodel visualizers, general interior AI, and floor planners for remodel decisions.",
  keywords:
    "best ai interior design tools for kitchens, ai interior design kitchen, best kitchen interior design ai 2026, ai kitchen interior design software",
  alternates: {
    canonical: `${SITE_URL}/best-ai-interior-design-tools-for-kitchens`,
  },
  openGraph: {
    title: "Best AI Interior Design Tools for Kitchens | Kivora",
    description:
      "Practical guide to the best AI interior design tools focused on kitchens — photo concepts, general interior AI, and planners.",
    url: `${SITE_URL}/best-ai-interior-design-tools-for-kitchens`,
    siteName: "Kivora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best AI Interior Design Tools for Kitchens 2026",
    description:
      "Compare the best AI interior design tools for kitchen remodel visualization and planning.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Best AI Interior Design Tools for Kitchens",
      description:
        "Guide to the best AI interior design tools for kitchen remodel visualization and planning.",
      url: `${SITE_URL}/best-ai-interior-design-tools-for-kitchens`,
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
          name: "What are the best AI interior design tools for kitchens?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kitchen-focused photo AI tools like Kivora are strong for realistic remodel concepts from a real kitchen photo. General interior AI tools suit multi-room inspiration. Floor planners suit measured layouts after style is chosen.",
          },
        },
        {
          "@type": "Question",
          name: "Is general interior AI enough for a kitchen remodel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "General interior AI can inspire styles, but kitchen remodels often need clearer cabinet, layout, and finish direction. Kitchen-first tools usually reduce second-guessing for remodel decisions.",
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
      "Photo-based AI kitchen remodel visualizer — interior design direction from one kitchen photo, built for remodel decisions and sharing.",
    bestFor: "Kitchen interior remodel concepts from a real photo",
    href: "/",
    cta: "Try Kivora",
  },
  {
    name: "RoomGPT",
    blurb:
      "General AI room restyler — fast interior style exploration across room types, including kitchens as one option.",
    bestFor: "Multi-room interior inspiration",
    href: "/kivora-vs-roomgpt",
    cta: "Kivora vs RoomGPT",
  },
  {
    name: "REimagineHome",
    blurb:
      "Photo-based interior redesign across rooms — useful when interior ideas span more than the kitchen.",
    bestFor: "Broad interior redesign exploration",
    href: "/kivora-vs-reimaginehome",
    cta: "Kivora vs REimagineHome",
  },
  {
    name: "HomeDesignsAI",
    blurb:
      "Broader AI home and interior design product — useful when you want AI design across more of the home.",
    bestFor: "Broader AI interior / home design",
    href: "/kivora-vs-homedesignsai",
    cta: "Kivora vs HomeDesignsAI",
  },
  {
    name: "Remodel AI",
    blurb:
      "General remodel AI for exploring remodel looks — inspiration-first rather than kitchen-only interior workflows.",
    bestFor: "General remodel interior looks",
    href: "/kivora-vs-remodel-ai",
    cta: "Kivora vs Remodel AI",
  },
  {
    name: "Planner 5D",
    blurb:
      "2D/3D floor-planning with catalogs — strong when interior direction is set and you need measured layout control.",
    bestFor: "Layout planning after style is chosen",
    href: "/kivora-vs-planner-5d",
    cta: "Kivora vs Planner 5D",
  },
  {
    name: "Homestyler",
    blurb:
      "Traditional 2D/3D interior design and planning — useful for floor plans and catalog placement.",
    bestFor: "Measured plans and 3D interior scenes",
    href: "/kivora-vs-homestyler",
    cta: "Kivora vs Homestyler",
  },
];

const pickByGoal = [
  {
    title: "Kitchen interior remodel from my photo",
    pick: "Kivora",
  },
  {
    title: "Interior styles across many room types",
    pick: "RoomGPT",
  },
  {
    title: "Broad home interior redesign",
    pick: "REimagineHome or HomeDesignsAI",
  },
  {
    title: "General remodel look exploration",
    pick: "Remodel AI",
  },
  {
    title: "Measured layout after interior direction",
    pick: "Planner 5D or Homestyler",
  },
];

const tips = [
  {
    title: "Kitchen is a specialized interior problem",
    description:
      "Cabinets, work triangles, finishes, and contractor sharing make kitchens different from generic room restyles.",
  },
  {
    title: "Photo-first vs plan-first",
    description:
      "Photo AI is strong for interior direction from the real space. Planners are strong once you need measured walls and placement.",
  },
  {
    title: "General interior AI has a place",
    description:
      "Use multi-room tools for whole-home mood. Switch to kitchen-first tools when remodel decisions need clearer kitchen-specific concepts.",
  },
  {
    title: "Share with the decision group",
    description:
      "Family, clients, and builders respond better to clear concepts from the actual kitchen than abstract mood boards alone.",
  },
];

export default function BestAIInteriorDesignToolsForKitchensPage() {
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
              <span className="text-kivora-ink">
                Best AI interior design tools for kitchens
              </span>
            </nav>

            <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
              Best-of · Competitor Comparisons
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">
              Best AI interior design tools for kitchens
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-kivora-ink/70 md:text-xl">
              A practical list of AI interior design tools that work for kitchens
              — photo-based remodel visualizers, general interior AI, and floor
              planners — so you can match the product to the job.
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
              Best tools at a glance
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-kivora-ink/70">
              Use these when comparing AI interior design options for kitchens.
              Each card links to a deeper head-to-head where available.
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
                From kitchen photo to interior direction in three steps
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
                  desc: "Choose the interior design direction you want to explore.",
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
              Ready to try a kitchen-first interior design tool?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-kivora-ink/70">
              Upload one kitchen photo and generate realistic remodel concepts in
              seconds — built for interior decisions and sharing.
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
                  Best remodel tools
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
