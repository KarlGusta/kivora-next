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
  title: "Kitchen Remodel Software for Homeowners (2026) | Kivora",
  description:
    "Kitchen remodel software for homeowners — see realistic remodel concepts from a photo of your kitchen before you commit. No design skills required.",
  keywords:
    "kitchen remodel software for homeowners, kitchen remodeling software for homeowners, remodel software for homeowners, homeowner kitchen remodel software",
  alternates: {
    canonical: `${SITE_URL}/kitchen-remodel-software-for-homeowners`,
  },
  openGraph: {
    title: "Kitchen Remodel Software for Homeowners | Kivora",
    description:
      "Photo-based kitchen remodel software for homeowners — see the remodel before you commit.",
    url: `${SITE_URL}/kitchen-remodel-software-for-homeowners`,
    siteName: "Kivora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kitchen Remodel Software for Homeowners",
    description:
      "Generate realistic kitchen remodel concepts from a photo — built for homeowners, not designers.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Kitchen Remodel Software for Homeowners",
      description:
        "Guide to kitchen remodel software for homeowners — photo-based remodel concepts before you build.",
      url: `${SITE_URL}/kitchen-remodel-software-for-homeowners`,
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
        "Kitchen remodel software for homeowners — generate remodel concepts from a kitchen photo.",
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
          name: "What is the best kitchen remodel software for homeowners?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Homeowners usually need software that is easy to start and shows realistic remodel options on their actual kitchen. Photo-based tools like Kivora are built for that — no 3D modeling skills required.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need design experience to use kitchen remodel software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Good homeowner-focused remodel software starts from a photo and generates concepts for you to review and share with family or a contractor.",
          },
        },
        {
          "@type": "Question",
          name: "Is kitchen remodel software a substitute for a contractor or designer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. It helps you decide direction and communicate what you want. Measured plans, permits, and construction still need professionals when required.",
          },
        },
      ],
    },
  ],
};

const needs = [
  {
    title: "See it before you spend",
    description:
      "Remodels are expensive. Realistic concepts from your kitchen photo reduce regret and endless Pinterest scrolling.",
  },
  {
    title: "No design degree required",
    description:
      "Upload a photo, pick a direction, and review options — without learning CAD or floor-plan tools first.",
  },
  {
    title: "Share with everyone involved",
    description:
      "Send concepts to a partner, family, or contractor so decisions happen faster and with fewer surprises.",
  },
  {
    title: "Built for your real kitchen",
    description:
      "Start from the room you have — not a blank catalog scene — so options feel specific to your space.",
  },
];

const howItWorks = [
  {
    name: "Upload",
    desc: "Take or choose a clear photo of your current kitchen.",
    icon: Camera,
  },
  {
    name: "Style",
    desc: "Explore remodel looks that match your taste and budget.",
    icon: Sparkles,
  },
  {
    name: "Generate",
    desc: "Get polished concepts to review, compare, and share.",
    icon: Download,
  },
];

const workflow = [
  {
    stage: "Explore",
    use: "Try different remodel directions on your actual kitchen photo",
  },
  {
    stage: "Decide",
    use: "Align with household decision-makers before spending on samples or quotes",
  },
  {
    stage: "Hand off",
    use: "Share the locked look with a designer or contractor as a clear starting point",
  },
];

export default function KitchenRemodelSoftwareForHomeownersPage() {
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
                Kitchen remodel software for homeowners
              </span>
            </nav>

            <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
              Software for X · Homeowners
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">
              Kitchen remodel software for homeowners
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-kivora-ink/70 md:text-xl">
              See the remodel before you commit — realistic kitchen concepts from a
              photo of your space, no design skills required.
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
                href="/best-kitchen-remodel-tool-for-beginners"
                className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/15 px-6 py-3 text-base font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-white"
              >
                Best remodel tool for beginners
              </Link>
            </div>
          </div>
        </header>

        <section className="bg-white px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
                Why homeowners use remodel software
              </p>
              <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                Clarity before cabinets, counters, and contractors
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
                From your kitchen photo to remodel options in three steps
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
              Where it fits in a homeowner remodel journey
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
                  Is this the same as full kitchen design software?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  Remodel software for homeowners prioritizes seeing options on your
                  real kitchen quickly. Detailed measured design may still involve a
                  professional when you are ready to build. Related:{" "}
                  <Link
                    href="/ai-kitchen-design-software-for-homeowners"
                    className="font-semibold text-kivora-purple hover:underline"
                  >
                    AI kitchen design software for homeowners
                  </Link>
                  .
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-kivora-ink">
                  Can I use this before talking to a contractor?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  Yes — many homeowners explore directions first, then share a locked
                  look so quotes and conversations start with clearer intent.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-kivora-ink">
                  What if I am a complete beginner?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  Start with a clear kitchen photo and simple style directions. See{" "}
                  <Link
                    href="/best-kitchen-remodel-tool-for-beginners"
                    className="font-semibold text-kivora-purple hover:underline"
                  >
                    best kitchen remodel tool for beginners
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
              Ready to see your kitchen remodeled?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-kivora-ink/70">
              Upload one photo and generate realistic remodel concepts in seconds —
              see the remodel before you commit.
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
