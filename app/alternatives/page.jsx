import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MarketingNavbar from "@/components/marketing/MarketingNavbar";
import MarketingFooter from "@/components/marketing/MarketingFooter";
import { purchaseUrl } from "@/data/commercialPages";

const SITE_URL = "https://kivora.collabtower.com";

export const metadata = {
  title: "Competitor Alternatives | Best Kitchen Design Tool Alternatives",
  description:
    "Compare Kivora with Planner 5D and other kitchen design tools. High-intent alternatives for homeowners, designers, and remodel teams who want AI kitchen design from a single photo.",
  keywords:
    "planner 5d alternatives, kitchen design software alternatives, ai kitchen designer alternatives, best kitchen design tools, kivora alternatives",
  alternates: {
    canonical: `${SITE_URL}/alternatives`,
  },
  openGraph: {
    title: "Competitor Alternatives | Kivora",
    description:
      "High-intent comparison pages for Planner 5D and other kitchen design tools — see why teams switch to Kivora.",
    url: `${SITE_URL}/alternatives`,
    siteName: "Kivora",
    type: "website",
  },
};

const clusterPages = [
  {
    href: "/planner-5d-alternatives",
    label: "Planner 5D Alternatives",
    description:
      "Best Planner 5D alternatives for AI kitchen design, realistic remodel previews, and faster decisions — without heavy 3D modeling.",
    badge: "Live",
  },
];

const comingSoon = [
  "Best Planner 5D Alternatives",
  "Planner 5D vs Kivora",
  "Planner 5D Alternatives for Kitchen Design",
  "Planner 5D Alternatives for Homeowners",
  "Planner 5D Alternatives for Interior Designers",
  "Free Planner 5D Alternatives",
  "AI Planner 5D Alternatives",
];

export default function AlternativesPillarPage() {
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
            <span className="text-kivora-ink">Alternatives</span>
          </nav>

          <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
            Pillar · Competitor Alternatives
          </p>
          <div className="grid gap-10 border-b border-kivora-ink/10 pb-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">
              High-intent alternatives to popular kitchen design tools.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-kivora-ink/70 md:text-xl">
              Looking for Planner 5D alternatives or other kitchen design software?
              These comparison pages help you evaluate options and see when Kivora’s
              photo-based AI kitchen design is the faster path.
            </p>
          </div>
        </header>

        <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
          <h2 className="text-2xl font-semibold text-kivora-ink md:text-3xl">
            Live comparison pages
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-kivora-ink/60">
            Start with the highest-intent cluster pages.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {clusterPages.map((item) => (
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
                  Read comparison
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
            More clusters coming
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-kivora-ink/60">
            Planned high-intent pages in this cluster.
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

        <section className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col items-start justify-between gap-6 border border-kivora-ink bg-kivora-yellow/30 p-8 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-semibold text-kivora-ink">
                Prefer AI kitchen design from a photo?
              </h2>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-kivora-ink/60">
                Skip heavy modeling. Upload one photo and generate realistic remodel
                concepts in seconds.
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
