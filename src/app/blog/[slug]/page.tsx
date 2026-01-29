import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, type Document } from '@contentful/rich-text-types';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Button } from '@/common/components/button';
import { Footer } from '@/common/components/footer';

import { getBlogPostBySlug, getBlogPostSlugs } from '@/lib/contentful';
import { BackgroundArt } from '@/module/cta';

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Article Not Found | &AI',
    };
  }

  const ogImage = post.featureImage?.url ?? post.coverImage?.url;
  const metaDescription =
    post.subtitle || post.description || `Read "${post.title}" on &AI Insights.`;

  return {
    title: `${post.title} | &AI Insights`,
    description: metaDescription,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: metaDescription,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      ...(ogImage && {
        images: [
          {
            url: ogImage,
            width: post.featureImage?.width ?? post.coverImage?.width ?? 1200,
            height: post.featureImage?.height ?? post.coverImage?.height ?? 630,
            alt: post.title,
          },
        ],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: metaDescription,
      ...(ogImage && { images: [ogImage] }),
    },
  };
}

const formatBlogDate = (date: string) =>
  new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

const renderRichText = (document: Document) =>
  documentToReactComponents(document, {
    renderNode: {
      [BLOCKS.HEADING_2]: (_, children) => (
        <h2 className="text-element-high-em mt-6 text-2xl font-medium">
          {children}
        </h2>
      ),
      [BLOCKS.HEADING_3]: (_, children) => (
        <h3 className="text-element-high-em mt-5 text-xl font-medium">
          {children}
        </h3>
      ),
      [BLOCKS.HEADING_1]: (_, children) => (
        <h1 className="text-element-high-em mt-8 text-3xl font-medium">
          {children}
        </h1>
      ),
      [BLOCKS.HEADING_4]: (_, children) => (
        <h4 className="text-element-high-em mt-4 text-lg font-medium">
          {children}
        </h4>
      ),
      [BLOCKS.HEADING_5]: (_, children) => (
        <h5 className="text-element-high-em mt-3 text-base font-medium">
          {children}
        </h5>
      ),
      [BLOCKS.HEADING_6]: (_, children) => (
        <h6 className="text-element-high-em mt-3 text-sm font-medium uppercase tracking-wide">
          {children}
        </h6>
      ),
      [BLOCKS.PARAGRAPH]: (_, children) => <p>{children}</p>,
      [BLOCKS.UL_LIST]: (_, children) => (
        <ul className="list-disc space-y-2 pl-6">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (_, children) => (
        <ol className="list-decimal space-y-2 pl-6">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (_, children) => <li>{children}</li>,
      [BLOCKS.QUOTE]: (_, children) => (
        <blockquote className="border-gray-dark/10 border-l-2 pl-4 italic">
          {children}
        </blockquote>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const target = node.data.target as {
          fields?: {
            title?: string;
            description?: string;
            file?: {
              url?: string;
              contentType?: string;
              details?: { image?: { width?: number; height?: number } };
            };
          };
        };
        const file = target.fields?.file;
        const rawUrl = file?.url;
        if (!rawUrl) return null;
        const url = rawUrl.startsWith('//') ? `https:${rawUrl}` : rawUrl;
        const contentType = file?.contentType ?? '';
        const width = file?.details?.image?.width ?? 1200;
        const height = file?.details?.image?.height ?? 600;
        const alt = target.fields?.description || target.fields?.title || '';

        if (contentType.startsWith('image/')) {
          return (
            <div className="relative my-8 w-full overflow-hidden rounded-lg">
              <Image
                alt={alt}
                height={height}
                sizes="(max-width: 768px) 100vw, 48rem"
                src={url}
                width={width}
              />
            </div>
          );
        }

        return (
          <a
            className="text-element-high-em my-4 inline-flex items-center gap-2 underline"
            href={url}
            rel="noopener noreferrer"
            target="_blank"
          >
            {target.fields?.title || 'Download asset'}
          </a>
        );
      },
      [INLINES.HYPERLINK]: (node, children) => {
        const href = node.data.uri as string;
        const isExternal = href.startsWith('http');
        return (
          <a
            className="text-element-high-em underline underline-offset-4 hover:no-underline"
            href={href}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            target={isExternal ? '_blank' : undefined}
          >
            {children}
          </a>
        );
      },
    },
  });

export const generateStaticParams = async () => {
  const slugs = await getBlogPostSlugs();
  return slugs.map((slug) => ({ slug }));
};

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <main className="flex min-h-screen flex-col">
      <section className="mx-auto w-full px-4 py-16 md:px-6 md:py-20 xl:max-w-[48rem] xl:px-8 xl:py-24">
        <div className="space-y-12">
          <div className="space-y-6">
            <Link
              className="text-element-mid-em hover:text-element-high-em inline-flex items-center gap-2 text-sm transition-colors"
              href="/blog"
            >
              <svg
                className="size-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 12H5M12 19l-7-7 7-7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to insights
            </Link>

            {post.featureImage || post.coverImage ? (
              <div className="border-gray-dark/10 relative aspect-[16/9] w-full overflow-hidden rounded-lg border bg-gray-100">
                <Image
                  fill
                  alt={
                    post.featureImage?.title ?? post.coverImage?.title ?? post.title
                  }
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 48rem"
                  src={
                    post.featureImage?.url ??
                    post.coverImage?.url ??
                    '/article-cover-gray.png'
                  }
                />
              </div>
            ) : null}

            <div className="space-y-4">
              <h1 className="text-element-high-em text-4xl md:text-5xl">
                {post.title}
              </h1>
              <div className="flex items-center justify-between gap-3">
                <p className="text-element-mid-em text-sm">
                  {formatBlogDate(post.date)}
                </p>
                <span className="border-gray-dark/10 text-element-high-em rounded-full border px-3 py-1 text-xs font-medium">
                  {post.author}
                </span>
              </div>
            </div>
          </div>

          <div className="text-element-mid-em space-y-4 text-base">
            {post.content ? (
              renderRichText(post.content)
            ) : (
              <p>This post is still being prepared.</p>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full px-4 md:px-6 xl:max-w-[80rem] xl:px-0">
        <div className="bg-brand-accent-blue border-gray-dark/5 relative w-full overflow-hidden border px-4 pt-24 pb-16 md:px-6 md:pb-16 xl:px-8 xl:pt-[7.5rem] xl:pb-20">
          <BackgroundArt className="pointer-events-none absolute top-1/2 left-1/2 size-[38.375rem] -translate-x-1/2 -translate-y-1/2 md:size-[58.9375rem]" />
          <div className="flex flex-col items-center gap-12">
            <div className="space-y-6 text-center xl:space-y-8">
              <h2 className="text-element-high-em text-5.5xl md:text-7xl">
                Scale your
                <br />
                <span className="font-martina italic">patent expertise</span>
              </h2>
              <p className="text-element-high-em max-w-[20.5625rem] text-center md:max-w-[30rem] xl:max-w-[35rem] xl:text-lg">
                &AI delivers trial-ready work product for patent litigators —
                fast enough for pitches, strong enough for court.
              </p>
            </div>
            <Button href="/book-demo">Free trial</Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
