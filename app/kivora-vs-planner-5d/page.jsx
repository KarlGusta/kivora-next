import Link from "next/link";
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  Clock,
  Download,
  Layers,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import MarketingNavbar from "@/components/marketing/MarketingNavbar";
import MarketingFooter from "@/components/marketing/MarketingFooter";
import { purchaseUrl } from "@/data/commercialPages";

const SITE_URL = "https://kivora.collabtower.com";

export const metadata = {
  title: "Kivora vs Planner 5D | AI Kitchen Design Comparison 2026",
  description:
    "Kivora vs Planner 5D: compare photo-based AI kitchen remodel visualization with traditional 2D/3D floor planning. See which tool fits homeowners, designers, and remodel teams.",
  keywords:
    "kivora vs planner 5d, planner 5d vs kivora, kivora or planner 5d, planner 5d comparison, ai kitchen design vs planner 5d, kitchen design software comparison",
  alternates: {
    canonical: `${SITE_URL}/kivora-vs-planner-5d`,
  },
  openGraph: {
    title: "Kivora vs Planner 5D | Kitchen Design Comparison",
    description:
      "Side-by-side comparison: photo-based AI kitchen remodel concepts vs traditional 2D/3D floor planning.",
    url: `${SITE_URL}/kivora-vs-planner-5d`,
    siteName: "Kivora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kivora vs Planner 5D",
    description:
      "Compare Kivora and Planner 5D for kitchen design — photo AI remodel vs floor-plan modeling.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Kivora vs Planner 5D",
      description:
        "Comparison of Kivora AI kitchen design and Planner 5D floor-planning software for kitchen remodels.",
      url: `${SITE_URL}/kivora-vs-planner-5d`,
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
        "Photo-based AI kitchen remodel visualization compared with Planner 5D.",
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
    feature: "Starting point",
    planner: "Blank floor plan or catalog placement",
    kivora: "One photo of your current kitchen",
  },
  {
    feature: "Primary job",
    planner: "Build 2D/3D layouts and furnish from catalogs",
    kivora: "Generate realistic remodel concepts from a real room",
  },
  {
    feature: "Time to first visual",
    planner: "Minutes to hours of modeling",
    kivora: "Seconds after upload",
  },
  {
    feature: "Learning curve",
    planner: "Moderate — tools, walls, catalogs, navigation",
    kivora: "Minimal — upload, choose style, generate",
  },
  {
    feature: "Precision / measurements",
    planner: "Strong — measured plans and placement",
    kivora: "Style and direction first, not CAD precision",
  },
  {
    feature: "Best for",
    planner: "Layout planning, catalog-driven designs",
    kivora: "Style exploration and remodel visualization",
  },
  {
    feature: "Shareable output",
    planner: "Plans and renders (limits vary by plan)",
    kivora: "High-resolution remodel concepts",
  },
  {
    feature: "Audience fit",
    planner: "DIY planners and users building from scratch",
    kivora: "Homeowners, designers, remodel teams",
  },
];

const strengths = {
  planner: [
    "Detailed 2D floor plans and 3D room builds",
    "Large furniture and material catalogs",
    "Useful when you need measured layout control",
    "Works well for whole-room planning from a blank slate",
  ],
  kivora: [
    "Starts from a real kitchen photo — no blank canvas",
    "Multiple style directions in seconds",
    "Built for remodel decisions and sharing with family or contractors",
    "Minimal learning curve for non-designers",
  ],
};

const whenToChoose = [
  {
    title: "Choose Planner 5D when…",
    points: [
      "You need precise 2D floor plans and measured layouts",
      "You want to place cabinets and furniture from a catalog",
      "You’re comfortable building a scene from scratch",
      "Layout geometry matters more than photo-realistic style previews",
    ],
  },
  {
    title: "Choose Kivora when…",
    points: [
      "You already have a kitchen photo and want remodel ideas fast",
      "You care more about realistic style previews than CAD precision",
      "You need shareable visuals for family, clients, or contractors",
      "You want to compare modern, rustic, luxury, or minimalist directions quickly",
    ],
  },
];

const verdictPoints = [
  {
    title: "Same category, different jobs",
    desc: "Planner 5D is a floor-planning and 3D design tool. Kivora is an AI kitchen remodel visualizer. Many people use both at different stages — or pick one based on whether they need plans or photo-based concepts.",
  },
  {
    title: "Speed vs control",
    desc: "If you need control over every wall and object, Planner 5D wins. If you need realistic remodel direction from your actual kitchen in seconds, Kivora wins.",
  },
  {
    title: "Who wins for remodel decisions",
    desc: "For homeowners and teams deciding on style before materials and contractors, photo-based concepts often reduce second-guessing faster than building a full 3D scene.",
  },
];

export default function KivoraVsPlanner5DPage() {
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
              <Link href="/alternatives" className="hover:text-kivora-ink">
                Alternatives
              </Link>
              <span>/</span>
              <span className="text-kivora-ink">Kivora vs Planner 5D</span>
            </nav>

            <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
              Comparison · Competitor matrix
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">
              Kivora vs Planner 5D
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-kivora-ink/70 md:text-xl">
              Planner 5D is a popular 2D/3D floor-planning tool. Kivora is a
              photo-based AI kitchen remodel visualizer. This page breaks down
              the differences so you can pick the right tool — or use both at
              the right stage of your remodel.
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
                href="/planner-5d-alternatives"
                className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/15 px-6 py-3 text-base font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-white"
              >
                Planner 5D alternatives
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
                      Planner 5D
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
                        {row.planner}
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
                  Planner 5D strengths
                </h3>
                <ul className="mt-6 space-y-3">
                  {strengths.planner.map((point) => (
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
                From photo to remodel direction in three steps
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
                  desc: "Receive polished remodel concepts in seconds.",
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
              Ready to see your kitchen remodeled from a photo?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-kivora-ink/70">
              If Planner 5D’s modeling workflow isn’t the right fit for your
              next decision, try Kivora — upload one photo and generate realistic
              remodel concepts in seconds.
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
                href="/alternatives"
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
