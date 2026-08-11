"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft } from "lucide-react";
import { purchaseUrl } from "@/data/commercialPages";

// Each option carries a [low, high] $/sqft range. Ranges are directional
// estimates for planning purposes, not contractor quotes.
const CABINET_OPTIONS = [
  { value: "stock", label: "Stock", range: [40, 70] },
  { value: "semi-custom", label: "Semi-Custom", range: [70, 120] },
  { value: "custom", label: "Custom", range: [120, 200] },
  { value: "luxury", label: "Luxury Custom", range: [200, 350] },
];

const COUNTERTOP_OPTIONS = [
  { value: "laminate", label: "Laminate", range: [8, 15] },
  { value: "butcher-block", label: "Butcher Block", range: [15, 25] },
  { value: "granite", label: "Granite", range: [25, 45] },
  { value: "quartz", label: "Quartz", range: [35, 55] },
  { value: "marble", label: "Marble", range: [45, 80] },
];

const FLOORING_OPTIONS = [
  { value: "vinyl", label: "Vinyl", range: [4, 8] },
  { value: "laminate", label: "Laminate", range: [6, 10] },
  { value: "tile", label: "Tile", range: [10, 18] },
  { value: "hardwood", label: "Hardwood", range: [15, 25] },
  { value: "stone", label: "Natural Stone", range: [20, 35] },
];

const APPLIANCE_OPTIONS = [
  { value: "basic", label: "Basic", range: [15, 25] },
  { value: "mid-range", label: "Mid-Range", range: [25, 40] },
  { value: "high-end", label: "High-End", range: [40, 65] },
  { value: "luxury", label: "Luxury / Pro", range: [65, 120] },
];

const LIGHTING_OPTIONS = [
  { value: "basic", label: "Basic", range: [3, 5] },
  { value: "standard", label: "Standard", range: [5, 9] },
  { value: "designer", label: "Designer", range: [9, 15] },
];

const BACKSPLASH_OPTIONS = [
  { value: "basic", label: "Basic Tile", range: [3, 6] },
  { value: "standard", label: "Standard Tile", range: [6, 10] },
  { value: "premium", label: "Premium Tile / Stone", range: [10, 18] },
];

const PLUMBING_OPTIONS = [
  { value: "keep", label: "Keep Existing", range: [0, 2] },
  { value: "update", label: "Update Fixtures", range: [4, 8] },
  { value: "replumb", label: "Full Replumb", range: [10, 20] },
];

const LABOR_OPTIONS = [
  { value: "diy", label: "DIY Some of It", range: [20, 35] },
  { value: "standard", label: "Standard Contractor", range: [35, 55] },
  { value: "premium", label: "Premium Contractor", range: [55, 90] },
];

const LOCATION_OPTIONS = [
  { value: "low", label: "Lower Cost-of-Living Area", multiplier: 0.85 },
  { value: "average", label: "Average Cost-of-Living Area", multiplier: 1.0 },
  { value: "high", label: "Higher Cost-of-Living Area", multiplier: 1.15 },
  { value: "metro", label: "Major Metro", multiplier: 1.35 },
];

function findOption(options, value) {
  return options.find((option) => option.value === value) ?? options[0];
}

function formatUSD(amount) {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
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
  kitchenSize: 200,
  cabinets: "semi-custom",
  countertops: "quartz",
  flooring: "tile",
  appliances: "mid-range",
  lighting: "standard",
  backsplash: "standard",
  plumbing: "update",
  labor: "standard",
  location: "average",
};

export default function KitchenRemodelCostCalculatorClient() {
  const [form, setForm] = useState(initialState);

  const update = (field) => (value) =>
    setForm((current) => ({ ...current, [field]: value }));

  const result = useMemo(() => {
    const size = Math.max(Number(form.kitchenSize) || 0, 0);

    const lineItems = [
      { key: "cabinets", label: "Cabinets", option: findOption(CABINET_OPTIONS, form.cabinets) },
      { key: "countertops", label: "Countertops", option: findOption(COUNTERTOP_OPTIONS, form.countertops) },
      { key: "flooring", label: "Flooring", option: findOption(FLOORING_OPTIONS, form.flooring) },
      { key: "appliances", label: "Appliances", option: findOption(APPLIANCE_OPTIONS, form.appliances) },
      { key: "lighting", label: "Lighting", option: findOption(LIGHTING_OPTIONS, form.lighting) },
      { key: "backsplash", label: "Backsplash", option: findOption(BACKSPLASH_OPTIONS, form.backsplash) },
      { key: "plumbing", label: "Plumbing", option: findOption(PLUMBING_OPTIONS, form.plumbing) },
      { key: "labor", label: "Labor", option: findOption(LABOR_OPTIONS, form.labor) },
    ];

    const location = findOption(LOCATION_OPTIONS, form.location);

    const rawLow = lineItems.reduce((sum, item) => sum + item.option.range[0], 0) * size;
    const rawHigh = lineItems.reduce((sum, item) => sum + item.option.range[1], 0) * size;

    const low = Math.round((rawLow * location.multiplier) / 100) * 100;
    const high = Math.round((rawHigh * location.multiplier) / 100) * 100;
    const mid = Math.round(((low + high) / 2) / 100) * 100;

    const laborLow = lineItems.find((item) => item.key === "labor").option.range[0] * size * location.multiplier;
    const laborHigh = lineItems.find((item) => item.key === "labor").option.range[1] * size * location.multiplier;
    const laborMid = (laborLow + laborHigh) / 2;
    const laborShare = mid > 0 ? Math.round((laborMid / mid) * 100) : 0;
    const materialShare = 100 - laborShare;

    const breakdown = lineItems
      .filter((item) => item.key !== "labor")
      .map((item) => {
        const itemLow = item.option.range[0] * size * location.multiplier;
        const itemHigh = item.option.range[1] * size * location.multiplier;
        return { label: item.label, low: itemLow, high: itemHigh };
      });

    return { low, mid, high, laborShare, materialShare, breakdown };
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
          Kitchen Remodel Cost Calculator
        </h1>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-kivora-ink/60">
          Enter your kitchen size and finish choices to get a low, mid, and
          high-end budget range. Estimates are directional, not a
          contractor quote.
        </p>
      </section>

      <section className="mx-auto grid max-w-5xl gap-8 px-5 py-10 md:px-8 lg:grid-cols-[1fr_1fr] lg:items-start">
        {/* Form */}
        <div className="border border-kivora-ink/15 bg-kivora-cream p-6">
          <label className="block">
            <span className="text-sm font-medium text-kivora-ink">
              Kitchen size (sq ft)
            </span>
            <input
              type="number"
              min="0"
              step="10"
              value={form.kitchenSize}
              onChange={(event) => update("kitchenSize")(event.target.value)}
              className="mt-1.5 w-full border border-kivora-ink/20 bg-kivora-cream px-3 py-2.5 text-sm text-kivora-ink focus:border-kivora-ink focus:outline-none"
            />
          </label>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <SelectField label="Cabinets" value={form.cabinets} onChange={update("cabinets")} options={CABINET_OPTIONS} />
            <SelectField label="Countertops" value={form.countertops} onChange={update("countertops")} options={COUNTERTOP_OPTIONS} />
            <SelectField label="Flooring" value={form.flooring} onChange={update("flooring")} options={FLOORING_OPTIONS} />
            <SelectField label="Appliances" value={form.appliances} onChange={update("appliances")} options={APPLIANCE_OPTIONS} />
            <SelectField label="Lighting" value={form.lighting} onChange={update("lighting")} options={LIGHTING_OPTIONS} />
            <SelectField label="Backsplash" value={form.backsplash} onChange={update("backsplash")} options={BACKSPLASH_OPTIONS} />
            <SelectField label="Plumbing" value={form.plumbing} onChange={update("plumbing")} options={PLUMBING_OPTIONS} />
            <SelectField label="Labor" value={form.labor} onChange={update("labor")} options={LABOR_OPTIONS} />
          </div>

          <div className="mt-5">
            <SelectField label="Location" value={form.location} onChange={update("location")} options={LOCATION_OPTIONS} />
          </div>
        </div>

        {/* Result */}
        <div className="lg:sticky lg:top-28">
          <div className="border border-kivora-ink bg-kivora-yellow/25 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-kivora-ink/50">
              Estimated Budget
            </p>
            <p className="mt-2 text-2xl font-semibold text-kivora-ink md:text-3xl">
              {formatUSD(result.low)} – {formatUSD(result.high)}
            </p>
            <p className="mt-1 text-sm text-kivora-ink/60">
              Mid-range estimate: {formatUSD(result.mid)}
            </p>

            <div className="mt-5 flex items-center gap-4 text-sm text-kivora-ink/70">
              <span>Materials ~{result.materialShare}%</span>
              <span>Labor ~{result.laborShare}%</span>
            </div>

            <div className="mt-6 border-t border-kivora-ink/15 pt-5">
              <p className="text-sm font-medium text-kivora-ink">
                Before spending {formatUSD(result.mid)}, see what it could
                look like.
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

          <div className="mt-4 border border-kivora-ink/10 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-kivora-ink/40">
              Cost Breakdown
            </p>
            <ul className="mt-4 space-y-3">
              {result.breakdown.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-kivora-ink/70">{item.label}</span>
                  <span className="font-medium text-kivora-ink">
                    {formatUSD(item.low)} – {formatUSD(item.high)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-20 md:px-8">
        <p className="max-w-2xl text-xs leading-relaxed text-kivora-ink/40">
          This calculator gives a planning-stage estimate based on typical
          national cost ranges per square foot for each category, adjusted
          for your location tier. Actual costs vary by contractor, region,
          and material availability — use it to set a starting budget, not
          as a final quote.
        </p>
      </section>
    </main>
  );
}
