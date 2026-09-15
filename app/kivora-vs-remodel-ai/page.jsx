import Link from "next/link";
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  Clock,
  Download,
  Home,
  Sparkles,
  Target,
} from "lucide-react";
import MarketingNavbar from "@/components/marketing/MarketingNavbar";
import MarketingFooter from "@/components/marketing/MarketingFooter";
import { purchaseUrl } from "@/data/commercialPages";

const SITE_URL = "https://kivora.collabtower.com";

export const metadata = {
  title: "Kivora vs Remodel AI | AI Kitchen Design Comparison 2026",
  description:
    "Kivora vs Remodel AI: compare kitchen-focused AI remodel visualization with general remodel AI tools. See which tool fits homeowners, designers, and remodel teams.",
  keywords:
    "kivora vs remodel ai, remodel ai vs kivora, kivora or remodel ai, remodel ai comparison, ai kitchen design vs remodel ai",
  alternates: {
    canonical: `${SITE_URL}/kivora-vs-remodel-ai`,
  },
  openGraph: {
    title: "Kivora vs Remodel AI | Kitchen Design Comparison",
    description:
      "Side-by-side comparison: kitchen-first AI remodel concepts vs general remodel AI tools.",
    url: `${SITE_URL}/kivora-vs-remodel-ai`,
    siteName: "Kivora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kivora vs Remodel AI",
    description:
      "Compare Kivora and Remodel AI — kitchen remodel visualization vs general remodel tools.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Kivora vs Remodel AI",
      description:
        "Comparison of Kivora AI kitchen design and Remodel AI for kitchen remodels.",
      url: `${SITE_URL}/kivora-vs-remodel-ai`,
      isPartOf: {
        "@type": "WebSite",
        name: "Kivora",
        url: SITE_URL,
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Kivora AI Kitchen Designer",
      applicationCategory: "DesignApplication",
      operatingSystem: "Web",
      description:
        "Kitchen-focused AI remodel visualization compared with Remodel AI.",
      url: SITE_URL,
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    },
  ],
};

const matrixRows = [
  {
    feature: "Primary focus",
    competitor: "General remodel / interior AI visualization",
    kivora: "Kitchen remodel visualization",
  },
  {
    feature: "Starting point",
    competitor: "Photo of a space + remodel options",
    kivora: "One kitchen photo + design direction",
  },
  {
    feature: "Best use case",
    competitor: "Exploring remodel ideas across spaces",
    kivora: "Kitchen remodel decisions and sharing",
  },
  {
    feature: "Output",
    competitor: "Remodel-style preview images",
    kivora: "Realistic kitchen remodel concepts",
  },
  {
    feature: "Audience fit",
    competitor: "Homeowners exploring general remodels",
    kivora: "Homeowners, designers, remodel teams",
  },
  {
    feature: "Time to first visual",
    competitor: "Seconds to minutes (plan-dependent)",
    kivora: "Seconds after upload",
  },
  {
    feature: "Workflow depth",
    competitor: "Broader remodel feature set",
    kivora: "Focused upload → style → generate for kitchens",
  },
  {
    feature: "Shareable output",
    competitor: "Remodel previews for inspiration",
    kivora: "High-resolution remodel concepts for decisions",
  },
];

const strengths = {
  competitor: [
    "Photo-based remodel previews for various spaces",
    "Useful for general remodel inspiration",
    "Familiar AI remodel workflow",
    "Good for broad style experiments",
  ],
  kivora: [
    "Built specifically for kitchen remodels",
    "Concepts oriented around remodel decisions",
    "Shareable visuals for family, clients, or contractors",
    "Kitchen-first path without multi-room noise",
  ],
};

const whenToChoose = [
  {
    title: "Choose Remodel AI when…",
    points: [
      "You want remodel previews across multiple room types",
      "A broader remodel product fits better than a kitchen-only tool",
      "You’re mainly looking for inspiration images, not kitchen-specific planning",
      "You prefer a multi-space remodel suite",
    ],
  },
  {
    title: "Choose Kivora when…",
    points: [
      "Your project is a kitchen remodel and you need realistic concepts from your photo",
      "You want visuals you can share with family, clients, or builders",
      "You prefer a kitchen-focused tool over a general remodel app",
      "You’re deciding on style direction before materials and contractors",
    ],
  },
];

const verdictPoints = [
  {
    title: "Same remodel idea, different scope",
    desc: "Both aim at remodel visualization from photos. Remodel AI targets broader remodel use cases. Kivora targets kitchen remodel visualization and decision-ready concepts.",
  },
  {
    title: "Breadth vs kitchen depth",
    desc: "If you need remodel previews across the home, Remodel AI can fit. If you need kitchen-specific remodel concepts you can share and act on, Kivora fits.",
  },
  {
    title: "Who wins for kitchen decisions",
    desc: "For homeowners and teams planning a kitchen remodel, a kitchen-focused tool usually reduces second-guessing faster than a general remodel product.",
  },
];

export default function KivoraVsRemodelAIPage() {
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
              <span className="text-kivora-ink">Kivora vs Remodel AI</span>
            </nav>

            <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
              Cluster · Competitor Comparisons
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">
              Kivora vs Remodel AI
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-kivora-ink/70 md:text-xl">
              Remodel AI tools help people preview remodel ideas from photos.
              Kivora is a photo-based AI kitchen remodel visualizer. This page
              breaks down the differences so you can pick the right tool for a
              kitchen remodel — or broader remodel exploration.
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
                href="/remodel-ai-alternatives"
                className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/15 px-6 py-3 text-base font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-white"
              >
                Remodel AI alternatives
              </Link>
            </div>
          </div>
        </header>

        <section className="bg-white px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
                Comparison matrix
              </p>
              <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                Side-by-side at a glance
              </h2>
            </div>

            <div className="mt-12 overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-kivora-ink/15">
                    <th className="py-4 pr-6 font-semibold text-kivora-ink">
                      Feature
                    </th>
                    <th className="py-4 pr-6 font-semibold text-kivora-ink">
                      Remodel AI
                    </th>
                    <th className="py-4 font-semibold text-kivora-purple">
                      Kivora
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {matrixRows.map((row) => (
                    <tr
                      key={row.feature}
                      className="border-b border-kivora-ink/10"
                    >
                      <td className="py-4 pr-6 font-medium text-kivora-ink">
                        {row.feature}
                      </td>
                      <td className="py-4 pr-6 text-kivora-ink/70">
                        {row.competitor}
                      </td>
                      <td className="py-4 text-kivora-ink/90">{row.kivora}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              Strengths of each tool
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <article className="border border-kivora-ink/10 bg-white p-8">
                <h3 className="text-xl font-semibold text-kivora-ink">
                  Remodel AI strengths
                </h3>
                <ul className="mt-6 space-y-3">
                  {strengths.competitor.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm leading-6 text-kivora-ink/75"
                    >
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-kivora-ink/40"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
              <article className="border border-kivora-purple/30 bg-kivora-purple/[0.04] p-8">
                <h3 className="text-xl font-semibold text-kivora-ink">
                  Kivora strengths
                </h3>
                <ul className="mt-6 space-y-3">
                  {strengths.kivora.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm leading-6 text-kivora-ink/75"
                    >
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-kivora-teal"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              When to choose which tool
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {whenToChoose.map((block) => (
                <article
                  key={block.title}
                  className="border border-kivora-ink/10 bg-kivora-cream p-8"
                >
                  <h3 className="text-xl font-semibold text-kivora-ink">
                    {block.title}
                  </h3>
                  <ul className="mt-6 space-y-3">
                    {block.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm leading-6 text-kivora-ink/75"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0 text-kivora-teal"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 border-t border-kivora-ink/10 pt-12 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
                  Verdict
                </p>
                <h2 className="max-w-md text-4xl font-semibold leading-tight md:text-5xl">
                  How to decide
                </h2>
              </div>
              <div className="space-y-8">
                {verdictPoints.map((item) => (
                  <div key={item.title}>
                    <h3 className="text-xl font-semibold text-kivora-ink">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-7 text-kivora-ink/70">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-20 md:px-8">
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

        <section className="px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl border-y border-kivora-ink/10 py-16 text-center">
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-kivora-purple/10">
              <Clock className="h-6 w-6 text-kivora-purple" />
            </div>
            <h2 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
              Ready for kitchen remodel concepts from a photo?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-kivora-ink/70">
              If a general Remodel AI tool isn’t the right fit for your kitchen
              remodel, try Kivora — upload one photo and generate realistic
              concepts in seconds.
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
                className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/20 px-6 py-3 text-base font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-white"
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
