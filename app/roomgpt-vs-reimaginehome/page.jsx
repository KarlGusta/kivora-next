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
  title: "RoomGPT vs REimagineHome vs Kivora | AI Design Comparison 2026",
  description:
    "RoomGPT vs REimagineHome vs Kivora: compare general AI room restyling, broad photo-based home redesign, and kitchen-focused AI remodel visualization. See which fits homeowners and remodel teams.",
  keywords:
    "roomgpt vs reimaginehome, reimaginehome vs roomgpt, roomgpt vs reimaginehome vs kivora, ai room design comparison, ai home redesign comparison",
  alternates: {
    canonical: `${SITE_URL}/roomgpt-vs-reimaginehome`,
  },
  openGraph: {
    title: "RoomGPT vs REimagineHome vs Kivora",
    description:
      "Three-way comparison: general AI room restyles vs broad home redesign vs kitchen-focused AI remodel concepts.",
    url: `${SITE_URL}/roomgpt-vs-reimaginehome`,
    siteName: "Kivora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RoomGPT vs REimagineHome vs Kivora",
    description:
      "Compare RoomGPT, REimagineHome, and Kivora for AI room design and kitchen remodel visualization.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "RoomGPT vs REimagineHome vs Kivora",
      description:
        "Comparison of RoomGPT, REimagineHome, and Kivora for AI design and kitchen remodel visualization.",
      url: `${SITE_URL}/roomgpt-vs-reimaginehome`,
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
        "Kitchen-focused AI remodel visualization compared with RoomGPT and REimagineHome.",
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
    roomgpt: "General room redesign (any room type)",
    reimagine: "Broad photo-based home and room redesign",
    kivora: "Kitchen remodel visualization",
  },
  {
    feature: "Starting point",
    roomgpt: "Photo + room type + style preset",
    reimagine: "Photo of a space + redesign options",
    kivora: "One kitchen photo + design direction",
  },
  {
    feature: "Best use case",
    roomgpt: "Fast style exploration across rooms",
    reimagine: "Exploring redesigns across rooms and styles",
    kivora: "Kitchen remodel decisions and sharing",
  },
  {
    feature: "Output",
    roomgpt: "Restyled room images",
    reimagine: "Redesigned room images from photos",
    kivora: "Realistic kitchen remodel concepts",
  },
  {
    feature: "Audience fit",
    roomgpt: "Homeowners, renters, general inspiration",
    reimagine: "Homeowners exploring general redesigns",
    kivora: "Homeowners, designers, remodel teams",
  },
  {
    feature: "Time to first visual",
    roomgpt: "Seconds (credit-based generations)",
    reimagine: "Seconds to minutes (plan-dependent)",
    kivora: "Seconds after upload",
  },
  {
    feature: "Kitchen focus",
    roomgpt: "One of many room types",
    reimagine: "One of many redesign use cases",
    kivora: "Built for kitchen remodels",
  },
  {
    feature: "Shareable output",
    roomgpt: "Restyle images for inspiration",
    reimagine: "Redesign previews for inspiration",
    kivora: "High-res remodel concepts for decisions",
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
    title: "Choose REimagineHome when…",
    points: [
      "You want to explore redesigns across multiple room types",
      "A broader home redesign product fits better than a kitchen-only tool",
      "You’re mainly looking for inspiration images across the home",
    ],
  },
  {
    title: "Choose Kivora when…",
    points: [
      "Your project is a kitchen remodel and you need realistic concepts from your photo",
      "You want visuals you can share with family, clients, or builders",
      "You prefer a kitchen-focused tool over general room or home redesign",
    ],
  },
];

const verdictPoints = [
  {
    title: "Same photo idea, different scope",
    desc: "RoomGPT and REimagineHome both start from photos for restyles and redesigns across rooms. Kivora starts from a kitchen photo for remodel concepts built for decisions and sharing.",
  },
  {
    title: "Inspiration vs remodel direction",
    desc: "Need fast restyles across the home? RoomGPT or REimagineHome. Need kitchen-specific remodel concepts you can share with family or contractors? Kivora.",
  },
  {
    title: "Who wins for kitchen decisions",
    desc: "For homeowners and teams planning a kitchen remodel, a kitchen-focused tool usually reduces second-guessing faster than general room or home redesign apps.",
  },
];

export default function RoomGPTvsREimagineHomePage() {
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
              <span className="text-kivora-ink">RoomGPT vs REimagineHome</span>
            </nav>

            <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
              Cluster · Competitor Comparisons
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">
              RoomGPT vs REimagineHome vs Kivora
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-kivora-ink/70 md:text-xl">
              People comparing RoomGPT and REimagineHome are usually choosing
              between general AI room restyles and broader photo-based home
              redesign. Kivora is a third path: kitchen-focused AI remodel
              visualization built for remodel decisions and sharing.
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
                      RoomGPT
                    </th>
                    <th className="py-4 pr-4 font-semibold text-kivora-ink">
                      REimagineHome
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
                        {row.roomgpt}
                      </td>
                      <td className="py-4 pr-4 text-kivora-ink/70">
                        {row.reimagine}
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
              Comparing RoomGPT and REimagineHome for a kitchen remodel?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-kivora-ink/70">
              If general room restyles or broad home redesign aren’t the right fit
              for your kitchen remodel, try Kivora — upload one kitchen photo and
              generate realistic remodel concepts in seconds.
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
                  href="/kivora-vs-roomgpt"
                  className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/20 px-5 py-3 text-sm font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-kivora-cream"
                >
                  Kivora vs RoomGPT
                </Link>
                <Link
                  href="/kivora-vs-reimaginehome"
                  className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/20 px-5 py-3 text-sm font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-kivora-cream"
                >
                  Kivora vs REimagineHome
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
