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
  title: "AI Kitchen Designer for Large Kitchens (2026) | Kivora",
  description:
    "AI kitchen designer for large kitchens — explore remodel concepts for spacious layouts from a photo of your kitchen. Align style across islands, zones, and finishes before you commit.",
  keywords:
    "ai kitchen designer for large kitchens, large kitchen design ai, ai design for large kitchens, big kitchen remodel ai, kitchen designer for large kitchens",
  alternates: {
    canonical: `${SITE_URL}/ai-kitchen-designer-for-large-kitchens`,
  },
  openGraph: {
    title: "AI Kitchen Designer for Large Kitchens | Kivora",
    description:
      "Photo-based AI kitchen designer for large kitchens — remodel concepts for spacious layouts and multi-zone designs.",
    url: `${SITE_URL}/ai-kitchen-designer-for-large-kitchens`,
    siteName: "Kivora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Kitchen Designer for Large Kitchens",
    description:
      "Generate remodel concepts for large kitchens from a photo — see style direction before you commit.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "AI Kitchen Designer for Large Kitchens",
      description:
        "Guide to AI kitchen designer tools for large kitchens — photo-based remodel concepts for spacious layouts.",
      url: `${SITE_URL}/ai-kitchen-designer-for-large-kitchens`,
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
        "AI kitchen designer for large kitchens — generate remodel concepts from a kitchen photo.",
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
          name: "What is the best AI kitchen designer for large kitchens?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For large kitchens, the best AI designer starts from a photo of your actual space so concepts respect real scale, islands, and zones — not a generic small-room restyle.",
          },
        },
        {
          "@type": "Question",
          name: "Can AI help plan zones in a large kitchen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI is strongest for visual direction — style, color, cabinet look, and overall cohesion. Detailed zone planning and traffic flow still benefit from professional design when the project is complex.",
          },
        },
        {
          "@type": "Question",
          name: "How do I use an AI kitchen designer on a large kitchen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Upload a clear wide photo of the kitchen, explore remodel directions, compare looks that hold up at scale, then share a preferred concept with designers or contractors.",
          },
        },
      ],
    },
  ],
};

const needs = [
  {
    title: "Cohesion across a big footprint",
    description:
      "Large kitchens can feel disjointed. Photo-based concepts help you test finishes and styles that read as one space, not a patchwork of decisions.",
  },
  {
    title: "Islands, seating, and open views",
    description:
      "Bigger rooms often include islands and sightlines into living areas. Visualizing the look early reduces expensive mid-project changes.",
  },
  {
    title: "Material decisions at scale",
    description:
      "Cabinet runs and surfaces cost more when the kitchen is large. Seeing direction before ordering protects budget and schedule.",
  },
  {
    title: "Family and stakeholder alignment",
    description:
      "More people usually weigh in on a primary kitchen remodel. Shareable concepts speed consensus.",
  },
];

const howItWorks = [
  {
    name: "Upload",
    desc: "Take a clear photo that shows the main kitchen volume.",
    icon: Camera,
  },
  {
    name: "Style",
    desc: "Explore remodel directions that suit spacious layouts.",
    icon: Sparkles,
  },
  {
    name: "Generate",
    desc: "Review concepts and lock a look to share with pros.",
    icon: Download,
  },
];

const tips = [
  {
    title: "Photograph the full volume",
    description:
      "A wide shot of the main kitchen helps concepts account for scale, islands, and adjacent openings.",
  },
  {
    title: "Test bold vs quiet schemes",
    description:
      "Large kitchens can carry stronger contrast — or feel calmer with continuous finishes. Compare both early.",
  },
  {
    title: "Hand off with a locked look",
    description:
      "Share the preferred concept with designers and contractors so detailed plans start from aligned intent.",
  },
];

export default function AiKitchenDesignerForLargeKitchensPage() {
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
                AI kitchen designer for large kitchens
              </span>
            </nav>

            <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
              Software for X · Large kitchens
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">
              AI kitchen designer for large kitchens
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-kivora-ink/70 md:text-xl">
              Explore remodel concepts for spacious layouts — align style across
              islands, zones, and finishes before you commit.
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
                href="/ai-kitchen-designer-for-small-kitchens"
                className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/15 px-6 py-3 text-base font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-white"
              >
                For small kitchens
              </Link>
            </div>
          </div>
        </header>

        <section className="bg-white px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
                Why large kitchens need a different focus
              </p>
              <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                Style cohesion at scale — not a small-room restyle stretched out
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
                From your large kitchen photo to remodel options
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
              Tips for large-kitchen remodel decisions
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {tips.map((item) => (
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
            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              FAQ
            </h2>
            <div className="mt-10 space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-kivora-ink">
                  Does AI replace an architect for a large kitchen remodel?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  No. AI kitchen designer tools are for visual direction and client
                  alignment. Complex structure, code, and detailed documentation still
                  need professionals.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-kivora-ink">
                  How is this different from small-kitchen AI design?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  Small kitchens prioritize footprint efficiency; large kitchens
                  emphasize cohesion, islands, and multi-zone style. See{" "}
                  <Link
                    href="/ai-kitchen-designer-for-small-kitchens"
                    className="font-semibold text-kivora-purple hover:underline"
                  >
                    AI kitchen designer for small kitchens
                  </Link>
                  .
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-kivora-ink">
                  Related software pages?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  <Link
                    href="/kitchen-remodel-software-for-homeowners"
                    className="font-semibold text-kivora-purple hover:underline"
                  >
                    Remodel software for homeowners
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/ai-kitchen-design-software-for-homeowners"
                    className="font-semibold text-kivora-purple hover:underline"
                  >
                    AI design software for homeowners
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
              Ready to redesign your large kitchen with AI?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-kivora-ink/70">
              Upload a photo and generate realistic remodel concepts in seconds —
              align style across a big footprint before you commit.
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
