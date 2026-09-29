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
  title: "Kitchen Design Software for Professionals (2026) | Kivora",
  description:
    "Kitchen design software for professionals — generate realistic remodel concepts from client kitchen photos for faster alignment before detailed drawings and documentation.",
  keywords:
    "kitchen design software for professionals, professional kitchen design software, kitchen design software for designers professionals, pro kitchen design software",
  alternates: {
    canonical: `${SITE_URL}/kitchen-design-software-for-professionals`,
  },
  openGraph: {
    title: "Kitchen Design Software for Professionals | Kivora",
    description:
      "Photo-based kitchen design software for professionals — client-ready remodel concepts that complement CAD and documentation workflows.",
    url: `${SITE_URL}/kitchen-design-software-for-professionals`,
    siteName: "Kivora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kitchen Design Software for Professionals",
    description:
      "Generate shareable kitchen remodel concepts from client photos — concept speed for professional design workflows.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Kitchen Design Software for Professionals",
      description:
        "Guide to kitchen design software for professionals — photo-based remodel concepts for client alignment.",
      url: `${SITE_URL}/kitchen-design-software-for-professionals`,
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
        "Kitchen design software for professionals — generate remodel concepts from client kitchen photos.",
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
          name: "What is the best kitchen design software for professionals?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Professionals often combine measured CAD tools with visualization software for client communication. Photo-based concept tools like Kivora speed early alignment before detailed drawings.",
          },
        },
        {
          "@type": "Question",
          name: "Does professional kitchen design software replace CAD?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Concept visualization and CAD serve different stages. Use photo AI for style direction; keep CAD for dimensions, documentation, and production.",
          },
        },
        {
          "@type": "Question",
          name: "Who is kitchen design software for professionals built for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Interior designers, kitchen designers, remodel firms, and design-build professionals who need client-ready visuals without slowing the documentation pipeline.",
          },
        },
      ],
    },
  ],
};

const needs = [
  {
    title: "Compress the concept phase",
    description:
      "Clients need to see direction before you invest hours in detailed drawings. Photo concepts close that gap quickly.",
  },
  {
    title: "Client-ready communication",
    description:
      "Shareable remodel images reduce ambiguity with homeowners and stakeholders who do not read plans fluently.",
  },
  {
    title: "Works with your pro stack",
    description:
      "Visualization sits upstream of CAD, catalogs, and construction documents — not as a replacement for them.",
  },
  {
    title: "Kitchen-specific realism",
    description:
      "Cabinet, finish, and work-zone reads matter more in kitchens than generic multi-room restylers.",
  },
];

const howItWorks = [
  {
    name: "Upload",
    desc: "Start with a clear photo of the client’s current kitchen.",
    icon: Camera,
  },
  {
    name: "Style",
    desc: "Explore directions that match the brief and brand.",
    icon: Sparkles,
  },
  {
    name: "Generate",
    desc: "Produce polished concepts for review and handoff.",
    icon: Download,
  },
];

const workflow = [
  {
    stage: "Discovery",
    use: "Turn site photos into early style options for kickoff conversations",
  },
  {
    stage: "Alignment",
    use: "Get client approval on direction before detailed documentation",
  },
  {
    stage: "Documentation",
    use: "Carry the locked look into CAD, specs, and contractor packages",
  },
];

export default function KitchenDesignSoftwareForProfessionalsPage() {
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
                Kitchen design software for professionals
              </span>
            </nav>

            <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
              Software for X · Professionals
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">
              Kitchen design software for professionals
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-kivora-ink/70 md:text-xl">
              Generate realistic remodel concepts from client kitchen photos —
              faster alignment before detailed drawings and documentation.
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
                href="/ai-kitchen-design-software-for-interior-designers"
                className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/15 px-6 py-3 text-base font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-white"
              >
                Software for interior designers
              </Link>
            </div>
          </div>
        </header>

        <section className="bg-white px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
                Why professionals add concept software
              </p>
              <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                Client-ready kitchen visuals that complement CAD — not compete with it
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
                From client kitchen photo to shareable concepts
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
              Where it sits in a professional workflow
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
                  Is this a full professional CAD suite?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  No. Kitchen design software for professionals here means concept
                  visualization for client alignment. Keep measured design and
                  documentation in your established toolchain.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-kivora-ink">
                  How does this differ from software for beginners?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  Beginner pages emphasize zero experience. Professional pages
                  emphasize workflow fit with designers and firms. See{" "}
                  <Link
                    href="/kitchen-design-software-for-beginners"
                    className="font-semibold text-kivora-purple hover:underline"
                  >
                    kitchen design software for beginners
                  </Link>
                  .
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-kivora-ink">
                  Related professional audiences?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  <Link
                    href="/ai-kitchen-design-software-for-interior-designers"
                    className="font-semibold text-kivora-purple hover:underline"
                  >
                    Interior designers
                  </Link>
                  ,{" "}
                  <Link
                    href="/kitchen-visualization-software-for-designers"
                    className="font-semibold text-kivora-purple hover:underline"
                  >
                    visualization for designers
                  </Link>
                  , and{" "}
                  <Link
                    href="/ai-kitchen-design-software-for-contractors"
                    className="font-semibold text-kivora-purple hover:underline"
                  >
                    contractors
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
              Ready to accelerate concept alignment?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-kivora-ink/70">
              Upload a client kitchen photo and generate realistic remodel concepts
              in seconds — then move into detailed design with confidence.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={purchaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-kivora-yellow px-6 py-3 text-base font-semibold text-kivora-ink transition-colors hover:bg-kivora-purple"
              >
                Visualize a Kitchen
                <ArrowRight size={18} />
              </a>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/best-kitchen-design-software-for-interior-designers"
                  className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/20 px-5 py-3 text-sm font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-kivora-cream"
                >
                  Best software for designers
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
