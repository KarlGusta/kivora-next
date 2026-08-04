"use client";

import Link from "next/link";
import { Eye, History } from "lucide-react";
import { useAppShell } from "@/lib/appShellContext";
import { useGenerations } from "@/hooks/useGenerations";
import { formatDate } from "@/lib/kivoraApp";

export default function HistoryPage() {
  const { user } = useAppShell();
  const { generations, generationsError } = useGenerations(user);

  return (
    <section className="border-t border-kivora-ink/10 pt-8">
      <div className="border-b border-kivora-ink/10 pb-8">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-kivora-ink/45">History</p>
          <h1 className="mt-5 text-3xl font-semibold">Activity log</h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-kivora-ink/55">
            Review saved generations and reopen a previous redesign set.
          </p>
        </div>
      </div>

      {generationsError && (
        <p className="mt-5 border border-red-300 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          {generationsError}
        </p>
      )}

      {generations.length > 0 ? (
        <div className="divide-y divide-kivora-ink/10">
          {generations.map((entry) => (
            <Link
              key={entry.id}
              href={`/results?generation=${entry.id}`}
              className="grid w-full gap-5 py-8 text-left transition-colors hover:text-kivora-ink/65 lg:grid-cols-[220px_minmax(0,1fr)_auto] lg:items-start"
            >
              <span className="text-sm font-medium text-kivora-ink/55">{formatDate(entry.createdAt)}</span>
              <span className="min-w-0 font-semibold">Generated {entry.styleLabel} kitchen</span>
              <span className="inline-flex items-center gap-2 text-sm font-semibold lg:justify-self-end">
                View
                <Eye className="h-4 w-4 shrink-0" />
              </span>
            </Link>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <History className="mx-auto h-8 w-8 text-kivora-ink/25" />
          <h2 className="mt-4 text-xl font-semibold">No activity yet</h2>
          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-kivora-ink/55">
            Generated kitchens will appear here once you create your first redesign.
          </p>
        </div>
      )}
    </section>
  );
}
