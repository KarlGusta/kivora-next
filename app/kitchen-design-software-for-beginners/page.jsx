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
  title: "Kitchen Design Software for Beginners (2026) | Kivora",
  description:
    "Kitchen design software for beginners — see realistic remodel ideas from a photo of your kitchen. No CAD skills, no design degree required.",
  keywords:
    "kitchen design software for beginners, easy kitchen design software, beginner kitchen design software, simple kitchen design software, kitchen design software for beginners free",
  alternates: {
    canonical: `${SITE_URL}/kitchen-design-software-for-beginners`,
  },
  openGraph: {
    title: "Kitchen Design Software for Beginners | Kivora",
    description:
      "Photo-based kitchen design software for beginners — realistic remodel concepts without learning 3D modeling.",
    url: `${SITE_URL}/kitchen-design-software-for-beginners`,
    siteName: "Kivora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kitchen Design Software for Beginners",
    description:
      "Upload a kitchen photo and get remodel concepts in seconds — built for first-time planners.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Kitchen Design Software for Beginners",
      description:
        "Guide to kitchen design software for beginners — photo-based remodel concepts without design experience.",
      url: `${SITE_URL}/kitchen-design-software-for-beginners`,
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
        "Kitchen design software for beginners — generate remodel concepts from a kitchen photo.",
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
          name: "What is the best kitchen design software for beginners?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Beginners usually need software that starts from a photo and shows realistic options without CAD training. Photo-based tools like Kivora are designed for that first remodel exploration step.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to know how to draw floor plans?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Beginner-friendly kitchen design software can generate concepts from a kitchen photo so you explore looks before learning measured planning tools.",
          },
        },
        {
          "@type": "Question",
          name: "Is kitchen design software for beginners free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pricing varies by product. Many tools offer a free trial or limited free use. Kivora is built around a simple photo-to-concept flow for first-time users.",
          },
        },
      ],
    },
  ],
};

const needs = [
  {
    title: "No steep learning curve",
    description:
      "Traditional kitchen design software assumes you can build rooms and cabinets from scratch. Beginners need a faster on-ramp.",
  },
  {
    title: "Start from a photo",
    description:
      "Your existing kitchen is the best reference. Upload it and explore remodel directions without drawing walls first.",
  },
  {
    title: "Clear, shareable results",
    description:
      "Concepts you can show a partner or contractor matter more than professional software features you will not use yet.",
  },
  {
    title: "Confidence before big decisions",
    description:
      "Seeing options on your real space reduces overwhelm when comparing styles, colors, and cabinet looks.",
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
    desc: "Pick simple design directions that match what you like.",
    icon: Sparkles,
  },
  {
    name: "Generate",
    desc: "Review remodel concepts and save the ones you prefer.",
    icon: Download,
  },
];

const workflow = [
  {
    stage: "First look",
    use: "Try a few remodel directions so the project feels less abstract",
  },
  {
    stage: "Narrow choices",
    use: "Compare options with family or a helper before spending on samples",
  },
  {
    stage: "Next step",
    use: "Share a preferred look with a designer, contractor, or showroom",
  },
];

export default function KitchenDesignSoftwareForBeginnersPage() {
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
                Kitchen design software for beginners
              </span>
            </nav>

            <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
              Software for X · Beginners
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">
              Kitchen design software for beginners
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-kivora-ink/70 md:text-xl">
              See realistic remodel ideas from a photo of your kitchen — no CAD
              skills, no design degree required.
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
                Why beginners need a different kind of software
              </p>
              <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                Explore kitchen looks without learning professional tools first
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
                Three simple steps from photo to remodel ideas
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
              A beginner-friendly remodel path
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
                  Is this the same as professional kitchen CAD software?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  No. Kitchen design software for beginners prioritizes easy
                  exploration. Measured plans and construction documents still belong
                  with pros when you are ready to build.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-kivora-ink">
                  How is this different from remodel software for homeowners?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  Closely related. “For beginners” emphasizes zero design experience;
                  homeowner software frames the broader audience. See{" "}
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
                  What should I try next?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  <Link
                    href="/best-kitchen-remodel-tool-for-beginners"
                    className="font-semibold text-kivora-purple hover:underline"
                  >
                    Best kitchen remodel tool for beginners
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/ai-kitchen-design-software-for-homeowners"
                    className="font-semibold text-kivora-purple hover:underline"
                  >
                    AI kitchen design software for homeowners
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
              Ready to try kitchen design without the learning curve?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-kivora-ink/70">
              Upload a kitchen photo and generate realistic remodel concepts in
              seconds — built for beginners.
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
                  href="/best-kitchen-design-tool-for-homeowners"
                  className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/20 px-5 py-3 text-sm font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-kivora-cream"
                >
                  Best tool for homeowners
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
