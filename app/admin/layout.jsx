"use client";

import dynamic from "next/dynamic";

const AdminLayoutClient = dynamic(
  () => import("@/components/admin/AdminLayoutClient"),
  { ssr: false }
);

export default function AdminLayout({ children }) {
  return <AdminLayoutClient>{children}</AdminLayoutClient>;
}
