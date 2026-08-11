"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft } from "lucide-react";
import { purchaseUrl } from "@/data/commercialPages";

// Per-cabinet-unit [low, high] base price by type.
const TYPE_OPTIONS = [
  { value: "stock", label: "Stock", range: [150, 300] },
  { value: "semi-custom", label: "Semi-Custom", range: [300, 550] },
  { value: "custom", label: "Custom", range: [550, 900] },
  { value: "luxury", label: "Luxury Custom", range: [900, 1600] },
];

const MATERIAL_OPTIONS = [
  { value: "laminate", label: "Laminate / Thermofoil", multiplier: 0.85 },
  { value: "veneer", label: "Wood Veneer", multiplier: 1.0 },
  { value: "plywood-face", label: "Plywood Box, Solid Wood Face", multiplier: 1.15 },
  { value: "solid-wood", label: "Solid Wood", multiplier: 1.25 },
];

const FINISH_OPTIONS = [
  { value: "painted", label: "Painted", multiplier: 1.0 },
  { value: "stained", label: "Stained", multiplier: 1.05 },
  { value: "glazed", label: "Glazed", multiplier: 1.15 },
  { value: "high-gloss", label: "High-Gloss Lacquer", multiplier: 1.25 },
];

// Per-cabinet-unit [low, high] installation labor.
const INSTALL_OPTIONS = [
  { value: "diy", label: "DIY Assembly, Hired Hang", range: [40, 80] },
  { value: "standard", label: "Standard Installation", range: [75, 150] },
  { value: "professional", label: "Professional Custom Install", range: [150, 300] },
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
  cabinetCount: 15,
  cabinetType: "semi-custom",
  material: "veneer",
  finish: "painted",
  installation: "standard",
};

export default function KitchenCabinetCostCalculatorClient() {
  const [form, setForm] = useState(initialState);
  const [countTouched, setCountTouched] = useState(false);

  const update = (field) => (value) =>
    setForm((current) => ({ ...current, [field]: value }));

  // Suggest a cabinet count from kitchen size (~1 unit per 13 sqft) until
  // the person edits the count field directly.
  useEffect(() => {
    if (countTouched) return;
    const size = Math.max(Number(form.kitchenSize) || 0, 0);
    const suggested = Math.max(Math.round(size / 13), 1);
    setForm((current) => ({ ...current, cabinetCount: suggested }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.kitchenSize]);

  const result = useMemo(() => {
    const count = Math.max(Number(form.cabinetCount) || 0, 0);
    const type = findOption(TYPE_OPTIONS, form.cabinetType);
    const material = findOption(MATERIAL_OPTIONS, form.material);
    const finish = findOption(FINISH_OPTIONS, form.finish);
    const install = findOption(INSTALL_OPTIONS, form.installation);

    const perUnitLow = type.range[0] * material.multiplier * finish.multiplier + install.range[0];
    const perUnitHigh = type.range[1] * material.multiplier * finish.multiplier + install.range[1];

    const low = Math.round((perUnitLow * count) / 50) * 50;
    const high = Math.round((perUnitHigh * count) / 50) * 50;
    const mid = Math.round(((low + high) / 2) / 50) * 50;

    const installLow = install.range[0] * count;
    const installHigh = install.range[1] * count;
    const installMid = (installLow + installHigh) / 2;
    const laborShare = mid > 0 ? Math.round((installMid / mid) * 100) : 0;

    return { low, mid, high, laborShare, count, perUnitLow, perUnitHigh };
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
          Kitchen Cabinet Cost Calculator
        </h1>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-kivora-ink/60">
          Cabinets are usually the single biggest expense in a kitchen
          remodel. Get a cost range based on type, material, finish, and
          installation.
        </p>
      </section>

      <section className="mx-auto grid max-w-5xl gap-8 px-5 py-10 md:px-8 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div className="border border-kivora-ink/15 bg-kivora-cream p-6">
          <div className="grid gap-5 sm:grid-cols-2">
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

            <label className="block">
              <span className="text-sm font-medium text-kivora-ink">
                Number of cabinets
              </span>
              <input
                type="number"
                min="0"
                step="1"
                value={form.cabinetCount}
                onChange={(event) => {
                  setCountTouched(true);
                  update("cabinetCount")(event.target.value);
                }}
                className="mt-1.5 w-full border border-kivora-ink/20 bg-kivora-cream px-3 py-2.5 text-sm text-kivora-ink focus:border-kivora-ink focus:outline-none"
              />
              <span className="mt-1 block text-xs text-kivora-ink/40">
                Auto-suggested from size — edit anytime.
              </span>
            </label>
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <SelectField label="Cabinet Type" value={form.cabinetType} onChange={update("cabinetType")} options={TYPE_OPTIONS} />
            <SelectField label="Material" value={form.material} onChange={update("material")} options={MATERIAL_OPTIONS} />
            <SelectField label="Finish" value={form.finish} onChange={update("finish")} options={FINISH_OPTIONS} />
            <SelectField label="Installation" value={form.installation} onChange={update("installation")} options={INSTALL_OPTIONS} />
          </div>
        </div>

        <div className="lg:sticky lg:top-28">
          <div className="border border-kivora-ink bg-kivora-yellow/25 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-kivora-ink/50">
              Estimated Cabinet Cost
            </p>
            <p className="mt-2 text-2xl font-semibold text-kivora-ink md:text-3xl">
              {formatUSD(result.low)} – {formatUSD(result.high)}
            </p>
            <p className="mt-1 text-sm text-kivora-ink/60">
              For {result.count} cabinets · mid-range: {formatUSD(result.mid)}
            </p>
            <p className="mt-1 text-sm text-kivora-ink/60">
              ~{formatUSD(result.perUnitLow)} – {formatUSD(result.perUnitHigh)} per cabinet · labor ~{result.laborShare}%
            </p>

            <div className="mt-6 border-t border-kivora-ink/15 pt-5">
              <p className="text-sm font-medium text-kivora-ink">
                Before spending {formatUSD(result.mid)} on cabinets, see how
                they'd look.
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
          This calculator estimates cabinet cost using typical per-unit
          price ranges by type, adjusted for material, finish, and
          installation. It doesn't account for kitchen layout complexity,
          custom modifications, or regional labor rates — use it as a
          starting point, not a final quote.
        </p>
      </section>
    </main>
  );
}
