"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import DotMatrixBackground from "@/components/DotMatrixBackground";
import { purchaseUrl } from "@/data/commercialPages";

const productLinks = [
  { href: "/pricing", label: "Pricing" },
  { href: "/kitchen-styles", label: "Kitchen Styles" },
  { href: "/kitchen-remodel-visualizer", label: "Visualizer" },
  { href: "/ai-kitchen-designer", label: "AI Designer" },
  { href: "/before-after-gallery", label: "Gallery" },
];

const resourceLinks = [
  { href: "/tools", label: "Free Tools" },
  { href: "/alternatives", label: "Alternatives" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/compare", label: "Comparisons" },
  { href: "/blog", label: "Blog" },
];

const companyLinks = [
  {
    href: "mailto:esimitkarlgusta@gmail.com",
    label: "Contact",
    external: true,
  },
  {
    href: "https://sassypack.collabtower.com/",
    label: "More from us",
    external: true,
  },
  { href: "/login", label: "Login" },
];

const legalLinks = [
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
];

function IconX({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function IconLinkedIn({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconGitHub({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function IconMail({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

const socialLinks = [
  {
    href: "https://twitter.com/esimitkarlgusta",
    label: "X (Twitter)",
    icon: IconX,
  },
  {
    href: "https://www.linkedin.com",
    label: "LinkedIn",
    icon: IconLinkedIn,
  },
  {
    href: "https://github.com/KarlGusta",
    label: "GitHub",
    icon: IconGitHub,
  },
  {
    href: "mailto:esimitkarlgusta@gmail.com",
    label: "Email",
    icon: IconMail,
  },
];

function FooterLink({ href, label, external }) {
  const className =
    "text-sm text-white transition-colors duration-200 hover:text-white/80";

  if (external) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

function LinkColumn({ title, links }) {
  return (
    <div>
      <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.14em] text-white">
        {title}
      </p>
      <ul className="space-y-3">
        {links.map(({ href, label, external }) => (
          <li key={label}>
            <FooterLink href={href} label={label} external={external} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function MarketingFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden border-t border-white/[0.06] bg-[#0b0b0f] text-white">
      <DotMatrixBackground />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-20">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Left — brand */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 transition-opacity hover:opacity-90"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#c994ff] via-[#ff94e7] to-[#45ad94] text-sm font-black text-[#0b0b0f] shadow-[0_0_24px_-4px_rgba(201,148,255,0.5)]">
                K
              </span>
              <span className="text-lg font-semibold tracking-tight text-white">
                Kivora
              </span>
            </Link>
            <p className="mt-4 max-w-[280px] text-sm leading-relaxed text-white/45">
              AI kitchen design from a single photo. Visualize remodels before
              you commit.
            </p>
            <p className="mt-8 text-xs text-white/30">
              © {year} Kivora. All rights reserved.
            </p>
          </div>

          {/* Center — link columns */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:col-span-5">
            <LinkColumn title="Product" links={productLinks} />
            <LinkColumn title="Resources" links={resourceLinks} />
            <LinkColumn title="Company" links={companyLinks} />
            <LinkColumn title="Legal" links={legalLinks} />
          </div>

          {/* Right — social + CTA */}
          <div className="lg:col-span-3">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.14em] text-white/35">
              Stay in the loop
            </p>
            <p className="mb-5 text-sm leading-relaxed text-white/45">
              New styles and kitchen ideas — no noise.
            </p>

            <a
              href={purchaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#0b0b0f] transition-all duration-200 hover:bg-white/90 hover:shadow-[0_0_32px_-8px_rgba(201,148,255,0.45)]"
            >
              Visualize my kitchen
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>

            <div className="mt-8 flex items-center gap-2">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-200 hover:border-white/20 hover:bg-white/5 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-white/25">
            Design kitchens that feel like home.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/25">
            <Link href="/terms" className="transition-colors hover:text-white/50">
              Terms
            </Link>
            <Link
              href="/privacy"
              className="transition-colors hover:text-white/50"
            >
              Privacy
            </Link>
            <a
              href="mailto:esimitkarlgusta@gmail.com"
              className="transition-colors hover:text-white/50"
            >
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
