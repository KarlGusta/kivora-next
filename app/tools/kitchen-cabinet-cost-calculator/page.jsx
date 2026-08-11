import KitchenCabinetCostCalculatorClient from "@/components/tools/calculators/KitchenCabinetCostCalculatorClient";

export const metadata = {
  title: "Kitchen Cabinet Cost Calculator",
  description:
    "Estimate your kitchen cabinet cost in seconds. Get a price range based on cabinet type, material, finish, and installation.",
};

export default function KitchenCabinetCostCalculatorPage() {
  return <KitchenCabinetCostCalculatorClient />;
}
