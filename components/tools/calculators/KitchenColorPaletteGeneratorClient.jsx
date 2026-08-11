"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft } from "lucide-react";
import { purchaseUrl } from "@/data/commercialPages";

const CABINET_OPTIONS = [
  { value: "warm-white", label: "Warm White", hex: "#F1ECE1", undertone: "warm" },
  { value: "cream", label: "Cream", hex: "#EDE3CC", undertone: "warm" },
  { value: "sage-green", label: "Sage Green", hex: "#9CA98A", undertone: "neutral" },
  { value: "navy", label: "Navy", hex: "#2C3E52", undertone: "cool" },
  { value: "black", label: "Black", hex: "#22201D", undertone: "neutral" },
  { value: "natural-oak", label: "Natural Oak", hex: "#C89A6B", undertone: "warm" },
  { value: "walnut", label: "Walnut", hex: "#5A3D2B", undertone: "warm" },
];

const COUNTERTOP_OPTIONS = [
  { value: "quartz-white", label: "White Quartz", hex: "#EDEAE3" },
  { value: "quartz-veined", label: "Veined Quartz", hex: "#DAD3C7" },
  { value: "granite-dark", label: "Dark Granite", hex: "#3B3835" },
  { value: "marble", label: "Carrara Marble", hex: "#E8E6E1" },
  { value: "butcher-block", label: "Butcher Block", hex: "#B98655" },
];

const FLOORING_OPTIONS = [
  { value: "light-oak", label: "Light Oak", hex: "#D8BE95" },
  { value: "natural-oak", label: "Natural Oak", hex: "#C29A66" },
  { value: "dark-walnut", label: "Dark Walnut", hex: "#4A3324" },
  { value: "warm-gray-tile", label: "Warm Gray Tile", hex: "#A9A29A" },
  { value: "white-oak", label: "White Oak", hex: "#E4D3B4" },
];

// Wall color and hardware finish are derived from the cabinet's undertone
// so the generated palette stays coordinated rather than random.
const WALL_BY_UNDERTONE = {
  warm: { label: "Soft Taupe", hex: "#D9C9B8" },
  cool: { label: "Warm White", hex: "#F4EFE6" },
  neutral: { label: "Sage Green", hex: "#A8AE99" },
};

const HARDWARE_BY_UNDERTONE = {
  warm: { label: "Brushed Brass", hex: "#B08D57" },
  cool: { label: "Brushed Nickel", hex: "#9FA3A6" },
  neutral: { label: "Matte Black", hex: "#2B2A28" },
};

function findOption(options, value) {
  return options.find((option) => option.value === value) ?? options[0];
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

function Swatch({ label, color }) {
  return (
    <div>
      <div
        className="h-16 w-full border border-kivora-ink/15"
        style={{ backgroundColor: color.hex }}
      />
      <p className="mt-2 text-sm font-medium text-kivora-ink">{label}</p>
      <p className="text-xs text-kivora-ink/50">
        {color.label} · {color.hex}
      </p>
    </div>
  );
}

const initialState = {
  cabinet: "warm-white",
  countertop: "quartz-veined",
  flooring: "natural-oak",
};

export default function KitchenColorPaletteGeneratorClient() {
  const [form, setForm] = useState(initialState);

  const update = (field) => (value) =>
    setForm((current) => ({ ...current, [field]: value }));

  const result = useMemo(() => {
    const cabinet = findOption(CABINET_OPTIONS, form.cabinet);
    const countertop = findOption(COUNTERTOP_OPTIONS, form.countertop);
    const flooring = findOption(FLOORING_OPTIONS, form.flooring);
    const wall = WALL_BY_UNDERTONE[cabinet.undertone];
    const hardware = HARDWARE_BY_UNDERTONE[cabinet.undertone];

    return { cabinet, countertop, flooring, wall, hardware };
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
          Kitchen Color Palette Generator
        </h1>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-kivora-ink/60">
          Pick your cabinet, countertop, and flooring, and get a coordinated
          palette — including a matching wall color and hardware finish.
        </p>
      </section>

      <section className="mx-auto grid max-w-5xl gap-8 px-5 py-10 md:px-8 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div className="border border-kivora-ink/15 bg-kivora-cream p-6">
          <div className="grid gap-5">
            <SelectField label="Cabinet Color" value={form.cabinet} onChange={update("cabinet")} options={CABINET_OPTIONS} />
            <SelectField label="Countertop" value={form.countertop} onChange={update("countertop")} options={COUNTERTOP_OPTIONS} />
            <SelectField label="Flooring" value={form.flooring} onChange={update("flooring")} options={FLOORING_OPTIONS} />
          </div>

          <p className="mt-5 text-sm leading-relaxed text-kivora-ink/50">
            Still deciding on a style?{" "}
            <Link
              href="/tools/kitchen-style-quiz"
              className="font-medium text-kivora-ink underline underline-offset-2"
            >
              Take the style quiz
            </Link>{" "}
            first.
          </p>
        </div>

        <div className="lg:sticky lg:top-28">
          <div className="border border-kivora-ink bg-kivora-yellow/25 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-kivora-ink/50">
              Your Palette
            </p>

            <div className="mt-4 grid grid-cols-3 gap-4 sm:grid-cols-5">
              <Swatch label="Cabinets" color={result.cabinet} />
              <Swatch label="Countertop" color={result.countertop} />
              <Swatch label="Flooring" color={result.flooring} />
              <Swatch label="Wall Color" color={result.wall} />
              <Swatch label="Hardware" color={result.hardware} />
            </div>

            <div className="mt-6 border-t border-kivora-ink/15 pt-5">
              <p className="text-sm font-medium text-kivora-ink">
                See this palette on your actual kitchen.
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
            href="/tools/kitchen-style-quiz"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-kivora-ink/50 transition-colors hover:text-kivora-ink"
          >
            Find your kitchen style
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-20 md:px-8">
        <p className="max-w-2xl text-xs leading-relaxed text-kivora-ink/40">
          Wall color and hardware finish are suggested based on your
          cabinet's undertone to keep the palette coordinated. Actual paint
          and material colors vary by lighting, finish, and manufacturer —
          always check a physical sample before ordering.
        </p>
      </section>
    </main>
  );
}
