'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { Button } from '@/common/components/button';
import { Footer } from '@/common/components/footer';
import { SubHeader } from '@/common/components/subheader';
import { BrandColor } from '@/common/types/common';
import { PRODUCTS } from '@/common/constants/products';
import { CTASection } from '@/module/cta';

// export const metadata: Metadata = {
//   title: 'Product Overview | &AI',
//   description:
//     'Explore the AI workspace for patent litigation. Tools for infringement detection, invalidity analysis, claim charts, prior art search, and business development.',
// };

const faqs = [
  {
    question: 'What makes &AI different from other patent tools?',
    answer:
      '&AI is built specifically for end-to-end patent litigation workflows, from business development to trial. Every feature is optimized to produce trial-ready work product, with outputs designed for expert review and legal proceedings.',
  },
  {
    question: 'Do you offer a free trial?',
    answer: (
      <>
        Yes. We offer free credits to try the &AI platform so you can evaluate
        the quality of our product before making any commitment.{' '}
        <Link
          className="text-orange-500 underline hover:text-orange-600"
          href="/book-demo"
        >
          Book a demo
        </Link>{' '}
        to get started.
      </>
    ),
  },
  {
    question: 'How does pricing work?',
    answer: (
      <>
        We offer three options– Core, Pro, and Enterprise planes. Core and Pro
        are a monthly seat cost, which includes a fixed number of credits, and
        you can always buy more credits as needed.{' '}
        <Link
          className="text-orange-500 underline hover:text-orange-600"
          href="/pricing"
        >
          See more pricing details here
        </Link>
        .
      </>
    ),
  },
];

export default function ProductOverviewPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

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
            End-to-end patent litigation workflows, from business development to
            active trial.
          </p>
          <div className="text-element-mid-em mt-6 space-y-4 text-lg xl:text-xl">
            <p>
              The &AI workspace helps patent litigators generate new business
              and execute end-to-end workflows faster. From prior art search,
              claim charts, and contentions drafting, &AI is the central
              repository for your team in business development and active
              matters.
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
            {PRODUCTS.map((product) => (
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
        <section className="mx-auto w-full px-4 py-16 md:px-6 md:py-20 xl:max-w-[80rem] xl:px-8 xl:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16 xl:gap-24">
            <div>
              <h2 className="font-martina text-element-high-em text-4.5xl xl:text-5xl">
                Frequently asked questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-gray-dark/10 border-b last:border-b-0"
                >
                  <button
                    aria-expanded={openFAQ === index}
                    className="text-element-high-em hover:text-element-high-em/70 flex w-full items-start justify-between gap-4 py-6 text-left transition-colors"
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  >
                    <span className="text-lg font-medium">{faq.question}</span>
                    <span className="mt-1 flex size-6 shrink-0 items-center justify-center transition-transform duration-200">
                      {openFAQ === index ? (
                        <svg
                          className="size-6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.5}
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M5 12h14"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="size-6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.5}
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 5v14m-7-7h14"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-200"
                    style={{
                      maxHeight: openFAQ === index ? '500px' : '0px',
                    }}
                  >
                    <div className="text-element-mid-em pb-6 text-base">
                      {typeof faq.answer === 'string'
                        ? faq.answer.split('\n\n').map((paragraph, i) => (
                            <p key={i} className={i > 0 ? 'mt-4' : ''}>
                              {paragraph}
                            </p>
                          ))
                        : faq.answer}
                    </div>
                  </div>
                </div>
              ))}
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
