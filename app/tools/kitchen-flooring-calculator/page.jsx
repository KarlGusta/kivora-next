import KitchenFlooringCalculatorClient from "@/components/tools/calculators/KitchenFlooringCalculatorClient";

export const metadata = {
  title: "Kitchen Flooring Calculator",
  description:
    "Calculate square footage, boxes needed, and estimated material cost for your kitchen flooring — vinyl, laminate, tile, porcelain, or hardwood.",
};

export default function KitchenFlooringCalculatorPage() {
  return <KitchenFlooringCalculatorClient />;
}
