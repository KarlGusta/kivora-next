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
  title: "RoomGPT Alternatives | Best AI Kitchen Design Options 2026",
  description:
    "Looking for RoomGPT alternatives? Compare Kivora for kitchen-focused AI remodel visualization. Upload one kitchen photo and get realistic concepts in seconds — built for remodel decisions, not generic room restyles.",
  keywords:
    "roomgpt alternatives, best roomgpt alternatives, roomgpt vs kivora, ai room design alternatives, ai kitchen design, roomgpt alternative for kitchens",
  alternates: {
    canonical: `${SITE_URL}/roomgpt-alternatives`,
  },
  openGraph: {
    title: "RoomGPT Alternatives | Kivora",
    description:
      "Best RoomGPT alternatives for AI kitchen remodel visualization. Photo-based concepts built for kitchen decisions.",
    url: `${SITE_URL}/roomgpt-alternatives`,
    siteName: "Kivora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RoomGPT Alternatives | Kivora",
    description:
      "Compare RoomGPT alternatives. Kivora focuses on realistic kitchen remodel concepts from one photo.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "RoomGPT Alternatives",
      description:
        "Best RoomGPT alternatives for AI kitchen design and remodel visualization, including Kivora.",
      url: `${SITE_URL}/roomgpt-alternatives`,
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
        "Kitchen-focused AI design alternative to RoomGPT — realistic remodel concepts from one photo.",
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
    title: "Kitchen-first, not every-room",
    desc: "RoomGPT redesigns any room type with style presets. Kivora is built for kitchen remodels — cabinets, finishes, layout feel, and shareable concepts for remodel decisions.",
    icon: Home,
  },
  {
    title: "Remodel-ready output",
    desc: "Get realistic kitchen concepts you can send to family, clients, or contractors — not just a generic restyle image for inspiration.",
    icon: Target,
  },
  {
    title: "Clearer path to a decision",
    desc: "Compare styles on your actual kitchen photo, then move forward with less second-guessing before materials and contractors.",
    icon: Sparkles,
  },
];

const comparisonRows = [
  {
    feature: "Primary focus",
    roomgpt: "General room redesign (any room type)",
    kivora: "Kitchen remodel visualization",
  },
  {
    feature: "Starting point",
    roomgpt: "Photo + room type + style preset",
    kivora: "One kitchen photo + design direction",
  },
  {
    feature: "Best use case",
    roomgpt: "Fast style exploration across rooms",
    kivora: "Kitchen remodel decisions and sharing",
  },
  {
    feature: "Output",
    roomgpt: "Restyled room images",
    kivora: "Realistic kitchen remodel concepts",
  },
  {
    feature: "Audience fit",
    roomgpt: "Homeowners, renters, general inspiration",
    kivora: "Homeowners, designers, remodel teams",
  },
  {
    feature: "Pricing model",
    roomgpt: "Credits / limited free generations",
    kivora: "Simple paid plans for the full experience",
  },
];

const whenToChoose = [
  {
    title: "Choose RoomGPT when…",
    points: [
      "You want quick restyles for bedrooms, living rooms, or multiple room types",
      "You mainly need inspiration images, not kitchen-specific remodel planning",
      "A credit-based, try-a-few-styles workflow is enough",
    ],
  },
  {
    title: "Choose Kivora when…",
    points: [
      "Your project is a kitchen remodel and you need realistic concepts from your photo",
      "You want visuals you can share with family, clients, or builders",
      "You prefer a kitchen-focused tool over a general room redesign app",
    ],
  },
];

const proofPoints = [
  "Built for kitchen remodels",
  "Photo-based AI concepts in seconds",
  "High-resolution downloads for sharing",
];

export default function RoomGPTAlternativesPage() {
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
              <span className="text-kivora-ink">RoomGPT Alternatives</span>
            </nav>

            <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
              Cluster · Competitor Alternatives
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">
              Best RoomGPT alternatives for AI kitchen design.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-kivora-ink/70 md:text-xl">
              RoomGPT is a popular AI tool for restyling rooms from a photo. If
              your goal is a kitchen remodel — not a generic room restyle —
              Kivora is a strong alternative: upload one kitchen photo and get
              realistic remodel concepts built for decisions and sharing.
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
                  Why people look for RoomGPT alternatives
                </p>
                <h2 className="max-w-md text-4xl font-semibold leading-tight md:text-5xl">
                  Same photo workflow. Different job.
                </h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-kivora-ink/70">
                RoomGPT excels at quick restyles across many room types. Users
                often search for alternatives when they need kitchen-specific
                remodel visualization, clearer commercial or remodel use cases,
                or a product focused on the space they’re actually renovating.
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
                RoomGPT vs Kivora at a glance
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
                      RoomGPT
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
                        {row.roomgpt}
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
              Ready for a RoomGPT alternative built for kitchens?
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
