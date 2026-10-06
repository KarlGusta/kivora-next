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
  title: "Luxury Kitchen Design Ideas & Inspiration (2026) | Kivora",
  description:
    "Luxury kitchen design guide — premium materials, refined detailing, statement islands, and high-end finishes. Preview luxury remodel concepts from a photo of your kitchen with Kivora.",
  keywords:
    "luxury kitchen design, luxury kitchen ideas, high-end kitchen design, luxury kitchen remodel, luxury kitchen style, luxury kitchen inspiration",
  alternates: {
    canonical: `${SITE_URL}/luxury-kitchen-design`,
  },
  openGraph: {
    title: "Luxury Kitchen Design | Kivora",
    description:
      "Explore luxury kitchen design ideas — premium materials, refined finishes, and photo-based remodel previews before you commit.",
    url: `${SITE_URL}/luxury-kitchen-design`,
    siteName: "Kivora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Kitchen Design Ideas",
    description:
      "Luxury kitchen style guide plus photo-based AI previews to lock a high-end look before you remodel.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Luxury Kitchen Design",
      description:
        "Guide to luxury kitchen design — style traits, materials, and photo-based remodel visualization.",
      url: `${SITE_URL}/luxury-kitchen-design`,
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
        "AI kitchen designer — generate luxury remodel concepts from a kitchen photo.",
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
          name: "What defines luxury kitchen design?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Luxury kitchen design emphasizes premium materials, refined detailing, statement features like large islands or custom millwork, and a polished, intentional atmosphere — quality over quantity.",
          },
        },
        {
          "@type": "Question",
          name: "How do I visualize a luxury kitchen remodel before building?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Upload a photo of your current kitchen to an AI designer like Kivora, explore high-end style directions, compare premium finishes, then share a preferred concept with designers or contractors.",
          },
        },
        {
          "@type": "Question",
          name: "Is luxury the same as modern kitchen design?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not always. Modern focuses on clean lines and simplicity; luxury prioritizes premium materials, craftsmanship, and statement details — which can be modern, traditional, or a blend.",
          },
        },
      ],
    },
  ],
};

const traits = [
  {
    title: "Premium materials",
    description:
      "Marble, quartzite, exotic woods, and metal accents chosen for quality and presence rather than trend alone.",
  },
  {
    title: "Refined detailing",
    description:
      "Custom millwork, integrated appliances, thoughtful hardware, and carefully proportioned elevations.",
  },
  {
    title: "Statement features",
    description:
      "Large islands, sculptural lighting, feature walls, or a strong material moment that anchors the room.",
  },
  {
    title: "Polished atmosphere",
    description:
      "Layered lighting, clear surfaces, and a sense of intentional luxury that feels calm rather than busy.",
  },
];

const materials = [
  {
    title: "Cabinets",
    description:
      "Custom or high-end painted and wood fronts, often with refined profiles and premium hardware.",
  },
  {
    title: "Counters",
    description:
      "Marble, quartzite, or premium quartz with dramatic or subtle movement — book-matched where possible.",
  },
  {
    title: "Backsplash",
    description:
      "Full-height slab, mosaic feature, or continuous stone that elevates the cooking zone.",
  },
  {
    title: "Lighting",
    description:
      "Sculptural pendants, layered ambient light, and under-cabinet detail that feels designed, not generic.",
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
    desc: "Explore luxury and high-end directions.",
    icon: Sparkles,
  },
  {
    name: "Decide",
    desc: "Lock a look and share it with your team.",
    icon: Download,
  },
];

export default function LuxuryKitchenDesignPage() {
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
              <span className="text-kivora-ink">Luxury kitchen design</span>
            </nav>

            <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
              Style · Luxury
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">
              Luxury kitchen design
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-kivora-ink/70 md:text-xl">
              Premium materials, refined detailing, and high-end finishes —
              explore luxury kitchen ideas and preview remodel concepts on a
              photo of your real space before you commit.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={purchaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-kivora-yellow px-6 py-3 text-base font-semibold text-kivora-ink transition-colors hover:bg-kivora-purple"
              >
                Try luxury on your kitchen
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
                What makes a kitchen feel luxurious
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
                Common building blocks of luxury kitchens
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
                See luxury design on your actual kitchen
              </h2>
              <p className="mt-6 text-base leading-7 text-kivora-ink/70">
                Catalog photos rarely match your light, footprint, and windows.
                Photo-based concepts help you test luxury directions on the real
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
                  Can I get a luxury look without a full gut remodel?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  Sometimes yes — premium counters, hardware, lighting, and
                  select cabinet upgrades can elevate a kitchen. Preview options
                  on a photo so you know where to invest for maximum impact.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-kivora-ink">
                  Related style and tool pages?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  <Link
                    href="/modern-kitchen-design"
                    className="font-semibold text-kivora-purple hover:underline"
                  >
                    Modern kitchen design
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
                  Does luxury kitchen design work in smaller spaces?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  Yes. Focused material choices and refined detailing can create
                  a high-end feel without requiring a large footprint. See{" "}
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
              Ready to try luxury kitchen design on your space?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-kivora-ink/70">
              Upload a photo and generate realistic luxury remodel concepts in
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
