import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Footer } from '@/common/components/footer';
import { SchemaScript } from '@/common/components/schema-script';
import { SubHeader } from '@/common/components/subheader';
import { SITE_URL } from '@/common/constants';
import { BrandColor } from '@/common/types/common';

import { getBlogPosts } from '@/lib/contentful';
import { generateBreadcrumbSchema } from '@/lib/schema';
import { CTASection } from '@/module/cta';

export const revalidate = 0;

const blogBreadcrumb = [
  { name: 'Home', url: SITE_URL },
  { name: 'Insights', url: `${SITE_URL}/blog` },
];

export const metadata: Metadata = {
  title: 'Insights | &AI',
  description:
    'Stay up to date with the latest news, insights, and updates from &AI — the AI workspace for patent litigation.',
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Insights | &AI',
    description:
      'Stay up to date with the latest news, insights, and updates from &AI — the AI workspace for patent litigation.',
    type: 'website',
    url: `${SITE_URL}/blog`,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insights | &AI',
    description:
      'Stay up to date with the latest news, insights, and updates from &AI — the AI workspace for patent litigation.',
  },
};

const formatBlogDate = (date: string) =>
  new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

export default async function Blog() {
  const posts = await getBlogPosts();

  return (
    <main className="flex min-h-screen flex-col">
      <SchemaScript schema={generateBreadcrumbSchema(blogBreadcrumb)} />

      <section className="mx-auto w-full px-4 py-16 md:px-6 md:py-20 xl:max-w-[80rem] xl:px-8 xl:py-24">
        <div className="mb-16 flex flex-col items-center gap-4 text-center md:mb-20">
          <SubHeader brand={BrandColor.PRIMARY} title="Insights" />
          <h1 className="text-element-high-em text-5xl md:text-6xl xl:text-7xl">
            Latest <span className="font-martina italic">news</span>
          </h1>
          <p className="text-element-mid-em max-w-xl text-base md:text-lg">
            Stay up to date with the latest insights, updates, and announcements
            from the &AI team.
          </p>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 -mx-4 -my-12 md:-mx-6 xl:-mx-8"
          >
            <div className="relative h-full w-full [background-image:linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_2%,rgba(0,0,0,1)_98%,rgba(0,0,0,0)_100%)] [background-size:20px_20px,20px_20px] [background-position:0_0,0_0] [background-repeat:repeat,repeat] [mask-mode:alpha] [mask-repeat:no-repeat] [-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_2%,rgba(0,0,0,1)_98%,rgba(0,0,0,0)_100%)] [-webkit-mask-repeat:no-repeat]" />
          </div>

          <div className="bg-background-lighter shadow-gray-dark/10 relative z-10 rounded-xs border border-gray-300 shadow">
            <div className="grid grid-cols-3 items-center px-6 pt-6 md:px-16 md:pt-10 lg:px-6 xl:px-20">
              <p className="font-mono text-sm font-medium text-gray-500">
                INSIGHTS
              </p>
              <p className="text-center font-mono text-sm font-medium text-gray-500">
                {posts.length} ARTICLES
              </p>
              <p className="text-right font-mono text-sm font-medium text-gray-500 md:block">
                <span className="hidden md:inline">US 6,237,565 B1</span>
              </p>
            </div>

            <div className="grid gap-8 px-6 py-12 md:grid-cols-2 md:px-16 md:py-16 lg:px-6 xl:px-20">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  className="group border-gray-dark/10 flex flex-col overflow-hidden rounded-sm border transition-shadow hover:shadow-md"
                  href={`/blog/${post.slug}`}
                >
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      fill
                      alt={post.title}
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                      src={
                        post.featureImage?.url ??
                        post.coverImage?.url ??
                        '/article-cover-gray.png'
                      }
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between bg-white p-6">
                    <div className="mb-4 space-y-2">
                      <h2 className="text-element-high-em text-lg font-medium leading-tight">
                        {post.title}
                      </h2>
                      {(post.subtitle || post.description) && (
                        <p className="text-element-mid-em text-sm line-clamp-2">
                          {post.subtitle || post.description}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-element-low-em text-xs font-medium">
                        {formatBlogDate(post.date)}
                      </p>
                      <span className="border-gray-dark/10 text-element-high-em rounded-full border px-3 py-1 text-xs font-medium">
                        {post.author}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />

      <Footer />
    </main>
  );
}
