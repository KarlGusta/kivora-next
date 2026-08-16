import { blogPosts } from "@/data/blogPosts";
import { tools } from "@/data/toolsData";

const SITE_URL = "https://kivora.collabtower.com";

/** Revalidate sitemap hourly so new blog posts / tools appear automatically. */
export const revalidate = 3600;

function entry(path, lastModified, changeFrequency = "weekly", priority = 0.7) {
  const normalized = path === "/" ? "/" : path.replace(/\/+$/, "");
  return {
    url: `${SITE_URL}${normalized === "/" ? "" : normalized}`,
    lastModified: lastModified ? new Date(lastModified) : new Date(),
    changeFrequency,
    priority,
  };
}

function dedupe(entries) {
  const seen = new Set();
  return entries.filter((item) => {
    if (!item?.url || seen.has(item.url)) return false;
    seen.add(item.url);
    return true;
  });
}

/**
 * Automatic sitemap built from real app routes + data modules.
 * Only public, indexable pages are included.
 *
 * Included:
 * - Homepage
 * - Blog index + individual posts (from data/blogPosts)
 * - Tools index + live tool pages (from data/toolsData)
 *
 * Excluded (not public SEO targets or not yet implemented):
 * - /login, /register
 * - Dashboard / create / history / results / settings
 * - Footer links that still 404 (pricing, kitchen-styles, terms, etc.)
 */
export default function sitemap() {
  const staticPages = [
    entry("/", new Date(), "weekly", 1),
    entry("/blog", new Date(), "daily", 0.9),
    entry("/tools", new Date(), "weekly", 0.9),
  ];

  const blogUrls = (blogPosts || [])
    .filter((post) => post?.slug)
    .map((post) =>
      entry(`/blog/${post.slug}`, post.date || post.updatedAt || new Date(), "monthly", 0.8)
    );

  const toolUrls = (tools || [])
    .filter((tool) => tool?.slug && (tool.status === "live" || !tool.status))
    .map((tool) => entry(`/tools/${tool.slug}`, new Date(), "monthly", 0.8));

  return dedupe([...staticPages, ...blogUrls, ...toolUrls]);
}
