export async function getAdminUsers(idToken) {
  const response = await fetch("/api/admin/users", {
    headers: { Authorization: `Bearer ${idToken}` },
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || "Failed to load users.");
  return data;
}

export async function getAdminGumroadUsers(idToken) {
  const response = await fetch("/api/admin/gumroad-users", {
    headers: { Authorization: `Bearer ${idToken}` },
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || "Failed to load Gumroad users.");
  return data;
}

export async function syncGumroadAdminUsers(idToken) {
  const response = await fetch("/api/admin/sync-gumroad", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${idToken}`,
      "Content-Type": "application/json",
    },
    body: "{}",
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || "Failed to sync with Gumroad.");
  return data;
}

export async function updateAdminUserStatus(idToken, uid, status) {
  const response = await fetch(`/api/admin/users/${uid}/status`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${idToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status }),
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || "Failed to update user status.");
  return data;
}
