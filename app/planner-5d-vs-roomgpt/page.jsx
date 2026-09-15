import Link from "next/link";
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  Clock,
  Download,
  Sparkles,
} from "lucide-react";
import MarketingNavbar from "@/components/marketing/MarketingNavbar";
import MarketingFooter from "@/components/marketing/MarketingFooter";
import { purchaseUrl } from "@/data/commercialPages";

const SITE_URL = "https://kivora.collabtower.com";

export const metadata = {
  title: "Planner 5D vs RoomGPT vs Kivora | Kitchen Design Comparison 2026",
  description:
    "Planner 5D vs RoomGPT vs Kivora: compare traditional 3D floor planning, general AI room restyling, and kitchen-focused AI remodel visualization. See which fits homeowners and remodel teams.",
  keywords:
    "planner 5d vs roomgpt, roomgpt vs planner 5d, planner 5d vs roomgpt vs kivora, kitchen design comparison, ai room design vs 3d planner",
  alternates: {
    canonical: `${SITE_URL}/planner-5d-vs-roomgpt`,
  },
  openGraph: {
    title: "Planner 5D vs RoomGPT vs Kivora",
    description:
      "Three-way comparison: 3D floor planning vs general AI room restyles vs kitchen-focused AI remodel concepts.",
    url: `${SITE_URL}/planner-5d-vs-roomgpt`,
    siteName: "Kivora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Planner 5D vs RoomGPT vs Kivora",
    description:
      "Compare Planner 5D, RoomGPT, and Kivora for kitchen design and remodel visualization.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Planner 5D vs RoomGPT vs Kivora",
      description:
        "Comparison of Planner 5D, RoomGPT, and Kivora for kitchen design and remodel visualization.",
      url: `${SITE_URL}/planner-5d-vs-roomgpt`,
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
        "Kitchen-focused AI remodel visualization compared with Planner 5D and RoomGPT.",
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
    roomgpt: "Photo + room type + style preset",
    kivora: "One kitchen photo + design direction",
  },
  {
    feature: "Primary job",
    planner: "Build 2D/3D layouts and furnish from catalogs",
    roomgpt: "Restyle any room for inspiration",
    kivora: "Generate kitchen remodel concepts",
  },
  {
    feature: "Time to first visual",
    planner: "Minutes to hours of modeling",
    roomgpt: "Seconds (credit-based)",
    kivora: "Seconds after upload",
  },
  {
    feature: "Learning curve",
    planner: "Moderate — tools, walls, catalogs",
    roomgpt: "Low — photo in, style out",
    kivora: "Minimal — upload, style, generate",
  },
  {
    feature: "Best for",
    planner: "Measured plans and 3D room builds",
    roomgpt: "Fast restyles across room types",
    kivora: "Kitchen remodel decisions and sharing",
  },
  {
    feature: "Precision",
    planner: "Strong — measured layout control",
    roomgpt: "Style-first, not measured",
    kivora: "Style and direction, not CAD",
  },
  {
    feature: "Kitchen focus",
    planner: "Possible, but general-purpose",
    roomgpt: "One of many room types",
    kivora: "Built for kitchen remodels",
  },
  {
    feature: "Shareable output",
    planner: "Plans and renders",
    roomgpt: "Restyle images for inspiration",
    kivora: "High-res remodel concepts",
  },
];

const whenToChoose = [
  {
    title: "Choose Planner 5D when…",
    points: [
      "You need precise 2D floor plans and measured 3D layouts",
      "You want to place furniture and cabinets from a catalog",
      "You’re comfortable building a scene from scratch",
    ],
  },
  {
    title: "Choose RoomGPT when…",
    points: [
      "You want quick restyles for bedrooms, living rooms, or multiple room types",
      "You mainly need inspiration images, not measured plans",
      "A credit-based, try-a-few-styles workflow is enough",
    ],
  },
  {
    title: "Choose Kivora when…",
    points: [
      "Your project is a kitchen remodel and you need realistic concepts from your photo",
      "You want visuals you can share with family, clients, or builders",
      "You prefer a kitchen-focused tool over general planning or restyling",
    ],
  },
];

const verdictPoints = [
  {
    title: "Three different jobs",
    desc: "Planner 5D is a floor-planning and 3D design tool. RoomGPT is a general AI room restyler. Kivora is a kitchen-focused AI remodel visualizer. They solve overlapping but distinct problems.",
  },
  {
    title: "Plans vs inspiration vs remodel decisions",
    desc: "Need measured layouts? Planner 5D. Need fast restyle inspiration across rooms? RoomGPT. Need kitchen remodel concepts from your actual photo to share and decide? Kivora.",
  },
  {
    title: "Who wins for kitchen remodels",
    desc: "For homeowners and teams planning a kitchen remodel, a kitchen-focused photo-to-concept path usually reduces second-guessing faster than general planning or multi-room restyles.",
  },
];

export default function Planner5DVsRoomGPTPage() {
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
              <span className="text-kivora-ink">Planner 5D vs RoomGPT</span>
            </nav>

            <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
              Cluster · Competitor Comparisons
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">
              Planner 5D vs RoomGPT vs Kivora
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-kivora-ink/70 md:text-xl">
              People comparing Planner 5D and RoomGPT are usually choosing between
              traditional 3D floor planning and fast AI room restyles. Kivora is a
              third path: photo-based AI kitchen remodel visualization built for
              remodel decisions and sharing.
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
                href="/comparisons"
                className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/15 px-6 py-3 text-base font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-white"
              >
                All comparisons
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
              <table className="w-full min-w-[800px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-kivora-ink/15">
                    <th className="py-4 pr-4 font-semibold text-kivora-ink">
                      Feature
                    </th>
                    <th className="py-4 pr-4 font-semibold text-kivora-ink">
                      Planner 5D
                    </th>
                    <th className="py-4 pr-4 font-semibold text-kivora-ink">
                      RoomGPT
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
                      <td className="py-4 pr-4 font-medium text-kivora-ink">
                        {row.feature}
                      </td>
                      <td className="py-4 pr-4 text-kivora-ink/70">
                        {row.planner}
                      </td>
                      <td className="py-4 pr-4 text-kivora-ink/70">
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
            <div className="mt-12 grid gap-6 md:grid-cols-3">
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
              Comparing Planner 5D and RoomGPT for a kitchen remodel?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-kivora-ink/70">
              If neither measured 3D planning nor general room restyles are the
              right fit, try Kivora — upload one kitchen photo and generate
              realistic remodel concepts in seconds.
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
                  href="/kivora-vs-planner-5d"
                  className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/20 px-5 py-3 text-sm font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-kivora-cream"
                >
                  Kivora vs Planner 5D
                </Link>
                <Link
                  href="/kivora-vs-roomgpt"
                  className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/20 px-5 py-3 text-sm font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-kivora-cream"
                >
                  Kivora vs RoomGPT
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
