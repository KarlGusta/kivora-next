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
  title: "AI Kitchen Design Software for Kitchen Companies (2026) | Kivora",
  description:
    "AI kitchen design software for kitchen companies — show customers realistic remodel concepts from their kitchen photo. Faster design decisions and stronger sales conversations.",
  keywords:
    "ai kitchen design software for kitchen companies, kitchen design software for kitchen companies, kitchen company design software, showroom kitchen design software, cabinet company design software",
  alternates: {
    canonical: `${SITE_URL}/ai-kitchen-design-software-for-kitchen-companies`,
  },
  openGraph: {
    title: "AI Kitchen Design Software for Kitchen Companies | Kivora",
    description:
      "Photo-based AI kitchen design software for kitchen companies — customer-ready remodel concepts from a real kitchen photo.",
    url: `${SITE_URL}/ai-kitchen-design-software-for-kitchen-companies`,
    siteName: "Kivora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Kitchen Design Software for Kitchen Companies",
    description:
      "Generate shareable kitchen remodel concepts for sales and design teams — from the customer’s real kitchen.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "AI Kitchen Design Software for Kitchen Companies",
      description:
        "Guide to AI kitchen design software for kitchen companies — photo-based remodel concepts for sales and design teams.",
      url: `${SITE_URL}/ai-kitchen-design-software-for-kitchen-companies`,
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
        "AI kitchen design software for kitchen companies — generate remodel concepts from customer kitchen photos.",
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
          name: "What is the best AI kitchen design software for kitchen companies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kitchen companies usually need software that turns a customer’s kitchen photo into clear remodel visuals for sales and design conversations. Photo-based tools like Kivora support that early concept stage.",
          },
        },
        {
          "@type": "Question",
          name: "Does AI kitchen design software replace kitchen company CAD or catalog systems?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. AI visualization helps customers see style direction quickly. Detailed cabinet specifications, pricing, and manufacturing data still live in your professional catalog and CAD tools.",
          },
        },
        {
          "@type": "Question",
          name: "How do kitchen companies use AI design software with customers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Typical flow: capture or receive a kitchen photo, generate remodel directions, review with the customer in showroom or remote, then move into detailed design and product selection once direction is locked.",
          },
        },
      ],
    },
  ],
};

const needs = [
  {
    title: "Move past blank-slate conversations",
    description:
      "Customers often cannot picture cabinets and finishes in their own room. Concepts on their photo make the sale concrete.",
  },
  {
    title: "Speed for sales and design teams",
    description:
      "Generate shareable options in minutes — useful in showroom appointments and follow-up emails without a full CAD rebuild first.",
  },
  {
    title: "Works beside your catalog stack",
    description:
      "AI concepts lock the look; your configurators, catalogs, and CAD still own SKUs, pricing, and production.",
  },
  {
    title: "Fewer stalled decisions",
    description:
      "When couples or stakeholders disagree on style, realistic side-by-side concepts shorten the path to a locked direction.",
  },
];

const howItWorks = [
  {
    name: "Upload",
    desc: "Start with a clear photo of the customer’s current kitchen.",
    icon: Camera,
  },
  {
    name: "Style",
    desc: "Explore remodel directions that fit the brief and brand range.",
    icon: Sparkles,
  },
  {
    name: "Generate",
    desc: "Produce customer-ready concepts for review and approval.",
    icon: Download,
  },
];

const workflow = [
  {
    stage: "Lead / showroom",
    use: "Show what a remodel could look like in their space — not only on a sample board",
  },
  {
    stage: "Design handoff",
    use: "Carry the locked look into detailed design, catalogs, and quotes",
  },
  {
    stage: "Close",
    use: "Reduce late style changes that slow orders and production",
  },
];

export default function AiKitchenDesignSoftwareForKitchenCompaniesPage() {
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
                AI kitchen design software for kitchen companies
              </span>
            </nav>

            <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
              Software for X · Kitchen companies
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">
              AI kitchen design software for kitchen companies
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-kivora-ink/70 md:text-xl">
              Help customers see the remodel in their own kitchen — realistic
              concepts from a photo for stronger sales conversations and faster
              design decisions.
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
                href="/best-kitchen-design-software"
                className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/15 px-6 py-3 text-base font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-white"
              >
                Best kitchen design software
              </Link>
            </div>
          </div>
        </header>

        <section className="bg-white px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
                Why kitchen companies use AI here
              </p>
              <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                Customer-ready kitchen visuals without rebuilding every scene in CAD
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
                From customer kitchen photo to shareable concepts
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
              Where it sits in a kitchen company workflow
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
                  Is this a full kitchen company ERP or CAD system?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  No. AI kitchen design software for kitchen companies is for
                  visual direction and customer alignment. Catalogs, pricing, and
                  production stay in your existing systems.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-kivora-ink">
                  How does this differ from software for remodelers or contractors?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  Kitchen companies often combine showroom sales with product
                  lines and design services. Related audiences:{" "}
                  <Link
                    href="/ai-kitchen-design-software-for-remodelers"
                    className="font-semibold text-kivora-purple hover:underline"
                  >
                    remodelers
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/ai-kitchen-design-software-for-contractors"
                    className="font-semibold text-kivora-purple hover:underline"
                  >
                    contractors
                  </Link>
                  .
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-kivora-ink">
                  Can homeowners and designers use the same concepts?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  Yes — shared visuals keep the full decision group aligned. See{" "}
                  <Link
                    href="/ai-kitchen-design-software-for-homeowners"
                    className="font-semibold text-kivora-purple hover:underline"
                  >
                    software for homeowners
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/ai-kitchen-design-software-for-interior-designers"
                    className="font-semibold text-kivora-purple hover:underline"
                  >
                    software for interior designers
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
              Ready to show customers their kitchen remodeled?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-kivora-ink/70">
              Upload a kitchen photo and generate realistic remodel concepts in
              seconds — stronger sales conversations, faster design decisions.
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
