import KitchenStyleQuizClient from "@/components/tools/quizzes/KitchenStyleQuizClient";

export const metadata = {
  title: "Kitchen Style Quiz",
  description:
    "Take our free 8-question quiz to find your kitchen style — Modern, Farmhouse, Scandinavian, Traditional, or Industrial — with matching colors and finishes.",
};

export default function KitchenStyleQuizPage() {
  return <KitchenStyleQuizClient />;
}
