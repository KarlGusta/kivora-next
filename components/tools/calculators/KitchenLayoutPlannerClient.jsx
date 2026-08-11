"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, ChevronLeft, X } from "lucide-react";
import { purchaseUrl } from "@/data/commercialPages";

// Minimum footprint (ft) each layout needs, and a rank for which to
// recommend first when multiple layouts fit (lower rank = preferred,
// since larger layouts make better use of extra space when available).
const LAYOUTS = [
  {
    key: "island",
    label: "Island",
    minWidth: 12,
    minLength: 12,
    rank: 1,
    note: "Needs clearance on all sides — best for larger, open kitchens.",
  },
  {
    key: "u-shaped",
    label: "U-Shaped",
    minWidth: 10,
    minLength: 10,
    rank: 2,
    note: "Three walls of counter space — maximizes storage in enclosed kitchens.",
  },
  {
    key: "peninsula",
    label: "Peninsula",
    minWidth: 10,
    minLength: 10,
    rank: 3,
    note: "L-shaped plus a connected peninsula for extra counter space and seating.",
  },
  {
    key: "l-shaped",
    label: "L-Shaped",
    minWidth: 8,
    minLength: 8,
    rank: 4,
    note: "Flexible corner layout that works well in open-concept spaces.",
  },
  {
    key: "galley",
    label: "Galley",
    minWidth: 7,
    minLength: 8,
    rank: 5,
    note: "Two parallel walls with an efficient workflow — needs room for two aisles.",
  },
  {
    key: "one-wall",
    label: "One-Wall",
    minWidth: 0,
    minLength: 0,
    rank: 6,
    note: "Everything on a single wall — works in any kitchen, best for small or narrow ones.",
  },
];

const initialState = {
  kitchenLength: 14,
  kitchenWidth: 11,
};

export default function KitchenLayoutPlannerClient() {
  const [form, setForm] = useState(initialState);

  const update = (field) => (value) =>
    setForm((current) => ({ ...current, [field]: value }));

  const result = useMemo(() => {
    const kitchenLength = Math.max(Number(form.kitchenLength) || 0, 0);
    const kitchenWidth = Math.max(Number(form.kitchenWidth) || 0, 0);

    const evaluated = LAYOUTS.map((layout) => ({
      ...layout,
      fits: kitchenWidth >= layout.minWidth && kitchenLength >= layout.minLength,
    })).sort((a, b) => a.rank - b.rank);

    const best = evaluated.find((layout) => layout.fits) ?? evaluated[evaluated.length - 1];

    return { evaluated, best };
  }, [form]);

  return (
    <main className="bg-kivora-cream">
      <section className="mx-auto max-w-5xl px-5 pt-32 md:px-8 md:pt-40">
        <Link
          href="/tools"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-kivora-ink/50 transition-colors hover:text-kivora-ink"
        >
          <ChevronLeft size={16} />
          Free Tools
        </Link>

        <h1 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-kivora-ink md:text-4xl">
          Kitchen Layout Planner
        </h1>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-kivora-ink/60">
          Enter your kitchen's dimensions to see which layouts — one-wall,
          galley, L-shaped, U-shaped, peninsula, or island — actually fit.
        </p>
      </section>

      <section className="mx-auto grid max-w-5xl gap-8 px-5 py-10 md:px-8 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div className="border border-kivora-ink/15 bg-kivora-cream p-6">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-medium text-kivora-ink">
                Kitchen length (ft)
              </span>
              <input
                type="number"
                min="0"
                step="0.5"
                value={form.kitchenLength}
                onChange={(event) => update("kitchenLength")(event.target.value)}
                className="mt-1.5 w-full border border-kivora-ink/20 bg-kivora-cream px-3 py-2.5 text-sm text-kivora-ink focus:border-kivora-ink focus:outline-none"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-kivora-ink">
                Kitchen width (ft)
              </span>
              <input
                type="number"
                min="0"
                step="0.5"
                value={form.kitchenWidth}
                onChange={(event) => update("kitchenWidth")(event.target.value)}
                className="mt-1.5 w-full border border-kivora-ink/20 bg-kivora-cream px-3 py-2.5 text-sm text-kivora-ink focus:border-kivora-ink focus:outline-none"
              />
            </label>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-kivora-ink/50">
            Not sure your kitchen can fit an island?{" "}
            <Link
              href="/tools/kitchen-island-size-calculator"
              className="font-medium text-kivora-ink underline underline-offset-2"
            >
              Check island size and clearance
            </Link>{" "}
            for exact dimensions.
          </p>
        </div>

        <div className="lg:sticky lg:top-28">
          <div className="border border-kivora-ink bg-kivora-yellow/25 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-kivora-ink/50">
              Best Fit
            </p>
            <p className="mt-2 text-2xl font-semibold text-kivora-ink md:text-3xl">
              {result.best.label}
            </p>
            <p className="mt-1 text-sm text-kivora-ink/60">{result.best.note}</p>

            <ul className="mt-5 space-y-2.5 border-t border-kivora-ink/15 pt-5 text-sm">
              {result.evaluated.map((layout) => (
                <li key={layout.key} className="flex items-start justify-between gap-3">
                  <span className="text-kivora-ink/60">{layout.label}</span>
                  <span
                    className={`flex shrink-0 items-center gap-1 font-medium ${
                      layout.fits ? "text-kivora-ink" : "text-kivora-ink/30"
                    }`}
                  >
                    {layout.fits ? <Check size={15} /> : <X size={15} />}
                    {layout.fits ? "Fits" : "Too tight"}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-kivora-ink/15 pt-5">
              <p className="text-sm font-medium text-kivora-ink">
                Want to see this layout in your actual kitchen?
              </p>
              <a
                href={purchaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 border border-kivora-ink bg-kivora-ink px-4 py-2.5 text-sm font-semibold text-kivora-cream transition-colors hover:bg-kivora-purple hover:text-kivora-ink"
              >
                Visualize My Kitchen
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <Link
            href="/tools/kitchen-remodel-cost-calculator"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-kivora-ink/50 transition-colors hover:text-kivora-ink"
          >
            See the full remodel budget
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-20 md:px-8">
        <p className="max-w-2xl text-xs leading-relaxed text-kivora-ink/40">
          This planner checks layouts against your room's minimum footprint
          only. Door and window placement, plumbing, and ventilation runs
          can rule out layouts that otherwise fit on paper — use this as a
          starting point before finalizing a design.
        </p>
      </section>
    </main>
  );
}
