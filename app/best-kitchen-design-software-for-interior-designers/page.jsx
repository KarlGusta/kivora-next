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
  title: "Best Kitchen Design Software for Interior Designers (2026)",
  description:
    "Best kitchen design software for interior designers in 2026 — compare photo-based AI for client concepts, 2D/3D planners for measured work, and tools that speed client approvals.",
  keywords:
    "best kitchen design software for interior designers, kitchen design software for designers, ai kitchen design for interior designers, professional kitchen design tools 2026",
  alternates: {
    canonical: `${SITE_URL}/best-kitchen-design-software-for-interior-designers`,
  },
  openGraph: {
    title: "Best Kitchen Design Software for Interior Designers | Kivora",
    description:
      "Practical guide to kitchen design software for interior designers — photo AI for client concepts, planners for measured work.",
    url: `${SITE_URL}/best-kitchen-design-software-for-interior-designers`,
    siteName: "Kivora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Kitchen Design Software for Interior Designers 2026",
    description:
      "Compare kitchen design software built for interior designers — concepts, plans, and client share.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Best Kitchen Design Software for Interior Designers",
      description:
        "Guide to the best kitchen design software for interior designers.",
      url: `${SITE_URL}/best-kitchen-design-software-for-interior-designers`,
      isPartOf: {
        "@type": "WebSite",
        name: "Kivora",
        url: SITE_URL,
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the best kitchen design software for interior designers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It depends on the phase. Photo-based AI tools like Kivora are strong for fast client concepts from a real kitchen photo. 2D/3D planners are strong for measured layouts and documentation. Many designers use both.",
          },
        },
        {
          "@type": "Question",
          name: "Can interior designers use AI kitchen tools with clients?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. AI photo tools help designers show multiple remodel directions quickly, align clients early, and reduce revision loops before measured drawings or construction documents.",
          },
        },
      ],
    },
  ],
};

const tools = [
  {
    name: "Kivora",
    blurb:
      "Photo-based AI for interior designers — generate realistic kitchen remodel concepts from a client photo for early direction and shareable approvals.",
    bestFor: "Fast client concepts from a real kitchen photo",
    href: "/",
    cta: "Try Kivora",
  },
  {
    name: "Planner 5D",
    blurb:
      "2D/3D planning software with catalogs — useful when designers need measured layouts and object placement for client presentations.",
    bestFor: "Measured layout planning and catalogs",
    href: "/kivora-vs-planner-5d",
    cta: "Kivora vs Planner 5D",
  },
  {
    name: "Homestyler",
    blurb:
      "Traditional 2D/3D design software — useful for floor plans, detailed scenes, and longer-form design documentation.",
    bestFor: "Measured plans and detailed 3D scenes",
    href: "/kivora-vs-homestyler",
    cta: "Kivora vs Homestyler",
  },
  {
    name: "RoomGPT",
    blurb:
      "General AI room restyler — quick multi-room style exploration; less kitchen-specific than dedicated kitchen tools.",
    bestFor: "Quick multi-room style exploration",
    href: "/kivora-vs-roomgpt",
    cta: "Kivora vs RoomGPT",
  },
  {
    name: "REimagineHome",
    blurb:
      "Photo-based home redesign tool — useful when client work spans more than the kitchen.",
    bestFor: "Broader home redesign concepts",
    href: "/kivora-vs-reimaginehome",
    cta: "Kivora vs REimagineHome",
  },
  {
    name: "Remodel AI",
    blurb:
      "General remodel exploration tool — inspiration-first looks across spaces for early client conversations.",
    bestFor: "General remodel look exploration",
    href: "/kivora-vs-remodel-ai",
    cta: "Kivora vs Remodel AI",
  },
  {
    name: "HomeDesignsAI",
    blurb:
      "Broader AI home design tool — useful when designers want AI concepts across more of a home project.",
    bestFor: "Broader AI home design concepts",
    href: "/kivora-vs-homedesignsai",
    cta: "Kivora vs HomeDesignsAI",
  },
];

const pickByGoal = [
  {
    title: "Show clients remodel options from their kitchen photo",
    pick: "Kivora",
  },
  {
    title: "Produce measured layout and catalog presentations",
    pick: "Planner 5D or Homestyler",
  },
  {
    title: "Explore style quickly across multiple rooms",
    pick: "RoomGPT",
  },
  {
    title: "Client work spans more than the kitchen",
    pick: "REimagineHome or HomeDesignsAI",
  },
  {
    title: "Early remodel look exploration",
    pick: "Remodel AI",
  },
];

const tips = [
  {
    title: "Concept phase vs documentation phase",
    description:
      "Photo AI speeds client direction and buy-in. Planning software supports measured layouts and more formal documentation. Many designers use both in sequence.",
  },
  {
    title: "Client-ready visuals",
    description:
      "Tools that produce clear, shareable images from the real space reduce revision loops and help clients decide before drawings are finalized.",
  },
  {
    title: "Kitchen-first still matters",
    description:
      "Generic room tools can inspire style. Kitchen-focused tools usually produce clearer cabinet, finish, and remodel direction for kitchen projects.",
  },
  {
    title: "Stack tools by workflow",
    description:
      "Align on style with photo AI, then refine layout in a planner — or start with measurements if the project is layout-driven from day one.",
  },
];

export default function BestKitchenDesignSoftwareForInteriorDesignersPage() {
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
              <Link href="/comparisons" className="hover:text-kivora-ink">
                Comparisons
              </Link>
              <span>/</span>
              <span className="text-kivora-ink">For interior designers</span>
            </nav>

            <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
              Best-of · By user
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">
              Best kitchen design software for interior designers
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-kivora-ink/70 md:text-xl">
              A practical list of kitchen design software for interior designers —
              photo AI for client concepts, 2D/3D planners for measured work, and
              tools that speed approvals without slowing the project.
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
                href="/best-kitchen-design-tool-for-homeowners"
                className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/15 px-6 py-3 text-base font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-white"
              >
                Best for homeowners
              </Link>
            </div>
          </div>
        </header>

        <section className="bg-white px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
                How to choose
              </p>
              <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                What interior designers should optimize for
              </h2>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {tips.map((item) => (
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
            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              Best tools for interior designers at a glance
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-kivora-ink/70">
              Use these when comparing kitchen design software for client work.
              Each card links to a deeper head-to-head where available.
            </p>
            <div className="mt-12 space-y-4">
              {tools.map((tool) => (
                <article
                  key={tool.name}
                  className="border border-kivora-ink/10 bg-white p-6 sm:p-8"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="max-w-2xl">
                      <h3 className="text-xl font-semibold text-kivora-ink">
                        {tool.name}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-kivora-ink/70">
                        {tool.blurb}
                      </p>
                      <p className="mt-3 text-sm font-medium text-kivora-ink/55">
                        Best for:{" "}
                        <span className="text-kivora-ink">{tool.bestFor}</span>
                      </p>
                    </div>
                    {tool.name === "Kivora" ? (
                      <a
                        href={purchaseUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-11 shrink-0 items-center justify-center gap-2 bg-kivora-yellow px-5 text-sm font-semibold text-kivora-ink transition-colors hover:bg-kivora-purple"
                      >
                        {tool.cta}
                        <ArrowRight size={16} />
                      </a>
                    ) : (
                      <Link
                        href={tool.href}
                        className="inline-flex h-11 shrink-0 items-center justify-center border border-kivora-ink/15 px-5 text-sm font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-kivora-cream"
                      >
                        {tool.cta}
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              Quick picks by designer goal
            </h2>
            <ul className="mt-10 space-y-4">
              {pickByGoal.map((item) => (
                <li
                  key={item.title}
                  className="flex flex-col gap-1 border-b border-kivora-ink/10 pb-4 sm:flex-row sm:items-baseline sm:justify-between"
                >
                  <span className="text-base font-medium text-kivora-ink">
                    {item.title}
                  </span>
                  <span className="text-sm font-semibold text-kivora-purple">
                    {item.pick}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
                How Kivora works
              </p>
              <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                From client kitchen photo to shareable concepts in three steps
              </h2>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {[
                {
                  name: "Upload",
                  desc: "Start with a clear photo of the client’s kitchen.",
                  icon: Camera,
                },
                {
                  name: "Style",
                  desc: "Choose remodel directions to present side by side.",
                  icon: Sparkles,
                },
                {
                  name: "Generate",
                  desc: "Share polished concepts for faster client decisions.",
                  icon: Download,
                },
              ].map((step, index) => (
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
          <div className="mx-auto max-w-7xl border-y border-kivora-ink/10 py-16 text-center">
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-kivora-purple/10">
              <Clock className="h-6 w-6 text-kivora-purple" />
            </div>
            <h2 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
              Speed up client kitchen concepts without another CAD session
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-kivora-ink/70">
              Upload a client kitchen photo and generate realistic remodel
              concepts in seconds — built for early direction and shareable
              approvals.
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
                  href="/best-kitchen-design-software"
                  className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/20 px-5 py-3 text-sm font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-kivora-cream"
                >
                  Best design software
                </Link>
                <Link
                  href="/comparisons"
                  className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/20 px-5 py-3 text-sm font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-kivora-cream"
                >
                  All comparisons
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
