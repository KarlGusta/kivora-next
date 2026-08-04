export const STYLE_PROMPTS = {
  modern: "Modern",
  minimalist: "Minimalist",
  luxury: "Luxury",
};

export const generateDesign = async ({ user, imageUrl, style }) => {
  const functionUrl =
    process.env.NEXT_PUBLIC_GENERATE_DESIGN_URL ||
    (process.env.NEXT_PUBLIC_FIREBASE_FUNCTIONS_BASE_URL
      ? `${process.env.NEXT_PUBLIC_FIREBASE_FUNCTIONS_BASE_URL}/generateDesign`
      : "");

  if (!functionUrl) {
    throw new Error("Firebase Function URL is not configured.");
  }

  const token = await user.getIdToken();
  const response = await fetch(functionUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      uid: user.uid,
      imageUrl,
      style,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || data.message || "Design generation failed.");
  }

  return data.outputs || [];
};
