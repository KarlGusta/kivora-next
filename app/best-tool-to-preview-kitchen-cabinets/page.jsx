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
  title: "Best Tool to Preview Kitchen Cabinets (2026)",
  description:
    "Best tool to preview kitchen cabinets in 2026 — compare photo-based AI, 2D/3D planners, and design apps so you can see cabinet looks before you order.",
  keywords:
    "best tool to preview kitchen cabinets, preview kitchen cabinets, visualize kitchen cabinets, kitchen cabinet preview tool 2026",
  alternates: {
    canonical: `${SITE_URL}/best-tool-to-preview-kitchen-cabinets`,
  },
  openGraph: {
    title: "Best Tool to Preview Kitchen Cabinets | Kivora",
    description:
      "Practical guide to tools that help you preview kitchen cabinets in your real space before ordering.",
    url: `${SITE_URL}/best-tool-to-preview-kitchen-cabinets`,
    siteName: "Kivora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Tool to Preview Kitchen Cabinets 2026",
    description:
      "Compare tools to preview kitchen cabinets before you order or remodel.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Best Tool to Preview Kitchen Cabinets",
      description:
        "Guide to the best tools to preview kitchen cabinets before ordering.",
      url: `${SITE_URL}/best-tool-to-preview-kitchen-cabinets`,
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
          name: "What is the best tool to preview kitchen cabinets?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Photo-based AI tools like Kivora help you preview cabinet styles and finishes on your actual kitchen photo. 2D/3D planners are stronger when you need exact placement and measurements. Many people start with photo preview, then refine layout if needed.",
          },
        },
        {
          "@type": "Question",
          name: "Can I preview kitchen cabinets without measurements?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes for early style decisions. Photo AI preview starts from a kitchen photo and does not require exact dimensions to explore door styles, finishes, and overall look.",
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
      "Photo-based AI to preview kitchen cabinets in context — upload one kitchen photo and explore remodel looks that include cabinet direction before you order.",
    bestFor: "Cabinet style and finish looks on your real kitchen",
    href: "/",
    cta: "Try Kivora",
  },
  {
    name: "Planner 5D",
    blurb:
      "2D/3D planner with cabinet catalogs — useful when you need measured placement and catalog-style cabinet layout.",
    bestFor: "Measured cabinet layout and catalogs",
    href: "/kivora-vs-planner-5d",
    cta: "Kivora vs Planner 5D",
  },
  {
    name: "Homestyler",
    blurb:
      "Traditional 2D/3D design software — useful for detailed cabinet placement and scene-level previews.",
    bestFor: "Detailed placement and 3D scenes",
    href: "/kivora-vs-homestyler",
    cta: "Kivora vs Homestyler",
  },
  {
    name: "RoomGPT",
    blurb:
      "General AI room restyler — can suggest cabinet-area looks as part of a broader restyle; less kitchen-specific.",
    bestFor: "Quick multi-room style exploration",
    href: "/kivora-vs-roomgpt",
    cta: "Kivora vs RoomGPT",
  },
  {
    name: "REimagineHome",
    blurb:
      "Photo-based home redesign tool — useful when cabinet decisions sit inside a larger home remodel.",
    bestFor: "Broader home redesign context",
    href: "/kivora-vs-reimaginehome",
    cta: "Kivora vs REimagineHome",
  },
  {
    name: "Remodel AI",
    blurb:
      "General remodel exploration tool — inspiration-first looks that can include cabinet direction.",
    bestFor: "General remodel look exploration",
    href: "/kivora-vs-remodel-ai",
    cta: "Kivora vs Remodel AI",
  },
  {
    name: "HomeDesignsAI",
    blurb:
      "Broader AI home design tool — useful when cabinet preview is part of a wider home concept.",
    bestFor: "Broader AI home design concepts",
    href: "/kivora-vs-homedesignsai",
    cta: "Kivora vs HomeDesignsAI",
  },
];

const pickByGoal = [
  {
    title: "See cabinet styles on my actual kitchen photo",
    pick: "Kivora",
  },
  {
    title: "Measured cabinet layout and catalog placement",
    pick: "Planner 5D or Homestyler",
  },
  {
    title: "Quick style looks across rooms",
    pick: "RoomGPT",
  },
  {
    title: "Cabinets as part of a whole-home redesign",
    pick: "REimagineHome or HomeDesignsAI",
  },
  {
    title: "General remodel inspiration including cabinets",
    pick: "Remodel AI",
  },
];

const tips = [
  {
    title: "Preview before you order",
    description:
      "Cabinet mistakes are expensive. Seeing styles and finishes on your real kitchen reduces risk before a deposit or full order.",
  },
  {
    title: "Photo context beats swatches alone",
    description:
      "A finish sample on a counter is useful. A full-kitchen visual with cabinets in place is better for overall decisions.",
  },
  {
    title: "Style first, dimensions second",
    description:
      "Many people lock door style and finish with photo AI, then use a planner for exact layout when measurements matter.",
  },
  {
    title: "Share with the people who decide",
    description:
      "Family, designers, and contractors align faster when they see cabinet direction in the actual space — not only catalog pages.",
  },
];

export default function BestToolToPreviewKitchenCabinetsPage() {
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
              <span className="text-kivora-ink">Preview kitchen cabinets</span>
            </nav>

            <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
              Best-of · By decision
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">
              Best tool to preview kitchen cabinets
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-kivora-ink/70 md:text-xl">
              A practical list of tools to preview kitchen cabinets before you
              order — photo-based AI for style and finish looks, planners for
              measured placement, and design apps for broader remodel context.
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
                href="/best-tool-to-visualize-a-kitchen-remodel"
                className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/15 px-6 py-3 text-base font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-white"
              >
                Visualize a kitchen remodel
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
                What to optimize for when previewing cabinets
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
              Best tools to preview kitchen cabinets at a glance
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-kivora-ink/70">
              Use these when comparing options for seeing cabinets before you
              order. Each card links to a deeper head-to-head where available.
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
              Quick picks by cabinet preview goal
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
                From kitchen photo to cabinet direction in three steps
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
                  desc: "Explore remodel directions that include cabinet looks.",
                  icon: Sparkles,
                },
                {
                  name: "Generate",
                  desc: "Share polished previews before you order cabinets.",
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
              Preview kitchen cabinets before you order
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-kivora-ink/70">
              Upload one kitchen photo and generate remodel concepts that help you
              see cabinet direction in your real space.
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
                  href="/best-tool-to-visualize-kitchen-colors"
                  className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/20 px-5 py-3 text-sm font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-kivora-cream"
                >
                  Visualize kitchen colors
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
