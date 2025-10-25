import Link from 'next/link';

import { Footer } from '@/common/components/footer';

import { CTASection } from '@/module/cta';

export default function GeneralAccessPost() {
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
                General access
              </h1>
              <p className="text-element-mid-em text-sm">October 28, 2025</p>
            </div>
          </div>

          <div className="text-element-mid-em space-y-8 text-base">
            <p>
              We are excited to announce that &AI is now available for general
              access. This marks a significant milestone in our mission to bring
              AI-powered patent intelligence to legal professionals worldwide.
            </p>

            <p>
              After months of development and refinement, our platform is ready
              to help patent attorneys, IP professionals, and legal teams
              revolutionize their workflow with cutting-edge AI technology.
            </p>

            <div className="space-y-4">
              <h2 className="text-element-high-em text-2xl font-medium">
                What This Means for You
              </h2>
              <p>
                With general access, you can now leverage &AI&apos;s advanced
                capabilities to streamline your patent research, analysis, and
                portfolio management. Our AI agent is designed to handle the
                heavy lifting while you focus on strategic decision-making.
              </p>
              <p>
                Whether you&apos;re conducting prior art searches, analyzing
                patent landscapes, or managing large portfolios, &AI provides
                the tools you need to work more efficiently and effectively.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-element-high-em text-2xl font-medium">
                Getting Started
              </h2>
              <p>
                To get started with &AI, simply visit our platform and create an
                account. Our onboarding process will guide you through the
                features and help you make the most of your new AI assistant.
              </p>
              <p>
                We&apos;re committed to supporting you every step of the way. If
                you have questions or need assistance, our team is here to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />

      <Footer />
    </main>
  );
}
