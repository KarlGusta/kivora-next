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
  title: "Kitchen Visualization Software for Designers (2026) | Kivora",
  description:
    "Kitchen visualization software for designers — turn client kitchen photos into realistic remodel concepts in seconds. Faster alignment before detailed drawings.",
  keywords:
    "kitchen visualization software for designers, kitchen visualization software for interior designers, kitchen visualizer for designers, design kitchen visualization software",
  alternates: {
    canonical: `${SITE_URL}/kitchen-visualization-software-for-designers`,
  },
  openGraph: {
    title: "Kitchen Visualization Software for Designers | Kivora",
    description:
      "Photo-based kitchen visualization software for designers — client-ready remodel concepts from a real kitchen photo.",
    url: `${SITE_URL}/kitchen-visualization-software-for-designers`,
    siteName: "Kivora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kitchen Visualization Software for Designers",
    description:
      "Generate shareable kitchen remodel visuals for client review — built for design workflows.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Kitchen Visualization Software for Designers",
      description:
        "Guide to kitchen visualization software for designers — photo-based remodel concepts for client alignment.",
      url: `${SITE_URL}/kitchen-visualization-software-for-designers`,
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
        "Kitchen visualization software for designers — generate remodel concepts from client kitchen photos.",
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
          name: "What is the best kitchen visualization software for designers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Designers often need software that turns a client kitchen photo into clear remodel visuals quickly — for alignment before detailed drawings. Photo-based tools like Kivora support that concept stage.",
          },
        },
        {
          "@type": "Question",
          name: "Is kitchen visualization software the same as CAD?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Visualization software prioritizes realistic looks and client communication. CAD and measured plans still handle precise dimensions and documentation.",
          },
        },
        {
          "@type": "Question",
          name: "How do designers use kitchen visualization software with clients?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Typical flow: use a client kitchen photo, generate style directions, review together, lock the look, then refine in your usual design tools.",
          },
        },
      ],
    },
  ],
};

const needs = [
  {
    title: "Client-ready visuals fast",
    description:
      "Mood boards help, but visuals on the client’s actual kitchen close the gap between abstract style and a remodel decision.",
  },
  {
    title: "Fewer revision loops",
    description:
      "When stakeholders see the direction early, you spend less time redrawing after late style changes.",
  },
  {
    title: "Complements measured design",
    description:
      "Use visualization for look-and-feel; keep CAD, schedules, and specifications for delivery accuracy.",
  },
  {
    title: "Kitchen-specific realism",
    description:
      "Cabinets, work zones, and material reads matter more in kitchens than generic room restyles.",
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
    desc: "Choose design directions that match the brief.",
    icon: Sparkles,
  },
  {
    name: "Generate",
    desc: "Produce polished remodel concepts to present and share.",
    icon: Download,
  },
];

const workflow = [
  {
    stage: "Concept",
    use: "Explore remodel looks on the real kitchen before investing in detailed drawings",
  },
  {
    stage: "Client review",
    use: "Share clear visuals so the full decision group can align",
  },
  {
    stage: "Documentation",
    use: "Carry the locked direction into plans, product specs, and contractor packages",
  },
];

export default function KitchenVisualizationSoftwareForDesignersPage() {
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
                Kitchen visualization software for designers
              </span>
            </nav>

            <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
              Software for X · Designers
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">
              Kitchen visualization software for designers
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-kivora-ink/70 md:text-xl">
              Turn client kitchen photos into realistic remodel concepts in
              seconds — align style before you invest in detailed drawings.
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
                href="/ai-kitchen-design-software-for-interior-designers"
                className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/15 px-6 py-3 text-base font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-white"
              >
                AI software for interior designers
              </Link>
            </div>
          </div>
        </header>

        <section className="bg-white px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
                Why designers use visualization software
              </p>
              <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                Clear kitchen concepts clients can actually react to
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
              Where visualization sits in a design workflow
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
                  Is visualization software enough for construction documents?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  No. Kitchen visualization software for designers is for concept
                  and client communication. Measured plans and specs stay in your
                  professional toolchain.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-kivora-ink">
                  How is this different from AI kitchen design software for interior designers?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  Closely related intents. Visualization emphasizes the visual
                  output; “AI design software” frames the broader tool category.
                  See{" "}
                  <Link
                    href="/ai-kitchen-design-software-for-interior-designers"
                    className="font-semibold text-kivora-purple hover:underline"
                  >
                    AI kitchen design software for interior designers
                  </Link>
                  .
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-kivora-ink">
                  What about contractors and homeowners?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  Shared concepts help the whole team. Related:{" "}
                  <Link
                    href="/best-kitchen-visualization-tool-for-contractors"
                    className="font-semibold text-kivora-purple hover:underline"
                  >
                    visualization for contractors
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/ai-kitchen-design-software-for-homeowners"
                    className="font-semibold text-kivora-purple hover:underline"
                  >
                    software for homeowners
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
              Ready for kitchen visualization built for designers?
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
                  href="/best-kitchen-visualization-software"
                  className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/20 px-5 py-3 text-sm font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-kivora-cream"
                >
                  Best kitchen visualization software
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
