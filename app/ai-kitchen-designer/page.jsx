import Link from "next/link";
import { ArrowRight, Camera, CheckCircle2, Download, Palette, Zap } from "lucide-react";
import MarketingNavbar from "@/components/marketing/MarketingNavbar";
import MarketingFooter from "@/components/marketing/MarketingFooter";
import { purchaseUrl } from "@/data/commercialPages";

const SITE_URL = "https://kivora.collabtower.com";

export const metadata = {
  title: "AI Kitchen Designer | AI Kitchen Design from One Photo",
  description:
    "AI kitchen designer by Kivora — upload one photo and get realistic AI kitchen design concepts in seconds. Compare styles before you renovate.",
  keywords:
    "ai kitchen design, ai kitchen designer, ai kitchen remodel, kitchen design ai, ai kitchen visualizer, kitchen remodel ai, online kitchen designer",
  alternates: {
    canonical: `${SITE_URL}/ai-kitchen-designer`,
  },
  openGraph: {
    title: "AI Kitchen Designer | AI Kitchen Design | Kivora",
    description:
      "Upload one photo and generate realistic AI kitchen design concepts. Your online AI kitchen designer for remodel previews.",
    url: `${SITE_URL}/ai-kitchen-designer`,
    siteName: "Kivora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Kitchen Designer | AI Kitchen Design | Kivora",
    description:
      "Upload one photo and generate realistic AI kitchen design concepts in seconds.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "AI Kitchen Design & AI Kitchen Designer",
      description:
        "AI kitchen design with Kivora — photo-based remodel visualization. Use Kivora as your AI kitchen designer.",
      url: `${SITE_URL}/ai-kitchen-designer`,
      isPartOf: {
        "@type": "WebSite",
        name: "Kivora",
        url: SITE_URL,
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Kivora AI Kitchen Designer",
      applicationCategory: "DesignApplication",
      operatingSystem: "Web",
      description:
        "Online AI kitchen designer that turns one photo into realistic kitchen remodel concepts.",
      url: `${SITE_URL}/ai-kitchen-designer`,
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    },
  ],
};

const benefits = [
  {
    title: "Design from a real room",
    desc: "Start with a photo of your current kitchen so every concept stays grounded in your actual space, not a generic template.",
    icon: Camera,
  },
  {
    title: "Compare styles before you spend",
    desc: "Preview modern, rustic, luxury, minimalist, and more — then pick a direction with less second-guessing.",
    icon: Palette,
  },
  {
    title: "Share decisions faster",
    desc: "Download high-resolution visuals to send to family, clients, or contractors so everyone reacts to the same idea.",
    icon: Download,
  },
];

const steps = [
  { name: "Upload", desc: "Start with a clear photo of your kitchen.", icon: Camera },
  { name: "Style", desc: "Choose the design direction you want to explore.", icon: Palette },
  { name: "Generate", desc: "Receive polished remodel concepts in seconds.", icon: Zap },
];

const proofPoints = [
  "Built for homeowners, designers, and remodel teams",
  "One photo creates multiple remodel directions",
  "High-resolution downloads included",
];

export default function AiKitchenDesignPillarPage() {
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
              <span className="text-kivora-ink">AI Kitchen Design</span>
            </nav>

            <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
              Pillar · AI Kitchen Design & Designer
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">
              AI kitchen design from a single photo.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-kivora-ink/70 md:text-xl">
              Kivora is your AI kitchen designer: upload one photo of your current kitchen and
              get realistic AI kitchen design concepts in seconds. Compare styles, share visuals,
              and make renovation decisions with less guesswork.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={purchaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-kivora-yellow px-6 py-3 text-base font-semibold text-kivora-ink transition-colors hover:bg-kivora-purple"
              >
                Try the AI kitchen designer
                <ArrowRight size={18} />
              </a>
              <Link
                href="/tools"
                className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/15 px-6 py-3 text-base font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-white"
              >
                Free remodel tools
              </Link>
            </div>

            <div className="mt-16 grid gap-5 border-y border-kivora-ink/10 py-7 md:grid-cols-3">
              {proofPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3 text-sm font-medium text-kivora-ink/80"
                >
                  <CheckCircle2 size={17} className="shrink-0 text-kivora-teal" />
                  {point}
                </div>
              ))}
            </div>
          </div>
        </header>

        <section className="px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 border-t border-kivora-ink/10 pt-12 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
                  Why AI kitchen design
                </p>
                <h2 className="max-w-md text-4xl font-semibold leading-tight md:text-5xl">
                  See the remodel before it becomes a regret.
                </h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-kivora-ink/70">
                Traditional mood boards and Pinterest saves rarely match your actual layout,
                light, or cabinetry. An AI kitchen designer keeps the process concrete by
                generating AI kitchen design concepts from your real room — not a stock template.
              </p>
            </div>

            <div className="mt-16 grid border-t border-kivora-ink/10 md:grid-cols-3">
              {benefits.map((item) => (
                <article
                  key={item.title}
                  className="border-b border-kivora-ink/10 py-10 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
                >
                  <item.icon className="mb-6 h-6 w-6 text-kivora-teal" />
                  <h3 className="text-xl font-semibold text-kivora-ink">{item.title}</h3>
                  <p className="mt-3 leading-7 text-kivora-ink/70">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
                How the AI kitchen designer works
              </p>
              <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                From photo to direction in three steps.
              </h2>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {steps.map((step, index) => (
                <article key={step.name} className="border-t border-kivora-ink/15 pt-8">
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
          <div className="mx-auto max-w-7xl border-y border-kivora-ink/10 py-16 text-center">
            <h2 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
              Start your AI kitchen design today.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-kivora-ink/70">
              Use Kivora as your AI kitchen designer — upload a photo and turn renovation ideas
              into realistic, download-ready concepts you can share with confidence.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={purchaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-kivora-yellow px-6 py-3 text-base font-semibold text-kivora-ink transition-colors hover:bg-kivora-purple"
              >
                Try the AI kitchen designer
                <ArrowRight size={18} />
              </a>
              <Link
                href="/resources"
                className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/20 px-6 py-3 text-base font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-white"
              >
                All resources
              </Link>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}
