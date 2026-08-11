"use client";

import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Link as LinkIcon,
  Linkedin,
  Twitter,
} from "lucide-react";
import MarketingNavbar from "@/components/marketing/MarketingNavbar";
import MarketingFooter from "@/components/marketing/MarketingFooter";
import { getAdjacentPosts, getRelatedPosts } from "@/data/blogPosts";
import { author } from "@/data/author";

export default function BlogPostPageClient({ post }) {
  const { previousPost, nextPost } = getAdjacentPosts(post.slug);
  const relatedPosts = getRelatedPosts(post);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  const handleShareX = () => {
    const introductoryMessage = "Just read this:";
    const fullShareText = `${introductoryMessage} ${post.title} by @${author.twitter}`;
    const text = encodeURIComponent(fullShareText);
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank");
  };

  const publishedLabel = new Date(post.date).toLocaleDateString(undefined, {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-kivora-cream text-kivora-ink">
      <MarketingNavbar />
      <div className="pb-28 pt-32">
        <nav className="mx-auto mb-16 flex max-w-3xl items-center gap-2 px-5 text-xs font-medium uppercase tracking-[0.22em] text-kivora-ink/45 md:px-8">
          <Link href="/" className="hover:text-kivora-purple">
            Home
          </Link>
          <ChevronRight size={14} />
          <Link href="/blog" className="hover:text-kivora-purple">
            Blog
          </Link>
          <ChevronRight size={14} />
          <span className="truncate text-kivora-ink">{post.category}</span>
        </nav>

        <article className="mx-auto max-w-4xl px-5 md:px-8" itemScope itemType="https://schema.org/Article">
          <header className="mb-16">
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
              {post.category}
            </p>
            <h1
              className="mb-10 max-w-4xl text-4xl font-semibold leading-[1.04] md:text-6xl"
              itemProp="headline"
            >
              {post.title}
            </h1>

            <div className="flex flex-col gap-6 border-t border-kivora-ink/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <Image
                  src={author.image}
                  alt={author.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover ring-1 ring-kivora-ink/10"
                />
                <div>
                  <p className="text-sm font-semibold text-kivora-ink" itemProp="author" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">{author.name}</span>
                  </p>
                  <p className="mt-0.5 text-sm text-kivora-ink/55">{author.role}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-kivora-ink/55">
                <time dateTime={post.date} itemProp="datePublished">
                  {publishedLabel}
                </time>
                <span>5 min read</span>
              </div>
            </div>
          </header>

          <div className="mb-16">
            <div
              className="prose prose-lg md:prose-xl mx-auto max-w-3xl
              prose-headings:font-semibold prose-headings:tracking-normal
              prose-h2:mt-16 prose-h2:text-3xl prose-h2:text-kivora-ink
              prose-p:text-kivora-ink/80 prose-p:leading-relaxed
              prose-a:text-kivora-purple prose-a:no-underline hover:prose-a:underline
              prose-strong:text-kivora-ink
              prose-code:bg-kivora-yellow/20 prose-code:px-1 prose-code:py-0.5
              prose-hr:border-kivora-ink/10
              prose-img:my-12 prose-img:rounded-[1.75rem] prose-img:border prose-img:border-kivora-ink/10"
              itemProp="articleBody"
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
            </div>
          </div>

          {/* E-E-A-T author card */}
          <aside
            className="mx-auto mb-16 max-w-3xl border border-kivora-ink/10 bg-white p-6 md:p-8"
            aria-label="About the author"
          >
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-kivora-purple">
              Written by
            </p>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <Image
                src={author.image}
                alt={author.name}
                width={72}
                height={72}
                className="h-[72px] w-[72px] shrink-0 rounded-full object-cover ring-1 ring-kivora-ink/10"
              />
              <div className="min-w-0 flex-1">
                <h2 className="text-xl font-semibold text-kivora-ink">{author.name}</h2>
                <p className="mt-1 text-sm font-medium text-kivora-ink/55">{author.role}</p>
                <p className="mt-4 text-sm leading-7 text-kivora-ink/70">{author.bio}</p>
                <p className="mt-3 text-sm leading-7 text-kivora-ink/60">{author.experience}</p>
                <div className="mt-5 flex flex-wrap items-center gap-4">
                  <a
                    href={author.twitterUrl}
                    target="_blank"
                    rel="noopener noreferrer me"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-kivora-ink/70 transition-colors hover:text-kivora-purple"
                  >
                    <Twitter size={16} />
                    @{author.twitter}
                  </a>
                  <a
                    href={author.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer me"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-kivora-ink/70 transition-colors hover:text-kivora-purple"
                  >
                    <Linkedin size={16} />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </aside>

          <section className="mx-auto mb-20 max-w-3xl border border-kivora-ink/10 bg-white p-6 md:p-8">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-kivora-purple">
              Free tool
            </p>
            <h2 className="text-2xl font-semibold leading-tight md:text-3xl">
              Estimate the remodel before you visualize it.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-kivora-ink/70">
              Use the kitchen remodel cost calculator as the next planning step, then move into
              photo-based visualization when the budget range is clearer.
            </p>
            <Link
              href="/tools/kitchen-remodel-cost-calculator"
              className="mt-7 inline-flex min-h-11 items-center justify-center gap-2 bg-kivora-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-kivora-purple hover:text-kivora-ink"
            >
              Open free tool
              <ArrowRight size={16} />
            </Link>
          </section>

          <div className="mx-auto flex max-w-3xl flex-col items-start justify-between gap-8 border-t border-kivora-ink/10 py-10 md:flex-row md:items-center">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium uppercase tracking-[0.22em] text-kivora-ink/45">
                Share this
              </span>
              <button
                type="button"
                onClick={handleShareX}
                className="text-kivora-ink/65 transition-colors hover:text-kivora-purple"
                aria-label="Share on X"
              >
                <Twitter size={20} />
              </button>
              <button
                type="button"
                onClick={handleCopyLink}
                className="text-kivora-ink/65 transition-colors hover:text-kivora-purple"
                aria-label="Copy article link"
              >
                <LinkIcon size={20} />
              </button>
            </div>

            <Link
              href="/blog"
              className="flex items-center gap-2 font-semibold text-kivora-ink transition-colors hover:text-kivora-purple"
            >
              <ArrowLeft size={20} /> Back to all insights
            </Link>
          </div>

          <nav
            className="mx-auto grid max-w-3xl gap-4 border-t border-kivora-ink/10 pt-10 md:grid-cols-2"
            aria-label="Article navigation"
          >
            {previousPost ? (
              <Link
                href={`/blog/${previousPost.slug}`}
                className="group flex min-h-36 flex-col justify-between border border-kivora-ink/10 bg-white/50 p-5 transition-colors hover:border-kivora-purple hover:bg-white"
              >
                <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-kivora-ink/45 group-hover:text-kivora-purple">
                  <ArrowLeft size={16} /> Previous
                </span>
                <span className="mt-6 text-lg font-semibold leading-snug text-kivora-ink">
                  {previousPost.title}
                </span>
              </Link>
            ) : (
              <div className="flex min-h-36 flex-col justify-between border border-dashed border-kivora-ink/10 p-5 text-kivora-ink/35">
                <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em]">
                  <ArrowLeft size={16} /> Previous
                </span>
                <span className="mt-6 text-lg font-semibold leading-snug">
                  You're at the newest article
                </span>
              </div>
            )}

            {nextPost ? (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="group flex min-h-36 flex-col justify-between border border-kivora-ink/10 bg-white/50 p-5 text-left transition-colors hover:border-kivora-purple hover:bg-white md:text-right"
              >
                <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-kivora-ink/45 group-hover:text-kivora-purple md:justify-end">
                  Next <ArrowRight size={16} />
                </span>
                <span className="mt-6 text-lg font-semibold leading-snug text-kivora-ink">
                  {nextPost.title}
                </span>
              </Link>
            ) : (
              <div className="flex min-h-36 flex-col justify-between border border-dashed border-kivora-ink/10 p-5 text-left text-kivora-ink/35 md:text-right">
                <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] md:justify-end">
                  Next <ArrowRight size={16} />
                </span>
                <span className="mt-6 text-lg font-semibold leading-snug">
                  You're at the last article
                </span>
              </div>
            )}
          </nav>
        </article>

        <section className="mx-auto mt-28 max-w-4xl px-5 md:px-8">
          <div className="mb-12 flex items-end justify-between border-t border-kivora-ink/10 pt-16">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-kivora-purple">
                More from Kivora
              </p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Related Articles</h2>
            </div>
            <Link
              href="/blog"
              className="hidden items-center gap-2 font-semibold text-kivora-ink transition-colors hover:text-kivora-purple md:inline-flex"
            >
              View all <ArrowRight size={18} />
            </Link>
          </div>

          <div className="divide-y divide-kivora-ink/10 border-y border-kivora-ink/10">
            {relatedPosts.map((related) => (
              <article
                key={related.slug}
                className="grid gap-6 py-8 md:grid-cols-[0.75fr_1.25fr_auto] md:items-start"
              >
                <div>
                  <span className="text-xs font-medium uppercase tracking-[0.22em] text-kivora-purple">
                    {related.category}
                  </span>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold leading-tight md:text-2xl">
                    {related.title}
                  </h3>
                  <p className="max-w-xl text-sm leading-6 text-kivora-ink/65">
                    {related.description}
                  </p>
                </div>
                <Link
                  href={`/blog/${related.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-kivora-purple"
                >
                  Read <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>

          {relatedPosts.length === 0 && (
            <div className="border border-dashed border-kivora-ink/15 bg-white p-10 text-center">
              <p className="text-lg font-medium text-kivora-ink/50">
                More Kivora guides are on the way.
              </p>
            </div>
          )}
        </section>
      </div>
      <MarketingFooter />
    </div>
  );
}
