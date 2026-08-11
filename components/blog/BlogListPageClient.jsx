"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import MarketingNavbar from "@/components/marketing/MarketingNavbar";
import MarketingFooter from "@/components/marketing/MarketingFooter";
import { getSortedBlogPosts } from "@/data/blogPosts";
import { author } from "@/data/author";

const sortedPosts = getSortedBlogPosts();

export default function BlogListPageClient() {
  const categories = ["All", ...new Set(sortedPosts.map((p) => p.category))];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? sortedPosts
      : sortedPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-kivora-cream text-kivora-ink">
      <MarketingNavbar />
      <div className="pb-28 pt-32">
        <header className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
            Journal
          </p>
          <div className="grid gap-10 border-b border-kivora-ink/10 pb-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">
              Kivora Insights
            </h1>
            <div>
              <p className="max-w-2xl text-lg leading-8 text-kivora-ink/70 md:text-xl">
                Design smarter kitchens with AI: remodeling guides, visualization tips, and product
                notes from Kivora.
              </p>
              <p className="mt-4 text-sm font-medium text-kivora-ink/50">
                Written by {author.name}, {author.role}
              </p>
            </div>
          </div>
        </header>

        <div className="mx-auto grid max-w-7xl gap-16 px-5 py-16 md:px-8 lg:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
              Categories
            </p>
            <nav className="flex flex-wrap gap-x-5 gap-y-3 lg:flex-col">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-fit border-b pb-1 text-left text-sm font-medium transition-colors ${
                    selectedCategory === cat
                      ? "border-kivora-purple text-kivora-ink"
                      : "border-transparent text-kivora-ink/50 hover:border-kivora-ink/25 hover:text-kivora-ink"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </nav>
            <div className="mt-14 hidden border-t border-kivora-ink/10 pt-8 lg:block">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
                Notes
              </p>
              <p className="mt-4 max-w-xs text-sm leading-6 text-kivora-ink/60">
                Practical articles for planning, comparing, and previewing kitchen remodel choices.
              </p>
            </div>
          </aside>

          <main className="flex-1">
            <div className="mb-8 flex items-center justify-between border-b border-kivora-ink/10 pb-5">
              <div className="text-sm font-medium uppercase tracking-[0.22em] text-kivora-ink/45">
                Showing {filteredPosts.length} Articles
              </div>
            </div>

            <div className="divide-y divide-kivora-ink/10 border-b border-kivora-ink/10">
              {filteredPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group grid gap-8 py-10 md:grid-cols-[180px_minmax(0,1fr)_auto] md:items-start"
                >
                  <div className="space-y-3 text-sm font-medium text-kivora-ink/50">
                    <p className="text-xs uppercase tracking-[0.22em] text-kivora-purple">
                      {post.category}
                    </p>
                    <p>
                      {new Date(post.date).toLocaleDateString(undefined, {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                    <p className="text-kivora-ink/40">{author.name}</p>
                  </div>

                  <div>
                    <h3 className="mb-4 text-2xl font-semibold leading-tight transition-colors group-hover:text-kivora-purple md:text-3xl">
                      {post.title}
                    </h3>
                    <p className="max-w-2xl leading-7 text-kivora-ink/65">{post.description}</p>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-kivora-purple"
                  >
                    Read <ArrowRight size={16} />
                  </Link>
                </article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="border border-dashed border-kivora-ink/15 bg-white py-24 text-center">
                <Search size={40} className="mx-auto mb-4 text-kivora-ink/20" />
                <p className="text-xl font-medium text-kivora-ink/45">
                  No articles found in this category.
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
      <MarketingFooter />
    </div>
  );
}
