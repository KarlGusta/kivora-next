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
 */
export default function sitemap() {
  const staticPages = [
    entry("/", new Date(), "weekly", 1),
    entry("/resources", new Date(), "weekly", 0.95),
    entry("/ai-kitchen-designer", new Date(), "weekly", 0.95),
    entry("/alternatives", new Date(), "weekly", 0.95),
    entry("/comparisons", new Date(), "weekly", 0.95),
    entry("/planner-5d-alternatives", new Date(), "weekly", 0.9),
    entry("/roomgpt-alternatives", new Date(), "weekly", 0.9),
    entry("/reimaginehome-alternatives", new Date(), "weekly", 0.9),
    entry("/remodel-ai-alternatives", new Date(), "weekly", 0.9),
    entry("/homedesignsai-alternatives", new Date(), "weekly", 0.9),
    entry("/decormatters-alternatives", new Date(), "weekly", 0.9),
    entry("/homestyler-alternatives", new Date(), "weekly", 0.9),
    entry("/interior-ai-alternatives", new Date(), "weekly", 0.9),
    entry("/kivora-vs-planner-5d", new Date(), "weekly", 0.9),
    entry("/kivora-vs-roomgpt", new Date(), "weekly", 0.9),
    entry("/kivora-vs-reimaginehome", new Date(), "weekly", 0.9),
    entry("/kivora-vs-remodel-ai", new Date(), "weekly", 0.9),
    entry("/kivora-vs-homedesignsai", new Date(), "weekly", 0.9),
    entry("/kivora-vs-homestyler", new Date(), "weekly", 0.9),
    entry("/planner-5d-vs-roomgpt", new Date(), "weekly", 0.9),
    entry("/roomgpt-vs-reimaginehome", new Date(), "weekly", 0.9),
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
