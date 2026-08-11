import { notFound } from "next/navigation";
import { blogPosts, getBlogPost, defaultOgImage } from "@/data/blogPosts";
import { author } from "@/data/author";
import BlogPostPageClient from "@/components/blog/BlogPostPageClient";

const siteUrl = "https://kivora.collabtower.com";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: "Post not found" };
  }

  const url = `${siteUrl}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: author.name, url: author.linkedinUrl }],
    creator: author.name,
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      images: [post.image || defaultOgImage],
      type: "article",
      publishedTime: post.date,
      authors: [author.name],
      siteName: "Kivora",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image || defaultOgImage],
      creator: `@${author.twitter}`,
    },
    alternates: {
      canonical: url,
    },
  };
}

function buildArticleJsonLd(post) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: [post.image || defaultOgImage],
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: author.name,
      url: author.linkedinUrl,
      image: `${siteUrl}${author.image}`,
      jobTitle: author.role,
      sameAs: author.sameAs,
    },
    publisher: {
      "@type": "Organization",
      name: "Kivora",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: post.image || defaultOgImage,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const jsonLd = buildArticleJsonLd(post);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostPageClient post={post} />
    </>
  );
}
