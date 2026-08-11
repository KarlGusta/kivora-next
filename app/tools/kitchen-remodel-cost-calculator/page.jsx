import KitchenRemodelCostCalculatorClient from "@/components/tools/calculators/KitchenRemodelCostCalculatorClient";

export const metadata = {
  title: "Kitchen Remodel Cost Calculator",
  description:
    "Estimate your kitchen remodel budget in seconds. Get a low, mid, and high-end cost range based on your kitchen size and finish choices.",
};

export default function KitchenRemodelCostCalculatorPage() {
  return <KitchenRemodelCostCalculatorClient />;
}
