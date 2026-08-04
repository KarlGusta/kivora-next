import Image from "next/image";
import { ArrowRight, Camera, CheckCircle2, Download, Palette, Zap } from "lucide-react";
import { businessPurchaseUrl, proPurchaseUrl, purchaseUrl } from "@/data/commercialPages";
import MarketingNavbar from "@/components/marketing/MarketingNavbar";
import MarketingFooter from "@/components/marketing/MarketingFooter";
import FaqAccordion from "@/components/landing/FaqAccordion";

const heroImageUrl =
  "https://images.unsplash.com/photo-1708426045546-8911cfea6162?fm=jpg&ixlib=rb-4.1.0&q=80&w=1800&auto=format&fit=crop";

const proofPoints = [
  "Built for homeowners, designers, and remodel teams",
  "One photo creates multiple remodel directions",
  "High-resolution downloads included",
];

const features = [
  {
    title: "1 Photo, Multiple Directions",
    desc: "Turn your current kitchen into several polished remodel concepts without starting from a blank page.",
    icon: Camera,
  },
  {
    title: "See Styles Before You Spend",
    desc: "Preview modern, rustic, luxury, minimalist, and seasonal looks before buying materials or calling contractors.",
    icon: Palette,
  },
  {
    title: "Share Decisions Faster",
    desc: "Download realistic visuals you can send to family, clients, or builders so everyone reacts to the same idea.",
    icon: Download,
  },
];

const steps = [
  { name: "Upload", desc: "Start with a current photo of your kitchen.", icon: Camera },
  { name: "Style", desc: "Choose the direction you want to explore.", icon: Palette },
  { name: "Generate", desc: "Receive polished remodel concepts in seconds.", icon: Zap },
];

const plans = [
  {
    name: "Pro",
    price: "$59/mo",
    desc: "Unlimited generations, priority processing, and more style depth.",
    href: proPurchaseUrl,
  },
  {
    name: "Business",
    price: "$149/mo",
    desc: "Team accounts, shared projects, and dedicated support.",
    href: businessPurchaseUrl,
  },
];

const faqItems = [
  {
    question: "How realistic are the AI-generated designs?",
    answer:
      "Extremely realistic. Each design is generated in high-quality 3D visuals, reflecting your selected style accurately.",
  },
  {
    question: "Do I need design experience?",
    answer: "No. Kivora is built for anyone, from homeowners to professional interior designers.",
  },
  {
    question: "Can I download or share my designs?",
    answer: "Yes. You can download high-resolution images or share them with your builder, friends, or social media.",
  },
  {
    question: "What styles can I choose?",
    answer: "Modern, rustic, luxury, minimalist, and more. We regularly add new styles for inspiration.",
  },
  {
    question: "Is this a free tool?",
    answer: "No. Kivora is premium-only to ensure every user gets the highest quality output.",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-kivora-cream text-kivora-ink">
      <MarketingNavbar />

      <main>
        <section id="top" className="px-5 pb-28 pt-32 md:px-8 md:pb-32 md:pt-40">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,0.75fr)] lg:items-end">
            <div>
              <p className="mb-8 max-w-sm text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
                See the remodel before it becomes a regret
              </p>

              <h1 className="max-w-5xl text-5xl font-semibold leading-[1.02] text-kivora-ink md:text-7xl">
                Stop guessing what your kitchen remodel will look like.
              </h1>

              <p className="mt-9 max-w-2xl text-lg leading-8 text-kivora-ink/70 md:text-xl">
                Upload one photo of your kitchen and generate realistic remodel concepts in seconds. Compare styles, spot what feels right, and make expensive decisions with a lot less doubt.
              </p>

              <div className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href={purchaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 bg-kivora-yellow px-6 py-3 text-base font-semibold text-kivora-ink transition-colors hover:bg-kivora-purple"
                >
                  Visualize My Kitchen
                  <ArrowRight size={18} />
                </a>
                <a
                  href={purchaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center border border-kivora-ink/15 px-6 py-3 text-base font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-white"
                >
                  Explore Styles
                </a>
              </div>

              <p className="mt-5 text-sm font-medium text-kivora-ink/50">
                Premium previews. Download-ready results.
              </p>
            </div>

            <figure className="border-t border-kivora-ink/10 pt-4 lg:pb-1">
              <div className="relative aspect-[4/5] overflow-hidden md:aspect-[5/6]">
                <Image
                  src={heroImageUrl}
                  alt="A bright minimalist kitchen with a large island, light stools, and white cabinetry."
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-4 flex items-center justify-between gap-4 border-b border-kivora-ink/10 pb-4 text-xs text-kivora-ink/50">
                <span>Reference visual for preview quality</span>
                <a
                  href="https://unsplash.com/photos/6s2cHhuy6lY"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-kivora-ink"
                >
                  Photo: Michael Alake
                </a>
              </figcaption>
            </figure>
          </div>

          <div className="mx-auto mt-24 grid max-w-7xl gap-5 border-y border-kivora-ink/10 py-7 md:grid-cols-3">
            {proofPoints.map((point) => (
              <div key={point} className="flex items-center gap-3 text-sm font-medium text-kivora-ink/80">
                <CheckCircle2 size={17} className="text-kivora-teal" />
                {point}
              </div>
            ))}
          </div>
        </section>

        <section id="why" className="scroll-mt-24 px-5 py-28 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 border-t border-kivora-ink/10 pt-12 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
                  Why Kivora
                </p>
                <h2 className="max-w-md text-4xl font-semibold leading-tight md:text-5xl">
                  See the decision before you make it.
                </h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-kivora-ink/70">
                Renovation ideas are easy to collect and hard to trust. Kivora keeps the process quiet and concrete by showing how each style could look in your actual room.
              </p>
            </div>

            <div className="mt-20 grid border-t border-kivora-ink/10 md:grid-cols-2">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="border-b border-kivora-ink/10 py-10 md:odd:border-r md:odd:pr-10 md:even:pl-10"
                >
                  <feature.icon className="mb-8 h-6 w-6 text-kivora-teal" />
                  <h3 className="text-2xl font-semibold text-kivora-ink">{feature.title}</h3>
                  <p className="mt-4 max-w-md leading-7 text-kivora-ink/70">{feature.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="inside" className="scroll-mt-24 bg-white px-5 py-28 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
                How it works
              </p>
              <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                From photo to direction in three focused steps.
              </h2>
            </div>

            <div className="mt-20 grid gap-8 md:grid-cols-3">
              {steps.map((step, index) => (
                <article key={step.name} className="border-t border-kivora-ink/15 pt-8">
                  <div className="mb-12 flex items-center justify-between">
                    <step.icon className="h-6 w-6 text-kivora-purple" />
                    <span className="text-sm font-medium text-kivora-pink">0{index + 1}</span>
                  </div>
                  <h3 className="text-2xl font-semibold">{step.name}</h3>
                  <p className="mt-4 leading-7 text-kivora-ink/70">{step.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="scroll-mt-24 px-5 py-28 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 border-t border-kivora-ink/10 pt-12 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
                  Pricing
                </p>
                <h2 className="max-w-md text-4xl font-semibold leading-tight md:text-5xl">
                  Simple paid plans.
                </h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-kivora-ink/70">
                No free tier, usage maze, or hidden mode switch. Every plan includes the complete AI kitchen design experience.
              </p>
            </div>

            <div className="mt-20 grid border-t border-kivora-ink/10 lg:grid-cols-2">
              {plans.map((plan) => (
                <article
                  key={plan.name}
                  className="flex min-h-[320px] flex-col border-b border-kivora-ink/10 py-10 lg:border-r lg:px-10 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">{plan.name}</h3>
                    <p className="mt-7 text-4xl font-semibold">{plan.price}</p>
                    <p className="mt-5 max-w-sm leading-7 text-kivora-ink/70">{plan.desc}</p>
                  </div>
                  <a
                    href={plan.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-10 inline-flex min-h-11 items-center justify-center gap-2 border border-kivora-ink px-5 py-3 text-sm font-semibold transition-colors hover:bg-kivora-ink hover:text-kivora-cream"
                  >
                    Visualize My Kitchen
                    <ArrowRight size={16} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="scroll-mt-24 bg-white px-5 py-28 md:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">FAQ</p>
              <h2 className="max-w-sm text-4xl font-semibold leading-tight md:text-5xl">
                A few clear answers.
              </h2>
            </div>

            <FaqAccordion items={faqItems} />
          </div>
        </section>

        <section className="px-5 py-28 md:px-8">
          <div className="mx-auto max-w-7xl border-y border-kivora-ink/10 py-20 text-center">
            <h2 className="mx-auto max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
              Stop guessing. Start seeing your kitchen clearly.
            </h2>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-kivora-ink/70">
              Upload a photo today and turn renovation ideas into realistic AI-generated designs.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={purchaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-kivora-yellow px-6 py-3 text-base font-semibold text-kivora-ink transition-colors hover:bg-kivora-purple"
              >
                Visualize My Kitchen
                <ArrowRight size={18} />
              </a>
              <a
                href={purchaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-kivora-ink/20 px-6 py-3 text-base font-semibold text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-white"
              >
                See Pricing
              </a>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}
