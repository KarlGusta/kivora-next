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
  title: "Kitchen Remodel Software for Small Businesses (2026) | Kivora",
  description:
    "Kitchen remodel software for small businesses — generate realistic remodel concepts from a kitchen photo for client proposals, sales, and design alignment without a large design team.",
  keywords:
    "kitchen remodel software for small businesses, kitchen remodeling software small business, remodel software for small businesses, small business kitchen design software",
  alternates: {
    canonical: `${SITE_URL}/kitchen-remodel-software-for-small-businesses`,
  },
  openGraph: {
    title: "Kitchen Remodel Software for Small Businesses | Kivora",
    description:
      "Photo-based kitchen remodel software for small businesses — client-ready concepts without a large design department.",
    url: `${SITE_URL}/kitchen-remodel-software-for-small-businesses`,
    siteName: "Kivora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kitchen Remodel Software for Small Businesses",
    description:
      "Generate shareable kitchen remodel concepts from photos — built for small design, remodel, and kitchen businesses.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Kitchen Remodel Software for Small Businesses",
      description:
        "Guide to kitchen remodel software for small businesses — photo-based remodel concepts for client proposals.",
      url: `${SITE_URL}/kitchen-remodel-software-for-small-businesses`,
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
        "Kitchen remodel software for small businesses — generate remodel concepts from kitchen photos.",
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
          name: "What is the best kitchen remodel software for small businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Small businesses usually need software that produces client-ready remodel visuals quickly without a large design staff. Photo-based tools like Kivora support proposals and alignment at that scale.",
          },
        },
        {
          "@type": "Question",
          name: "Does remodel software replace a design team for small businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. It compresses the concept stage so a small team can show options faster. Detailed plans, pricing, and production still depend on your normal process and expertise.",
          },
        },
        {
          "@type": "Question",
          name: "Who uses kitchen remodel software in a small business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Owners, sales staff, and designers at remodel firms, kitchen showrooms, and contracting businesses use it for client conversations and scope alignment.",
          },
        },
      ],
    },
  ],
};

const needs = [
  {
    title: "Client-ready visuals without a big team",
    description:
      "Small firms win when they can show direction fast. Photo concepts fill the gap when you cannot staff a full visualization department.",
  },
  {
    title: "Stronger proposals",
    description:
      "A remodel concept on the client’s actual kitchen makes estimates and sales conversations more concrete.",
  },
  {
    title: "Faster alignment",
    description:
      "Fewer revision loops mean less unpaid design time and clearer handoffs to trades or cabinet orders.",
  },
  {
    title: "Fits lean workflows",
    description:
      "Works beside the tools you already use — catalogs, quotes, and CAD — instead of replacing your whole stack.",
  },
];

const howItWorks = [
  {
    name: "Upload",
    desc: "Start with a clear photo of the client’s kitchen.",
    icon: Camera,
  },
  {
    name: "Style",
    desc: "Explore remodel directions that fit the brief and budget.",
    icon: Sparkles,
  },
  {
    name: "Generate",
    desc: "Produce shareable concepts for proposals and review.",
    icon: Download,
  },
];

const workflow = [
  {
    stage: "Lead / consult",
    use: "Show possible outcomes early so the client engages with a real vision",
  },
  {
    stage: "Proposal",
    use: "Attach concepts that make scope and style easier to approve",
  },
  {
    stage: "Delivery",
    use: "Hand the locked look to production, trades, or detailed design",
  },
];

export default function KitchenRemodelSoftwareForSmallBusinessesPage() {
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
                Kitchen remodel software for small businesses
              </span>
            </nav>

            <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
              Software for X · Small businesses
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">
              Kitchen remodel software for small businesses
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-kivora-ink/70 md:text-xl">
              Client-ready remodel concepts from a kitchen photo — stronger
              proposals and faster alignment without a large design team.
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
                href="/ai-kitchen-design-software-for-kitchen-companies"
                className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/15 px-6 py-3 text-base font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-white"
              >
                Software for kitchen companies
              </Link>
            </div>
          </div>
        </header>

        <section className="bg-white px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
                Why small businesses adopt remodel software
              </p>
              <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                Professional kitchen concepts at a lean operating scale
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
                From client kitchen photo to proposal-ready concepts
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
              Where it sits in a small-business workflow
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
                  Is this enterprise kitchen software?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  No. Kitchen remodel software for small businesses is for concept
                  and client communication. Catalogs, ERP, and production systems stay
                  separate when you need them.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-kivora-ink">
                  How does this relate to software for contractors or kitchen companies?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  Overlap is high for sales and alignment. Audience framing differs:
                  see{" "}
                  <Link
                    href="/ai-kitchen-design-software-for-contractors"
                    className="font-semibold text-kivora-purple hover:underline"
                  >
                    contractors
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/ai-kitchen-design-software-for-kitchen-companies"
                    className="font-semibold text-kivora-purple hover:underline"
                  >
                    kitchen companies
                  </Link>
                  .
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-kivora-ink">
                  Can homeowners use related tools?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-kivora-ink/70">
                  Yes — homeowner-facing pages help inbound clients prepare. See{" "}
                  <Link
                    href="/kitchen-remodel-software-for-homeowners"
                    className="font-semibold text-kivora-purple hover:underline"
                  >
                    kitchen remodel software for homeowners
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
              Ready for remodel concepts that fit a lean team?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-kivora-ink/70">
              Upload a kitchen photo and generate realistic remodel concepts in
              seconds — stronger proposals without a large design department.
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
                  href="/ai-kitchen-design-software-for-remodelers"
                  className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/20 px-5 py-3 text-sm font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-kivora-cream"
                >
                  Software for remodelers
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
