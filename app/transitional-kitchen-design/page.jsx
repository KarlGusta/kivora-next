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
  title: "Transitional Kitchen Design Ideas & Inspiration (2026) | Kivora",
  description:
    "Transitional kitchen design guide — the bridge between traditional and modern. Soft classic details, clean lines, and balanced finishes. Preview transitional remodel concepts from a photo of your kitchen with Kivora.",
  keywords:
    "transitional kitchen design, transitional kitchen ideas, transitional kitchen remodel, transitional kitchen style, traditional modern kitchen, classic contemporary kitchen",
  alternates: {
    canonical: `${SITE_URL}/transitional-kitchen-design`,
  },
  openGraph: {
    title: "Transitional Kitchen Design | Kivora",
    description:
      "Explore transitional kitchen design ideas — classic meets modern, and photo-based remodel previews before you commit.",
    url: `${SITE_URL}/transitional-kitchen-design`,
    siteName: "Kivora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Transitional Kitchen Design Ideas",
    description:
      "Transitional kitchen style guide plus photo-based AI previews to lock a balanced classic-modern look before you remodel.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Transitional Kitchen Design",
      description:
        "Guide to transitional kitchen design — style traits, materials, and photo-based remodel visualization.",
      url: `${SITE_URL}/transitional-kitchen-design`,
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
        "AI kitchen designer — generate transitional remodel concepts from a kitchen photo.",
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
          name: "What defines transitional kitchen design?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Transitional kitchen design sits between traditional and modern — softer classic details, cleaner lines, balanced proportions, and finishes that feel timeless without heavy ornament or stark minimalism.",
          },
        },
        {
          "@type": "Question",
          name: "How do I visualize a transitional kitchen remodel before building?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Upload a photo of your current kitchen to an AI designer like Kivora, explore balanced classic-modern directions, compare finishes, then share a preferred concept with designers or contractors.",
          },
        },
        {
          "@type": "Question",
          name: "How is transitional different from traditional or contemporary?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Traditional often includes richer detailing and formal profiles; contemporary leans current and trend-aware. Transitional simplifies classic forms and softens modern edges so the room feels enduring and approachable.",
          },
        },
      ],
    },
  ],
};

const traits = [
  {
    title: "Soft classic forms",
    description:
      "Shaker or lightly detailed doors and balanced elevations without heavy ornament or formal excess.",
  },
  {
    title: "Clean but warm",
    description:
      "Lines stay orderly while materials and finishes keep the room inviting rather than stark.",
  },
  {
    title: "Balanced contrast",
    description:
      "Neutral palettes with gentle contrast — neither high-gloss modern nor deeply traditional.",
  },
  {
    title: "Timeless middle ground",
    description:
      "A look that bridges eras so the kitchen feels current without chasing short-lived trends.",
  },
];

const materials = [
  {
    title: "Cabinets",
    description:
      "Painted or wood shaker-style or lightly framed doors with refined, understated hardware.",
  },
  {
    title: "Counters",
    description:
      "Quartz, stone, or solid surface in soft neutrals that support everyday use and quiet detail.",
  },
  {
    title: "Backsplash",
    description:
      "Subway tile, soft patterned tile, or continuous material without busy traditional motifs.",
  },
  {
    title: "Lighting",
    description:
      "Simple pendants or transitional fixtures with warm ambient and task lighting.",
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
    desc: "Explore transitional and balanced directions.",
    icon: Sparkles,
  },
  {
    name: "Decide",
    desc: "Lock a look and share it with your team.",
    icon: Download,
  },
];

export default function TransitionalKitchenDesignPage() {
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
              <span className="text-kivora-ink">Transitional kitchen design</span>
            </nav>

            <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
              Style · Transitional
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">
              Transitional kitchen design
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-kivora-ink/70 md:text-xl">
              The bridge between traditional and modern — explore transitional
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
                Try transitional on your kitchen
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
                What makes a kitchen feel transitional
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
                Common building blocks of transitional kitchens
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
                See transitional design on your actual kitchen
              </h2>
              <p className="mt-6 text-base leading-7 text-kivora-ink/70">
                Catalog photos rarely match your light, footprint, and windows.
                Photo-based concepts help you test transitional directions on the
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
                  Can I get a transitional look without a full gut remodel?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  Often yes — simplifying hardware, softening color, and updating
                  lighting can shift a kitchen toward transitional. Preview options
                  on a photo so you know what is worth changing.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-kivora-ink">
                  Related style and tool pages?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  <Link
                    href="/traditional-kitchen-design"
                    className="font-semibold text-kivora-purple hover:underline"
                  >
                    Traditional kitchen design
                  </Link>
                  ,{" "}
                  <Link
                    href="/contemporary-kitchen-design"
                    className="font-semibold text-kivora-purple hover:underline"
                  >
                    contemporary kitchen design
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
                  Does transitional kitchen design work in small spaces?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  Yes. Soft neutrals and uncluttered elevations often help compact
                  kitchens feel open while still reading as classic. See{" "}
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
              Ready to try transitional kitchen design on your space?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-kivora-ink/70">
              Upload a photo and generate realistic transitional remodel concepts
              in seconds — lock a direction before you buy materials.
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
