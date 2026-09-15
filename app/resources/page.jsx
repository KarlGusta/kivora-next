import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MarketingNavbar from "@/components/marketing/MarketingNavbar";
import MarketingFooter from "@/components/marketing/MarketingFooter";
import { purchaseUrl } from "@/data/commercialPages";

export const metadata = {
  title: "Resources",
  description:
    "Kivora resources for AI kitchen design — guides, free remodel tools, competitor alternatives, and the AI Kitchen Design pillar for planning remodels with confidence.",
  keywords:
    "ai kitchen design, ai kitchen designer, kitchen remodel resources, kitchen design guides, free kitchen tools, planner 5d alternatives, roomgpt alternatives, reimaginehome alternatives, remodel ai alternatives, kivora resources",
  alternates: {
    canonical: "https://kivora.collabtower.com/resources",
  },
  openGraph: {
    title: "Resources | Kivora",
    description:
      "Guides, tools, competitor alternatives, and the AI Kitchen Design pillar — plan smarter kitchen remodels with Kivora.",
    url: "https://kivora.collabtower.com/resources",
    siteName: "Kivora",
    type: "website",
  },
};

const pillarPages = [
  {
    href: "/ai-kitchen-designer",
    label: "AI Kitchen Design",
    description:
      "Main SEO pillar for “ai kitchen design” and “ai kitchen designer” — photo-based remodel previews and how to use Kivora as your online kitchen designer.",
    badge: "Main pillar",
  },
  {
    href: "/alternatives",
    label: "Competitor Alternatives",
    description:
      "High-intent comparison hub for Planner 5D, RoomGPT, REimagineHome, Remodel AI, and other kitchen design tools — when to switch to photo-based AI remodel visualization.",
    badge: "Pillar",
  },
];

const clusterPages = [
  {
    href: "/planner-5d-alternatives",
    label: "Planner 5D Alternatives",
    description:
      "Best Planner 5D alternatives for AI kitchen design, realistic remodel previews, and faster decisions without heavy 3D modeling.",
  },
  {
    href: "/roomgpt-alternatives",
    label: "RoomGPT Alternatives",
    description:
      "Best RoomGPT alternatives for kitchen-focused AI remodel visualization — photo-based concepts built for remodel decisions.",
  },
  {
    href: "/reimaginehome-alternatives",
    label: "REimagineHome Alternatives",
    description:
      "Best REimagineHome alternatives for kitchen remodel visualization — focused photo-to-concept workflow for remodel decisions.",
  },
  {
    href: "/remodel-ai-alternatives",
    label: "Remodel AI Alternatives",
    description:
      "Best Remodel AI alternatives for kitchen remodel visualization — kitchen-first concepts for remodel decisions and sharing.",
  },
];

const resourceLinks = [
  {
    href: "/tools",
    label: "Free Kitchen Tools",
    description:
      "Budget, cabinet, flooring, layout, and style calculators — no signup required.",
  },
  {
    href: "/blog",
    label: "Blog",
    description:
      "Remodeling guides, visualization tips, and product notes from Kivora.",
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-kivora-cream text-kivora-ink">
      <MarketingNavbar />

      <main className="pb-28 pt-32">
        <header className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
            Resources
          </p>
          <div className="grid gap-10 border-b border-kivora-ink/10 pb-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">
              Design smarter kitchens with clearer decisions.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-kivora-ink/70 md:text-xl">
              Start with the AI Kitchen Design pillar and Competitor Alternatives,
              then use free tools and guides to plan layout, budget, and style
              before you remodel.
            </p>
          </div>
        </header>

        <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
          <h2 className="text-2xl font-semibold text-kivora-ink md:text-3xl">
            SEO pillars
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-kivora-ink/60">
            Priority pages that explain Kivora’s core topic clusters.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pillarPages.map((item) => (
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
                  Read guide
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
            Cluster pages
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-kivora-ink/60">
            High-intent comparison and supporting pages under the pillars.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {clusterPages.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group block border border-kivora-ink/10 bg-white p-6 transition-colors hover:border-kivora-ink"
              >
                <h3 className="text-lg font-semibold text-kivora-ink">
                  {item.label}
                </h3>
                <p className="mt-2 text-sm leading-6 text-kivora-ink/65">
                  {item.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-kivora-ink">
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
            More resources
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {resourceLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group block border border-kivora-ink/10 bg-white p-6 transition-colors hover:border-kivora-ink"
              >
                <h3 className="text-lg font-semibold text-kivora-ink">
                  {item.label}
                </h3>
                <p className="mt-2 text-sm leading-6 text-kivora-ink/65">
                  {item.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-kivora-ink">
                  Explore
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col items-start justify-between gap-6 border border-kivora-ink bg-kivora-yellow/30 p-8 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-semibold text-kivora-ink">
                Ready to see your kitchen remodeled?
              </h2>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-kivora-ink/60">
                Upload one photo and generate realistic AI remodel concepts in
                seconds.
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
