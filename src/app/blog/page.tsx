import Image from 'next/image';
import Link from 'next/link';
import { Footer } from '@/common/components/footer';
import { SubHeader } from '@/common/components/subheader';
import { BrandColor } from '@/common/types/common';

import { getBlogPosts } from '@/lib/contentful';
import { CTASection } from '@/module/cta';

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
      <section className="mx-auto w-full px-4 py-16 md:px-6 md:py-20 xl:max-w-[80rem] xl:px-8 xl:py-24">
        <div className="mb-16 flex flex-col items-center gap-4 text-center md:mb-20">
          <SubHeader brand={BrandColor.PRIMARY} title="Blog" />
          <h1 className="text-element-high-em text-5xl md:text-6xl xl:text-7xl">
            Latest <span className="font-martina italic">news</span>
          </h1>
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
                BLOG
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
                      alt={post.title}
                      className="object-cover"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                      src={
                        post.featureImage?.url ??
                        post.coverImage?.url ??
                        '/article-cover-gray.png'
                      }
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between bg-white p-6">
                    <p className="text-element-mid-em mb-4 text-sm">
                      {post.description}
                    </p>
                    <p className="text-element-low-em text-xs font-medium">
                      {formatBlogDate(post.date)}
                    </p>
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
