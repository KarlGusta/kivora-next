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
  title: "Rustic Kitchen Remodel Ideas (2026) | Kivora",
  description:
    "Rustic kitchen remodel ideas — natural wood, warm textures, farmhouse charm, and realistic photo-based previews. Explore remodel concepts for your actual kitchen before you commit.",
  keywords:
    "rustic kitchen remodel ideas, rustic kitchen renovation ideas, rustic kitchen remodel, farmhouse rustic remodel, wood kitchen makeover, photo kitchen remodel",
  alternates: {
    canonical: `${SITE_URL}/rustic-kitchen-remodel-ideas`,
  },
  openGraph: {
    title: "Rustic Kitchen Remodel Ideas | Kivora",
    description:
      "Rustic kitchen remodel ideas with photo-based AI previews — see warm, textured concepts on your real kitchen before you build.",
    url: `${SITE_URL}/rustic-kitchen-remodel-ideas`,
    siteName: "Kivora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rustic Kitchen Remodel Ideas",
    description:
      "Rustic kitchen remodel ideas plus photo-based AI previews to lock a warm, textured direction before you remodel.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Rustic Kitchen Remodel Ideas",
      description:
        "Rustic kitchen remodel ideas — style directions, materials, and photo-based remodel visualization.",
      url: `${SITE_URL}/rustic-kitchen-remodel-ideas`,
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
        "AI kitchen designer — generate rustic remodel concepts from a kitchen photo.",
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
          name: "What are popular rustic kitchen remodel ideas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Popular rustic kitchen remodel ideas include natural wood cabinetry or beams, warm textured finishes, open shelving, stone or butcher-block counters, and soft, lived-in lighting that feels inviting rather than formal.",
          },
        },
        {
          "@type": "Question",
          name: "How do I preview rustic kitchen remodel ideas on my actual kitchen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Upload a photo of your current kitchen to an AI designer like Kivora, explore rustic remodel directions, compare finishes and layouts, then share a preferred concept with designers or contractors.",
          },
        },
        {
          "@type": "Question",
          name: "Can I remodel toward rustic without a full gut?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Often yes — warmer paint, wood accents, simpler hardware, and softer lighting can shift a kitchen toward rustic. Preview options on a photo so you know what is worth changing.",
          },
        },
      ],
    },
  ],
};

const ideas = [
  {
    title: "Natural wood presence",
    description:
      "Wood cabinets, beams, or open shelves that bring warmth and texture into the room.",
  },
  {
    title: "Warm, textured finishes",
    description:
      "Matte surfaces, soft stone, and materials that feel lived-in rather than polished.",
  },
  {
    title: "Open or mixed storage",
    description:
      "A balance of closed cabinets and open shelving for a relaxed, collected look.",
  },
  {
    title: "Soft ambient light",
    description:
      "Warm pendants and task light that make the kitchen feel inviting after dark.",
  },
];

const materials = [
  {
    title: "Cabinets",
    description:
      "Wood or painted fronts with simple profiles and classic, understated hardware.",
  },
  {
    title: "Counters",
    description:
      "Butcher block, stone, or solid surface in warm tones suited to everyday use.",
  },
  {
    title: "Backsplash",
    description:
      "Subway tile, soft patterned tile, or continuous material with a natural feel.",
  },
  {
    title: "Lighting",
    description:
      "Simple or farmhouse-inspired pendants with warm ambient and task lighting.",
  },
];

const howItWorks = [
  {
    name: "Upload",
    desc: "Photograph your kitchen as it is today.",
    icon: Camera,
  },
  {
    name: "Style",
    desc: "Explore rustic remodel directions.",
    icon: Sparkles,
  },
  {
    name: "Decide",
    desc: "Lock a look and share it with your team.",
    icon: Download,
  },
];

export default function RusticKitchenRemodelIdeasPage() {
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
              <span className="text-kivora-ink">Rustic kitchen remodel ideas</span>
            </nav>

            <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
              Remodel · Rustic
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">
              Rustic kitchen remodel ideas
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-kivora-ink/70 md:text-xl">
              Natural wood, warm textures, and farmhouse charm — explore rustic
              kitchen remodel ideas and preview concepts on a photo of your real
              space before you commit.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={purchaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-kivora-yellow px-6 py-3 text-base font-semibold text-kivora-ink transition-colors hover:bg-kivora-purple"
              >
                Try rustic remodel ideas
                <ArrowRight size={18} />
              </a>
              <Link
                href="/rustic-kitchen-design"
                className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/15 px-6 py-3 text-base font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-white"
              >
                Rustic kitchen design guide
              </Link>
            </div>
          </div>
        </header>

        <section className="bg-white px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
                Remodel ideas
              </p>
              <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                Rustic remodel directions that work in real kitchens
              </h2>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {ideas.map((item) => (
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
                Materials & finishes
              </p>
              <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                Building blocks for a rustic kitchen remodel
              </h2>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {materials.map((item) => (
                <article
                  key={item.title}
                  className="border border-kivora-ink/10 bg-white p-6"
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

        <section className="bg-white px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
                Visualize before you build
              </p>
              <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                See rustic remodel ideas on your actual kitchen
              </h2>
              <p className="mt-6 text-base leading-7 text-kivora-ink/70">
                Inspiration photos rarely match your light, footprint, and windows.
                Photo-based concepts help you test rustic remodel directions on the
                real room — then share a locked look with designers and contractors.
              </p>
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

        <section className="px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              FAQ
            </h2>
            <div className="mt-10 space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-kivora-ink">
                  Where should I start a rustic kitchen remodel?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  Start with wood and warmth — cabinets, counters, and overall
                  palette — then refine lighting and open storage. Previewing
                  concepts on a photo of your kitchen helps you decide what to
                  change first.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-kivora-ink">
                  Related pages?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  <Link
                    href="/rustic-kitchen-design"
                    className="font-semibold text-kivora-purple hover:underline"
                  >
                    Rustic kitchen design
                  </Link>
                  ,{" "}
                  <Link
                    href="/farmhouse-kitchen-design"
                    className="font-semibold text-kivora-purple hover:underline"
                  >
                    farmhouse kitchen design
                  </Link>
                  , and{" "}
                  <Link
                    href="/best-tool-to-visualize-a-kitchen-remodel"
                    className="font-semibold text-kivora-purple hover:underline"
                  >
                    best tool to visualize a kitchen remodel
                  </Link>
                  .
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-kivora-ink">
                  Do rustic remodel ideas work in small kitchens?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  Yes. Warm neutrals and carefully scaled wood detail can keep
                  compact kitchens feeling inviting without overwhelming the space.
                  See{" "}
                  <Link
                    href="/ai-kitchen-designer-for-small-kitchens"
                    className="font-semibold text-kivora-purple hover:underline"
                  >
                    AI kitchen designer for small kitchens
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
              Ready to try rustic kitchen remodel ideas on your space?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-kivora-ink/70">
              Upload a photo and generate realistic rustic remodel concepts in
              seconds — lock a direction before you buy materials.
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
