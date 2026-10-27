"use client";

import { useCallback, useEffect, useState } from "react";
import { useFirebaseAuth } from "@/hooks/useFirebaseAuth";
import {
  getAdminUsers,
  syncGumroadAdminUsers,
  updateAdminUserStatus,
} from "@/lib/adminApi";
import { isAdminEmail } from "@/lib/adminAuth";

const USER_STATUS_OPTIONS = [
  { value: "approved", label: "Approved" },
  { value: "pending", label: "Pending" },
  { value: "subscribed", label: "Subscribed" },
  { value: "unsubscribed", label: "Not subscribed" },
  { value: "suspended", label: "Suspended" },
];

function formatDate(value) {
  if (!value) return "Never";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);
  return date.toLocaleString();
}

export default function AdminUsersPage() {
  const { user } = useFirebaseAuth();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [updatingUid, setUpdatingUid] = useState("");
  const [error, setError] = useState("");
  const [syncMessage, setSyncMessage] = useState("");
  const [lastGumroadSyncAt, setLastGumroadSyncAt] = useState(null);

  const loadUsers = useCallback(async () => {
    if (!user) return;
    setLoading(true);
    setError("");
    try {
      const idToken = await user.getIdToken();
      const response = await getAdminUsers(idToken);
      setUsers(response.users || []);
      setLastGumroadSyncAt(response.lastGumroadSyncAt || null);
    } catch (err) {
      setError(err.message || "Failed to load users.");
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  const handleSync = async () => {
    if (!user) return;
    setSyncing(true);
    setError("");
    setSyncMessage("");
    try {
      const idToken = await user.getIdToken();
      const response = await syncGumroadAdminUsers(idToken);
      setSyncMessage(response.message || "Synced with Gumroad.");
      if (response.lastGumroadSyncAt) setLastGumroadSyncAt(response.lastGumroadSyncAt);
      await loadUsers();
    } catch (err) {
      setError(err.message || "Failed to sync with Gumroad.");
    } finally {
      setSyncing(false);
    }
  };

  const handleStatusChange = async (entry, nextStatus) => {
    if (!user || nextStatus === entry.status) return;
    setUpdatingUid(entry.uid);
    setError("");
    try {
      const idToken = await user.getIdToken();
      const response = await updateAdminUserStatus(idToken, entry.uid, nextStatus);
      setUsers((prev) =>
        prev.map((u) => (u.uid === response.user.uid ? response.user : u))
      );
    } catch (err) {
      setError(err.message || "Failed to update status.");
    } finally {
      setUpdatingUid("");
    }
  };

  const statusCounts = users.reduce((acc, entry) => {
    const key = entry.status || "unsubscribed";
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Users</h1>
          <p className="mt-1 text-sm text-kivora-ink/55">
            Manage account status. Approved is admin-only; Gumroad sets Subscribed.
          </p>
          <p className="mt-2 text-sm font-semibold text-kivora-ink/50">
            Last synced with Gumroad:{" "}
            <span className="text-kivora-ink/80">{formatDate(lastGumroadSyncAt)}</span>
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={loadUsers}
            disabled={loading || syncing}
            className="rounded-xl border border-kivora-ink/15 px-4 py-2.5 text-sm font-semibold disabled:opacity-60"
          >
            {loading ? "Refreshing…" : "Refresh"}
          </button>
          <button
            type="button"
            onClick={handleSync}
            disabled={loading || syncing}
            className="rounded-xl bg-kivora-ink px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
          >
            {syncing ? "Syncing…" : "Sync with Gumroad"}
          </button>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {[
          ["Total", users.length],
          ...USER_STATUS_OPTIONS.map((o) => [o.label, statusCounts[o.value] || 0]),
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
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}
      {syncMessage && (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          {syncMessage}
        </div>
      )}

      <div className="overflow-x-auto rounded-2xl border border-kivora-ink/10 bg-white">
        <table className="w-full min-w-[56rem] text-sm">
          <thead>
            <tr className="border-b border-kivora-ink/10 text-left">
              {["Email", "Created", "Last sign in", "Generations", "Status"].map((label) => (
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
                <td className="px-4 py-8 text-kivora-ink/55" colSpan={5}>
                  Loading users…
                </td>
              </tr>
            ) : users.length === 0 ? (
              <tr>
                <td className="px-4 py-8 text-kivora-ink/55" colSpan={5}>
                  No users found.
                </td>
              </tr>
            ) : (
              users.map((entry) => (
                <tr key={entry.uid} className="border-t border-kivora-ink/10 align-top">
                  <td className="break-words px-4 py-4 font-semibold">{entry.email || "—"}</td>
                  <td className="px-4 py-4 text-kivora-ink/65">{formatDate(entry.createdAt)}</td>
                  <td className="px-4 py-4 text-kivora-ink/65">{formatDate(entry.lastSignInAt)}</td>
                  <td className="px-4 py-4 text-kivora-ink/65">{entry.generationsUsed ?? 0}</td>
                  <td className="px-4 py-4">
                    <select
                      value={entry.status || "unsubscribed"}
                      disabled={isAdminEmail(entry.email) || updatingUid === entry.uid}
                      onChange={(e) => handleStatusChange(entry, e.target.value)}
                      className="w-full min-w-[9rem] rounded-xl border border-kivora-ink/15 px-3 py-2 text-sm font-semibold disabled:opacity-60"
                    >
                      {USER_STATUS_OPTIONS.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
