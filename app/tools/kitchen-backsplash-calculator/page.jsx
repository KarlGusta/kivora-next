import KitchenBacksplashCalculatorClient from "@/components/tools/calculators/KitchenBacksplashCalculatorClient";

export const metadata = {
  title: "Kitchen Backsplash Calculator",
  description:
    "Calculate square footage, tile count, and estimated cost for your kitchen backsplash. Enter wall dimensions and tile type for an instant estimate.",
};

export default function KitchenBacksplashCalculatorPage() {
  return <KitchenBacksplashCalculatorClient />;
}
