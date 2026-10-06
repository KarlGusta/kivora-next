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
  title: "Japandi Kitchen Design Ideas & Inspiration (2026) | Kivora",
  description:
    "Japandi kitchen design guide — Japanese minimalism meets Scandinavian warmth. Natural materials, calm neutrals, and functional beauty. Preview Japandi remodel concepts from a photo of your kitchen with Kivora.",
  keywords:
    "japandi kitchen design, japandi kitchen ideas, japanese scandinavian kitchen, japandi kitchen remodel, japandi kitchen style, nordic japanese kitchen",
  alternates: {
    canonical: `${SITE_URL}/japandi-kitchen-design`,
  },
  openGraph: {
    title: "Japandi Kitchen Design | Kivora",
    description:
      "Explore Japandi kitchen design ideas — Japanese restraint with Scandinavian warmth, and photo-based remodel previews before you commit.",
    url: `${SITE_URL}/japandi-kitchen-design`,
    siteName: "Kivora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Japandi Kitchen Design Ideas",
    description:
      "Japandi kitchen style guide plus photo-based AI previews to lock a calm, natural look before you remodel.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Japandi Kitchen Design",
      description:
        "Guide to Japandi kitchen design — style traits, materials, and photo-based remodel visualization.",
      url: `${SITE_URL}/japandi-kitchen-design`,
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
        "AI kitchen designer — generate Japandi remodel concepts from a kitchen photo.",
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
          name: "What defines Japandi kitchen design?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Japandi blends Japanese minimalism with Scandinavian warmth — natural materials, muted neutrals, clean lines, and a calm, uncluttered atmosphere that feels both refined and livable.",
          },
        },
        {
          "@type": "Question",
          name: "How do I visualize a Japandi kitchen remodel before building?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Upload a photo of your current kitchen to an AI designer like Kivora, explore muted wood and neutral directions, compare finishes, then share a preferred concept with designers or contractors.",
          },
        },
        {
          "@type": "Question",
          name: "How is Japandi different from Scandinavian or minimalist?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scandinavian leans light and cozy; minimalist can be cooler and more reductive. Japandi adds Japanese restraint, darker wood accents, and a quieter, more contemplative balance of function and beauty.",
          },
        },
      ],
    },
  ],
};

const traits = [
  {
    title: "Quiet restraint",
    description:
      "Fewer pieces, cleaner lines, and visual calm — the room feels intentional rather than decorated.",
  },
  {
    title: "Natural materials",
    description:
      "Wood, stone, and matte finishes that show grain and texture without high gloss or heavy ornament.",
  },
  {
    title: "Muted neutrals",
    description:
      "Soft greys, warm whites, and earthy tones that sit between Scandinavian light and Japanese depth.",
  },
  {
    title: "Function as beauty",
    description:
      "Storage and surfaces are practical and carefully composed — usefulness is part of the aesthetic.",
  },
];

const materials = [
  {
    title: "Cabinets",
    description:
      "Flat or lightly framed fronts in light or mid-tone wood, or soft painted finishes with minimal hardware.",
  },
  {
    title: "Counters",
    description:
      "Stone, concrete-look, or wood in muted tones — quiet surfaces that support the calm palette.",
  },
  {
    title: "Backsplash",
    description:
      "Continuous material, soft tile, or simple panels that avoid busy patterns.",
  },
  {
    title: "Lighting",
    description:
      "Simple pendants, soft ambient light, and under-cabinet task lighting for everyday clarity.",
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
    desc: "Explore Japandi and calm hybrid directions.",
    icon: Sparkles,
  },
  {
    name: "Decide",
    desc: "Lock a look and share it with your team.",
    icon: Download,
  },
];

export default function JapandiKitchenDesignPage() {
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
              <span className="text-kivora-ink">Japandi kitchen design</span>
            </nav>

            <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
              Style · Japandi
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">
              Japandi kitchen design
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-kivora-ink/70 md:text-xl">
              Japanese minimalism meets Scandinavian warmth — explore Japandi
              kitchen ideas and preview remodel concepts on a photo of your real
              space before you commit.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={purchaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-kivora-yellow px-6 py-3 text-base font-semibold text-kivora-ink transition-colors hover:bg-kivora-purple"
              >
                Try Japandi on your kitchen
                <ArrowRight size={18} />
              </a>
              <Link
                href="/best-tool-to-try-different-kitchen-styles"
                className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/15 px-6 py-3 text-base font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-white"
              >
                Try different kitchen styles
              </Link>
            </div>
          </div>
        </header>

        <section className="bg-white px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
                Style traits
              </p>
              <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                What makes a kitchen feel Japandi
              </h2>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {traits.map((item) => (
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
                Common building blocks of Japandi kitchens
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
                See Japandi design on your actual kitchen
              </h2>
              <p className="mt-6 text-base leading-7 text-kivora-ink/70">
                Catalog photos rarely match your light, footprint, and windows.
                Photo-based concepts help you test Japandi directions on the real
                room — then share a locked look with designers and contractors.
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
                  Can I get a Japandi look without a full gut remodel?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  Often yes — simplifying hardware, decluttering, softer paint, and
                  natural material accents can shift a kitchen toward Japandi.
                  Preview options on a photo so you know what is worth changing.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-kivora-ink">
                  Related style and tool pages?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  <Link
                    href="/scandinavian-kitchen-design"
                    className="font-semibold text-kivora-purple hover:underline"
                  >
                    Scandinavian kitchen design
                  </Link>
                  ,{" "}
                  <Link
                    href="/minimalist-kitchen-design"
                    className="font-semibold text-kivora-purple hover:underline"
                  >
                    minimalist kitchen design
                  </Link>
                  , and{" "}
                  <Link
                    href="/best-tool-to-try-different-kitchen-styles"
                    className="font-semibold text-kivora-purple hover:underline"
                  >
                    try different kitchen styles
                  </Link>
                  .
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-kivora-ink">
                  Does Japandi kitchen design work in small spaces?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  Yes. Calm neutrals, continuous surfaces, and restrained detailing
                  often make compact kitchens feel larger and more serene. See{" "}
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
              Ready to try Japandi kitchen design on your space?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-kivora-ink/70">
              Upload a photo and generate realistic Japandi remodel concepts in
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
