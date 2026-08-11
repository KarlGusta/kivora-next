import KitchenLayoutPlannerClient from "@/components/tools/calculators/KitchenLayoutPlannerClient";

export const metadata = {
  title: "Kitchen Layout Planner",
  description:
    "Enter your kitchen's dimensions and find out which layout fits — one-wall, galley, L-shaped, U-shaped, peninsula, or island.",
};

export default function KitchenLayoutPlannerPage() {
  return <KitchenLayoutPlannerClient />;
}
