"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { deleteDoc, doc } from "firebase/firestore";
import { Download, Images, RefreshCw, Trash2 } from "lucide-react";
import { useAppShell } from "@/lib/appShellContext";
import { useGenerations } from "@/hooks/useGenerations";
import { generateDesign } from "@/lib/generation";
import { db } from "@/lib/firebase";
import { formatDate } from "@/lib/kivoraApp";

export default function ResultsPage() {
  const { user } = useAppShell();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { generations, generationsError } = useGenerations(user);
  const [selectedGenerationId, setSelectedGenerationId] = useState(searchParams.get("generation") || "");
  const [actionError, setActionError] = useState("");
  const [isRegenerating, setIsRegenerating] = useState(false);

  const generatedImages = useMemo(
    () =>
      generations.flatMap((entry) =>
        entry.outputs.map((output, index) => ({
          id: `${entry.id}-${index}`,
          output,
          index,
          generation: entry,
        }))
      ),
    [generations]
  );

  const selectedGeneration = generations.find((entry) => entry.id === selectedGenerationId) || generations[0];

  useEffect(() => {
    const generationId = searchParams.get("generation");

    if (generationId) {
      setSelectedGenerationId(generationId);
    }
  }, [searchParams]);

  useEffect(() => {
    if (generations.length === 0) {
      setSelectedGenerationId("");
      return;
    }

    if (!selectedGenerationId || !generations.some((entry) => entry.id === selectedGenerationId)) {
      setSelectedGenerationId(generations[0].id);
    }
  }, [generations, selectedGenerationId]);

  const handleSelectGeneration = (generationId) => {
    setSelectedGenerationId(generationId);
    router.push(`/results?generation=${generationId}`, { scroll: false });
  };

  const handleDeleteGeneration = async (generationId) => {
    setActionError("");

    try {
      await deleteDoc(doc(db, "generations", generationId));
    } catch (deleteError) {
      setActionError(deleteError.message || "Unable to delete generation.");
    }
  };

  const handleRegenerateGeneration = async (generation) => {
    setActionError("");
    setIsRegenerating(true);

    try {
      await generateDesign({
        user,
        imageUrl: generation.sourceImageUrl,
        style: generation.styleId,
      });
    } catch (generationError) {
      setActionError(generationError.message || "Generation failed.");
    } finally {
      setIsRegenerating(false);
    }
  };

  const handleDownloadAll = (generation) => {
    generation.outputs.forEach((output, index) => {
      const link = document.createElement("a");
      link.href = output;
      link.download = `kivora-${generation.styleId}-${index + 1}`;
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
    <section className="border-t border-kivora-ink/10 pt-8">
      <div className="flex flex-col gap-4 border-b border-kivora-ink/10 pb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-kivora-ink/45">Results</p>
          <h1 className="mt-5 text-3xl font-semibold">Generated image library</h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-kivora-ink/55">
            Browse generated redesigns and manage saved image sets.
          </p>
        </div>
        {selectedGeneration && (
          <button
            type="button"
            className="inline-flex min-h-10 items-center justify-center gap-2 border-b border-kivora-ink pb-1 text-sm font-semibold transition-colors hover:text-kivora-ink/60"
            onClick={() => handleDownloadAll(selectedGeneration)}
          >
            <Download size={16} />
            Download all
          </button>
        )}
      </div>

      {(generationsError || actionError) && (
        <p className="mt-5 border border-red-300 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          {generationsError || actionError}
        </p>
      )}

      {generatedImages.length > 0 ? (
        <>
          <div className="grid gap-x-8 gap-y-12 py-10 sm:grid-cols-2 lg:grid-cols-3">
            {generatedImages.map((item) => (
              <article key={item.id} className="border-t border-kivora-ink/10 pt-4">
                <button
                  type="button"
                  className="block aspect-[4/3] w-full overflow-hidden bg-kivora-ink/5 text-left"
                  onClick={() => handleSelectGeneration(item.generation.id)}
                >
                  <img
                    src={item.output}
                    alt={`${item.generation.styleLabel} kitchen output ${item.index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
                <div className="flex items-center justify-between gap-3 py-4">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold">{item.generation.styleLabel}</p>
                    <p className="mt-1 text-xs font-medium text-kivora-ink/50">
                      {formatDate(item.generation.createdAt)}
                    </p>
                  </div>
                  <a
                    href={item.output}
                    download
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-kivora-ink/10 transition-colors hover:border-kivora-ink"
                    aria-label={`Download ${item.generation.styleLabel} output ${item.index + 1}`}
                  >
                    <Download size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {selectedGeneration && (
            <div className="border-t border-kivora-ink/10 pt-10">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.22em] text-kivora-ink/45">
                    Selected set
                  </p>
                  <h2 className="mt-4 text-2xl font-semibold">{selectedGeneration.styleLabel} generation</h2>
                  <p className="mt-1 text-sm text-kivora-ink/55">{formatDate(selectedGeneration.createdAt)}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    className="inline-flex min-h-10 items-center gap-2 border-b border-kivora-ink pb-1 text-sm font-semibold transition-colors hover:text-kivora-ink/60 disabled:cursor-not-allowed disabled:border-kivora-ink/20 disabled:text-kivora-ink/40"
                    onClick={() => handleRegenerateGeneration(selectedGeneration)}
                    disabled={isRegenerating}
                  >
                    <RefreshCw size={16} />
                    {isRegenerating ? "Regenerating..." : "Regenerate"}
                  </button>
                  <button
                    type="button"
                    className="inline-flex min-h-10 items-center gap-2 border-b border-kivora-ink pb-1 text-sm font-semibold transition-colors hover:text-kivora-ink/60"
                    onClick={() => handleDeleteGeneration(selectedGeneration.id)}
                  >
                    <Trash2 size={16} />
                    Delete
                  </button>
                </div>
              </div>
              <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-kivora-ink/45">Original</p>
                  <div className="aspect-[4/3] overflow-hidden bg-kivora-ink/5">
                    <img
                      src={selectedGeneration.imageUrl}
                      alt={selectedGeneration.uploadLabel}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-kivora-ink/45">Redesigns</p>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {selectedGeneration.outputs.map((output, index) => (
                      <a
                        key={output}
                        href={output}
                        download
                        className="aspect-[4/3] overflow-hidden bg-kivora-ink/5"
                        aria-label={`Download ${selectedGeneration.styleLabel} redesign ${index + 1}`}
                      >
                        <img
                          src={output}
                          alt={`${selectedGeneration.styleLabel} redesign ${index + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="flex min-h-64 flex-col items-center justify-center py-20 text-center">
          <Images className="h-8 w-8 text-kivora-ink/25" />
          <h2 className="mt-4 text-xl font-semibold">No generated images yet</h2>
          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-kivora-ink/55">
            Create a redesign to populate your result library.
          </p>
        </div>
      )}
    </section>
  );
}
