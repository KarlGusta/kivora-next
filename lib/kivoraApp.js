export const styleOptions = [
  {
    id: "modern",
    label: "Modern",
    description: "Clean lines, natural light, refined contrast.",
  },
  {
    id: "minimalist",
    label: "Minimalist",
    description: "Calm surfaces, hidden storage, simple materials.",
  },
  {
    id: "luxury",
    label: "Luxury",
    description: "Premium finishes, layered lighting, elevated details.",
  },
];

export const progressMessages = [
  "Analyzing kitchen...",
  "Applying style...",
  "Rendering variations...",
];

export const getStyleLabel = (styleId) =>
  styleOptions.find((style) => style.id === styleId)?.label || "Modern";

export const formatDate = (dateString) =>
  new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(dateString));

export const normalizeGeneration = (snapshot) => {
  const data = snapshot.data();
  const styleId = data.style || "modern";
  const createdAt = data.createdAt?.toDate
    ? data.createdAt.toDate().toISOString()
    : data.createdAt || new Date().toISOString();

  return {
    id: snapshot.id,
    imageUrl: data.imageUrl,
    sourceImageUrl: data.imageUrl,
    outputs: Array.isArray(data.outputs) ? data.outputs : [],
    styleId,
    styleLabel: getStyleLabel(styleId),
    uploadLabel: data.uploadLabel || "Kitchen upload",
    createdAt,
  };
};
