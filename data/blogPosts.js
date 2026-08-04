import { rawPosts, defaultOgImage } from "./blogPostsData";

export { defaultOgImage };

export const blogPosts = rawPosts.map((post) => ({
  ...post,
  image: defaultOgImage,
}));

export const getSortedBlogPosts = () =>
  [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));

export const getBlogPost = (slug) => blogPosts.find((post) => post.slug === slug);

export const getAdjacentPosts = (slug) => {
  const ordered = getSortedBlogPosts();
  const index = ordered.findIndex((post) => post.slug === slug);
  return {
    previousPost: index > 0 ? ordered[index - 1] : null,
    nextPost: index >= 0 && index < ordered.length - 1 ? ordered[index + 1] : null,
  };
};

export const getRelatedPosts = (post, limit = 3) => {
  if (!post) return [];

  return blogPosts
    .filter((p) => p.slug !== post.slug)
    .map((p) => ({
      ...p,
      _relatedScore:
        (p.category === post.category ? 2 : 0) +
        (p.tags && post.tags ? p.tags.filter((tag) => post.tags.includes(tag)).length : 0),
    }))
    .sort((a, b) => {
      if (b._relatedScore !== a._relatedScore) return b._relatedScore - a._relatedScore;
      return new Date(b.date) - new Date(a.date);
    })
    .slice(0, limit);
};
