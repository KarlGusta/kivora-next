"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft } from "lucide-react";
import { purchaseUrl } from "@/data/commercialPages";

// areaPerTile in sqft, priceRange is $/sqft for materials only.
const TILE_OPTIONS = [
  { value: "subway-3x6", label: "Ceramic Subway (3x6)", areaPerTile: 0.125, priceRange: [4, 8] },
  { value: "subway-4x8", label: "Ceramic Subway (4x8)", areaPerTile: 0.222, priceRange: [5, 9] },
  { value: "mosaic-sheet", label: "Mosaic Sheet (12x12)", areaPerTile: 1, priceRange: [8, 15] },
  { value: "zellige", label: "Handmade / Zellige (4x4)", areaPerTile: 0.111, priceRange: [15, 30] },
  { value: "glass", label: "Glass Tile (4x4)", areaPerTile: 0.111, priceRange: [10, 18] },
  { value: "large-format", label: "Large-Format Slab (12x24+)", areaPerTile: 2, priceRange: [10, 20] },
];

// $/sqft installation labor.
const INSTALL_OPTIONS = [
  { value: "diy", label: "DIY (materials only)", range: [0, 0] },
  { value: "standard", label: "Standard Installation", range: [8, 15] },
  { value: "premium", label: "Premium / Designer Install", range: [15, 25] },
];

const WASTE_OPTIONS = [
  { value: "0.1", label: "10% (standard layout)" },
  { value: "0.15", label: "15% (diagonal or pattern)" },
  { value: "0.2", label: "20% (mosaic or complex cuts)" },
];

function findOption(options, value, key = "value") {
  return options.find((option) => option[key] === value) ?? options[0];
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
  wallLength: 10,
  wallHeight: 1.5,
  numberOfWalls: 1,
  tile: "subway-3x6",
  installation: "standard",
  waste: "0.1",
};

export default function KitchenBacksplashCalculatorClient() {
  const [form, setForm] = useState(initialState);

  const update = (field) => (value) =>
    setForm((current) => ({ ...current, [field]: value }));

  const result = useMemo(() => {
    const length = Math.max(Number(form.wallLength) || 0, 0);
    const height = Math.max(Number(form.wallHeight) || 0, 0);
    const walls = Math.max(Number(form.numberOfWalls) || 0, 0);
    const wastePct = Number(form.waste) || 0;

    const tile = findOption(TILE_OPTIONS, form.tile);
    const install = findOption(INSTALL_OPTIONS, form.installation);

    const sqft = length * height * walls;
    const sqftWithWaste = sqft * (1 + wastePct);

    const tilesNeeded = tile.areaPerTile > 0 ? Math.ceil(sqft / tile.areaPerTile) : 0;
    const tilesWithWaste = tile.areaPerTile > 0 ? Math.ceil(sqftWithWaste / tile.areaPerTile) : 0;
    const extraTiles = Math.max(tilesWithWaste - tilesNeeded, 0);

    const materialLow = sqftWithWaste * tile.priceRange[0];
    const materialHigh = sqftWithWaste * tile.priceRange[1];
    const installLow = sqftWithWaste * install.range[0];
    const installHigh = sqftWithWaste * install.range[1];

    const low = Math.round((materialLow + installLow) / 5) * 5;
    const high = Math.round((materialHigh + installHigh) / 5) * 5;
    const mid = Math.round(((low + high) / 2) / 5) * 5;

    return { sqft, sqftWithWaste, tilesNeeded, tilesWithWaste, extraTiles, low, mid, high };
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
          Kitchen Backsplash Calculator
        </h1>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-kivora-ink/60">
          Enter your wall dimensions and tile choice to get square footage,
          how many tiles to order, and an estimated cost.
        </p>
      </section>

      <section className="mx-auto grid max-w-5xl gap-8 px-5 py-10 md:px-8 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div className="border border-kivora-ink/15 bg-kivora-cream p-6">
          <div className="grid gap-5 sm:grid-cols-3">
            <label className="block">
              <span className="text-sm font-medium text-kivora-ink">
                Wall length (ft)
              </span>
              <input
                type="number"
                min="0"
                step="0.5"
                value={form.wallLength}
                onChange={(event) => update("wallLength")(event.target.value)}
                className="mt-1.5 w-full border border-kivora-ink/20 bg-kivora-cream px-3 py-2.5 text-sm text-kivora-ink focus:border-kivora-ink focus:outline-none"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-kivora-ink">
                Wall height (ft)
              </span>
              <input
                type="number"
                min="0"
                step="0.25"
                value={form.wallHeight}
                onChange={(event) => update("wallHeight")(event.target.value)}
                className="mt-1.5 w-full border border-kivora-ink/20 bg-kivora-cream px-3 py-2.5 text-sm text-kivora-ink focus:border-kivora-ink focus:outline-none"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-kivora-ink">
                Number of walls
              </span>
              <input
                type="number"
                min="0"
                step="1"
                value={form.numberOfWalls}
                onChange={(event) => update("numberOfWalls")(event.target.value)}
                className="mt-1.5 w-full border border-kivora-ink/20 bg-kivora-cream px-3 py-2.5 text-sm text-kivora-ink focus:border-kivora-ink focus:outline-none"
              />
            </label>
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <SelectField label="Tile Type & Size" value={form.tile} onChange={update("tile")} options={TILE_OPTIONS} />
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
                <span className="text-kivora-ink/60">Tiles needed</span>
                <span className="font-medium text-kivora-ink">{result.tilesNeeded}</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-kivora-ink/60">Recommended extra</span>
                <span className="font-medium text-kivora-ink">+{result.extraTiles}</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-kivora-ink/60">Total to order</span>
                <span className="font-medium text-kivora-ink">{result.tilesWithWaste} tiles</span>
              </li>
            </ul>

            <div className="mt-6 border-t border-kivora-ink/15 pt-5">
              <p className="text-sm font-medium text-kivora-ink">
                See this backsplash in your kitchen before you order tile.
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
          This calculator estimates backsplash material and installation
          cost from wall dimensions and tile selection, with a waste
          allowance added for cuts and breakage. Actual tile pricing and
          installation rates vary by supplier and region.
        </p>
      </section>
    </main>
  );
}
