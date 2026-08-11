import KitchenRemodelBudgetPlannerClient from "@/components/tools/calculators/KitchenRemodelBudgetPlannerClient";

export const metadata = {
  title: "Kitchen Remodel Budget Planner",
  description:
    "Enter your total kitchen remodel budget and see a suggested breakdown across cabinets, countertops, appliances, flooring, labor, and more.",
};

export default function KitchenRemodelBudgetPlannerPage() {
  return <KitchenRemodelBudgetPlannerClient />;
}
