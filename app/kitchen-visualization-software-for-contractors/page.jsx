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
  title: "Kitchen Visualization Software for Contractors (2026) | Kivora",
  description:
    "Kitchen visualization software for contractors — show clients realistic remodel concepts from a kitchen photo before construction. Faster approvals, fewer change orders.",
  keywords:
    "kitchen visualization software for contractors, kitchen visualizer for contractors, contractor kitchen visualization software, kitchen remodel visualization for contractors",
  alternates: {
    canonical: `${SITE_URL}/kitchen-visualization-software-for-contractors`,
  },
  openGraph: {
    title: "Kitchen Visualization Software for Contractors | Kivora",
    description:
      "Photo-based kitchen visualization software for contractors — client-ready remodel visuals before you build.",
    url: `${SITE_URL}/kitchen-visualization-software-for-contractors`,
    siteName: "Kivora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kitchen Visualization Software for Contractors",
    description:
      "Generate shareable kitchen remodel concepts from site photos — built for contractor sales and approvals.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Kitchen Visualization Software for Contractors",
      description:
        "Guide to kitchen visualization software for contractors — photo-based remodel visuals for client approvals.",
      url: `${SITE_URL}/kitchen-visualization-software-for-contractors`,
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
        "Kitchen visualization software for contractors — generate remodel concepts from kitchen photos.",
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
          name: "What is the best kitchen visualization software for contractors?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contractors usually need software that turns a kitchen photo into clear remodel visuals for proposals and approvals. Photo-based tools like Kivora support that sales and alignment stage.",
          },
        },
        {
          "@type": "Question",
          name: "Does visualization software replace construction drawings?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Visualization helps clients see the look before work starts. Measured plans, permits, and build documents still come from your standard construction process.",
          },
        },
        {
          "@type": "Question",
          name: "How do contractors use kitchen visualization software with clients?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Typical flow: capture a kitchen photo, generate remodel directions, review with the client, lock scope, then order materials and schedule trades.",
          },
        },
      ],
    },
  ],
};

const needs = [
  {
    title: "Close the vision gap early",
    description:
      "Clients struggle to picture cabinets and finishes. Realistic concepts from their kitchen reduce mid-job surprises.",
  },
  {
    title: "Faster approvals",
    description:
      "Shareable visuals speed decisions with homeowners and partners before you mobilize crews.",
  },
  {
    title: "Fewer expensive changes",
    description:
      "Aligning style before demo and orders protects margins — without a full design office.",
  },
  {
    title: "Works on real job photos",
    description:
      "Start from the kitchen you will remodel so proposals feel specific to that house.",
  },
];

const howItWorks = [
  {
    name: "Upload",
    desc: "Use a clear photo of the client’s current kitchen.",
    icon: Camera,
  },
  {
    name: "Style",
    desc: "Explore remodel directions that match budget and brief.",
    icon: Sparkles,
  },
  {
    name: "Generate",
    desc: "Get client-ready concepts to review, share, and lock in.",
    icon: Download,
  },
];

const workflow = [
  {
    stage: "Estimate / sales",
    use: "Show what the remodel could look like so the proposal feels concrete",
  },
  {
    stage: "Scope lock",
    use: "Agree on direction before ordering cabinets, finishes, and trades",
  },
  {
    stage: "Build",
    use: "Keep the visual as a shared reference; execute with your usual plans",
  },
];

export default function KitchenVisualizationSoftwareForContractorsPage() {
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
                Kitchen visualization software for contractors
              </span>
            </nav>

            <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
              Software for X · Contractors
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">
              Kitchen visualization software for contractors
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-kivora-ink/70 md:text-xl">
              Show clients the remodel before construction — realistic concepts from
              a kitchen photo, faster approvals, fewer mid-job surprises.
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
                href="/best-kitchen-visualization-tool-for-contractors"
                className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/15 px-6 py-3 text-base font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-white"
              >
                Best visualization tool for contractors
              </Link>
            </div>
          </div>
        </header>

        <section className="bg-white px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
                Why contractors use visualization software
              </p>
              <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                Client-ready kitchen visuals without a full design department
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
                From job-site photo to shareable remodel concepts
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
              Where visualization sits in a contractor workflow
            </h2>
            <ul className="mt-10 space-y-4">
              {workflow.map((item) => (
                <li
                  key={item.stage}
                  className="flex flex-col gap-1 border-b border-kivora-ink/10 pb-4 sm:flex-row sm:items-baseline sm:justify-between"
                >
                  <span className="text-base font-semibold text-kivora-purple">
                    {item.stage}
                  </span>
                  <span className="max-w-xl text-sm font-medium text-kivora-ink/75 sm:text-right">
                    {item.use}
                  </span>
                </li>
              ))}
            </ul>
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
                  Is this a replacement for blueprints?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  No. Kitchen visualization software for contractors is for visual
                  alignment and sales support. Build from your usual measured plans.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-kivora-ink">
                  How is this different from AI kitchen design software for contractors?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  Closely related intents. Visualization emphasizes the visual
                  output; AI design software frames the broader tool category. See{" "}
                  <Link
                    href="/ai-kitchen-design-software-for-contractors"
                    className="font-semibold text-kivora-purple hover:underline"
                  >
                    AI kitchen design software for contractors
                  </Link>
                  .
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-kivora-ink">
                  Related tools for other audiences?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  <Link
                    href="/kitchen-visualization-software-for-designers"
                    className="font-semibold text-kivora-purple hover:underline"
                  >
                    Visualization for designers
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/best-kitchen-visualization-tool-for-contractors"
                    className="font-semibold text-kivora-purple hover:underline"
                  >
                    best visualization tool for contractors
                  </Link>
                  .
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
              Ready to show the remodel before you build?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-kivora-ink/70">
              Upload a kitchen photo and generate realistic remodel concepts in
              seconds — client-ready visuals for faster approvals.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={purchaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-kivora-yellow px-6 py-3 text-base font-semibold text-kivora-ink transition-colors hover:bg-kivora-purple"
              >
                Visualize a Kitchen
                <ArrowRight size={18} />
              </a>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/ai-kitchen-design-software-for-contractors"
                  className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/20 px-5 py-3 text-sm font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-kivora-cream"
                >
                  AI software for contractors
                </Link>
                <Link
                  href="/resources"
                  className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/20 px-5 py-3 text-sm font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-kivora-cream"
                >
                  All resources
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
