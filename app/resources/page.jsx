import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MarketingNavbar from "@/components/marketing/MarketingNavbar";
import MarketingFooter from "@/components/marketing/MarketingFooter";
import { purchaseUrl } from "@/data/commercialPages";

export const metadata = {
  title: "Resources",
  description:
    "Kivora resources for AI kitchen design — guides, free remodel tools, competitor alternatives, competitor comparisons, and the AI Kitchen Design pillar for planning remodels with confidence.",
  keywords:
    "ai kitchen design, best tool to visualize a kitchen renovation before construction, best tool to visualize a kitchen remodel, kivora resources",
  alternates: {
    canonical: "https://kivora.collabtower.com/resources",
  },
  openGraph: {
    title: "Resources | Kivora",
    description:
      "Guides, tools, competitor alternatives, competitor comparisons, and the AI Kitchen Design pillar — plan smarter kitchen remodels with Kivora.",
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
      "High-intent “[Competitor] Alternatives” hub for Planner 5D, RoomGPT, REimagineHome, and other kitchen design tools.",
    badge: "Pillar",
  },
  {
    href: "/comparisons",
    label: "Competitor Comparisons",
    description:
      "Head-to-head comparison matrices: Kivora vs major tools, plus competitor-vs-competitor pages and best-of guides for design, remodel, visualizer, software, apps, planners, users, and decisions.",
    badge: "Pillar",
  },
];

const clusterPages = [
  {
    href: "/ai-kitchen-design-software-for-homeowners",
    label: "AI kitchen design software for homeowners",
    description:
      "Photo-based AI kitchen design software built for homeowners — see the remodel before you commit, no 3D skills required.",
  },
  {
    href: "/ai-kitchen-design-software-for-interior-designers",
    label: "AI kitchen design software for interior designers",
    description:
      "Generate realistic kitchen remodel concepts from client photos — faster style alignment before detailed drawings.",
  },
  {
    href: "/ai-kitchen-design-software-for-contractors",
    label: "AI kitchen design software for contractors",
    description:
      "Client-ready kitchen remodel visuals from a photo — faster approvals and fewer mid-job changes.",
  },
  {
    href: "/ai-kitchen-design-software-for-remodelers",
    label: "AI kitchen design software for remodelers",
    description:
      "Remodel visualization from the real kitchen photo — lock style before materials and labor.",
  },
  {
    href: "/ai-kitchen-design-software-for-kitchen-companies",
    label: "AI kitchen design software for kitchen companies",
    description:
      "Customer-ready remodel concepts from a kitchen photo — stronger sales and faster design decisions.",
  },
  {
    href: "/kitchen-visualization-software-for-designers",
    label: "Kitchen visualization software for designers",
    description:
      "Photo-based kitchen visualization for designers — client-ready remodel concepts before detailed drawings.",
  },
  {
    href: "/kitchen-visualization-software-for-contractors",
    label: "Kitchen visualization software for contractors",
    description:
      "Client-ready kitchen remodel visuals from a photo — faster approvals and fewer mid-job changes.",
  },
  {
    href: "/kitchen-remodel-software-for-homeowners",
    label: "Kitchen remodel software for homeowners",
    description:
      "See realistic remodel concepts from a photo of your kitchen before you commit — no design skills required.",
  },
  {
    href: "/kitchen-remodel-software-for-small-businesses",
    label: "Kitchen remodel software for small businesses",
    description:
      "Client-ready remodel concepts from a kitchen photo — stronger proposals without a large design team.",
  },
  {
    href: "/kitchen-design-software-for-beginners",
    label: "Kitchen design software for beginners",
    description:
      "Realistic remodel ideas from a kitchen photo — no CAD skills or design degree required.",
  },
  {
    href: "/kitchen-design-software-for-professionals",
    label: "Kitchen design software for professionals",
    description:
      "Client-ready remodel concepts from kitchen photos — faster alignment before detailed drawings.",
  },
  {
    href: "/ai-kitchen-designer-for-small-kitchens",
    label: "AI kitchen designer for small kitchens",
    description:
      "Remodel concepts for compact kitchens from a photo — maximize look and function before you commit.",
  },
  {
    href: "/ai-kitchen-designer-for-large-kitchens",
    label: "AI kitchen designer for large kitchens",
    description:
      "Remodel concepts for spacious layouts from a photo — align style across islands, zones, and finishes.",
  },
  {
    href: "/ai-kitchen-designer-for-apartments",
    label: "AI kitchen designer for apartments",
    description:
      "Remodel concepts for rental and condo kitchens from a photo — style upgrades without assuming you can move walls.",
  },
  {
    href: "/ai-kitchen-designer-for-rental-kitchens",
    label: "AI kitchen designer for rental kitchens",
    description:
      "Style upgrades from a photo for leased kitchens — reversible looks that respect landlord rules.",
  },
  {
    href: "/ai-kitchen-designer-for-outdated-kitchens",
    label: "AI kitchen designer for outdated kitchens",
    description:
      "Modern remodel concepts from a photo of your dated kitchen — explore fresh looks before you commit.",
  },
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
  {
    href: "/homedesignsai-alternatives",
    label: "HomeDesignsAI Alternatives",
    description:
      "Best HomeDesignsAI alternatives for kitchen remodel visualization — kitchen-first concepts for remodel decisions and sharing.",
  },
  {
    href: "/decormatters-alternatives",
    label: "DecorMatters Alternatives",
    description:
      "Best DecorMatters alternatives for kitchen remodel visualization — kitchen-first concepts for remodel decisions and sharing.",
  },
  {
    href: "/homestyler-alternatives",
    label: "Homestyler Alternatives",
    description:
      "Best Homestyler alternatives for AI kitchen design, realistic remodel previews, and faster decisions without heavy 3D modeling.",
  },
  {
    href: "/interior-ai-alternatives",
    label: "Interior AI Alternatives",
    description:
      "Best Interior AI alternatives for kitchen remodel visualization — kitchen-first concepts for remodel decisions and sharing.",
  },
  {
    href: "/kivora-vs-planner-5d",
    label: "Kivora vs Planner 5D",
    description:
      "Side-by-side matrix: photo-based AI kitchen remodel visualization vs traditional 2D/3D floor planning.",
  },
  {
    href: "/kivora-vs-roomgpt",
    label: "Kivora vs RoomGPT",
    description:
      "Side-by-side matrix: kitchen-focused AI remodel concepts vs general AI room restyling.",
  },
  {
    href: "/kivora-vs-reimaginehome",
    label: "Kivora vs REimagineHome",
    description:
      "Side-by-side matrix: kitchen-first remodel visualization vs broad photo-based home redesign.",
  },
  {
    href: "/kivora-vs-remodel-ai",
    label: "Kivora vs Remodel AI",
    description:
      "Side-by-side matrix: kitchen-first AI remodel concepts vs general remodel AI tools.",
  },
  {
    href: "/kivora-vs-homedesignsai",
    label: "Kivora vs HomeDesignsAI",
    description:
      "Side-by-side matrix: kitchen-first AI remodel concepts vs broader AI home design tools.",
  },
  {
    href: "/kivora-vs-homestyler",
    label: "Kivora vs Homestyler",
    description:
      "Side-by-side matrix: photo-based AI kitchen remodel visualization vs traditional 2D/3D floor planning.",
  },
  {
    href: "/planner-5d-vs-roomgpt",
    label: "Planner 5D vs RoomGPT",
    description:
      "Three-way matrix: 3D floor planning vs general AI room restyles vs kitchen-focused AI remodel concepts.",
  },
  {
    href: "/roomgpt-vs-reimaginehome",
    label: "RoomGPT vs REimagineHome",
    description:
      "Three-way matrix: general AI room restyles vs broad home redesign vs kitchen-focused AI remodel concepts.",
  },
  {
    href: "/remodel-ai-vs-roomgpt",
    label: "Remodel AI vs RoomGPT",
    description:
      "Three-way matrix: general remodel AI vs general AI room restyles vs kitchen-focused AI remodel concepts.",
  },
  {
    href: "/best-ai-kitchen-design-tools",
    label: "Best AI kitchen design tools",
    description:
      "Best-of guide to AI kitchen design tools — photo visualizers, floor planners, and general room AI matched to remodel goals.",
  },
  {
    href: "/best-ai-kitchen-remodel-tools",
    label: "Best AI kitchen remodel tools",
    description:
      "Best-of guide for remodel-focused AI tools — photo concepts, general remodel AI, and planners by project stage.",
  },
  {
    href: "/best-ai-interior-design-tools-for-kitchens",
    label: "Best AI interior design tools for kitchens",
    description:
      "Best-of guide for AI interior design tools used on kitchens — kitchen-first vs general interior AI vs planners.",
  },
  {
    href: "/best-kitchen-visualizer",
    label: "Best kitchen visualizer",
    description:
      "Best-of guide for kitchen visualizer tools — photo AI, 3D planners, and general room apps matched to remodel goals.",
  },
  {
    href: "/best-kitchen-design-software",
    label: "Best kitchen design software",
    description:
      "Best-of guide for kitchen design software — photo AI, 2D/3D planners, and general design apps by remodel stage.",
  },
  {
    href: "/best-kitchen-remodeling-software",
    label: "Best kitchen remodeling software",
    description:
      "Best-of guide for kitchen remodeling software — photo AI, planners, and general remodel apps by project stage.",
  },
  {
    href: "/best-kitchen-renovation-apps",
    label: "Best kitchen renovation apps",
    description:
      "Best-of guide for kitchen renovation apps — photo AI, planners, and general design apps for remodel decisions.",
  },
  {
    href: "/best-kitchen-design-apps",
    label: "Best kitchen design apps",
    description:
      "Best-of guide for kitchen design apps — photo AI, planners, and general design apps for design decisions.",
  },
  {
    href: "/best-kitchen-planner",
    label: "Best kitchen planner",
    description:
      "Best-of guide for kitchen planner tools — measured floor planners vs photo AI vs general design apps.",
  },
  {
    href: "/best-kitchen-visualization-software",
    label: "Best kitchen visualization software",
    description:
      "Best-of guide for kitchen visualization software — photo AI, 3D planners, and general design tools.",
  },
  {
    href: "/best-virtual-kitchen-designer",
    label: "Best virtual kitchen designer",
    description:
      "Best-of guide for virtual kitchen designer tools — photo AI, online planners, and general design apps.",
  },
  {
    href: "/best-kitchen-design-tool-for-homeowners",
    label: "Best kitchen design tool for homeowners",
    description:
      "Best-of guide for kitchen design tools built for homeowners — easy start, clear visuals, shareable decisions.",
  },
  {
    href: "/best-kitchen-design-software-for-interior-designers",
    label: "Best kitchen design software for interior designers",
    description:
      "Best-of guide for kitchen design software for interior designers — client concepts, measured plans, faster approvals.",
  },
  {
    href: "/best-kitchen-design-software-for-contractors",
    label: "Best kitchen design software for contractors",
    description:
      "Best-of guide for kitchen design software for contractors — client walkthroughs, layouts, fewer change orders.",
  },
  {
    href: "/best-kitchen-visualization-tool-for-contractors",
    label: "Best kitchen visualization tool for contractors",
    description:
      "Best-of guide for kitchen visualization tools for contractors — walkthroughs, photo AI, layout visuals.",
  },
  {
    href: "/best-ai-kitchen-designer-for-homeowners",
    label: "Best AI kitchen designer for homeowners",
    description:
      "Best-of guide for AI kitchen designer tools for homeowners — photo AI, no design degree required.",
  },
  {
    href: "/best-kitchen-remodel-tool-for-beginners",
    label: "Best kitchen remodel tool for beginners",
    description:
      "Best-of guide for kitchen remodel tools for beginners — photo AI, easy start, no design experience needed.",
  },
  {
    href: "/best-tool-to-visualize-a-kitchen-remodel",
    label: "Best tool to visualize a kitchen remodel",
    description:
      "Best-of guide for tools to visualize a kitchen remodel before you build — photo AI, planners, design apps.",
  },
  {
    href: "/best-tool-to-preview-kitchen-cabinets",
    label: "Best tool to preview kitchen cabinets",
    description:
      "Best-of guide for tools to preview kitchen cabinets before ordering — photo AI, planners, design apps.",
  },
  {
    href: "/best-tool-to-visualize-kitchen-colors",
    label: "Best tool to visualize kitchen colors",
    description:
      "Best-of guide for tools to visualize kitchen colors before painting or remodeling — photo AI, planners, design apps.",
  },
  {
    href: "/best-tool-to-try-different-kitchen-styles",
    label: "Best tool to try different kitchen styles",
    description:
      "Best-of guide for tools to try different kitchen styles before remodeling — photo AI, room restylers, planners.",
  },
  {
    href: "/best-tool-to-visualize-a-kitchen-renovation-before-construction",
    label: "Best tool to visualize a kitchen renovation before construction",
    description:
      "Best-of guide for tools to visualize a kitchen renovation before construction — photo AI, planners, design apps.",
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
              Start with the AI Kitchen Design pillar, Competitor Alternatives,
              and Competitor Comparisons, then use free tools and guides to plan
              layout, budget, and style before you remodel.
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
            High-intent alternatives, comparisons, best-of guides, and software-for-X pages.
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
