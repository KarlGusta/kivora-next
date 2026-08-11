import KitchenIslandSizeCalculatorClient from "@/components/tools/calculators/KitchenIslandSizeCalculatorClient";

export const metadata = {
  title: "Kitchen Island Size Calculator",
  description:
    "Find the right kitchen island size and clearance for your space — get recommended dimensions and seating capacity based on your kitchen's footprint.",
};

export default function KitchenIslandSizeCalculatorPage() {
  return <KitchenIslandSizeCalculatorClient />;
}
