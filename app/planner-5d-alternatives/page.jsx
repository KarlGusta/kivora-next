import Link from "next/link";
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  Clock,
  Download,
  Layers,
  Sparkles,
  Zap,
} from "lucide-react";
import MarketingNavbar from "@/components/marketing/MarketingNavbar";
import MarketingFooter from "@/components/marketing/MarketingFooter";
import { purchaseUrl } from "@/data/commercialPages";

const SITE_URL = "https://kivora.collabtower.com";

export const metadata = {
  title: "Planner 5D Alternatives | Best AI Kitchen Design Options 2026",
  description:
    "Looking for Planner 5D alternatives? Compare Kivora and other options for kitchen design. Get realistic AI remodel concepts from one photo — no heavy 3D modeling required.",
  keywords:
    "planner 5d alternatives, best planner 5d alternatives, planner 5d vs kivora, free planner 5d alternatives, ai kitchen design, kitchen design software alternatives",
  alternates: {
    canonical: `${SITE_URL}/planner-5d-alternatives`,
  },
  openGraph: {
    title: "Planner 5D Alternatives | Kivora",
    description:
      "Best Planner 5D alternatives for AI kitchen design and remodel visualization. Upload one photo, get realistic concepts in seconds.",
    url: `${SITE_URL}/planner-5d-alternatives`,
    siteName: "Kivora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Planner 5D Alternatives | Kivora",
    description:
      "Compare Planner 5D alternatives. Kivora turns one kitchen photo into realistic remodel concepts in seconds.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Planner 5D Alternatives",
      description:
        "Best Planner 5D alternatives for AI kitchen design and remodel visualization, including Kivora.",
      url: `${SITE_URL}/planner-5d-alternatives`,
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
        "Photo-based AI kitchen design alternative to Planner 5D — realistic remodel concepts from one upload.",
      url: SITE_URL,
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    },
  ],
};

const reasons = [
  {
    title: "No heavy 3D modeling",
    desc: "Planner 5D centers on drag-and-drop floor plans and catalogs. Kivora starts from a real photo of your kitchen and generates remodel concepts in seconds.",
    icon: Camera,
  },
  {
    title: "Faster visual decisions",
    desc: "Get multiple style directions quickly so you can share realistic visuals with family, clients, or contractors without building a full 3D scene.",
    icon: Zap,
  },
  {
    title: "Grounded in your space",
    desc: "Concepts stay tied to your actual layout, light, and existing room — not a generic blank canvas or stock template.",
    icon: Layers,
  },
];

const comparisonRows = [
  {
    feature: "Starting point",
    planner: "Blank floor plan or catalog placement",
    kivora: "One photo of your current kitchen",
  },
  {
    feature: "Primary workflow",
    planner: "Manual 2D/3D layout and furnishing",
    kivora: "AI remodel concepts from a real room",
  },
  {
    feature: "Time to first visual",
    planner: "Minutes to hours of modeling",
    kivora: "Seconds after upload",
  },
  {
    feature: "Best for",
    planner: "Detailed floor plans and catalog-driven layouts",
    kivora: "Style exploration and remodel visualization",
  },
  {
    feature: "Learning curve",
    planner: "Moderate — tools and catalog navigation",
    kivora: "Minimal — upload, choose style, generate",
  },
  {
    feature: "Shareable output",
    planner: "Renders and plans (limits vary by plan)",
    kivora: "High-resolution remodel concepts",
  },
];

const whenToChoose = [
  {
    title: "Choose Planner 5D when…",
    points: [
      "You need precise 2D floor plans and measured layouts",
      "You want a large furniture and material catalog",
      "You’re comfortable building a scene from scratch",
    ],
  },
  {
    title: "Choose Kivora when…",
    points: [
      "You already have a kitchen photo and want remodel ideas fast",
      "You care more about realistic style previews than CAD precision",
      "You need shareable visuals for family, clients, or contractors",
    ],
  },
];

const proofPoints = [
  "Photo-based AI kitchen design",
  "Multiple style directions from one upload",
  "High-resolution downloads for sharing",
];

export default function Planner5DAlternativesPage() {
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
              <span className="text-kivora-ink">Planner 5D Alternatives</span>
            </nav>

            <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
              Cluster · Competitor Alternatives
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">
              Best Planner 5D alternatives for AI kitchen design.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-kivora-ink/70 md:text-xl">
              Planner 5D is a solid floor-planning tool. If you want faster,
              photo-based remodel visualization instead of building a full 3D
              scene, Kivora is a strong alternative — upload one kitchen photo and
              generate realistic concepts in seconds.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={purchaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-kivora-yellow px-6 py-3 text-base font-semibold text-kivora-ink transition-colors hover:bg-kivora-purple"
              >
                Try Kivora free to start
                <ArrowRight size={18} />
              </a>
              <Link
                href="/alternatives"
                className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/15 px-6 py-3 text-base font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-white"
              >
                All alternatives
              </Link>
            </div>

            <div className="mt-16 grid gap-5 border-y border-kivora-ink/10 py-7 md:grid-cols-3">
              {proofPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3 text-sm font-medium text-kivora-ink/80"
                >
                  <CheckCircle2 size={17} className="shrink-0 text-kivora-teal" />
                  {point}
                </div>
              ))}
            </div>
          </div>
        </header>

        <section className="px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 border-t border-kivora-ink/10 pt-12 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
                  Why people look for Planner 5D alternatives
                </p>
                <h2 className="max-w-md text-4xl font-semibold leading-tight md:text-5xl">
                  Different jobs, different tools.
                </h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-kivora-ink/70">
                Many users search for Planner 5D alternatives because they want
                quicker visual answers, fewer render limits, or a workflow that
                starts from a real photo rather than a blank plan. Kivora focuses
                on that photo-to-concept path for kitchen remodels.
              </p>
            </div>

            <div className="mt-16 grid border-t border-kivora-ink/10 md:grid-cols-3">
              {reasons.map((item) => (
                <article
                  key={item.title}
                  className="border-b border-kivora-ink/10 py-10 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
                >
                  <item.icon className="mb-6 h-6 w-6 text-kivora-teal" />
                  <h3 className="text-xl font-semibold text-kivora-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-kivora-ink/70">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
                Side-by-side
              </p>
              <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                Planner 5D vs Kivora at a glance
              </h2>
            </div>

            <div className="mt-12 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm">
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
                  {comparisonRows.map((row) => (
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
              When to choose which tool
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {whenToChoose.map((block) => (
                <article
                  key={block.title}
                  className="border border-kivora-ink/10 bg-white p-8"
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

        <section className="bg-white px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
                How Kivora works as an alternative
              </p>
              <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                From photo to remodel direction in three steps.
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
                <article key={step.name} className="border-t border-kivora-ink/15 pt-8">
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
              Ready for a Planner 5D alternative that starts from your photo?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-kivora-ink/70">
              Use Kivora to generate realistic kitchen remodel concepts in seconds.
              Compare styles, share visuals, and decide with more confidence.
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
                href="/ai-kitchen-designer"
                className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/20 px-6 py-3 text-base font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-white"
              >
                AI Kitchen Design pillar
              </Link>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}
