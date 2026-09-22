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
  title: "Best Tool to Try Different Kitchen Styles (2026)",
  description:
    "Best tool to try different kitchen styles in 2026 — compare photo-based AI, room restylers, and design apps so you can test modern, traditional, farmhouse, and more before you remodel.",
  keywords:
    "best tool to try different kitchen styles, try kitchen styles, kitchen style visualizer, kitchen style ideas tool 2026",
  alternates: {
    canonical: `${SITE_URL}/best-tool-to-try-different-kitchen-styles`,
  },
  openGraph: {
    title: "Best Tool to Try Different Kitchen Styles | Kivora",
    description:
      "Practical guide to tools that help you try different kitchen styles on your real kitchen before you remodel.",
    url: `${SITE_URL}/best-tool-to-try-different-kitchen-styles`,
    siteName: "Kivora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Tool to Try Different Kitchen Styles 2026",
    description:
      "Compare tools to try modern, traditional, farmhouse, and more kitchen styles before you remodel.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Best Tool to Try Different Kitchen Styles",
      description:
        "Guide to the best tools to try different kitchen styles before remodeling.",
      url: `${SITE_URL}/best-tool-to-try-different-kitchen-styles`,
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
          name: "What is the best tool to try different kitchen styles?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Photo-based AI tools like Kivora are strong when you want to try multiple kitchen styles on your actual kitchen photo. General room AI tools help with quick style experiments. Planners are better once you need measured layout after style is locked.",
          },
        },
        {
          "@type": "Question",
          name: "Can I try kitchen styles without knowing my exact dimensions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Photo AI style tools start from a kitchen photo and do not require measurements for early style exploration — modern, traditional, farmhouse, and more.",
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
      "Photo-based AI to try different kitchen styles — upload one kitchen photo and generate remodel concepts across style directions before you commit.",
    bestFor: "Trying multiple styles on your real kitchen",
    href: "/",
    cta: "Try Kivora",
  },
  {
    name: "RoomGPT",
    blurb:
      "General AI room restyler — fast for cycling through style looks across rooms, including kitchens.",
    bestFor: "Quick multi-room style experiments",
    href: "/kivora-vs-roomgpt",
    cta: "Kivora vs RoomGPT",
  },
  {
    name: "REimagineHome",
    blurb:
      "Photo-based home redesign tool — useful when kitchen style decisions sit inside a larger home aesthetic.",
    bestFor: "Broader home style exploration",
    href: "/kivora-vs-reimaginehome",
    cta: "Kivora vs REimagineHome",
  },
  {
    name: "Remodel AI",
    blurb:
      "General remodel exploration tool — inspiration-first style looks across spaces.",
    bestFor: "General remodel style exploration",
    href: "/kivora-vs-remodel-ai",
    cta: "Kivora vs Remodel AI",
  },
  {
    name: "HomeDesignsAI",
    blurb:
      "Broader AI home design tool — useful when kitchen styles are part of a wider home concept.",
    bestFor: "Broader AI home style concepts",
    href: "/kivora-vs-homedesignsai",
    cta: "Kivora vs HomeDesignsAI",
  },
  {
    name: "Planner 5D",
    blurb:
      "2D/3D planner with style and catalog options — stronger once you want style applied to a measured layout.",
    bestFor: "Styles on a measured floor plan",
    href: "/kivora-vs-planner-5d",
    cta: "Kivora vs Planner 5D",
  },
  {
    name: "Homestyler",
    blurb:
      "Traditional 2D/3D design software — useful for detailed style scenes after direction is chosen.",
    bestFor: "Detailed style scenes and plans",
    href: "/kivora-vs-homestyler",
    cta: "Kivora vs Homestyler",
  },
];

const pickByGoal = [
  {
    title: "Try several styles on my actual kitchen photo",
    pick: "Kivora",
  },
  {
    title: "Quick style experiments across rooms",
    pick: "RoomGPT",
  },
  {
    title: "Kitchen style as part of a whole-home look",
    pick: "REimagineHome or HomeDesignsAI",
  },
  {
    title: "General remodel style inspiration",
    pick: "Remodel AI",
  },
  {
    title: "Apply a chosen style to a measured layout",
    pick: "Planner 5D or Homestyler",
  },
];

const tips = [
  {
    title: "Try styles on your kitchen, not only mood boards",
    description:
      "Pinterest looks different in your lighting and layout. Photo-based tools show how a style reads in your real space.",
  },
  {
    title: "Compare a few directions side by side",
    description:
      "Modern vs traditional vs farmhouse is easier when you see options on the same kitchen photo instead of guessing from catalogs.",
  },
  {
    title: "Lock style before layout details",
    description:
      "Many people explore style with photo AI first, then use a planner only if measurements and placement need to be exact.",
  },
  {
    title: "Share style options early",
    description:
      "Family and contractors decide faster when they see style concepts on the actual kitchen — not only verbal descriptions.",
  },
];

export default function BestToolToTryDifferentKitchenStylesPage() {
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
              <span className="text-kivora-ink">Try different kitchen styles</span>
            </nav>

            <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
              Best-of · By decision
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">
              Best tool to try different kitchen styles
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-kivora-ink/70 md:text-xl">
              A practical list of tools to try different kitchen styles before you
              remodel — photo-based AI for real-space looks, room restylers for
              quick experiments, and planners for style on a measured layout.
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
                What to optimize for when trying kitchen styles
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
              Best tools to try different kitchen styles at a glance
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-kivora-ink/70">
              Use these when comparing options for testing styles before you
              remodel. Each card links to a deeper head-to-head where available.
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
              Quick picks by style exploration goal
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
                From kitchen photo to style options in three steps
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
                  desc: "Choose directions to try — modern, traditional, and more.",
                  icon: Sparkles,
                },
                {
                  name: "Generate",
                  desc: "Compare polished style concepts side by side.",
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
              Try different kitchen styles before you remodel
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-kivora-ink/70">
              Upload one kitchen photo and generate remodel concepts across style
              directions — so you can compare looks before materials and labor.
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
