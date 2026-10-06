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
  title: "Rustic Kitchen Design Ideas & Inspiration (2026) | Kivora",
  description:
    "Rustic kitchen design guide — natural wood, warm textures, farmhouse charm, and lived-in finishes. Preview rustic remodel concepts from a photo of your kitchen with Kivora.",
  keywords:
    "rustic kitchen design, rustic kitchen ideas, farmhouse kitchen design, rustic kitchen remodel, rustic kitchen style, rustic kitchen inspiration",
  alternates: {
    canonical: `${SITE_URL}/rustic-kitchen-design`,
  },
  openGraph: {
    title: "Rustic Kitchen Design | Kivora",
    description:
      "Explore rustic kitchen design ideas — natural materials, warm textures, and photo-based remodel previews before you commit.",
    url: `${SITE_URL}/rustic-kitchen-design`,
    siteName: "Kivora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rustic Kitchen Design Ideas",
    description:
      "Rustic and farmhouse kitchen style guide plus photo-based AI previews to lock a warm, natural look before you remodel.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Rustic Kitchen Design",
      description:
        "Guide to rustic kitchen design — style traits, materials, and photo-based remodel visualization.",
      url: `${SITE_URL}/rustic-kitchen-design`,
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
          name: "What defines rustic kitchen design?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Rustic kitchen design emphasizes natural materials, warm wood tones, textured surfaces, open shelving, and a comfortable, lived-in feel — often with farmhouse, cabin, or country influences.",
          },
        },
        {
          "@type": "Question",
          name: "How do I visualize a rustic kitchen remodel before building?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Upload a photo of your current kitchen to an AI designer like Kivora, explore rustic and farmhouse style directions, compare wood and stone finishes, then share a preferred concept with designers or contractors.",
          },
        },
        {
          "@type": "Question",
          name: "Is rustic the same as farmhouse kitchen design?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "They overlap heavily. Farmhouse often includes shiplap, apron sinks, and classic hardware; rustic leans into reclaimed wood, stone, and organic textures. Both favor warmth and natural materials over sleek modern minimalism.",
          },
        },
      ],
    },
  ],
};

const traits = [
  {
    title: "Natural materials",
    description:
      "Wood, stone, and metal with visible grain and texture — surfaces feel honest and tactile rather than polished.",
  },
  {
    title: "Warm, earthy palette",
    description:
      "Honey, walnut, oak, cream, and soft greens dominate; color comes from material rather than paint alone.",
  },
  {
    title: "Lived-in character",
    description:
      "Open shelving, mixed hardware, and imperfect finishes create a welcoming, collected-over-time atmosphere.",
  },
  {
    title: "Functional comfort",
    description:
      "Deep sinks, solid tables, and practical storage support cooking and gathering without formal polish.",
  },
];

const materials = [
  {
    title: "Cabinets",
    description:
      "Wood or painted shaker doors, often with visible grain, open shelves, or mixed upper and lower finishes.",
  },
  {
    title: "Counters",
    description:
      "Butcher block, natural stone, or concrete with character — warm and durable under daily use.",
  },
  {
    title: "Backsplash",
    description:
      "Subway tile, brick, stone, or wood paneling that adds texture without competing with the woodwork.",
  },
  {
    title: "Lighting",
    description:
      "Lanterns, iron or wood pendants, and warm ambient light that softens the space after dark.",
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
    desc: "Explore rustic and farmhouse directions.",
    icon: Sparkles,
  },
  {
    name: "Decide",
    desc: "Lock a look and share it with your team.",
    icon: Download,
  },
];

export default function RusticKitchenDesignPage() {
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
              <span className="text-kivora-ink">Rustic kitchen design</span>
            </nav>

            <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
              Style · Rustic
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">
              Rustic kitchen design
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-kivora-ink/70 md:text-xl">
              Natural wood, warm textures, and farmhouse comfort — explore
              rustic kitchen ideas and preview remodel concepts on a photo of
              your real space before you commit.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={purchaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-kivora-yellow px-6 py-3 text-base font-semibold text-kivora-ink transition-colors hover:bg-kivora-purple"
              >
                Try rustic on your kitchen
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
                What makes a kitchen feel rustic
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
                Common building blocks of rustic kitchens
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
                See rustic design on your actual kitchen
              </h2>
              <p className="mt-6 text-base leading-7 text-kivora-ink/70">
                Catalog photos rarely match your light, footprint, and windows.
                Photo-based concepts help you test rustic directions on the real
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
                  Can I get a rustic look without a full gut remodel?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  Often yes — cabinet paint or refacing, open shelving, butcher
                  block, hardware, and lighting can shift a kitchen toward rustic.
                  Preview options on a photo so you know what is worth changing.
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
                    href="/best-tool-to-try-different-kitchen-styles"
                    className="font-semibold text-kivora-purple hover:underline"
                  >
                    try different kitchen styles
                  </Link>
                  , and{" "}
                  <Link
                    href="/ai-kitchen-designer-for-outdated-kitchens"
                    className="font-semibold text-kivora-purple hover:underline"
                  >
                    AI designer for outdated kitchens
                  </Link>
                  .
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-kivora-ink">
                  Does rustic kitchen design work in small spaces?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  Yes. Warm materials and open shelving can make compact kitchens
                  feel inviting. Avoid heavy dark finishes that close the room in.
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
              Ready to try rustic kitchen design on your space?
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
