export const toolCategories = [
  {
    id: "budget",
    title: "Budget & Cost",
    description: "Figure out what your remodel will actually cost.",
  },
  {
    id: "planning",
    title: "Planning & Layout",
    description: "Get your dimensions, layout, and materials right.",
  },
  {
    id: "design",
    title: "Design & Style",
    description: "Find your style before you commit to it.",
  },
];

export const tools = [
  {
    slug: "kitchen-remodel-cost-calculator",
    title: "Kitchen Remodel Cost Calculator",
    description:
      "Get a low, mid, and high-end budget estimate based on your kitchen size and finish choices.",
    category: "budget",
    status: "live",
  },
  {
    slug: "kitchen-cabinet-cost-calculator",
    title: "Kitchen Cabinet Cost Calculator",
    description:
      "Estimate cabinet costs by size, material, and finish — usually your biggest line item.",
    category: "budget",
    status: "live",
  },
  {
    slug: "kitchen-remodel-budget-planner",
    title: "Kitchen Remodel Budget Planner",
    description:
      "Split a total budget across cabinets, countertops, appliances, and labor.",
    category: "budget",
    status: "soon",
  },
  {
    slug: "kitchen-island-size-calculator",
    title: "Kitchen Island Size Calculator",
    description:
      "Find the right island dimensions and clearance for your kitchen's footprint.",
    category: "planning",
    status: "soon",
  },
  {
    slug: "kitchen-layout-planner",
    title: "Kitchen Layout Planner",
    description:
      "Compare one-wall, galley, L-shaped, U-shaped, and island layouts for your space.",
    category: "planning",
    status: "soon",
  },
  {
    slug: "kitchen-backsplash-calculator",
    title: "Kitchen Backsplash Calculator",
    description:
      "Calculate square footage, tile count, and estimated cost for your backsplash.",
    category: "planning",
    status: "live",
  },
  {
    slug: "kitchen-flooring-calculator",
    title: "Kitchen Flooring Calculator",
    description:
      "Work out square footage, boxes needed, and material cost for new flooring.",
    category: "planning",
    status: "live",
  },
  {
    slug: "kitchen-remodel-checklist",
    title: "Kitchen Remodel Checklist",
    description:
      "A step-by-step checklist for cosmetic, partial, or full kitchen remodels.",
    category: "planning",
    status: "soon",
  },
  {
    slug: "kitchen-style-quiz",
    title: "Kitchen Style Quiz",
    description:
      "Answer a few questions and find out which kitchen style actually fits you.",
    category: "design",
    status: "live",
  },
  {
    slug: "kitchen-color-palette-generator",
    title: "Kitchen Color Palette Generator",
    description:
      "Generate a coordinated color palette from your cabinet, counter, and floor picks.",
    category: "design",
    status: "soon",
  },
];

export function getToolBySlug(slug) {
  return tools.find((tool) => tool.slug === slug) ?? null;
}
