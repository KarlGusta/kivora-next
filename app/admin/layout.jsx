"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Loader2, Users, ShoppingBag } from "lucide-react";
import { useFirebaseAuth } from "@/hooks/useFirebaseAuth";
import { ADMIN_EMAIL } from "@/lib/adminConstants";

const adminLinks = [
  { href: "/admin/users", label: "Users", icon: Users },
  { href: "/admin/gumroad-users", label: "Gumroad Users", icon: ShoppingBag },
];

export default function AdminLayout({ children }) {
  const { user, isAuthLoading } = useFirebaseAuth();
  const pathname = usePathname();
  const router = useRouter();
  const isAdmin =
    Boolean(user?.email) &&
    user.email.toLowerCase().trim() === ADMIN_EMAIL;

  useEffect(() => {
    if (isAuthLoading) return;
    if (!user) {
      router.replace("/login");
      return;
    }
    if (!isAdmin) {
      router.replace("/create");
    }
  }, [isAuthLoading, user, isAdmin, router]);

  if (isAuthLoading || !user || !isAdmin) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-kivora-surface px-5 text-kivora-ink">
        <div className="flex items-center gap-3 text-sm font-semibold">
          <Loader2 className="h-5 w-5 animate-spin" />
          Loading admin
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-kivora-surface text-kivora-ink">
      <header className="border-b border-kivora-ink/10 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4 md:px-8">
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/create" className="text-lg font-semibold">
              Kivora
            </Link>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-kivora-ink/45">
              Admin
            </p>
            <nav className="flex flex-wrap gap-4">
              {adminLinks.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`inline-flex items-center gap-2 border-b pb-1 text-sm font-semibold transition-colors ${
                      isActive
                        ? "border-kivora-ink text-kivora-ink"
                        : "border-transparent text-kivora-ink/55 hover:border-kivora-ink/25 hover:text-kivora-ink"
                    }`}
                  >
                    <Icon size={16} />
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
          <Link
            href="/create"
            className="text-sm font-semibold text-kivora-ink/55 transition-colors hover:text-kivora-ink"
          >
            ← Back to app
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-5 py-8 md:px-8">{children}</main>
    </div>
  );
}
