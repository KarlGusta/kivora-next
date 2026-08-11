"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { toolCategories, tools } from "@/data/toolsData";
import { purchaseUrl } from "@/data/commercialPages";

function ToolCard({ tool }) {
  const isLive = tool.status === "live";

  const cardBody = (
    <>
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-kivora-ink">
          {tool.title}
        </h3>
        {!isLive && (
          <span className="shrink-0 border border-kivora-ink/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-kivora-ink/40">
            Soon
          </span>
        )}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-kivora-ink/60">
        {tool.description}
      </p>
      {isLive && (
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-kivora-ink">
          Try it
          <ArrowRight size={14} />
        </span>
      )}
    </>
  );

  if (!isLive) {
    return (
      <div className="border border-kivora-ink/10 bg-kivora-cream p-5 opacity-60">
        {cardBody}
      </div>
    );
  }

  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="group border border-kivora-ink/15 bg-kivora-cream p-5 transition-colors hover:border-kivora-ink hover:bg-kivora-yellow/20"
    >
      {cardBody}
    </Link>
  );
}

export default function ToolsPageClient() {
  return (
    <main className="bg-kivora-cream">
      <section className="mx-auto max-w-5xl px-5 pb-10 pt-32 md:px-8 md:pt-40">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-kivora-ink/40">
          Free Tools
        </p>
        <h1 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-kivora-ink md:text-4xl">
          Plan your kitchen remodel before you spend a dollar on it.
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-kivora-ink/60">
          Free calculators and planners for budget, layout, and design
          decisions. When you're ready to see it, not just estimate it,
          upload a photo to Kivora.
        </p>
      </section>

      {toolCategories.map((category) => {
        const categoryTools = tools.filter(
          (tool) => tool.category === category.id
        );

        if (categoryTools.length === 0) return null;

        return (
          <section
            key={category.id}
            className="mx-auto max-w-5xl px-5 py-8 md:px-8"
          >
            <div className="border-t border-kivora-ink/10 pt-8">
              <h2 className="text-lg font-semibold text-kivora-ink">
                {category.title}
              </h2>
              <p className="mt-1 text-sm text-kivora-ink/50">
                {category.description}
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {categoryTools.map((tool) => (
                  <ToolCard key={tool.slug} tool={tool} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="mx-auto max-w-5xl px-5 py-16 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 border border-kivora-ink bg-kivora-yellow/30 p-8 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-semibold text-kivora-ink">
              Done estimating? See it instead.
            </h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-kivora-ink/60">
              Upload one photo of your kitchen and get realistic AI remodel
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
  );
}
