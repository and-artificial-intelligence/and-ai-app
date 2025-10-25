import Link from 'next/link';

import { Footer } from '@/common/components/footer';

import { CTASection } from '@/module/cta';

export default function SeedFundingPost() {
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
                $6.5m seed funding
              </h1>
              <p className="text-element-mid-em text-sm">February 6, 2025</p>
            </div>
          </div>

          <div className="text-element-mid-em space-y-8 text-base">
            <p>
              Patent law is a discipline of dual mastery—attorneys must
              understand both complex legal frameworks and the technical details
              of the inventions they&apos;re protecting. Until recently, it
              wasn&apos;t feasible to build solutions capable of understanding
              advanced topics ranging from semiconductor designs to
              pharmaceutical formulas. The paradigm has shifted, and AI has
              revolutionized what&apos;s possible.
            </p>

            <p>
              Today, we&apos;re excited to share two significant updates for
              &AI: our $6.5M seed round led by First Round Capital, and the
              introduction of Andy, the first AI agent for patent attorneys.
            </p>

            <div className="space-y-4">
              <h2 className="text-element-high-em text-2xl font-medium">
                Professional-Grade AI for Patent Attorneys
              </h2>
              <p>
                At its core, &AI is professional-grade AI designed for patent
                attorneys. Our mission is to transform how attorneys work,
                providing powerful tools for end-to-end litigation workflows.
                We&apos;ve built a secure, collaborative platform to support
                attorneys with complex tasks like drafting claim charts,
                invalidity contentions, and prior art search.
              </p>
              <p>
                Unlike traditional AI assistants that simply follow
                instructions, Andy adapts dynamically to context, making
                intelligent decisions about how to best support attorneys in
                their work. We&apos;re confident that agentic AI will unlock new
                levels of productivity, allowing attorneys to focus on the
                strategic work that matters most.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-element-high-em text-2xl font-medium">
                Backed by Leading Investors
              </h2>
              <p>
                This vision is backed by leading investors including Y
                Combinator, BoxGroup, SV Angel, and incredible angels Kulveer
                Taggar, JJ Fliegelman, and Rich Aberman. Their support will help
                us expand our platform&apos;s capabilities, grow our excellent
                team, and engineer the future of patent law.
              </p>
              <p>Book a demo to see how &AI can transform your practice.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />

      <Footer />
    </main>
  );
}
