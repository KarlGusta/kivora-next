import KitchenColorPaletteGeneratorClient from "@/components/tools/calculators/KitchenColorPaletteGeneratorClient";

export const metadata = {
  title: "Kitchen Color Palette Generator",
  description:
    "Pick your cabinet, countertop, and flooring colors and get a coordinated kitchen palette, including matching wall color and hardware finish.",
};

export default function KitchenColorPaletteGeneratorPage() {
  return <KitchenColorPaletteGeneratorClient />;
}
