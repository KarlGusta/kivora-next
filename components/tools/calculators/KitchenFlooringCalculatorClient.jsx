"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft } from "lucide-react";
import { purchaseUrl } from "@/data/commercialPages";

// sqftPerBox is typical box coverage, priceRange is $/sqft materials only.
const FLOORING_OPTIONS = [
  { value: "vinyl", label: "Vinyl (LVP)", sqftPerBox: 20, priceRange: [2, 5] },
  { value: "laminate", label: "Laminate", sqftPerBox: 22, priceRange: [3, 6] },
  { value: "tile", label: "Ceramic Tile", sqftPerBox: 15, priceRange: [3, 7] },
  { value: "porcelain", label: "Porcelain Tile", sqftPerBox: 15, priceRange: [5, 10] },
  { value: "hardwood", label: "Hardwood", sqftPerBox: 20, priceRange: [6, 14] },
];

// $/sqft installation labor.
const INSTALL_OPTIONS = [
  { value: "diy", label: "DIY (materials only)", range: [0, 0] },
  { value: "standard", label: "Standard Installation", range: [3, 6] },
  { value: "premium", label: "Premium Installation", range: [6, 12] },
];

const WASTE_OPTIONS = [
  { value: "0.1", label: "10% (standard layout)" },
  { value: "0.15", label: "15% (diagonal layout)" },
  { value: "0.2", label: "20% (herringbone or complex)" },
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
  roomLength: 14,
  roomWidth: 12,
  flooring: "vinyl",
  installation: "standard",
  waste: "0.1",
};

export default function KitchenFlooringCalculatorClient() {
  const [form, setForm] = useState(initialState);

  const update = (field) => (value) =>
    setForm((current) => ({ ...current, [field]: value }));

  const result = useMemo(() => {
    const length = Math.max(Number(form.roomLength) || 0, 0);
    const width = Math.max(Number(form.roomWidth) || 0, 0);
    const wastePct = Number(form.waste) || 0;

    const flooring = findOption(FLOORING_OPTIONS, form.flooring);
    const install = findOption(INSTALL_OPTIONS, form.installation);

    const sqft = length * width;
    const sqftWithWaste = sqft * (1 + wastePct);

    const boxesNeeded =
      flooring.sqftPerBox > 0 ? Math.ceil(sqftWithWaste / flooring.sqftPerBox) : 0;
    const orderedSqft = boxesNeeded * flooring.sqftPerBox;

    const materialLow = orderedSqft * flooring.priceRange[0];
    const materialHigh = orderedSqft * flooring.priceRange[1];
    const installLow = sqftWithWaste * install.range[0];
    const installHigh = sqftWithWaste * install.range[1];

    const low = Math.round((materialLow + installLow) / 5) * 5;
    const high = Math.round((materialHigh + installHigh) / 5) * 5;
    const mid = Math.round(((low + high) / 2) / 5) * 5;

    return { sqft, sqftWithWaste, boxesNeeded, orderedSqft, low, mid, high };
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
          Kitchen Flooring Calculator
        </h1>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-kivora-ink/60">
          Enter your kitchen dimensions and flooring type to get square
          footage, how many boxes to order, and an estimated cost.
        </p>
      </section>

      <section className="mx-auto grid max-w-5xl gap-8 px-5 py-10 md:px-8 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div className="border border-kivora-ink/15 bg-kivora-cream p-6">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-medium text-kivora-ink">
                Room length (ft)
              </span>
              <input
                type="number"
                min="0"
                step="0.5"
                value={form.roomLength}
                onChange={(event) => update("roomLength")(event.target.value)}
                className="mt-1.5 w-full border border-kivora-ink/20 bg-kivora-cream px-3 py-2.5 text-sm text-kivora-ink focus:border-kivora-ink focus:outline-none"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-kivora-ink">
                Room width (ft)
              </span>
              <input
                type="number"
                min="0"
                step="0.5"
                value={form.roomWidth}
                onChange={(event) => update("roomWidth")(event.target.value)}
                className="mt-1.5 w-full border border-kivora-ink/20 bg-kivora-cream px-3 py-2.5 text-sm text-kivora-ink focus:border-kivora-ink focus:outline-none"
              />
            </label>
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <SelectField label="Flooring Type" value={form.flooring} onChange={update("flooring")} options={FLOORING_OPTIONS} />
            <SelectField label="Installation" value={form.installation} onChange={update("installation")} options={INSTALL_OPTIONS} />
          </div>

          <div className="mt-5">
            <SelectField label="Waste Allowance" value={form.waste} onChange={update("waste")} options={WASTE_OPTIONS} />
          </div>
        </div>

        <div className="lg:sticky lg:top-28">
          <div className="border border-kivora-ink bg-kivora-yellow/25 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-kivora-ink/50">
              Estimated Cost
            </p>
            <p className="mt-2 text-2xl font-semibold text-kivora-ink md:text-3xl">
              {formatUSD(result.low)} – {formatUSD(result.high)}
            </p>
            <p className="mt-1 text-sm text-kivora-ink/60">
              Mid-range estimate: {formatUSD(result.mid)}
            </p>

            <ul className="mt-5 space-y-2.5 border-t border-kivora-ink/15 pt-5 text-sm">
              <li className="flex items-center justify-between">
                <span className="text-kivora-ink/60">Square footage</span>
                <span className="font-medium text-kivora-ink">{result.sqft.toFixed(1)} sq ft</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-kivora-ink/60">With waste allowance</span>
                <span className="font-medium text-kivora-ink">{result.sqftWithWaste.toFixed(1)} sq ft</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-kivora-ink/60">Boxes to order</span>
                <span className="font-medium text-kivora-ink">{result.boxesNeeded}</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-kivora-ink/60">Total ordered coverage</span>
                <span className="font-medium text-kivora-ink">{result.orderedSqft.toFixed(0)} sq ft</span>
              </li>
            </ul>

            <div className="mt-6 border-t border-kivora-ink/15 pt-5">
              <p className="text-sm font-medium text-kivora-ink">
                See this flooring in your kitchen before you order it.
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
          This calculator estimates flooring material and installation
          cost from room dimensions and material type, rounding up to full
          boxes and adding a waste allowance for cuts and pattern matching.
          Actual pricing varies by supplier, brand, and region.
        </p>
      </section>
    </main>
  );
}
