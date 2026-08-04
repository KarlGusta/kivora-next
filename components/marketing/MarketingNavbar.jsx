"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { purchaseUrl } from "@/data/commercialPages";

export default function MarketingNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-kivora-ink/10 bg-kivora-cream/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="text-lg font-semibold tracking-normal text-kivora-ink" onClick={closeMenu}>
          Kivora
        </Link>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/login"
            className="text-sm font-semibold text-kivora-ink/70 transition-colors hover:text-kivora-ink"
          >
            Login
          </Link>
          <a
            href={purchaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-kivora-ink bg-kivora-yellow px-4 py-2 text-sm font-semibold text-kivora-ink transition-colors hover:bg-kivora-purple"
          >
            Visualize My Kitchen
            <ArrowRight size={16} />
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center border border-kivora-ink/10 text-kivora-ink md:hidden"
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-kivora-ink/10 bg-kivora-cream px-5 py-5 md:hidden">
          <nav className="flex flex-col gap-4">
            <Link
              href="/login"
              className="text-sm font-semibold text-kivora-ink/70 transition-colors hover:text-kivora-ink"
              onClick={closeMenu}
            >
              Login
            </Link>
            <a
              href={purchaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 border border-kivora-ink bg-kivora-yellow px-4 py-3 text-sm font-semibold text-kivora-ink"
              onClick={closeMenu}
            >
              Visualize My Kitchen
              <ArrowRight size={16} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
