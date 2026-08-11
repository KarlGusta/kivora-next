"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, ChevronLeft, Printer } from "lucide-react";
import { purchaseUrl } from "@/data/commercialPages";

const SCOPE_OPTIONS = [
  { value: "cosmetic", label: "Cosmetic Refresh", tier: 1 },
  { value: "partial", label: "Partial Remodel", tier: 2 },
  { value: "full", label: "Full Remodel", tier: 3 },
];

// Each item's tier is the minimum scope it applies to — a "full" remodel
// shows cosmetic + partial + full items, cumulatively.
const CHECKLIST_ITEMS = [
  { id: "measure", label: "Measure your kitchen and sketch the current layout", tier: 1 },
  { id: "budget", label: "Set a total budget", tier: 1 },
  { id: "paint", label: "Choose paint colors for walls and/or cabinets", tier: 1 },
  { id: "hardware", label: "Pick new cabinet hardware", tier: 1 },
  { id: "backsplash", label: "Choose a backsplash", tier: 1 },
  { id: "lighting", label: "Update lighting fixtures", tier: 1 },
  { id: "layout", label: "Decide on a layout (keep or change footprint)", tier: 2 },
  { id: "cabinets", label: "Select cabinets", tier: 2 },
  { id: "countertops", label: "Select countertops", tier: 2 },
  { id: "flooring", label: "Select flooring", tier: 2 },
  { id: "appliances", label: "Select appliances", tier: 2 },
  { id: "plumbing-fixtures", label: "Update sink and faucet", tier: 2 },
  { id: "contractor", label: "Hire a contractor", tier: 3 },
  { id: "permits", label: "Pull required permits", tier: 3 },
  { id: "structural", label: "Finalize structural or layout changes", tier: 3 },
  { id: "rough-in", label: "Schedule electrical and plumbing rough-in", tier: 3 },
  { id: "inspections", label: "Schedule required inspections", tier: 3 },
  { id: "walkthrough", label: "Final walkthrough and punch list", tier: 3 },
];

function findOption(value) {
  return SCOPE_OPTIONS.find((option) => option.value === value) ?? SCOPE_OPTIONS[0];
}

export default function KitchenRemodelChecklistClient() {
  const [scope, setScope] = useState("full");
  const [checked, setChecked] = useState({});

  const toggle = (id) =>
    setChecked((current) => ({ ...current, [id]: !current[id] }));

  const activeTier = findOption(scope).tier;

  const items = useMemo(
    () => CHECKLIST_ITEMS.filter((item) => item.tier <= activeTier),
    [activeTier]
  );

  const completedCount = items.filter((item) => checked[item.id]).length;

  return (
    <main className="bg-kivora-cream">
      <section className="mx-auto max-w-5xl px-5 pt-32 md:px-8 md:pt-40 print:hidden">
        <Link
          href="/tools"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-kivora-ink/50 transition-colors hover:text-kivora-ink"
        >
          <ChevronLeft size={16} />
          Free Tools
        </Link>

        <h1 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-kivora-ink md:text-4xl">
          Kitchen Remodel Checklist
        </h1>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-kivora-ink/60">
          Pick your remodel scope and get a step-by-step checklist, from
          first measurements to final walkthrough.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-10 md:px-8">
        <div className="border border-kivora-ink/15 bg-kivora-cream p-6 print:hidden">
          <span className="text-sm font-medium text-kivora-ink">
            Remodel scope
          </span>
          <div className="mt-2.5 grid gap-2.5 sm:grid-cols-3">
            {SCOPE_OPTIONS.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setScope(option.value)}
                className={`border px-3 py-2.5 text-sm font-medium transition-colors ${
                  scope === option.value
                    ? "border-kivora-ink bg-kivora-ink text-kivora-cream"
                    : "border-kivora-ink/20 text-kivora-ink hover:border-kivora-ink"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 border border-kivora-ink bg-kivora-yellow/25 p-6 print:border-kivora-ink/30 print:bg-white">
          <div className="flex items-center justify-between gap-4 print:hidden">
            <p className="text-sm font-medium text-kivora-ink">
              {completedCount} of {items.length} complete
            </p>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-kivora-ink/60 transition-colors hover:text-kivora-ink"
            >
              <Printer size={15} />
              Print
            </button>
          </div>

          <ul className="mt-4 space-y-2 print:mt-0">
            {items.map((item) => {
              const isChecked = Boolean(checked[item.id]);
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    className="flex w-full items-center gap-3 border border-kivora-ink/10 bg-kivora-cream px-3.5 py-2.5 text-left transition-colors hover:border-kivora-ink/30 print:border-0 print:bg-transparent print:px-0 print:py-1"
                  >
                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center border ${
                        isChecked
                          ? "border-kivora-ink bg-kivora-ink text-kivora-cream"
                          : "border-kivora-ink/30"
                      }`}
                    >
                      {isChecked && <Check size={13} />}
                    </span>
                    <span
                      className={`text-sm ${
                        isChecked
                          ? "text-kivora-ink/40 line-through"
                          : "text-kivora-ink"
                      }`}
                    >
                      {item.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="mt-6 border-t border-kivora-ink/15 pt-5 print:hidden">
            <p className="text-sm font-medium text-kivora-ink">
              Selections done? See them together before you buy anything.
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
          href="/tools/kitchen-remodel-budget-planner"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-kivora-ink/50 transition-colors hover:text-kivora-ink print:hidden"
        >
          Plan your budget for this scope
          <ArrowRight size={14} />
        </Link>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-20 md:px-8 print:hidden">
        <p className="max-w-2xl text-xs leading-relaxed text-kivora-ink/40">
          This checklist covers the typical order of decisions for each
          remodel scope. Local permitting requirements, contractor
          availability, and material lead times can change the actual order
          and timeline.
        </p>
      </section>
    </main>
  );
}
