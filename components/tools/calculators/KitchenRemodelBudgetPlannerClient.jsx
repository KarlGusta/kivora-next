"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft } from "lucide-react";
import { purchaseUrl } from "@/data/commercialPages";

// Suggested category split for a typical kitchen remodel budget.
// Percentages are fractions of the total (sum to 1).
const CATEGORIES = [
  { key: "cabinets", label: "Cabinets", pct: 0.3 },
  { key: "labor", label: "Labor & Installation", pct: 1 / 6 },
  { key: "appliances", label: "Appliances", pct: 1 / 6 },
  { key: "countertops", label: "Countertops", pct: 0.15 },
  { key: "flooring", label: "Flooring", pct: 1 / 12 },
  { key: "contingency", label: "Contingency", pct: 1 / 15 },
  { key: "lighting", label: "Lighting", pct: 1 / 30 },
  { key: "backsplash", label: "Backsplash", pct: 1 / 30 },
];

function formatUSD(amount) {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

const initialState = {
  totalBudget: 30000,
};

export default function KitchenRemodelBudgetPlannerClient() {
  const [form, setForm] = useState(initialState);

  const update = (field) => (value) =>
    setForm((current) => ({ ...current, [field]: value }));

  const result = useMemo(() => {
    const total = Math.max(Number(form.totalBudget) || 0, 0);

    const breakdown = CATEGORIES.map((category) => ({
      ...category,
      amount: Math.round((total * category.pct) / 50) * 50,
    }));

    return { total, breakdown };
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
          Kitchen Remodel Budget Planner
        </h1>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-kivora-ink/60">
          Enter your total budget to see how much to set aside for cabinets,
          countertops, appliances, labor, and everything else.
        </p>
      </section>

      <section className="mx-auto grid max-w-5xl gap-8 px-5 py-10 md:px-8 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div className="border border-kivora-ink/15 bg-kivora-cream p-6">
          <label className="block">
            <span className="text-sm font-medium text-kivora-ink">
              Total remodel budget ($)
            </span>
            <input
              type="number"
              min="0"
              step="500"
              value={form.totalBudget}
              onChange={(event) => update("totalBudget")(event.target.value)}
              className="mt-1.5 w-full border border-kivora-ink/20 bg-kivora-cream px-3 py-2.5 text-sm text-kivora-ink focus:border-kivora-ink focus:outline-none"
            />
          </label>

          <p className="mt-5 text-sm leading-relaxed text-kivora-ink/50">
            Not sure what your total budget should be yet?{" "}
            <Link
              href="/tools/kitchen-remodel-cost-calculator"
              className="font-medium text-kivora-ink underline underline-offset-2"
            >
              Try the cost calculator
            </Link>{" "}
            first to get a range.
          </p>
        </div>

        <div className="lg:sticky lg:top-28">
          <div className="border border-kivora-ink bg-kivora-yellow/25 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-kivora-ink/50">
              Suggested Breakdown
            </p>
            <p className="mt-2 text-2xl font-semibold text-kivora-ink md:text-3xl">
              {formatUSD(result.total)}
            </p>

            <ul className="mt-5 space-y-2.5 border-t border-kivora-ink/15 pt-5 text-sm">
              {result.breakdown.map((category) => (
                <li
                  key={category.key}
                  className="flex items-center justify-between"
                >
                  <span className="text-kivora-ink/60">
                    {category.label}{" "}
                    <span className="text-kivora-ink/35">
                      ({Math.round(category.pct * 100)}%)
                    </span>
                  </span>
                  <span className="font-medium text-kivora-ink">
                    {formatUSD(category.amount)}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-kivora-ink/15 pt-5">
              <p className="text-sm font-medium text-kivora-ink">
                See what that budget could actually look like.
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
            href="/tools/kitchen-cabinet-cost-calculator"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-kivora-ink/50 transition-colors hover:text-kivora-ink"
          >
            Break down your cabinet budget further
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-20 md:px-8">
        <p className="max-w-2xl text-xs leading-relaxed text-kivora-ink/40">
          This planner splits your total budget using typical proportions
          seen in kitchen remodels. Every kitchen is different — a heavy
          appliance upgrade or custom cabinetry can shift these percentages
          significantly. Use it as a starting allocation, not a fixed rule.
        </p>
      </section>
    </main>
  );
}
