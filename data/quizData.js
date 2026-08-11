export const STYLES = {
  modern: {
    id: "modern",
    title: "Modern Minimal",
    tagline: "Clean lines. No clutter. Nothing extra.",
    description:
      "You gravitate toward flat surfaces, quiet color, and a kitchen that feels calm rather than busy. Every material is doing a job — nothing is there just to look pretty.",
    colors: ["Crisp White", "Charcoal", "Matte Black", "Warm Gray"],
    cabinets: "Flat-panel, handleless or slim-pull",
    countertop: "White or dark quartz, minimal veining",
    hardware: "Slim black bar pulls or none at all",
    backsplash: "Large-format slab, matching countertop",
    flooring: "Large-format tile or polished concrete",
  },
  farmhouse: {
    id: "farmhouse",
    title: "Modern Farmhouse",
    tagline: "Cozy, collected, and built for a full table.",
    description:
      "You want a kitchen that feels lived-in and warm — the kind with open shelving, a big sink, and room for everyone to gather. Character matters more than perfection.",
    colors: ["Warm White", "Cream", "Sage Green", "Soft Black"],
    cabinets: "Shaker-style, painted white or cream",
    countertop: "Butcher block or soft white quartz",
    hardware: "Aged brass or matte black knobs",
    backsplash: "Classic white subway tile",
    flooring: "Wide-plank white oak or reclaimed wood",
  },
  scandinavian: {
    id: "scandinavian",
    title: "Scandinavian / Japandi",
    tagline: "Light, airy, and built from natural materials.",
    description:
      "You lean toward light wood, soft neutrals, and a sense of calm minimalism. Function matters, but so does warmth — nothing feels cold or clinical.",
    colors: ["Soft White", "Natural Oak", "Pale Gray", "Muted Sage"],
    cabinets: "Flat-panel light oak or ash",
    countertop: "Light quartz or butcher block",
    hardware: "Recessed pulls or minimal wood knobs",
    backsplash: "Handmade zellige or subtly textured tile",
    flooring: "Light wide-plank oak",
  },
  traditional: {
    id: "traditional",
    title: "Classic Traditional",
    tagline: "Elegant, timeless, a little formal.",
    description:
      "You're drawn to detail — raised-panel cabinetry, rich tones, and finishes that feel established rather than trendy. This kitchen is meant to age well.",
    colors: ["Navy", "Cream", "Brass", "Deep Green"],
    cabinets: "Raised-panel wood, painted or stained",
    countertop: "Granite or marble with warm veining",
    hardware: "Ornate bronze or polished brass pulls",
    backsplash: "Patterned tile or classic subway with detail",
    flooring: "Herringbone hardwood",
  },
  industrial: {
    id: "industrial",
    title: "Industrial Loft",
    tagline: "Raw materials, exposed elements, a little edge.",
    description:
      "You like a kitchen with texture and history — exposed brick, dark metal, concrete. It should feel more like a converted loft than a showroom.",
    colors: ["Charcoal", "Raw Metal", "Black", "Warm Brown"],
    cabinets: "Dark wood or matte black flat-panel",
    countertop: "Concrete or dark honed stone",
    hardware: "Matte black pipe-style pulls",
    backsplash: "Exposed brick or dark subway tile",
    flooring: "Polished concrete or reclaimed wood",
  },
};

// Each option scores one or more styles. Weight defaults to 1 per style listed.
export const QUESTIONS = [
  {
    id: "cabinets",
    prompt: "Which cabinet look do you love most?",
    options: [
      { label: "Sleek flat-panel, white or gray", styles: ["modern"] },
      { label: "Shaker-style, painted white or cream", styles: ["farmhouse", "traditional"] },
      { label: "Flat-panel light oak", styles: ["scandinavian"] },
      { label: "Raised-panel wood with detail", styles: ["traditional"] },
      { label: "Dark wood or matte black", styles: ["industrial"] },
    ],
  },
  {
    id: "countertop",
    prompt: "Which countertop feels most 'you'?",
    options: [
      { label: "Bright white quartz", styles: ["modern"] },
      { label: "Butcher block wood", styles: ["farmhouse", "scandinavian"] },
      { label: "Warm granite or marble", styles: ["traditional"] },
      { label: "Concrete or dark stone", styles: ["industrial"] },
      { label: "Matte black quartz", styles: ["modern", "industrial"] },
    ],
  },
  {
    id: "backsplash",
    prompt: "Pick a backsplash you'd actually want.",
    options: [
      { label: "Classic white subway tile", styles: ["farmhouse", "traditional"] },
      { label: "Large-format slab, no grout lines", styles: ["modern"] },
      { label: "Handmade, textured tile", styles: ["scandinavian"] },
      { label: "Exposed brick", styles: ["industrial"] },
      { label: "Patterned or decorative tile", styles: ["traditional"] },
    ],
  },
  {
    id: "palette",
    prompt: "Choose a color palette.",
    options: [
      { label: "Crisp white & black", styles: ["modern"] },
      { label: "Warm cream & sage", styles: ["farmhouse"] },
      { label: "Soft white & natural wood", styles: ["scandinavian"] },
      { label: "Rich navy & brass", styles: ["traditional"] },
      { label: "Charcoal & raw metal", styles: ["industrial"] },
    ],
  },
  {
    id: "hardware",
    prompt: "Pick your hardware style.",
    options: [
      { label: "Slim black bar pulls", styles: ["modern"] },
      { label: "Aged brass knobs", styles: ["farmhouse", "traditional"] },
      { label: "Minimal wood pulls, or none", styles: ["scandinavian"] },
      { label: "Ornate bronze pulls", styles: ["traditional"] },
      { label: "Matte black pipe-style", styles: ["industrial"] },
    ],
  },
  {
    id: "flooring",
    prompt: "Choose a flooring option.",
    options: [
      { label: "Polished concrete", styles: ["industrial", "modern"] },
      { label: "Wide-plank white oak", styles: ["scandinavian", "farmhouse"] },
      { label: "Classic hardwood herringbone", styles: ["traditional"] },
      { label: "Large-format tile", styles: ["modern"] },
      { label: "Reclaimed wood", styles: ["industrial", "farmhouse"] },
    ],
  },
  {
    id: "feeling",
    prompt: "Which of these feels the most like home?",
    options: [
      { label: "Clean lines, absolutely no clutter", styles: ["modern"] },
      { label: "A big farmhouse table and open shelving", styles: ["farmhouse"] },
      { label: "Light, airy, natural materials everywhere", styles: ["scandinavian"] },
      { label: "Elegant, timeless, a little formal", styles: ["traditional"] },
      { label: "Loft-style, with exposed brick or beams", styles: ["industrial"] },
    ],
  },
  {
    id: "lighting",
    prompt: "Pick a lighting style.",
    options: [
      { label: "Sleek linear pendants", styles: ["modern"] },
      { label: "Woven rattan pendants", styles: ["farmhouse", "scandinavian"] },
      { label: "Simple globe pendants", styles: ["scandinavian"] },
      { label: "A classic chandelier", styles: ["traditional"] },
      { label: "Exposed bulb or cage fixtures", styles: ["industrial"] },
    ],
  },
];
