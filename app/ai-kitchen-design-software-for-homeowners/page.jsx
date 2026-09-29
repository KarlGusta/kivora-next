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
  title: "AI Kitchen Design Software for Homeowners (2026) | Kivora",
  description:
    "AI kitchen design software for homeowners — see realistic remodel concepts from a photo of your kitchen. No 3D skills required. Preview the remodel before you commit.",
  keywords:
    "ai kitchen design software for homeowners, kitchen design software for homeowners, ai kitchen software homeowners, homeowner kitchen design software, kitchen remodel software for homeowners",
  alternates: {
    canonical: `${SITE_URL}/ai-kitchen-design-software-for-homeowners`,
  },
  openGraph: {
    title: "AI Kitchen Design Software for Homeowners | Kivora",
    description:
      "Photo-based AI kitchen design software built for homeowners — upload, style, generate shareable remodel concepts.",
    url: `${SITE_URL}/ai-kitchen-design-software-for-homeowners`,
    siteName: "Kivora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Kitchen Design Software for Homeowners",
    description:
      "See the remodel before you commit — AI kitchen design software made for homeowners.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "AI Kitchen Design Software for Homeowners",
      description:
        "Guide to AI kitchen design software for homeowners — photo-based remodel visualization without professional design tools.",
      url: `${SITE_URL}/ai-kitchen-design-software-for-homeowners`,
      isPartOf: {
        "@type": "WebSite",
        name: "Kivora",
        url: SITE_URL,
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Kivora",
      applicationCategory: "DesignApplication",
      operatingSystem: "Web",
      description:
        "AI kitchen design software for homeowners — generate remodel concepts from a real kitchen photo.",
      url: SITE_URL,
      offers: {
        "@type": "Offer",
        url: purchaseUrl,
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the best AI kitchen design software for homeowners?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Homeowners usually need software that starts from a real kitchen photo, requires no 3D training, and produces shareable remodel concepts. Photo-based tools like Kivora are built for that workflow.",
          },
        },
        {
          "@type": "Question",
          name: "Do homeowners need design experience to use AI kitchen design software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Homeowner-focused AI kitchen software lets you upload a photo, choose a style direction, and generate concepts without learning professional CAD or floor-planning tools.",
          },
        },
        {
          "@type": "Question",
          name: "How is AI kitchen design software different from traditional kitchen design software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Traditional software often focuses on measured layouts and catalogs. AI kitchen design software for homeowners prioritizes realistic visuals from your actual space so you can decide style before construction.",
          },
        },
      ],
    },
  ],
};

const needs = [
  {
    title: "Start from your real kitchen",
    description:
      "Blank-canvas planners force you to rebuild the room first. Homeowners usually want concepts on the kitchen they already have.",
  },
  {
    title: "No design degree required",
    description:
      "Professional layout tools are powerful — and heavy. AI software for homeowners should feel closer to taking a photo than learning CAD.",
  },
  {
    title: "Share before you spend",
    description:
      "Family, partners, and contractors need a clear visual. Software that outputs shareable remodel concepts reduces expensive second-guessing.",
  },
  {
    title: "See the remodel before you commit",
    description:
      "The core job is confidence: cabinets, colors, and style direction on your space — not a generic showroom image.",
  },
];

const howItWorks = [
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
];

const vsTraditional = [
  {
    label: "Learning curve",
    traditional: "Often steep (plans, catalogs, 3D controls)",
    ai: "Upload a photo and pick a direction",
  },
  {
    label: "Starting point",
    traditional: "Blank canvas or measured model",
    ai: "Your actual kitchen photo",
  },
  {
    label: "Primary output",
    traditional: "Layouts, elevations, product lists",
    ai: "Realistic remodel concepts to decide and share",
  },
  {
    label: "Best stage",
    traditional: "Detailed planning and procurement",
    ai: "Style exploration before you commit",
  },
];

export default function AiKitchenDesignSoftwareForHomeownersPage() {
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
              <span className="text-kivora-ink">
                AI kitchen design software for homeowners
              </span>
            </nav>

            <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
              Software for X · Homeowners
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">
              AI kitchen design software for homeowners
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-kivora-ink/70 md:text-xl">
              See the remodel before you commit. Photo-based AI kitchen design
              software built for homeowners — realistic concepts from your kitchen,
              no 3D skills required.
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
                href="/best-ai-kitchen-designer-for-homeowners"
                className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/15 px-6 py-3 text-base font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-white"
              >
                Best AI designer for homeowners
              </Link>
            </div>
          </div>
        </header>

        <section className="bg-white px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
                What homeowners need
              </p>
              <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                Software that matches how real remodel decisions get made
              </h2>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {needs.map((item) => (
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
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
                How Kivora works
              </p>
              <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                From kitchen photo to remodel direction in three steps
              </h2>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {howItWorks.map((step, index) => (
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
          <div className="mx-auto max-w-7xl">
            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              AI kitchen software vs traditional design software
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-kivora-ink/70">
              Homeowners often search for “kitchen design software” and land on
              tools built for measured plans. AI software solves a different job:
              visual confidence before construction.
            </p>
            <div className="mt-10 overflow-x-auto border border-kivora-ink/10">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead>
                  <tr className="border-b border-kivora-ink/10 bg-kivora-cream">
                    <th className="px-4 py-3 font-semibold text-kivora-ink">
                      Dimension
                    </th>
                    <th className="px-4 py-3 font-semibold text-kivora-ink/70">
                      Traditional tools
                    </th>
                    <th className="px-4 py-3 font-semibold text-kivora-purple">
                      AI for homeowners
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {vsTraditional.map((row) => (
                    <tr
                      key={row.label}
                      className="border-b border-kivora-ink/10"
                    >
                      <td className="px-4 py-3 font-semibold text-kivora-ink">
                        {row.label}
                      </td>
                      <td className="px-4 py-3 text-kivora-ink/65">
                        {row.traditional}
                      </td>
                      <td className="px-4 py-3 text-kivora-ink">{row.ai}</td>
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
              FAQ
            </h2>
            <div className="mt-10 space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-kivora-ink">
                  What is AI kitchen design software for homeowners?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  Tools that help non-professionals explore kitchen remodel looks
                  — often from a photo — without building a full 3D model first.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-kivora-ink">
                  Is Kivora AI kitchen design software for homeowners?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  Yes. Kivora is built for kitchen remodel visualization from a
                  real photo: upload, choose a style, generate concepts you can
                  share before you commit.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-kivora-ink">
                  Should I still use a floor planner?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  Many homeowners use AI software for style direction, then a
                  planner or contractor drawings for exact measurements. See{" "}
                  <Link
                    href="/best-ai-kitchen-design-tools"
                    className="font-semibold text-kivora-purple hover:underline"
                  >
                    best AI kitchen design tools
                  </Link>{" "}
                  for how tools split by job.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl border-y border-kivora-ink/10 py-16 text-center">
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-kivora-purple/10">
              <Clock className="h-6 w-6 text-kivora-purple" />
            </div>
            <h2 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
              Ready to try AI kitchen design software built for homeowners?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-kivora-ink/70">
              Upload one kitchen photo and generate realistic remodel concepts in
              seconds — see the remodel before you commit.
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
                  href="/ai-kitchen-designer"
                  className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/20 px-5 py-3 text-sm font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-kivora-cream"
                >
                  AI kitchen designer pillar
                </Link>
                <Link
                  href="/best-kitchen-design-tool-for-homeowners"
                  className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/20 px-5 py-3 text-sm font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-kivora-cream"
                >
                  Best tool for homeowners
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
