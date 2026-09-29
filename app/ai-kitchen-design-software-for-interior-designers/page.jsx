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
  title: "AI Kitchen Design Software for Interior Designers (2026) | Kivora",
  description:
    "AI kitchen design software for interior designers — generate realistic kitchen remodel concepts from client photos in seconds. Align style direction before detailed drawings.",
  keywords:
    "ai kitchen design software for interior designers, kitchen design software for interior designers, ai kitchen software designers, interior designer kitchen design software",
  alternates: {
    canonical: `${SITE_URL}/ai-kitchen-design-software-for-interior-designers`,
  },
  openGraph: {
    title: "AI Kitchen Design Software for Interior Designers | Kivora",
    description:
      "Photo-based AI kitchen design software for interior designers — faster client alignment on remodel direction.",
    url: `${SITE_URL}/ai-kitchen-design-software-for-interior-designers`,
    siteName: "Kivora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Kitchen Design Software for Interior Designers",
    description:
      "Generate shareable kitchen remodel concepts from client photos — built for design workflows.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "AI Kitchen Design Software for Interior Designers",
      description:
        "Guide to AI kitchen design software for interior designers — photo-based remodel concepts for client alignment.",
      url: `${SITE_URL}/ai-kitchen-design-software-for-interior-designers`,
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
        "AI kitchen design software for interior designers — generate remodel concepts from client kitchen photos.",
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
          name: "What is the best AI kitchen design software for interior designers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Interior designers often need software that turns a client kitchen photo into realistic style options quickly — for alignment before detailed drawings. Photo-based tools like Kivora support that early concept stage.",
          },
        },
        {
          "@type": "Question",
          name: "Does AI kitchen design software replace CAD for interior designers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. AI visualization is strongest for style direction and client buy-in. Measured plans, elevations, and specifications still belong in your professional design toolchain.",
          },
        },
        {
          "@type": "Question",
          name: "How do interior designers use AI kitchen design software with clients?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Typical workflow: capture or request a kitchen photo, generate a few remodel directions, review with the client, then refine in your usual planning software once direction is locked.",
          },
        },
      ],
    },
  ],
};

const needs = [
  {
    title: "Speed at the concept stage",
    description:
      "Clients often stall on style. AI concepts from their kitchen photo move the conversation from abstract mood boards to concrete direction.",
  },
  {
    title: "Client-ready visuals",
    description:
      "Shareable remodel images reduce revision loops and help non-design stakeholders understand the proposal.",
  },
  {
    title: "Fits beside your CAD stack",
    description:
      "AI software is not a replacement for detailed drawings — it compresses the exploration phase before you invest hours in plans.",
  },
  {
    title: "Kitchen-specific realism",
    description:
      "Cabinets, work zones, and material reads matter. Kitchen-focused tools usually outperform generic room restylers for remodel pitches.",
  },
];

const howItWorks = [
  {
    name: "Upload",
    desc: "Start with a clear photo of the client’s current kitchen.",
    icon: Camera,
  },
  {
    name: "Style",
    desc: "Choose design directions that match the brief or brand.",
    icon: Sparkles,
  },
  {
    name: "Generate",
    desc: "Produce polished remodel concepts to review and share.",
    icon: Download,
  },
];

const workflow = [
  {
    stage: "Discovery",
    use: "Turn site photos into early style options for the kickoff conversation",
  },
  {
    stage: "Alignment",
    use: "Get client (and family) agreement on direction before detailed work",
  },
  {
    stage: "Handoff",
    use: "Carry the locked look into CAD, catalogs, and contractor packages",
  },
];

export default function AiKitchenDesignSoftwareForInteriorDesignersPage() {
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
                AI kitchen design software for interior designers
              </span>
            </nav>

            <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
              Software for X · Interior designers
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">
              AI kitchen design software for interior designers
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-kivora-ink/70 md:text-xl">
              Generate realistic kitchen remodel concepts from client photos in
              seconds — lock style direction before you invest in detailed drawings.
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
                href="/best-kitchen-design-software-for-interior-designers"
                className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/15 px-6 py-3 text-base font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-white"
              >
                Best software for interior designers
              </Link>
            </div>
          </div>
        </header>

        <section className="bg-white px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
                Why designers adopt AI here
              </p>
              <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                Faster client alignment on kitchen remodel direction
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
                From client kitchen photo to shareable concepts
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
              Where it sits in a designer workflow
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
                  Is this for full construction documents?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  No. AI kitchen design software for interior designers is strongest
                  for concept and client alignment. Keep CAD and professional
                  packages for measured delivery.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-kivora-ink">
                  How is this different from general AI room tools?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  Kitchen remodel pitches need cabinet and work-zone realism.
                  Kitchen-first tools are usually a better client conversation than
                  multi-room restylers. See{" "}
                  <Link
                    href="/best-kitchen-design-software-for-interior-designers"
                    className="font-semibold text-kivora-purple hover:underline"
                  >
                    best kitchen design software for interior designers
                  </Link>
                  .
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-kivora-ink">
                  Can designers use this for homeowners and contractors together?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  Yes — shareable concepts help the whole decision group. Related:{" "}
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
              Ready to add AI kitchen concepts to your design process?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-kivora-ink/70">
              Upload a client kitchen photo and generate realistic remodel concepts
              in seconds — align style before detailed drawings.
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
                  href="/ai-kitchen-design-software-for-homeowners"
                  className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/20 px-5 py-3 text-sm font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-kivora-cream"
                >
                  Software for homeowners
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
