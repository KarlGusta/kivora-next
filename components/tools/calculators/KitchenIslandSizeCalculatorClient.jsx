"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft } from "lucide-react";
import { purchaseUrl } from "@/data/commercialPages";

// Perimeter counters/cabinets eat into usable width on each side of the room.
const COUNTER_DEPTH_FT = 2;

// Clearance is walkway space on each side of the island, in feet.
const CLEARANCE_OPTIONS = [
  { value: "standard", label: "Standard walkway (42 in)", ft: 3.5 },
  { value: "spacious", label: "Spacious walkway (48 in)", ft: 4 },
];

// Island depth depends on whether it needs to seat people (overhang for stools).
const SEATING_OPTIONS = [
  { value: "none", label: "No seating, just workspace", depthFt: 2, seatIn: 0 },
  { value: "seating", label: "Seating on one side", depthFt: 3.5, seatIn: 24 },
];

function findOption(options, value) {
  return options.find((option) => option.value === value) ?? options[0];
}

function formatFeetInches(feet) {
  const totalInches = Math.round(feet * 12);
  const wholeFeet = Math.floor(totalInches / 12);
  const inches = totalInches % 12;
  return inches === 0 ? `${wholeFeet}'` : `${wholeFeet}'${inches}"`;
}

function SelectField({ label, value, onChange, options }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-kivora-ink">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-1.5 w-full border border-kivora-ink/20 bg-kivora-cream px-3 py-2.5 text-sm text-kivora-ink focus:border-kivora-ink focus:outline-none"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

const initialState = {
  kitchenLength: 16,
  kitchenWidth: 12,
  clearance: "standard",
  seating: "seating",
};

export default function KitchenIslandSizeCalculatorClient() {
  const [form, setForm] = useState(initialState);

  const update = (field) => (value) =>
    setForm((current) => ({ ...current, [field]: value }));

  const result = useMemo(() => {
    const kitchenLength = Math.max(Number(form.kitchenLength) || 0, 0);
    const kitchenWidth = Math.max(Number(form.kitchenWidth) || 0, 0);

    const clearance = findOption(CLEARANCE_OPTIONS, form.clearance);
    const seating = findOption(SEATING_OPTIONS, form.seating);

    const availableWidth = kitchenWidth - COUNTER_DEPTH_FT * 2;
    const requiredWidth = clearance.ft * 2 + seating.depthFt;
    const fits = availableWidth >= requiredWidth;

    // Leave 2ft of clearance at each end of the island along the room's length.
    const recommendedLength = Math.min(Math.max(kitchenLength - 4, 0), 10);
    const islandLength = Math.max(recommendedLength, fits ? 4 : 0);

    const seatsPossible =
      seating.seatIn > 0 ? Math.floor((islandLength * 12) / seating.seatIn) : 0;

    return {
      fits,
      availableWidth,
      requiredWidth,
      islandLength,
      islandDepth: seating.depthFt,
      clearanceFt: clearance.ft,
      seatsPossible,
    };
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
          Kitchen Island Size Calculator
        </h1>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-kivora-ink/60">
          Enter your kitchen's footprint to find the largest island that
          fits comfortably, with proper walkway clearance on every side.
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

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <SelectField label="Walkway Clearance" value={form.clearance} onChange={update("clearance")} options={CLEARANCE_OPTIONS} />
            <SelectField label="Seating" value={form.seating} onChange={update("seating")} options={SEATING_OPTIONS} />
          </div>
        </div>

        <div className="lg:sticky lg:top-28">
          <div className="border border-kivora-ink bg-kivora-yellow/25 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-kivora-ink/50">
              {result.fits ? "Recommended Island" : "Island Not Recommended"}
            </p>
            <p className="mt-2 text-2xl font-semibold text-kivora-ink md:text-3xl">
              {result.fits
                ? `${formatFeetInches(result.islandLength)} × ${formatFeetInches(result.islandDepth)}`
                : "Not enough clearance"}
            </p>
            <p className="mt-1 text-sm text-kivora-ink/60">
              {result.fits
                ? `${formatFeetInches(result.clearanceFt)} of walkway on each side`
                : `You're short about ${(result.requiredWidth - result.availableWidth).toFixed(1)} ft of width`}
            </p>

            <ul className="mt-5 space-y-2.5 border-t border-kivora-ink/15 pt-5 text-sm">
              <li className="flex items-center justify-between">
                <span className="text-kivora-ink/60">Available width for island</span>
                <span className="font-medium text-kivora-ink">{result.availableWidth.toFixed(1)} ft</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-kivora-ink/60">Required width (island + clearance)</span>
                <span className="font-medium text-kivora-ink">{result.requiredWidth.toFixed(1)} ft</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-kivora-ink/60">Seating capacity</span>
                <span className="font-medium text-kivora-ink">
                  {result.seatsPossible > 0 ? `${result.seatsPossible} seats` : "None"}
                </span>
              </li>
            </ul>

            <div className="mt-6 border-t border-kivora-ink/15 pt-5">
              <p className="text-sm font-medium text-kivora-ink">
                See how this island actually looks in your kitchen.
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
          This calculator estimates island size and clearance from your
          kitchen's overall footprint, assuming standard 24 in perimeter
          counters and a walkway on each side of the island. Actual layouts
          depend on door swings, appliance placement, and plumbing runs —
          use this as a starting point, not a final measurement.
        </p>
      </section>
    </main>
  );
}
