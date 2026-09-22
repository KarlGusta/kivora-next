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
  title: "Best Tool to Visualize a Kitchen Renovation Before Construction (2026)",
  description:
    "Best tool to visualize a kitchen renovation before construction in 2026 — compare photo-based AI, planners, and design apps so you can see the remodel before demo or build starts.",
  keywords:
    "best tool to visualize a kitchen renovation before construction, visualize kitchen renovation before building, kitchen renovation preview before construction 2026",
  alternates: {
    canonical: `${SITE_URL}/best-tool-to-visualize-a-kitchen-renovation-before-construction`,
  },
  openGraph: {
    title: "Best Tool to Visualize a Kitchen Renovation Before Construction | Kivora",
    description:
      "Practical guide to tools that help you visualize a kitchen renovation before construction begins.",
    url: `${SITE_URL}/best-tool-to-visualize-a-kitchen-renovation-before-construction`,
    siteName: "Kivora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Tool to Visualize a Kitchen Renovation Before Construction 2026",
    description:
      "Compare tools to visualize a kitchen renovation before demo or build starts.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Best Tool to Visualize a Kitchen Renovation Before Construction",
      description:
        "Guide to the best tools to visualize a kitchen renovation before construction starts.",
      url: `${SITE_URL}/best-tool-to-visualize-a-kitchen-renovation-before-construction`,
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
          name: "What is the best tool to visualize a kitchen renovation before construction?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Photo-based AI tools like Kivora help you see remodel direction on your actual kitchen before demo or build. 2D/3D planners are stronger when you need measured layouts for contractors. Many people lock look with photo AI first, then refine plans if needed.",
          },
        },
        {
          "@type": "Question",
          name: "Why visualize a kitchen renovation before construction?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Seeing options before construction reduces change orders, material mistakes, and misalignment with family or contractors — when changes are still cheap.",
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
      "Photo-based AI to visualize a kitchen renovation before construction — upload one kitchen photo and generate remodel concepts so everyone aligns before demo or ordering.",
    bestFor: "Pre-construction remodel looks from your real kitchen",
    href: "/",
    cta: "Try Kivora",
  },
  {
    name: "Planner 5D",
    blurb:
      "2D/3D planner for pre-build layouts — useful when contractors need measured placement before construction starts.",
    bestFor: "Measured layout before build",
    href: "/kivora-vs-planner-5d",
    cta: "Kivora vs Planner 5D",
  },
  {
    name: "Homestyler",
    blurb:
      "Traditional 2D/3D design software — useful for detailed pre-construction plans and scenes.",
    bestFor: "Detailed plans before construction",
    href: "/kivora-vs-homestyler",
    cta: "Kivora vs Homestyler",
  },
  {
    name: "RoomGPT",
    blurb:
      "General AI room restyler — quick style looks before a renovation; less kitchen-specific than dedicated tools.",
    bestFor: "Quick multi-room style looks pre-renovation",
    href: "/kivora-vs-roomgpt",
    cta: "Kivora vs RoomGPT",
  },
  {
    name: "REimagineHome",
    blurb:
      "Photo-based home redesign tool — useful when the renovation spans more than the kitchen.",
    bestFor: "Broader home renovation visualization",
    href: "/kivora-vs-reimaginehome",
    cta: "Kivora vs REimagineHome",
  },
  {
    name: "Remodel AI",
    blurb:
      "General remodel exploration tool — inspiration-first looks before construction decisions.",
    bestFor: "General remodel look exploration pre-build",
    href: "/kivora-vs-remodel-ai",
    cta: "Kivora vs Remodel AI",
  },
  {
    name: "HomeDesignsAI",
    blurb:
      "Broader AI home design tool — useful when pre-construction concepts cover more of the home.",
    bestFor: "Broader AI home concepts before build",
    href: "/kivora-vs-homedesignsai",
    cta: "Kivora vs HomeDesignsAI",
  },
];

const pickByGoal = [
  {
    title: "See renovation options on my kitchen before demo",
    pick: "Kivora",
  },
  {
    title: "Measured layout for contractors before build",
    pick: "Planner 5D or Homestyler",
  },
  {
    title: "Quick style looks before renovation starts",
    pick: "RoomGPT",
  },
  {
    title: "Renovation spans more than the kitchen",
    pick: "REimagineHome or HomeDesignsAI",
  },
  {
    title: "General remodel inspiration before construction",
    pick: "Remodel AI",
  },
];

const tips = [
  {
    title: "Visualize when changes are still cheap",
    description:
      "Before demolition and ordering, you can still change direction without change orders. Photo concepts help lock look early.",
  },
  {
    title: "Align family and contractors first",
    description:
      "Shared visuals from the real kitchen reduce surprises once construction is underway.",
  },
  {
    title: "Look first, measurements second",
    description:
      "Many people lock renovation direction with photo AI, then use a planner for measured plans the crew needs.",
  },
  {
    title: "One photo can start the process",
    description:
      "You do not need a full set of drawings to explore renovation options — a clear kitchen photo is enough for early direction.",
  },
];

export default function BestToolToVisualizeKitchenRenovationBeforeConstructionPage() {
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
              <span className="text-kivora-ink">Before construction</span>
            </nav>

            <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
              Best-of · By decision
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">
              Best tool to visualize a kitchen renovation before construction
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-kivora-ink/70 md:text-xl">
              A practical list of tools to visualize a kitchen renovation before
              construction — photo-based AI for remodel direction, planners for
              measured pre-build plans, and design apps for broader context.
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
                What to optimize for before construction starts
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
              Best tools to visualize before construction at a glance
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-kivora-ink/70">
              Use these when comparing options for seeing a renovation before demo
              or build. Each card links to a deeper head-to-head where available.
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
              Quick picks by pre-construction goal
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
                From kitchen photo to pre-construction direction in three steps
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
                  desc: "Choose renovation directions to compare before build.",
                  icon: Sparkles,
                },
                {
                  name: "Generate",
                  desc: "Share concepts before demo, orders, or construction.",
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
              Visualize the renovation before construction starts
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-kivora-ink/70">
              Upload one kitchen photo and generate realistic renovation concepts
              in seconds — so decisions happen when changes are still cheap.
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
                  href="/best-kitchen-remodeling-software"
                  className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/20 px-5 py-3 text-sm font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-kivora-cream"
                >
                  Best remodeling software
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
