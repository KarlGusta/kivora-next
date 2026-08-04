"use client";

import { useMemo, useState } from "react";
import { LogOut } from "lucide-react";
import { useAppShell } from "@/lib/appShellContext";
import { useGenerations } from "@/hooks/useGenerations";
import { getStyleLabel, styleOptions } from "@/lib/kivoraApp";

export default function SettingsPage() {
  const { user, logout } = useAppShell();
  const { generations, generationsError } = useGenerations(user);
  const [defaultStyle, setDefaultStyle] = useState(() =>
    typeof window !== "undefined" ? localStorage.getItem("kivora-default-style") || "modern" : "modern"
  );
  const defaultStyleLabel = useMemo(() => getStyleLabel(defaultStyle), [defaultStyle]);

  const handleDefaultStyleChange = (event) => {
    setDefaultStyle(event.target.value);
    localStorage.setItem("kivora-default-style", event.target.value);
  };

  return (
    <section className="border-t border-kivora-ink/10 pt-8">
      <div className="border-b border-kivora-ink/10 pb-8">
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-kivora-ink/45">Settings</p>
        <h1 className="mt-5 text-3xl font-semibold">Account</h1>
      </div>

      {generationsError && (
        <p className="mt-5 border border-red-300 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          {generationsError}
        </p>
      )}

      <div className="divide-y divide-kivora-ink/10">
        <div className="grid gap-5 py-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start">
          <div>
            <p className="text-sm font-semibold">Signed in as</p>
            <p className="mt-2 text-sm leading-6 text-kivora-ink/55">Manage your current Kivora session.</p>
          </div>
          <div>
            <p className="truncate font-semibold">{user.email}</p>
            <button
              type="button"
              className="mt-5 inline-flex min-h-10 items-center justify-center gap-2 border-b border-kivora-ink pb-1 text-sm font-semibold transition-colors hover:text-kivora-ink/60"
              onClick={logout}
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </div>

        <div className="grid gap-5 py-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start">
          <div>
            <label htmlFor="default-style" className="text-sm font-semibold">
              Default style
            </label>
            <p className="mt-2 text-sm leading-6 text-kivora-ink/55">
              Choose the style selected when you open Create.
            </p>
          </div>
          <div className="max-w-sm">
            <select
              id="default-style"
              className="h-11 w-full border border-kivora-ink/15 bg-transparent px-3 text-sm font-semibold outline-none transition-colors focus:border-kivora-ink"
              value={defaultStyle}
              onChange={handleDefaultStyleChange}
            >
              {styleOptions.map((style) => (
                <option key={style.id} value={style.id}>
                  {style.label}
                </option>
              ))}
            </select>
            <p className="mt-3 text-sm text-kivora-ink/55">
              {defaultStyleLabel} will be selected when you return to Create.
            </p>
          </div>
        </div>

        <div className="grid gap-5 py-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start">
          <div>
            <p className="text-sm font-semibold">Generations saved</p>
            <p className="mt-2 text-sm leading-6 text-kivora-ink/55">Designs stored in your account history.</p>
          </div>
          <p className="text-4xl font-semibold">{generations.length}</p>
        </div>
      </div>
    </section>
  );
}
