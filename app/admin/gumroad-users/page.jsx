"use client";

import { useCallback, useEffect, useState } from "react";
import { useFirebaseAuth } from "@/hooks/useFirebaseAuth";
import { getAdminGumroadUsers } from "@/lib/adminApi";

function formatDate(value) {
  if (!value) return "Never";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);
  return date.toLocaleString();
}

function formatCurrencyCents(value, currencySymbol = "$") {
  const amount = Number(value);
  if (!Number.isFinite(amount)) return "—";
  return `${currencySymbol || "$"}${(amount / 100).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export default function AdminGumroadUsersPage() {
  const { user } = useFirebaseAuth();
  const [gumroadUsers, setGumroadUsers] = useState([]);
  const [salesTotal, setSalesTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    if (!user) return;
    setLoading(true);
    setError("");
    try {
      const idToken = await user.getIdToken();
      const response = await getAdminGumroadUsers(idToken);
      setGumroadUsers(response.users || []);
      setSalesTotal(response.salesTotal || 0);
    } catch (err) {
      setError(err.message || "Failed to load Gumroad users.");
      setGumroadUsers([]);
      setSalesTotal(0);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    load();
  }, [load]);

  const revenue = gumroadUsers.reduce(
    (total, entry) => total + (Number(entry.totalSpent) || 0),
    0
  );
  const currency =
    gumroadUsers.find((entry) => entry.currencySymbol)?.currencySymbol || "$";

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Gumroad Users</h1>
          <p className="mt-1 text-sm text-kivora-ink/55">
            Customers grouped from Gumroad sales by email.
          </p>
        </div>
        <button
          type="button"
          onClick={load}
          disabled={loading}
          className="rounded-xl border border-kivora-ink/15 px-4 py-2.5 text-sm font-semibold disabled:opacity-60"
        >
          {loading ? "Refreshing…" : "Refresh"}
        </button>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {[
          ["Customers", gumroadUsers.length],
          ["Sales", salesTotal],
          ["Revenue", formatCurrencyCents(revenue, currency)],
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-kivora-ink/10 bg-white p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-kivora-ink/45">
              {label}
            </p>
            <p className="mt-2 text-2xl font-semibold">{value}</p>
          </div>
        ))}
      </div>

      {error && (
        <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          {error}
        </div>
      )}

      <div className="overflow-x-auto rounded-2xl border border-kivora-ink/10 bg-white">
        <table className="w-full min-w-[56rem] text-sm">
          <thead>
            <tr className="border-b border-kivora-ink/10 text-left">
              {[
                "Email",
                "Name",
                "Purchases",
                "Total spent",
                "Latest purchase",
                "Products",
                "Status",
              ].map((label) => (
                <th
                  key={label}
                  className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-kivora-ink/45"
                >
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td className="px-4 py-8 text-kivora-ink/55" colSpan={7}>
                  Loading Gumroad users…
                </td>
              </tr>
            ) : gumroadUsers.length === 0 ? (
              <tr>
                <td className="px-4 py-8 text-kivora-ink/55" colSpan={7}>
                  No Gumroad users found.
                </td>
              </tr>
            ) : (
              gumroadUsers.map((entry) => (
                <tr key={entry.email} className="border-t border-kivora-ink/10 align-top">
                  <td className="break-words px-4 py-4 font-semibold">{entry.email}</td>
                  <td className="break-words px-4 py-4 text-kivora-ink/70">
                    {entry.fullName || "—"}
                  </td>
                  <td className="px-4 py-4 text-kivora-ink/65">{entry.purchaseCount}</td>
                  <td className="px-4 py-4 text-kivora-ink/65">
                    {formatCurrencyCents(entry.totalSpent, entry.currencySymbol)}
                  </td>
                  <td className="px-4 py-4 text-kivora-ink/65">
                    {formatDate(entry.latestPurchaseAt)}
                  </td>
                  <td className="break-words px-4 py-4 text-kivora-ink/65">
                    {entry.productNames?.join(", ") || "—"}
                  </td>
                  <td className="px-4 py-4 font-semibold">{entry.status || "Active"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
