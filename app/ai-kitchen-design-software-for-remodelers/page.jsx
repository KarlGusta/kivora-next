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
  title: "AI Kitchen Design Software for Remodelers (2026) | Kivora",
  description:
    "AI kitchen design software for remodelers — generate realistic remodel concepts from a kitchen photo before you commit materials and labor. See the remodel before you build.",
  keywords:
    "ai kitchen design software for remodelers, kitchen remodel software for remodelers, kitchen design software remodelers, ai kitchen remodel software, remodel visualization software",
  alternates: {
    canonical: `${SITE_URL}/ai-kitchen-design-software-for-remodelers`,
  },
  openGraph: {
    title: "AI Kitchen Design Software for Remodelers | Kivora",
    description:
      "Photo-based AI kitchen design software for remodelers — client-ready concepts before construction.",
    url: `${SITE_URL}/ai-kitchen-design-software-for-remodelers`,
    siteName: "Kivora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Kitchen Design Software for Remodelers",
    description:
      "Generate shareable kitchen remodel concepts from real photos — built for remodel sales and scope lock.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "AI Kitchen Design Software for Remodelers",
      description:
        "Guide to AI kitchen design software for remodelers — photo-based remodel visualization before construction.",
      url: `${SITE_URL}/ai-kitchen-design-software-for-remodelers`,
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
        "AI kitchen design software for remodelers — generate remodel concepts from kitchen photos.",
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
          name: "What is the best AI kitchen design software for remodelers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Remodelers usually need software that turns a kitchen photo into clear before-you-build visuals for clients. Photo-based tools like Kivora support that sales and scope-alignment stage.",
          },
        },
        {
          "@type": "Question",
          name: "Does AI kitchen design software replace remodeling plans?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. AI visualization helps clients see the look before work starts. Measured plans, product orders, and build documents still come from your normal remodel process.",
          },
        },
        {
          "@type": "Question",
          name: "How do remodelers use AI kitchen design software with clients?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Typical flow: photograph the kitchen, generate a few remodel directions, review with the client, lock style and scope, then proceed with materials and trades.",
          },
        },
      ],
    },
  ],
};

const needs = [
  {
    title: "Show the outcome before demolition",
    description:
      "Clients buy confidence. Realistic concepts from their kitchen make the remodel feel real before you touch cabinets or counters.",
  },
  {
    title: "Lock style with fewer meetings",
    description:
      "Shareable images cut back-and-forth on color, layout vibe, and finish direction — especially with remote decision-makers.",
  },
  {
    title: "Protect the job margin",
    description:
      "Late style changes are expensive. Align early so material orders and trade schedules stay stable.",
  },
  {
    title: "Built for remodel, not blank-canvas design",
    description:
      "Start from the existing kitchen photo — the same space you will remodel — not a generic catalog room.",
  },
];

const howItWorks = [
  {
    name: "Upload",
    desc: "Start with a clear photo of the kitchen to be remodeled.",
    icon: Camera,
  },
  {
    name: "Style",
    desc: "Explore remodel directions that fit budget and client taste.",
    icon: Sparkles,
  },
  {
    name: "Generate",
    desc: "Produce polished concepts to present, share, and approve.",
    icon: Download,
  },
];

const workflow = [
  {
    stage: "Consult / proposal",
    use: "Make the remodel tangible so the proposal lands with less imagination required",
  },
  {
    stage: "Scope & selections",
    use: "Agree on look before ordering cabinets, surfaces, and fixtures",
  },
  {
    stage: "Execution",
    use: "Use the locked visual as a shared reference while you build to plan",
  },
];

export default function AiKitchenDesignSoftwareForRemodelersPage() {
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
                AI kitchen design software for remodelers
              </span>
            </nav>

            <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
              Software for X · Remodelers
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">
              AI kitchen design software for remodelers
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-kivora-ink/70 md:text-xl">
              See the remodel before you commit — realistic kitchen concepts from a
              photo, faster client buy-in, fewer late-stage changes.
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
                href="/best-ai-kitchen-remodel-tools"
                className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/15 px-6 py-3 text-base font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-white"
              >
                Best AI kitchen remodel tools
              </Link>
            </div>
          </div>
        </header>

        <section className="bg-white px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
                Why remodelers adopt AI here
              </p>
              <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                Remodel visualization that starts from the real kitchen
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
                From existing kitchen to remodel direction in three steps
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
              Where it sits in a remodel workflow
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
                  Is this software for full remodel project management?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  No. AI kitchen design software for remodelers is for visual
                  direction and client alignment. Scheduling, procurement, and
                  site management stay in your existing systems.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-kivora-ink">
                  How is this different from software for contractors?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  Overlap is high — both need client-ready visuals before build.
                  Remodeler intent is often more kitchen-specific and selection-heavy.
                  See also{" "}
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
                  Can homeowners use the same concepts?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  Yes — shared visuals keep decisions aligned. Related:{" "}
                  <Link
                    href="/ai-kitchen-design-software-for-homeowners"
                    className="font-semibold text-kivora-purple hover:underline"
                  >
                    AI kitchen design software for homeowners
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
              Ready to show the remodel before you start?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-kivora-ink/70">
              Upload a kitchen photo and generate realistic remodel concepts in
              seconds — see the remodel before you commit.
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
                  href="/ai-kitchen-designer"
                  className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/20 px-5 py-3 text-sm font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-kivora-cream"
                >
                  AI kitchen designer pillar
                </Link>
                <Link
                  href="/best-tool-to-visualize-a-kitchen-remodel"
                  className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/20 px-5 py-3 text-sm font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-kivora-cream"
                >
                  Best tool to visualize a remodel
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
