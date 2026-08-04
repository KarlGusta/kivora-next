"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  ChevronLeft,
  ChevronRight,
  History,
  ImagePlus,
  Images,
  Loader2,
  LogOut,
  Settings,
} from "lucide-react";
import { useFirebaseAuth } from "@/hooks/useFirebaseAuth";
import { AppShellContext } from "@/lib/appShellContext";

const sidebarItems = [
  { href: "/create", label: "Create", icon: ImagePlus },
  { href: "/results", label: "Results", icon: Images },
  { href: "/history", label: "History", icon: History },
  { href: "/settings", label: "Settings", icon: Settings },
];

const footerLinks = [
  { label: "Request a feature", href: "mailto:support@kivora.com?subject=Feature%20request" },
  { label: "Contact support", href: "mailto:support@kivora.com?subject=Support%20request" },
  { label: "Share feedback", href: "mailto:support@kivora.com?subject=Kivora%20feedback" },
];

export default function DashboardLayout({ children }) {
  const { user, isAuthLoading, logout } = useFirebaseAuth();
  const pathname = usePathname();
  const router = useRouter();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    if (!isAuthLoading && !user) {
      router.replace("/login");
    }
  }, [isAuthLoading, user, router]);

  if (isAuthLoading || !user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-kivora-cream px-5 text-kivora-ink">
        <div className="flex items-center gap-3 text-sm font-semibold">
          <Loader2 className="h-5 w-5 animate-spin" />
          Preparing Kivora
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-kivora-surface text-kivora-ink lg:flex">
      <aside
        className={`border-b border-kivora-ink/10 bg-kivora-surface transition-[width] duration-300 lg:sticky lg:top-0 lg:flex lg:h-screen lg:shrink-0 lg:flex-col lg:border-b-0 lg:border-r ${
          isSidebarCollapsed ? "lg:w-20" : "lg:w-64"
        }`}
      >
        <div
          className={`flex h-16 items-center justify-between px-5 lg:h-auto lg:py-8 ${
            isSidebarCollapsed ? "lg:flex-col lg:gap-5 lg:px-0" : "lg:px-6"
          }`}
        >
          <Link
            href="/"
            className={`text-xl font-semibold transition-colors hover:text-kivora-ink/60 ${
              isSidebarCollapsed ? "lg:text-lg" : ""
            }`}
          >
            <span className={isSidebarCollapsed ? "lg:hidden" : ""}>Kivora</span>
            {isSidebarCollapsed && <span className="hidden lg:inline">K</span>}
          </Link>
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="hidden h-8 w-8 items-center justify-center border border-kivora-ink/10 text-kivora-ink/60 transition-colors hover:border-kivora-ink/35 hover:text-kivora-ink lg:inline-flex"
              onClick={() => setIsSidebarCollapsed((current) => !current)}
              aria-label={isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
              title={isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {isSidebarCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
            </button>
          </div>
        </div>

        <nav
          className={`flex gap-5 overflow-x-auto border-t border-kivora-ink/10 px-5 pb-4 pt-4 lg:flex-1 lg:flex-col lg:gap-2 lg:overflow-visible lg:border-t lg:pb-0 lg:pt-8 ${
            isSidebarCollapsed ? "lg:px-0" : "lg:px-6"
          }`}
        >
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                title={item.label}
                aria-label={item.label}
                className={`inline-flex min-h-10 shrink-0 items-center gap-3 border-b pb-1 text-sm font-semibold transition-colors lg:w-full ${
                  isActive
                    ? "border-kivora-ink text-kivora-ink"
                    : "border-transparent text-kivora-ink/55 hover:border-kivora-ink/25 hover:text-kivora-ink"
                } ${isSidebarCollapsed ? "lg:justify-center lg:gap-0" : ""}`}
              >
                <Icon size={17} />
                <span className={isSidebarCollapsed ? "lg:hidden" : ""}>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="border-b border-kivora-ink/10">
          <div className="flex min-h-16 items-center justify-end gap-4 px-5 py-4 md:px-8">
            <div className="flex min-w-0 items-center gap-4">
              <span className="hidden truncate text-sm font-medium text-kivora-ink/55 sm:inline">
                {user.email}
              </span>
              <button
                type="button"
                className="inline-flex shrink-0 items-center justify-center gap-2 border-b border-kivora-ink pb-1 text-sm font-semibold transition-colors hover:text-kivora-ink/60"
                onClick={logout}
                aria-label="Sign out"
              >
                <LogOut size={17} />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </header>

        <main className="mx-auto w-full max-w-7xl flex-1 px-5 py-8 md:px-8">
          <AppShellContext.Provider value={{ user, logout }}>{children}</AppShellContext.Provider>
        </main>

        <footer className="border-t border-kivora-ink/10 px-5 py-8 md:px-8">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 text-sm text-kivora-ink/50 md:flex-row md:items-center md:justify-between">
            <p>© {currentYear} Kivora</p>
            <nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="App footer">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="border-b border-transparent pb-1 font-medium transition-colors hover:border-kivora-ink/25 hover:text-kivora-ink"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </footer>
      </div>
    </div>
  );
}
