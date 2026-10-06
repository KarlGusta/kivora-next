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
  title: "Minimalist Kitchen Remodel Ideas (2026) | Kivora",
  description:
    "Minimalist kitchen remodel ideas — essential forms, restrained palettes, hidden storage, and realistic photo-based previews. Explore remodel concepts for your actual kitchen before you commit.",
  keywords:
    "minimalist kitchen remodel ideas, minimalist kitchen renovation ideas, minimalist kitchen remodel, minimal kitchen makeover, simple kitchen redesign, photo kitchen remodel",
  alternates: {
    canonical: `${SITE_URL}/minimalist-kitchen-remodel-ideas`,
  },
  openGraph: {
    title: "Minimalist Kitchen Remodel Ideas | Kivora",
    description:
      "Minimalist kitchen remodel ideas with photo-based AI previews — see calm, essential concepts on your real kitchen before you build.",
    url: `${SITE_URL}/minimalist-kitchen-remodel-ideas`,
    siteName: "Kivora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Minimalist Kitchen Remodel Ideas",
    description:
      "Minimalist kitchen remodel ideas plus photo-based AI previews to lock a calm, essential direction before you remodel.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Minimalist Kitchen Remodel Ideas",
      description:
        "Minimalist kitchen remodel ideas — style directions, materials, and photo-based remodel visualization.",
      url: `${SITE_URL}/minimalist-kitchen-remodel-ideas`,
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
        "AI kitchen designer — generate minimalist remodel concepts from a kitchen photo.",
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
          name: "What are popular minimalist kitchen remodel ideas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Popular minimalist kitchen remodel ideas include flat-panel or handleless cabinets, restrained neutral palettes, hidden storage, continuous counters, and fewer visual interruptions so the room feels calm and functional.",
          },
        },
        {
          "@type": "Question",
          name: "How do I preview minimalist kitchen remodel ideas on my actual kitchen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Upload a photo of your current kitchen to an AI designer like Kivora, explore minimalist remodel directions, compare finishes and layouts, then share a preferred concept with designers or contractors.",
          },
        },
        {
          "@type": "Question",
          name: "Can I remodel toward minimalist without a full gut?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Often yes — simplifying hardware, editing color, reducing open clutter, and continuous surfaces can shift a kitchen toward minimalist. Preview options on a photo so you know what is worth changing.",
          },
        },
      ],
    },
  ],
};

const ideas = [
  {
    title: "Handleless or minimal fronts",
    description:
      "Reduce visual noise with edge pulls, integrated handles, or simple flat doors.",
  },
  {
    title: "Restrained palette",
    description:
      "Soft neutrals or a tight two-tone scheme that keeps the room calm and coherent.",
  },
  {
    title: "Hidden storage",
    description:
      "Close off open shelves and excess display so surfaces stay clear and intentional.",
  },
  {
    title: "Continuous surfaces",
    description:
      "Aligned counters and backsplash lines that read as one quiet plane.",
  },
];

const materials = [
  {
    title: "Cabinets",
    description:
      "Flat-panel or slab fronts in muted tones with minimal or integrated hardware.",
  },
  {
    title: "Counters",
    description:
      "Quiet stone, quartz, or solid surface with clean edges and little pattern noise.",
  },
  {
    title: "Backsplash",
    description:
      "Continuous material or simple tile that does not compete with the rest of the room.",
  },
  {
    title: "Lighting",
    description:
      "Recessed or understated pendants plus task light — functional, not decorative excess.",
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
    desc: "Explore minimalist remodel directions.",
    icon: Sparkles,
  },
  {
    name: "Decide",
    desc: "Lock a look and share it with your team.",
    icon: Download,
  },
];

export default function MinimalistKitchenRemodelIdeasPage() {
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
                Minimalist kitchen remodel ideas
              </span>
            </nav>

            <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
              Remodel · Minimalist
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">
              Minimalist kitchen remodel ideas
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-kivora-ink/70 md:text-xl">
              Essential forms, restrained palettes, and clear surfaces — explore
              minimalist kitchen remodel ideas and preview concepts on a photo of
              your real space before you commit.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={purchaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-kivora-yellow px-6 py-3 text-base font-semibold text-kivora-ink transition-colors hover:bg-kivora-purple"
              >
                Try minimalist remodel ideas
                <ArrowRight size={18} />
              </a>
              <Link
                href="/minimalist-kitchen-design"
                className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/15 px-6 py-3 text-base font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-white"
              >
                Minimalist kitchen design guide
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
                Minimalist remodel directions that work in real kitchens
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
                Building blocks for a minimalist kitchen remodel
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
                See minimalist remodel ideas on your actual kitchen
              </h2>
              <p className="mt-6 text-base leading-7 text-kivora-ink/70">
                Inspiration photos rarely match your light, footprint, and windows.
                Photo-based concepts help you test minimalist remodel directions on
                the real room — then share a locked look with designers and
                contractors.
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
                  Where should I start a minimalist kitchen remodel?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  Start by reducing visual noise — hardware, open storage, and
                  competing finishes — then refine palette and surfaces. Previewing
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
                    href="/minimalist-kitchen-design"
                    className="font-semibold text-kivora-purple hover:underline"
                  >
                    Minimalist kitchen design
                  </Link>
                  ,{" "}
                  <Link
                    href="/modern-kitchen-remodel-ideas"
                    className="font-semibold text-kivora-purple hover:underline"
                  >
                    modern kitchen remodel ideas
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
                  Do minimalist remodel ideas work in small kitchens?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  Yes. Clear surfaces and fewer visual breaks often make compact
                  kitchens feel larger. See{" "}
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
              Ready to try minimalist kitchen remodel ideas on your space?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-kivora-ink/70">
              Upload a photo and generate realistic minimalist remodel concepts in
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
