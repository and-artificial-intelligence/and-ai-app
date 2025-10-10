import Link from 'next/link';

import { Footer } from '@/common/components/footer';
import { Navbar } from '@/common/components/navbar';
import { SubHeader } from '@/common/components/subheader';
import { BrandColor } from '@/common/types/common';

import { BackgroundArt } from '@/module/cta';
import { Button } from '@/common/components/button';

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  backgroundColor: string;
}

export default function Blog() {
  const posts: BlogPost[] = [
    {
      slug: 'reliable-by-design-grounding-legal-ai-with-rag',
      title: 'Reliable by Design: Grounding Legal AI with RAG',
      description:
        'By deploying advanced RAG technology, &AI grounds legal AI in accurate, verified sources - delivering reliability and eliminating legal hallucinations.',
      date: 'Feb 6, 2025',
      backgroundColor: 'bg-gray-200',
    },
    {
      slug: 'bringing-patent-law-into-the-agentic-era',
      title: 'Bringing Patent Law into the Agentic Era',
      description:
        "AI is entering its agentic era — here's how this is changing everything from search to strategy in IP law.",
      date: 'Feb 6, 2025',
      backgroundColor: 'bg-brand-accent-blue',
    },
    {
      slug: 'seed-funding-announcement',
      title: '$6.5 Million Seed Funding',
      description:
        '&AI Raises $6.5 million to Launch First AI Agent for Patents',
      date: 'Feb 6, 2025',
      backgroundColor: 'bg-brand-accent-purple/30',
    },
    {
      slug: 'why-ai',
      title: 'Why "&AI"?',
      description:
        'The use of &ESTR; (‹&") has been met by a rise in tools for creating, storing, and managing them.',
      date: 'Feb 6, 2025',
      backgroundColor: 'bg-gray-200',
    },
    {
      slug: 'rethinking-prior-art-search',
      title: 'Rethinking Prior Art Search',
      description:
        'AI is revolutionizing prior art search by addressing key challenges in semantic understanding, quality evaluation, and scalability.',
      date: 'Feb 6, 2025',
      backgroundColor: 'bg-brand-accent-blue/50',
    },
    {
      slug: 'portfolio-management-at-scale',
      title: 'Portfolio Management at Scale',
      description:
        '&AI transforms patent portfolio management by automating traditionally time-consuming due diligence tasks.',
      date: 'Feb 6, 2025',
      backgroundColor: 'bg-gray-200',
    },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

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
            <div className="flex items-center justify-between px-6 pt-6 md:px-16 md:pt-10 lg:px-6 xl:px-20">
              <p className="font-mono text-sm font-medium text-gray-500">
                BLOG
              </p>
              <p className="font-mono text-sm font-medium text-gray-500">
                {posts.length} ARTICLES
              </p>
              <p className="hidden font-mono text-sm font-medium text-gray-500 md:block">
                US 6,237,565 B1
              </p>
            </div>

            <div className="grid gap-8 px-6 py-12 md:grid-cols-2 md:px-16 md:py-16 lg:px-6 xl:px-20">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  className="group border-gray-dark/10 flex flex-col overflow-hidden rounded-sm border transition-shadow hover:shadow-md"
                  href={`/blog/${post.slug}`}
                >
                  <div
                    className={`flex h-48 items-end px-6 pb-6 md:h-56 ${post.backgroundColor}`}
                  >
                    <h3 className="text-element-high-em font-martina text-2xl md:text-3xl">
                      {post.title}
                    </h3>
                  </div>
                  <div className="flex flex-1 flex-col justify-between bg-white p-6">
                    <p className="text-element-mid-em mb-4 text-sm">
                      {post.description}
                    </p>
                    <p className="text-element-low-em text-xs font-medium">
                      {post.date}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
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
                Engineered for patents, &AI executes litigation-grade work at
                machine scale. You set strategy; &AI delivers the work.
              </p>
            </div>
            <Button href="/book-demo">Book demo</Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
