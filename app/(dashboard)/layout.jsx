"use client";

import dynamic from "next/dynamic";

const DashboardLayoutClient = dynamic(
  () => import("@/components/dashboard/DashboardLayoutClient"),
  { ssr: false }
);

export default function DashboardLayout({ children }) {
  return <DashboardLayoutClient>{children}</DashboardLayoutClient>;
}
