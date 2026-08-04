import Link from "next/link";
import { coreMoneyPages } from "@/data/commercialPages";

const parentPageLinks = [
  { name: "Free tools", href: "/tools" },
  { name: "Alternatives", href: "/alternatives" },
  { name: "Use cases", href: "/use-cases" },
  { name: "Comparisons", href: "/compare" },
];

export default function MarketingFooter() {
  const footerLinks = coreMoneyPages.map((page) => ({
    name: page.title,
    href: page.path,
  }));

  return (
    <footer className="border-t border-kivora-ink/10 px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-kivora-ink/50">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <p className="font-medium text-kivora-ink">Kivora</p>
          <p>© {new Date().getFullYear()} Kivora.</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {footerLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-kivora-ink">
              {link.name}
            </Link>
          ))}
          {parentPageLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-kivora-ink">
              {link.name}
            </Link>
          ))}
          <Link href="/blog" className="hover:text-kivora-ink">
            Blog
          </Link>
        </div>
      </div>
    </footer>
  );
}
