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
  title: "AI Kitchen Designer for Small Kitchens (2026) | Kivora",
  description:
    "AI kitchen designer for small kitchens — see remodel ideas that work in tight spaces from a photo of your kitchen. Maximize look and function before you commit.",
  keywords:
    "ai kitchen designer for small kitchens, small kitchen design ai, ai design for small kitchens, small kitchen remodel ai, kitchen designer for small kitchens",
  alternates: {
    canonical: `${SITE_URL}/ai-kitchen-designer-for-small-kitchens`,
  },
  openGraph: {
    title: "AI Kitchen Designer for Small Kitchens | Kivora",
    description:
      "Photo-based AI kitchen designer for small kitchens — remodel concepts that respect limited space.",
    url: `${SITE_URL}/ai-kitchen-designer-for-small-kitchens`,
    siteName: "Kivora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Kitchen Designer for Small Kitchens",
    description:
      "Generate remodel concepts for compact kitchens from a photo — see options before you commit.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "AI Kitchen Designer for Small Kitchens",
      description:
        "Guide to AI kitchen designer tools for small kitchens — photo-based remodel concepts for compact spaces.",
      url: `${SITE_URL}/ai-kitchen-designer-for-small-kitchens`,
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
        "AI kitchen designer for small kitchens — generate remodel concepts from a kitchen photo.",
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
          name: "What is the best AI kitchen designer for small kitchens?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For small kitchens, the best AI designer starts from a photo of your actual space so concepts respect real walls, windows, and work zones — not a oversized showroom layout.",
          },
        },
        {
          "@type": "Question",
          name: "Can AI design fix a small kitchen layout?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI is strongest for visual direction — style, color, cabinet look, and overall feel. Major layout or plumbing changes still need professional planning when required.",
          },
        },
        {
          "@type": "Question",
          name: "How do I use an AI kitchen designer on a small kitchen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Upload a clear photo of the kitchen, explore remodel directions, compare options that feel realistic for the space, then share a preferred look with a contractor or designer.",
          },
        },
      ],
    },
  ],
};

const needs = [
  {
    title: "Designs that fit the footprint",
    description:
      "Small kitchens need ideas grounded in the real room. Photo-based concepts avoid oversized looks that only work in larger spaces.",
  },
  {
    title: "More impact, less waste",
    description:
      "When square footage is limited, every finish and cabinet choice counts. Seeing options early protects budget and storage priorities.",
  },
  {
    title: "Clarity before costly mistakes",
    description:
      "Dark colors, bulky islands, or busy patterns can overwhelm a small kitchen. Preview helps you choose lighter, smarter directions.",
  },
  {
    title: "Easy for non-designers",
    description:
      "No need to draft a floor plan first — start from a photo and explore looks that still feel like your kitchen.",
  },
];

const howItWorks = [
  {
    name: "Upload",
    desc: "Take a clear photo of your small kitchen as it is today.",
    icon: Camera,
  },
  {
    name: "Style",
    desc: "Explore remodel directions that suit compact spaces.",
    icon: Sparkles,
  },
  {
    name: "Generate",
    desc: "Review concepts and pick a direction to share or refine.",
    icon: Download,
  },
];

const tips = [
  {
    title: "Prioritize light and continuity",
    description:
      "Lighter cabinets and continuous surfaces often make small kitchens feel larger — preview those directions side by side.",
  },
  {
    title: "Keep work zones honest",
    description:
      "Concepts should still reflect your sink, range, and fridge positions so the remodel stays buildable.",
  },
  {
    title: "Share before you order",
    description:
      "Align with household decision-makers or a contractor using the same visual — not only a mood board.",
  },
];

export default function AiKitchenDesignerForSmallKitchensPage() {
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
                AI kitchen designer for small kitchens
              </span>
            </nav>

            <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
              Software for X · Small kitchens
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">
              AI kitchen designer for small kitchens
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-kivora-ink/70 md:text-xl">
              See remodel ideas that work in tight spaces — realistic concepts from
              a photo of your kitchen before you commit.
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
                href="/ai-kitchen-designer"
                className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/15 px-6 py-3 text-base font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-white"
              >
                AI kitchen designer pillar
              </Link>
            </div>
          </div>
        </header>

        <section className="bg-white px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
                Why small kitchens need a focused approach
              </p>
              <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                Remodel concepts grounded in your real footprint
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
                From your small kitchen photo to remodel options
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
              Tips for small-kitchen remodel decisions
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
                  Will AI invent a bigger kitchen than I have?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  Photo-based tools work from your existing room. Results are
                  concepts for look and style — not a guarantee of new square footage
                  or structural changes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-kivora-ink">
                  Is this only for apartments and galley kitchens?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  Any compact kitchen can benefit — apartments, townhomes, galley
                  layouts, and small primary kitchens. Related:{" "}
                  <Link
                    href="/kitchen-remodel-software-for-homeowners"
                    className="font-semibold text-kivora-purple hover:underline"
                  >
                    kitchen remodel software for homeowners
                  </Link>
                  .
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-kivora-ink">
                  What if I am a complete beginner?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  Start with a clear photo and simple style directions. See{" "}
                  <Link
                    href="/kitchen-design-software-for-beginners"
                    className="font-semibold text-kivora-purple hover:underline"
                  >
                    kitchen design software for beginners
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
              Ready to redesign your small kitchen with AI?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-kivora-ink/70">
              Upload a photo and generate realistic remodel concepts in seconds —
              see options that fit your space before you commit.
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
                  href="/best-tool-to-visualize-a-kitchen-remodel"
                  className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/20 px-5 py-3 text-sm font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-kivora-cream"
                >
                  Best tool to visualize a remodel
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
