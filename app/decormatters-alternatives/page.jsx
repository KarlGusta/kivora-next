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
  title: "DecorMatters Alternatives | Best AI Kitchen Design Options 2026",
  description:
    "Looking for DecorMatters alternatives? Compare Kivora for kitchen-focused AI remodel visualization. Upload one kitchen photo and get realistic concepts in seconds — built for remodel decisions.",
  keywords:
    "decormatters alternatives, decor matters alternatives, best decormatters alternatives, decormatters vs kivora, ai kitchen design, interior design app alternatives",
  alternates: {
    canonical: `${SITE_URL}/decormatters-alternatives`,
  },
  openGraph: {
    title: "DecorMatters Alternatives | Kivora",
    description:
      "Best DecorMatters alternatives for AI kitchen remodel visualization. Photo-based concepts built for kitchen decisions.",
    url: `${SITE_URL}/decormatters-alternatives`,
    siteName: "Kivora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DecorMatters Alternatives | Kivora",
    description:
      "Compare DecorMatters alternatives. Kivora focuses on realistic kitchen remodel concepts from one photo.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "DecorMatters Alternatives",
      description:
        "Best DecorMatters alternatives for AI kitchen design and remodel visualization, including Kivora.",
      url: `${SITE_URL}/decormatters-alternatives`,
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
        "Kitchen-focused AI design alternative to DecorMatters — realistic remodel concepts from one photo.",
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
    title: "Kitchen remodel specialization",
    desc: "DecorMatters focuses on interior styling, room decoration, and product discovery. Kivora is built for kitchen remodels — cabinets, finishes, and shareable concepts for the decisions that cost the most.",
    icon: Home,
  },
  {
    title: "Remodel-ready kitchen concepts",
    desc: "Get realistic kitchen visuals you can send to family, clients, or contractors — oriented around remodel direction, not only decor placement and shopping.",
    icon: Target,
  },
  {
    title: "Simple photo-to-direction path",
    desc: "Upload one kitchen photo, choose a style, and generate polished remodel concepts in seconds — minimal setup for homeowners and designers focused on the kitchen.",
    icon: Sparkles,
  },
];

const comparisonRows = [
  {
    feature: "Primary focus",
    competitor: "Interior styling, room decoration, and product discovery",
    kivora: "Kitchen remodel visualization",
  },
  {
    feature: "Starting point",
    competitor: "Room photos, AR placement, or catalog browsing",
    kivora: "One kitchen photo + design direction",
  },
  {
    feature: "Best use case",
    competitor: "Decorating and shopping for furniture and finishes",
    kivora: "Kitchen remodel decisions and sharing",
  },
  {
    feature: "Output",
    competitor: "Styled room views and product recommendations",
    kivora: "Realistic kitchen remodel concepts",
  },
  {
    feature: "Audience fit",
    competitor: "Home decorators and shoppers",
    kivora: "Homeowners, designers, remodel teams",
  },
  {
    feature: "Workflow depth",
    competitor: "Decor placement, AR, and product discovery",
    kivora: "Focused upload → style → generate for kitchens",
  },
];

const whenToChoose = [
  {
    title: "Choose DecorMatters when…",
    points: [
      "You want to style rooms and discover furniture or decor products",
      "AR placement and shopping-oriented workflows matter more than remodel concepts",
      "A general interior decoration app fits better than a kitchen remodel tool",
    ],
  },
  {
    title: "Choose Kivora when…",
    points: [
      "Your project is a kitchen remodel and you need realistic concepts from your photo",
      "You want visuals you can share with family, clients, or builders",
      "You prefer a kitchen-focused tool over a general decor and shopping app",
    ],
  },
];

const proofPoints = [
  "Built for kitchen remodels",
  "Photo-based AI concepts in seconds",
  "High-resolution downloads for sharing",
];

export default function DecorMattersAlternativesPage() {
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
              <span className="text-kivora-ink">DecorMatters Alternatives</span>
            </nav>

            <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
              Cluster · Competitor Alternatives
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">
              Best DecorMatters alternatives for AI kitchen design.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-kivora-ink/70 md:text-xl">
              DecorMatters is a popular app for interior styling, room decoration,
              and product discovery. If your goal is a kitchen remodel — not
              general decor placement or shopping — Kivora is a focused
              alternative: upload one kitchen photo and get realistic remodel
              concepts built for decisions and sharing.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={purchaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-kivora-yellow px-6 py-3 text-base font-semibold text-kivora-ink transition-colors hover:bg-kivora-purple"
              >
                Try Kivora for kitchens
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
                  Why people look for DecorMatters alternatives
                </p>
                <h2 className="max-w-md text-4xl font-semibold leading-tight md:text-5xl">
                  Decor & shopping vs kitchen remodel focus.
                </h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-kivora-ink/70">
                DecorMatters works well for styling rooms and discovering
                products. Users often search for alternatives when the project is
                a kitchen remodel, they want photo-based remodel concepts, or they
                need visuals oriented around remodel decisions rather than decor
                placement and shopping.
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
                DecorMatters vs Kivora at a glance
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
                      DecorMatters
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
                From kitchen photo to remodel direction in three steps.
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
              Ready for a DecorMatters alternative built for kitchens?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-kivora-ink/70">
              Use Kivora to generate realistic kitchen remodel concepts from one
              photo. Compare styles, share visuals, and decide with more confidence.
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
