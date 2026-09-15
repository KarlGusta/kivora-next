import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MarketingNavbar from "@/components/marketing/MarketingNavbar";
import MarketingFooter from "@/components/marketing/MarketingFooter";
import { purchaseUrl } from "@/data/commercialPages";

const SITE_URL = "https://kivora.collabtower.com";

export const metadata = {
  title: "Competitor Comparisons | Kivora vs Kitchen Design Tools",
  description:
    "Head-to-head comparison matrices: Kivora vs Planner 5D, RoomGPT, REimagineHome, Remodel AI, HomeDesignsAI, Homestyler, plus Planner 5D vs RoomGPT. See which tool fits homeowners, designers, and remodel teams.",
  keywords:
    "kivora vs planner 5d, kivora vs roomgpt, kivora vs reimaginehome, kivora vs remodel ai, kivora vs homedesignsai, kivora vs homestyler, planner 5d vs roomgpt, kitchen design comparison, competitor comparisons kivora",
  alternates: {
    canonical: `${SITE_URL}/comparisons`,
  },
  openGraph: {
    title: "Competitor Comparisons | Kivora",
    description:
      "Side-by-side comparison matrices for Kivora vs major kitchen design tools, plus Planner 5D vs RoomGPT.",
    url: `${SITE_URL}/comparisons`,
    siteName: "Kivora",
    type: "website",
  },
};

const comparisonPages = [
  {
    href: "/kivora-vs-planner-5d",
    label: "Kivora vs Planner 5D",
    description:
      "Photo-based AI kitchen remodel visualization vs traditional 2D/3D floor planning.",
    badge: "Live",
  },
  {
    href: "/kivora-vs-roomgpt",
    label: "Kivora vs RoomGPT",
    description:
      "Kitchen-focused AI remodel concepts vs general AI room restyling.",
    badge: "Live",
  },
  {
    href: "/kivora-vs-reimaginehome",
    label: "Kivora vs REimagineHome",
    description:
      "Kitchen-first remodel visualization vs broad photo-based home redesign.",
    badge: "Live",
  },
  {
    href: "/kivora-vs-remodel-ai",
    label: "Kivora vs Remodel AI",
    description:
      "Kitchen-first AI remodel concepts vs general remodel AI tools.",
    badge: "Live",
  },
  {
    href: "/kivora-vs-homedesignsai",
    label: "Kivora vs HomeDesignsAI",
    description:
      "Kitchen-first AI remodel concepts vs broader AI home design tools.",
    badge: "Live",
  },
  {
    href: "/kivora-vs-homestyler",
    label: "Kivora vs Homestyler",
    description:
      "Photo-based AI kitchen remodel visualization vs traditional 2D/3D floor planning.",
    badge: "Live",
  },
  {
    href: "/planner-5d-vs-roomgpt",
    label: "Planner 5D vs RoomGPT",
    description:
      "Three-way matrix: 3D floor planning vs general AI room restyles vs kitchen-focused AI remodel concepts.",
    badge: "Live",
  },
];

const comingSoon = [
  "Kivora vs DecorMatters",
  "Kivora vs Interior AI",
];

export default function ComparisonsPillarPage() {
  return (
    <div className="min-h-screen bg-kivora-cream text-kivora-ink">
      <MarketingNavbar />

      <main className="pb-28 pt-32">
        <header className="mx-auto max-w-7xl px-5 md:px-8">
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm font-medium text-kivora-ink/45">
            <Link href="/" className="hover:text-kivora-ink">
              Home
            </Link>
            <span>/</span>
            <Link href="/resources" className="hover:text-kivora-ink">
              Resources
            </Link>
            <span>/</span>
            <span className="text-kivora-ink">Comparisons</span>
          </nav>

          <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
            Pillar · Competitor Comparisons
          </p>
          <div className="grid gap-10 border-b border-kivora-ink/10 pb-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">
              Head-to-head comparisons with tools people already consider.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-kivora-ink/70 md:text-xl">
              Direct comparison matrices for Kivora vs Planner 5D, RoomGPT,
              REimagineHome, Remodel AI, HomeDesignsAI, Homestyler — plus
              competitor-vs-competitor pages like Planner 5D vs RoomGPT.
            </p>
          </div>
        </header>

        <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
          <h2 className="text-2xl font-semibold text-kivora-ink md:text-3xl">
            Live comparison pages
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-kivora-ink/60">
            Side-by-side matrices under this pillar.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {comparisonPages.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group block border border-kivora-purple/30 bg-kivora-purple/[0.04] p-6 transition-colors hover:border-kivora-purple"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-kivora-ink">
                    {item.label}
                  </h3>
                  {item.badge && (
                    <span className="shrink-0 bg-kivora-purple/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-kivora-purple">
                      {item.badge}
                    </span>
                  )}
                </div>
                <p className="mt-3 text-sm leading-6 text-kivora-ink/65">
                  {item.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-kivora-purple">
                  View matrix
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl border-t border-kivora-ink/10 px-5 py-16 md:px-8">
          <h2 className="text-2xl font-semibold text-kivora-ink md:text-3xl">
            More comparisons coming
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-kivora-ink/60">
            Planned head-to-head pages in this cluster.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {comingSoon.map((label) => (
              <li
                key={label}
                className="border border-kivora-ink/10 bg-white px-5 py-4 text-sm font-medium text-kivora-ink/70"
              >
                {label}
              </li>
            ))}
          </ul>
        </section>

        <section className="mx-auto max-w-7xl border-t border-kivora-ink/10 px-5 py-16 md:px-8">
          <h2 className="text-2xl font-semibold text-kivora-ink md:text-3xl">
            Related
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-kivora-ink/60">
            Looking for broader alternatives lists instead of one-to-one matrices?
          </p>
          <div className="mt-8">
            <Link
              href="/alternatives"
              className="group inline-flex items-center gap-2 border border-kivora-ink/10 bg-white px-6 py-4 text-sm font-semibold text-kivora-ink transition-colors hover:border-kivora-ink"
            >
              Competitor Alternatives pillar
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col items-start justify-between gap-6 border border-kivora-ink bg-kivora-yellow/30 p-8 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-semibold text-kivora-ink">
                Prefer AI kitchen design from a photo?
              </h2>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-kivora-ink/60">
                Upload one photo and generate realistic remodel concepts in seconds.
              </p>
            </div>
            <a
              href={purchaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 border border-kivora-ink bg-kivora-ink px-5 py-3 text-sm font-semibold text-kivora-cream transition-colors hover:bg-kivora-purple hover:text-kivora-ink"
            >
              Visualize My Kitchen
              <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}
