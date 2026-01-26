import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/common/components/button';
import { Footer } from '@/common/components/footer';
import { SubHeader } from '@/common/components/subheader';
import { BrandColor } from '@/common/types/common';
import { CTASection } from '@/module/cta';

export const metadata: Metadata = {
  title: 'Product Overview | &AI',
  description:
    'Explore the AI workspace for patent litigation. Tools for infringement detection, invalidity analysis, claim charts, prior art search, and business development.',
};

const faqs = [
  {
    question: 'What makes &AI different from other patent tools?',
    answer:
      '&AI is built specifically for patent litigation workflows—not just search. Every feature is optimized to produce trial-ready work product, with outputs designed for expert review and legal proceedings.',
  },
  {
    question: 'Can I try the tools before committing?',
    answer:
      'Yes. We offer sample outputs and demos so you can evaluate the quality of our work product before making any commitment. Request a sample or book a demo to get started.',
  },
  {
    question: 'How does pricing work?',
    answer:
      "We offer flexible pricing based on your firm's needs—from matter-based pricing to enterprise agreements. Contact us for a quote tailored to your workflow.",
  },
];

const products = [
  {
    name: 'Prior Art Search',
    href: '/product/prior-art-search',
    image: '/1.1.png',
    description: 'Discover relevant prior art with semantic AI.',
  },
  {
    name: 'Claim Charts',
    href: '/product/claim-charts',
    image: '/3.1.png',
    description: 'Generate litigation-ready claim charts in minutes.',
  },
  {
    name: 'Business Development',
    href: '/product/patent-litigation-business-development',
    image: '/2.2.png',
    description: 'Identify licensing opportunities and grow your practice.',
  },
  {
    name: 'Invalidity Analysis',
    href: '/product/invalidity-analysis',
    image: '/2.1.png',
    description: 'Build stronger invalidity arguments at scale.',
  },
  {
    name: 'Infringement Detection',
    href: '/product/infringement-detection',
    image: '/4.1.png',
    description: 'Find evidence of use faster with AI-powered analysis.',
  },
];

export default function ProductOverviewPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="mx-auto w-full px-4 pt-16 pb-8 md:px-6 md:pt-20 md:pb-10 xl:max-w-[80rem] xl:px-8 xl:pt-24 xl:pb-12">
        <div className="max-w-4xl">
          <Link className="mb-6 flex w-fit" href="/product">
            <SubHeader brand={BrandColor.PRIMARY} title="Product" />
          </Link>
          <h1 className="text-element-high-em text-4xl md:text-5xl xl:text-6xl">
            The AI workspace for{' '}
            <span className="font-martina italic">patent litigation</span>
          </h1>
          <p className="text-element-high-em mt-4 text-xl font-medium md:text-2xl">
            Trial-ready work product, fast enough for pitches.
          </p>
          <div className="text-element-mid-em mt-6 space-y-4 text-lg xl:text-xl">
            <p>
              Our suite of AI tools helps patent litigators execute faster—with
              work product that&apos;s strong enough for court. From prior art
              search to claim charts, every tool is designed to slot into your
              existing workflow.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/book-demo">Book demo</Button>
            <Button href="/pricing" variant="secondary">
              See pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="relative pb-16 md:pb-20">
        {/* Grid Background */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
          }}
        />
        <div className="relative mx-auto w-full px-4 md:px-6 xl:max-w-[80rem] xl:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.href}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all hover:border-gray-300 hover:shadow-xl"
                href={product.href}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-50">
                  <Image
                    alt={product.name}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    fill
                    src={product.image}
                  />
                </div>
                <div className="flex flex-col p-6">
                  <h3 className="text-element-high-em text-lg font-semibold">
                    {product.name}
                  </h3>
                  <p className="text-element-mid-em mt-2 text-sm">
                    {product.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {faqs.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="mx-auto w-full px-4 md:px-6 xl:max-w-[80rem] xl:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-element-high-em mb-8 text-center text-2xl font-medium md:text-3xl">
                FAQ
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="group rounded-lg border border-gray-200 bg-white"
                  >
                    <summary className="flex cursor-pointer items-center justify-between p-5">
                      <span className="text-element-high-em pr-4 text-base font-medium">
                        {faq.question}
                      </span>
                      <svg
                        className="h-5 w-5 shrink-0 text-gray-500 transition-transform group-open:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M19 9l-7 7-7-7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </summary>
                    <div className="border-t border-gray-200 px-5 py-4">
                      <p className="text-element-mid-em text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CTASection showPricing />

      <Footer />
    </main>
  );
}
