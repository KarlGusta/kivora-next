import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MarketingNavbar from "@/components/marketing/MarketingNavbar";
import MarketingFooter from "@/components/marketing/MarketingFooter";
import { purchaseUrl } from "@/data/commercialPages";

const kitchenImageUrl =
  "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?fm=jpg&ixlib=rb-4.1.0&q=80&w=1600&auto=format&fit=crop";

export const metadata = {
  title: "Page not found",
  description: "Looks like we remodeled the wrong room. Head back home or visualize your kitchen with Kivora.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-kivora-cream text-kivora-ink">
      <MarketingNavbar />

      <main className="px-5 pb-28 pt-32 md:px-8 md:pb-32 md:pt-40">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center">
          <div>
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
              404
            </p>

            <h1 className="max-w-xl text-4xl font-semibold leading-[1.08] md:text-5xl lg:text-6xl">
              Looks like we remodeled the wrong room.
            </h1>

            <p className="mt-7 max-w-lg text-lg leading-8 text-kivora-ink/70">
              The page you're looking for can't be found. It may have moved, been renamed, or never existed in this house.
            </p>

            <p className="mt-5 max-w-lg text-lg leading-8 text-kivora-ink/70">
              That doesn't mean the rest of the project is off track. Let's get you back to the kitchen — where one photo can show what a remodel could look like before you spend a dollar on cabinets, counters, or contractors.
            </p>

            <p className="mt-5 max-w-lg leading-7 text-kivora-ink/60">
              See your kitchen transformed before making the real-world decision. No guesswork. No expensive surprises on the other side of a renovation.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/"
                className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/15 px-6 py-3 text-base font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-white"
              >
                Go Home
              </Link>
              <a
                href={purchaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-kivora-yellow px-6 py-3 text-base font-semibold text-kivora-ink transition-colors hover:bg-kivora-purple"
              >
                Visualize My Kitchen
                <ArrowRight size={18} />
              </a>
            </div>

            <p className="mt-8 text-sm font-medium text-kivora-ink/45">
              Kivora — See the remodel before it becomes a regret.
            </p>
          </div>

          <figure className="border-t border-kivora-ink/10 pt-4">
            <div className="relative aspect-[4/3] overflow-hidden bg-kivora-ink/5 md:aspect-[5/4]">
              <Image
                src={kitchenImageUrl}
                alt="A bright, modern kitchen with clean cabinetry and natural light — the kind of room worth finding."
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-4 border-b border-kivora-ink/10 pb-4 text-xs text-kivora-ink/50">
              The room we meant to show you.
            </figcaption>
          </figure>
        </div>
      </main>

      <MarketingFooter />
    </div>
  );
}
