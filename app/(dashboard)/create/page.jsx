"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Check, Download, ImagePlus, Loader2, RefreshCw, Upload } from "lucide-react";
import { useAppShell } from "@/lib/appShellContext";
import { generateDesign } from "@/lib/generation";
import { uploadKitchenImage } from "@/lib/cloudinary";
import { getStyleLabel, progressMessages, styleOptions } from "@/lib/kivoraApp";

export default function CreatePage() {
  const { user } = useAppShell();
  const [selectedStyle, setSelectedStyle] = useState(() =>
    typeof window !== "undefined" ? localStorage.getItem("kivora-default-style") || "modern" : "modern"
  );
  const [imageUrl, setImageUrl] = useState("");
  const [localPreview, setLocalPreview] = useState("");
  const [uploadLabel, setUploadLabel] = useState("");
  const [outputs, setOutputs] = useState([]);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const fileInputRef = useRef(null);

  const selectedStyleLabel = useMemo(() => getStyleLabel(selectedStyle), [selectedStyle]);

  useEffect(() => {
    if (!isGenerating) return undefined;

    setStatus(progressMessages[0]);
    const interval = window.setInterval(() => {
      setStatus((currentStatus) => {
        const currentIndex = progressMessages.indexOf(currentStatus);
        const nextIndex = currentIndex < 0 ? 1 : Math.min(currentIndex + 1, progressMessages.length - 1);

        return progressMessages[nextIndex];
      });
    }, 1400);

    return () => window.clearInterval(interval);
  }, [isGenerating]);

  const handleFileUpload = async (file) => {
    if (!file) return;

    setError("");
    setOutputs([]);
    setUploadLabel(file.name);
    setLocalPreview(URL.createObjectURL(file));
    setIsUploading(true);
    setStatus("Uploading kitchen image...");

    try {
      const uploadedUrl = await uploadKitchenImage(file, user);
      setImageUrl(uploadedUrl);
      setStatus("Upload complete. Choose a style and generate.");
    } catch (uploadError) {
      setError(uploadError.message || "Upload failed.");
      setStatus("");
      setImageUrl("");
    } finally {
      setIsUploading(false);
    }
  };

  const handleUpload = (event) => {
    handleFileUpload(event.target.files?.[0]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    handleFileUpload(event.dataTransfer.files?.[0]);
  };

  const handleGenerate = async () => {
    if (!imageUrl) {
      setError("Upload a kitchen image before generating.");
      return;
    }

    setError("");
    setIsGenerating(true);
    setStatus(progressMessages[0]);

    try {
      const generatedOutputs = await generateDesign({
        user,
        imageUrl,
        style: selectedStyle,
      });

      setOutputs(generatedOutputs);
      setStatus("Your redesign variations are ready.");
    } catch (generationError) {
      setError(generationError.message || "Generation failed.");
      setStatus("");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleStyleChange = (styleId) => {
    setSelectedStyle(styleId);
    setOutputs([]);
    setStatus("Style updated. Generate a new set when ready.");
  };

  return (
    <>
      <section className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="border-t border-kivora-ink/10 pt-8">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-kivora-ink/45">Upload</p>
          <h1 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
            Turn a kitchen photo into redesigns.
          </h1>
          <p className="mt-5 max-w-xl leading-7 text-kivora-ink/65">
            Upload your kitchen, choose a style, and generate three variations.
          </p>

          <button
            type="button"
            className={`mt-10 flex aspect-[4/3] w-full flex-col items-center justify-center border border-dashed p-4 text-center transition-colors ${
              isDragging
                ? "border-kivora-ink bg-white"
                : "border-kivora-ink/25 bg-transparent hover:border-kivora-ink hover:bg-white"
            }`}
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(event) => {
              event.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
          >
            {localPreview ? (
              <img src={localPreview} alt="Uploaded kitchen preview" className="h-full w-full object-cover" />
            ) : (
              <>
                <Upload className="h-8 w-8 text-kivora-ink/45" />
                <span className="mt-4 text-lg font-semibold">Upload kitchen image</span>
                <span className="mt-2 max-w-xs text-sm leading-6 text-kivora-ink/55">
                  Use a clear photo showing full kitchen layout.
                </span>
              </>
            )}
          </button>
          <input ref={fileInputRef} className="hidden" type="file" accept="image/*" onChange={handleUpload} />
          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            {uploadLabel ? (
              <p className="truncate text-sm font-medium text-kivora-ink/55">{uploadLabel}</p>
            ) : (
              <p className="text-sm font-medium text-kivora-ink/55">Drag and drop or browse to upload.</p>
            )}
            {localPreview && (
              <button
                type="button"
                className="inline-flex min-h-10 items-center justify-center gap-2 border-b border-kivora-ink pb-1 text-sm font-semibold transition-colors hover:text-kivora-ink/60"
                onClick={() => fileInputRef.current?.click()}
              >
                <Upload size={16} />
                Replace image
              </button>
            )}
          </div>
        </div>

        <div className="grid gap-12">
          <section className="border-t border-kivora-ink/10 pt-8">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-kivora-ink/45">Style</p>
            <h2 className="mt-5 text-2xl font-semibold">Choose one direction</h2>
            <div className="mt-8 grid gap-3">
              {styleOptions.map((style) => {
                const isSelected = selectedStyle === style.id;

                return (
                  <button
                    key={style.id}
                    type="button"
                    className={`flex min-h-20 items-center justify-between gap-5 border px-4 text-left transition-colors ${
                      isSelected
                        ? "border-kivora-ink bg-white"
                        : "border-kivora-ink/10 bg-transparent hover:border-kivora-ink/40 hover:bg-white"
                    }`}
                    onClick={() => handleStyleChange(style.id)}
                  >
                    <span>
                      <span className="block text-base font-semibold">{style.label}</span>
                      <span className="mt-1 block text-sm leading-6 text-kivora-ink/55">{style.description}</span>
                    </span>
                    {isSelected && <Check className="h-5 w-5 shrink-0 text-kivora-ink" />}
                  </button>
                );
              })}
            </div>
          </section>

          <section className="border-t border-kivora-ink/10 pt-8">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-kivora-ink/45">Generate</p>
            <h2 className="mt-5 text-2xl font-semibold">Create three variations</h2>
            <button
              type="button"
              className="mt-8 inline-flex min-h-14 w-full items-center justify-center gap-2 bg-kivora-ink px-5 text-base font-semibold text-white transition-colors hover:bg-kivora-ink/85 disabled:cursor-not-allowed disabled:bg-kivora-ink/15 disabled:text-kivora-ink/35"
              onClick={handleGenerate}
              disabled={isUploading || isGenerating || !imageUrl}
            >
              {isUploading || isGenerating ? <Loader2 className="h-5 w-5 animate-spin" /> : <ImagePlus size={18} />}
              {isGenerating ? "Generating..." : "Generate 3 redesigns"}
            </button>
            {status && <p className="mt-4 text-sm font-medium text-kivora-ink/60">{status}</p>}
            {error && (
              <p className="mt-4 border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                {error}
              </p>
            )}
          </section>
        </div>
      </section>

      {outputs.length > 0 && (
        <section className="mt-16 border-t border-kivora-ink/10 pt-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-kivora-ink/45">Preview</p>
              <h2 className="mt-5 text-2xl font-semibold">Latest redesigns</h2>
            </div>
            <button
              type="button"
              className="inline-flex min-h-11 items-center justify-center gap-2 border-b border-kivora-ink pb-1 text-sm font-semibold transition-colors hover:text-kivora-ink/60"
              onClick={handleGenerate}
              disabled={!imageUrl || isGenerating}
            >
              <RefreshCw size={16} />
              Regenerate
            </button>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {outputs.map((output, index) => (
              <article key={output} className="border-t border-kivora-ink/10 pt-4">
                <div className="aspect-[4/3] overflow-hidden bg-kivora-ink/5">
                  <img
                    src={output}
                    alt={`${selectedStyleLabel} kitchen variation ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 py-4">
                  <div>
                    <h3 className="font-semibold">Variation {index + 1}</h3>
                    <p className="mt-1 text-sm text-kivora-ink/55">{selectedStyleLabel}</p>
                  </div>
                  <a
                    href={output}
                    download
                    className="inline-flex h-10 w-10 items-center justify-center border border-kivora-ink/10 transition-colors hover:border-kivora-ink"
                    aria-label={`Download variation ${index + 1}`}
                  >
                    <Download size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
