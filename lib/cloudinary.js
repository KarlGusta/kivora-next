const getUploadFunctionUrl = () => {
  if (process.env.NEXT_PUBLIC_UPLOAD_IMAGE_URL) {
    return process.env.NEXT_PUBLIC_UPLOAD_IMAGE_URL;
  }

  if (process.env.NEXT_PUBLIC_FIREBASE_FUNCTIONS_BASE_URL) {
    return `${process.env.NEXT_PUBLIC_FIREBASE_FUNCTIONS_BASE_URL}/uploadImage`;
  }

  return "";
};

const readFileAsDataUrl = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("Could not read image file."));
    reader.readAsDataURL(file);
  });

const uploadKitchenImageViaFunction = async ({ file, user, functionUrl }) => {
  if (!user) {
    throw new Error("Sign in before uploading a kitchen image.");
  }

  const token = await user.getIdToken();
  const dataUrl = await readFileAsDataUrl(file);
  const response = await fetch(functionUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      uid: user.uid,
      file: {
        name: file.name,
        type: file.type,
        dataUrl,
      },
    }),
  });

  const data = await response.json();

  if (!response.ok || !data.imageUrl) {
    throw new Error(data.error || data.message || "Image upload failed.");
  }

  return data.imageUrl;
};

export const uploadKitchenImage = async (file, user) => {
  const functionUrl = getUploadFunctionUrl();

  if (functionUrl) {
    return uploadKitchenImageViaFunction({ file, user, functionUrl });
  }

  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  if (!cloudName || !uploadPreset) {
    throw new Error("Cloudinary upload settings are missing.");
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);
  formData.append("folder", "kivora/kitchens");

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await response.json();

  if (!response.ok || !data.secure_url) {
    throw new Error(data.error?.message || "Image upload failed.");
  }

  return data.secure_url;
};
