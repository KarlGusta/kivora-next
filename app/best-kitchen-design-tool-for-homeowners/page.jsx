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
  title: "Best Kitchen Design Tool for Homeowners (2026) | Easy AI & Planners",
  description:
    "Best kitchen design tool for homeowners in 2026 — compare photo-based AI remodel tools, simple online planners, and general design apps built for non-professionals.",
  keywords:
    "best kitchen design tool for homeowners, kitchen design for homeowners, easy kitchen design tool, ai kitchen design homeowners 2026, homeowner kitchen planner",
  alternates: {
    canonical: `${SITE_URL}/best-kitchen-design-tool-for-homeowners`,
  },
  openGraph: {
    title: "Best Kitchen Design Tool for Homeowners | Kivora",
    description:
      "Practical guide to the best kitchen design tools for homeowners — photo AI, simple planners, and easy design apps.",
    url: `${SITE_URL}/best-kitchen-design-tool-for-homeowners`,
    siteName: "Kivora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Kitchen Design Tool for Homeowners 2026",
    description:
      "Compare the best kitchen design tools built for homeowners — not just professionals.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Best Kitchen Design Tool for Homeowners",
      description:
        "Guide to the best kitchen design tools for homeowners planning a remodel.",
      url: `${SITE_URL}/best-kitchen-design-tool-for-homeowners`,
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
          name: "What is the best kitchen design tool for homeowners?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The best kitchen design tool for homeowners is usually one that is easy to start, produces clear visuals from a real kitchen photo or simple plan, and helps you share decisions with family and contractors. Photo-based AI tools like Kivora are strong for that workflow.",
          },
        },
        {
          "@type": "Question",
          name: "Do homeowners need professional design software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not for early decisions. Many homeowners use photo AI or simple planners to lock style and direction, then bring a designer or contractor in for measured plans and construction details.",
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
      "Photo-based AI kitchen design tool built for homeowners — upload one kitchen photo and generate realistic remodel concepts without learning 3D software.",
    bestFor: "Fast remodel direction from your real kitchen",
    href: "/",
    cta: "Try Kivora",
  },
  {
    name: "Planner 5D",
    blurb:
      "2D/3D floor planner with catalogs — useful for homeowners who want to place cabinets and furniture on a measured plan.",
    bestFor: "Layout planning when you have dimensions",
    href: "/kivora-vs-planner-5d",
    cta: "Kivora vs Planner 5D",
  },
  {
    name: "Homestyler",
    blurb:
      "Traditional online design tool — useful when you want floor plans and catalog scenes; steeper learning curve than photo AI.",
    bestFor: "Measured plans and 3D scenes",
    href: "/kivora-vs-homestyler",
    cta: "Kivora vs Homestyler",
  },
  {
    name: "RoomGPT",
    blurb:
      "General AI room restyler — easy for homeowners exploring style across rooms; less kitchen-specific than dedicated tools.",
    bestFor: "Quick multi-room style ideas",
    href: "/kivora-vs-roomgpt",
    cta: "Kivora vs RoomGPT",
  },
  {
    name: "REimagineHome",
    blurb:
      "Photo-based home redesign tool — useful when homeowners are redesigning more than the kitchen.",
    bestFor: "Broad home redesign exploration",
    href: "/kivora-vs-reimaginehome",
    cta: "Kivora vs REimagineHome",
  },
  {
    name: "Remodel AI",
    blurb:
      "General remodel exploration tool — inspiration-first for homeowners comparing remodel looks.",
    bestFor: "General remodel look exploration",
    href: "/kivora-vs-remodel-ai",
    cta: "Kivora vs Remodel AI",
  },
  {
    name: "HomeDesignsAI",
    blurb:
      "Broader AI home design tool — useful when homeowners want AI ideas across more of the home.",
    bestFor: "Broader AI home design",
    href: "/kivora-vs-homedesignsai",
    cta: "Kivora vs HomeDesignsAI",
  },
];

const pickByGoal = [
  {
    title: "I want remodel ideas from my kitchen photo — no 3D skills",
    pick: "Kivora",
  },
  {
    title: "I have measurements and want a layout plan",
    pick: "Planner 5D or Homestyler",
  },
  {
    title: "I want quick style ideas for several rooms",
    pick: "RoomGPT",
  },
  {
    title: "I’m redesigning more than the kitchen",
    pick: "REimagineHome or HomeDesignsAI",
  },
  {
    title: "I’m exploring general remodel looks",
    pick: "Remodel AI",
  },
];

const tips = [
  {
    title: "Homeowner-first means easy to start",
    description:
      "If a tool requires a long setup or 3D training before you see a useful image, it may not fit how most homeowners plan a remodel.",
  },
  {
    title: "Your real kitchen beats a blank canvas",
    description:
      "Photo-based tools help you judge style on your actual space. Blank planners are stronger when layout and dimensions come first.",
  },
  {
    title: "Share with family and contractors",
    description:
      "The best homeowner tools produce visuals you can send in a group chat or contractor email — not only files locked inside software.",
  },
  {
    title: "You can combine tools",
    description:
      "Many homeowners lock style with photo AI, then refine layout in a planner — or the reverse if measurements come first.",
  },
];

export default function BestKitchenDesignToolForHomeownersPage() {
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
              <span className="text-kivora-ink">Best for homeowners</span>
            </nav>

            <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
              Best-of · By user
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">
              Best kitchen design tool for homeowners
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-kivora-ink/70 md:text-xl">
              A practical list of kitchen design tools built for homeowners — not
              only professionals — so you can pick something easy to start, clear
              to share, and useful before you remodel.
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
                href="/best-virtual-kitchen-designer"
                className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/15 px-6 py-3 text-base font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-white"
              >
                Best virtual kitchen designer
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
                What homeowners should optimize for
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
              Best kitchen design tools for homeowners at a glance
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-kivora-ink/70">
              Use these when comparing options as a homeowner. Each card links to
              a deeper head-to-head where available.
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
              Quick picks by homeowner goal
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
              Ready for a kitchen design tool built for homeowners?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-kivora-ink/70">
              Upload one kitchen photo and generate realistic remodel concepts in
              seconds — no 3D training required.
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
                  href="/best-ai-kitchen-design-tools"
                  className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/20 px-5 py-3 text-sm font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-kivora-cream"
                >
                  Best AI design tools
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
