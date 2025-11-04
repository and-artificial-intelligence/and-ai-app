import Image from 'next/image';
import Link from 'next/link';

import { Footer } from '@/common/components/footer';

import { CTASection } from '@/module/cta';

export default function PublicAccessPost() {
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
              Back to blog
            </Link>

            <div className="space-y-4">
              <h1 className="text-element-high-em text-4xl md:text-5xl">
                The &AI platform is now publicly available
              </h1>
              <p className="text-element-mid-em text-sm">November 6, 2025</p>
            </div>
          </div>

          <div className="text-element-mid-em space-y-8 text-base">
            <p>
              Today, I’m excited to announce that the &AI platform is now
              generally available. Over the past year, we’ve been working
              closely with some of the best patent litigators and in-house teams
              in the world – supporting them from pitch to verdict in cases with
              billions in combined risk. &AI has been their secret weapon used
              to monetize portfolios and drive litigation outcomes, and now it’s
              available for any individual or team looking to scale their patent
              expertise.
            </p>

            <div className="space-y-4">
              <h2 className="text-element-high-em text-2xl font-medium">
                Advisory Board
              </h2>
              <p>
                To support our expansion, we've also formed an advisory board of
                world-class experts in patent litigation, licensing, and
                monetization:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Peter Magic:</strong> Managing Partner, San Francisco
                  at Desmarais LLP
                </li>
                <li>
                  <strong>Charles Calkins:</strong> Partner at Kilpatrick
                  Townsend
                </li>
                <li>
                  <strong>Tigran Guledjian:</strong> IP Litigation Co-Chair at
                  Quinn Emanuel
                </li>
                <li>
                  <strong>Ybet Villacorta:</strong> Of Counsel at Foley &
                  Lardner
                </li>
                <li>
                  <strong>Josef Schenker:</strong> Partner at Gish PLLC
                </li>
              </ul>
              <div className="mt-6">
                <Image
                  alt="Advisory Board"
                  className="w-full rounded-lg"
                  height={600}
                  src="/AdvisoryBoardSc.png"
                  width={1200}
                />
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-element-high-em text-2xl font-medium">
                  The Platform
                </h2>
                <p>
                  &AI is a collaborative workspace for patent invalidity and
                  infringement work – litigation, portfolio monetization,
                  business development, and more. Beyond providing technical
                  analysis, &AI delivers trial-ready work product enriched by
                  key context and your strategic insight. Whether you&apos;re
                  searching for infringers or building claim charts, &AI is the
                  single repository for your work with all the tools you need.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-element-high-em text-xl font-medium">
                  Search
                </h3>
                <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
                  <div className="flex-1 space-y-4">
                    <p>
                      Search patent documents, non-patent literature, and
                      products, in real time, from all over the world. Results
                      are returned with detailed summaries of relevance and are
                      graded quality with citations to key disclosures.
                    </p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>
                        <strong>Patents:</strong> Patent applications and
                        publications from major jurisdictions
                      </li>
                      <li>
                        <strong>Non-patent literature:</strong> Research papers,
                        standards, clinical trials, and more across the internet
                      </li>
                      <li>
                        <strong>Products:</strong> Current and archival product
                        listings, specifications, manuals, videos, and teardowns
                      </li>
                    </ul>
                  </div>
                  <div className="flex-1">
                    <Image
                      alt="Patent Search Interface"
                      className="w-full rounded-lg"
                      height={600}
                      src="/1.1.png"
                      width={1200}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-element-high-em text-xl font-medium">
                  Charts
                </h3>
                <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
                  <div className="flex-1 space-y-4">
                    <p>
                      Generate precise invalidity or evidence-of-use claim
                      charts in minutes instead of days, informed by a detailed
                      claim construction. Charts are composed entirely of
                      citations and are produced in trial-ready format – all you
                      have to do is review, edit, and export. Over thousands of
                      charts produced on &AI, our first pass is 89% similar to
                      that which is exported for litigation.
                    </p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>
                        <strong>Claims and elements:</strong> Element-by-element
                        claim charts with citations to prior art and product
                        documentation
                      </li>
                      <li>
                        <strong>Claim construction:</strong> Claim constructions
                        generated from the as-filed application, prosecution
                        history, related family, and more
                      </li>
                    </ul>
                  </div>
                  <div className="flex-1">
                    <Image
                      alt="Claim Chart Generation"
                      className="w-full rounded-lg"
                      height={600}
                      src="/2.1.png"
                      width={1200}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-element-high-em text-xl font-medium">
                  Drafts
                </h3>
                <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
                  <div className="flex-1 space-y-4">
                    <p>
                      Draft any type of document combining templated and
                      generated material – cease & desist letters, infringement
                      complaints, invalidity contentions, expert reports, pitch
                      materials, and more, all grounded in your project.
                    </p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>
                        <strong>Templates:</strong> Pre-formatted templates with
                        smart variables and generation blocks for flexible,
                        on-demand drafting
                      </li>
                      <li>
                        <strong>Editor:</strong> Collaborative workspace where
                        your team and AI refine documents together in real time
                      </li>
                    </ul>
                  </div>
                  <div className="flex-1">
                    <Image
                      alt="Document Drafting Interface"
                      className="w-full rounded-lg"
                      height={600}
                      src="/3.2.png"
                      width={1200}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-element-high-em text-xl font-medium">
                  Tables
                </h3>
                <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
                  <div className="flex-1 space-y-4">
                    <p>
                      Query thousands of documents simultaneously to identify
                      litigation opportunities and infringement patterns.
                      Analyze entire patent portfolios, compare products against
                      claim sets, or track litigation patterns across
                      jurisdictions—all in a unified view that scales with your
                      ambitions.
                    </p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>
                        <strong>Structured analysis:</strong> Apply prompts to
                        each document with shared context to extract structured
                        data and answer questions
                      </li>
                      <li>
                        <strong>Views:</strong> Slice and filter tables using
                        natural language or metadata to surface exactly what you
                        need
                      </li>
                    </ul>
                  </div>
                  <div className="flex-1">
                    <Image
                      alt="Table Analysis Interface"
                      className="w-full rounded-lg"
                      height={600}
                      src="/4.1.png"
                      width={1200}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-element-high-em text-2xl font-medium">
                  Flexible Pricing
                </h2>
                <p>
                  With general availability, we&apos;ve released transparent,
                  credit-based pricing that starts at $375 per monthly seat. For
                  a limited time, new signups will receive twice as many credits
                  their first month, giving you an opportunity to try out &AI
                  with flexibility.
                </p>
                <p>
                  Our Core plan uses only public data, enabling individuals and
                  firms to explore &AI with zero access to confidential
                  information. The Pro plan extends Core, enabling you to upload
                  documents, draft prompts, customize templates, interact with
                  Andy the AI assistant, and more. For large teams or those with
                  specific needs, please{' '}
                  <a
                    className="text-element-high-em underline hover:no-underline"
                    href="mailto:support@tryandai.com"
                  >
                    contact us
                  </a>{' '}
                  for details on our Enterprise offerings.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-element-high-em text-2xl font-medium">
                  Book a Demo Today
                </h2>
                <p>
                  If you&apos;d like to see how &AI can support your work today,{' '}
                  <a
                    className="text-element-high-em underline hover:no-underline"
                    href="https://www.tryandai.com/book-demo"
                  >
                    book a demo
                  </a>
                  !
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />

      <Footer />
    </main>
  );
}
