'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/common/components/button';
import { Footer } from '@/common/components/footer';
import { SubHeader } from '@/common/components/subheader';
import { BrandColor } from '@/common/types/common';
import { CTASection } from '@/module/cta';

export interface WorkflowStep {
  title: string;
  description: string;
  image?: string;
}

export interface ProductLink {
  name: string;
  href: string;
  description: string;
  image?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface SolutionsByUseCasePageProps {
  // Hero
  badge: string;
  h1: string;
  h1Highlight?: string;
  subheading: string;
  description: string;

  // Hero image (optional)
  heroImage?: string;

  // Challenge/Pain points section
  challengeTitle?: string;
  challenges?: string[];

  // Workflow/How it works
  workflowTitle?: string;
  workflowDescription?: string;
  workflowSteps?: WorkflowStep[];

  // Products used for this use case
  productsTitle?: string;
  productsDescription?: string;
  products?: ProductLink[];

  // Outcomes/Results
  outcomesTitle?: string;
  outcomes?: {
    metric: string;
    description: string;
  }[];

  // Testimonial (optional)
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
    image?: string;
  };

  // FAQ
  faqs?: FAQ[];

  // Related use cases
  relatedUseCases?: {
    name: string;
    href: string;
    description?: string;
  }[];

  // CTAs
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function SolutionsByUseCasePage({
  badge,
  h1,
  h1Highlight,
  subheading,
  description,
  heroImage,
  challengeTitle = 'The challenge',
  challenges,
  workflowTitle = 'How it works',
  workflowDescription,
  workflowSteps,
  productsTitle = 'Products for this workflow',
  productsDescription,
  products,
  outcomesTitle = 'Expected outcomes',
  outcomes,
  testimonial,
  faqs,
  relatedUseCases,
  primaryCta = { label: 'Book demo', href: '/book-demo' },
  secondaryCta = { label: 'See pricing', href: '/pricing' },
}: SolutionsByUseCasePageProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="mx-auto w-full px-4 py-16 md:px-6 md:py-20 xl:max-w-[80rem] xl:px-8 xl:py-24">
        <div className={heroImage ? 'flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16' : ''}>
          <div className={heroImage ? 'lg:w-1/2' : 'max-w-4xl'}>
            <Link className="mb-6 flex w-fit" href="/solutions">
              <SubHeader brand={BrandColor.PRIMARY} title={badge} />
            </Link>
            <h1 className="text-element-high-em text-4xl md:text-5xl xl:text-6xl">
              {h1Highlight ? (
                <>
                  {h1}{' '}
                  <span className="font-martina italic">{h1Highlight}</span>
                </>
              ) : (
                h1
              )}
            </h1>
            <p className="text-element-high-em mt-4 text-xl font-medium md:text-2xl">
              {subheading}
            </p>
            <p className="text-element-mid-em mt-6 text-lg xl:text-xl">
              {description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={primaryCta.href}>{primaryCta.label}</Button>
              <Button href={secondaryCta.href} variant="secondary">
                {secondaryCta.label}
              </Button>
            </div>
          </div>
          {heroImage && (
            <div className="lg:w-1/2">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-gray-200">
                <Image
                  fill
                  alt={h1}
                  className="object-cover"
                  src={heroImage}
                  priority
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Challenges Section */}
      {challenges && challenges.length > 0 && (
        <section className="border-y border-gray-200 bg-background-lighter py-16 md:py-20">
          <div className="mx-auto w-full px-4 md:px-6 xl:max-w-[80rem] xl:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-element-high-em mb-8 text-center text-2xl font-medium md:text-3xl">
                {challengeTitle}
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start gap-3 rounded-lg bg-white p-4">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    <span className="text-element-mid-em">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Workflow Section */}
      {workflowSteps && workflowSteps.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="mx-auto w-full px-4 md:px-6 xl:max-w-[80rem] xl:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-element-high-em text-2xl font-medium md:text-3xl">
                {workflowTitle}
              </h2>
              {workflowDescription && (
                <p className="text-element-mid-em mx-auto mt-4 max-w-2xl text-lg">
                  {workflowDescription}
                </p>
              )}
            </div>
            <div className="mx-auto max-w-4xl space-y-12">
              {workflowSteps.map((step, index) => (
                <div
                  key={index}
                  className={`flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12 ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {step.image && (
                    <div className="lg:w-1/2">
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-gray-200">
                        <Image
                          fill
                          alt={step.title}
                          className="object-cover"
                          src={step.image}
                        />
                      </div>
                    </div>
                  )}
                  <div className={step.image ? 'lg:w-1/2' : 'w-full'}>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-medium text-orange-600">
                        {index + 1}
                      </div>
                      <h3 className="text-element-high-em text-xl font-medium">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-element-mid-em text-base leading-relaxed pl-12">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Section */}
      {products && products.length > 0 && (
        <section className="border-y border-gray-200 bg-background-lighter py-16 md:py-20">
          <div className="mx-auto w-full px-4 md:px-6 xl:max-w-[80rem] xl:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-element-high-em text-2xl font-medium md:text-3xl">
                {productsTitle}
              </h2>
              {productsDescription && (
                <p className="text-element-mid-em mx-auto mt-4 max-w-2xl text-lg">
                  {productsDescription}
                </p>
              )}
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <Link
                  key={product.href}
                  className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:border-gray-300 hover:shadow-lg"
                  href={product.href}
                >
                  {product.image && (
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                      <Image
                        fill
                        alt={product.name}
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        src={product.image}
                      />
                    </div>
                  )}
                  <div className="flex flex-col p-5">
                    <h3 className="text-element-high-em text-lg font-medium">
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
      )}

      {/* Outcomes Section */}
      {outcomes && outcomes.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="mx-auto w-full px-4 md:px-6 xl:max-w-[80rem] xl:px-8">
            <h2 className="text-element-high-em mb-12 text-center text-2xl font-medium md:text-3xl">
              {outcomesTitle}
            </h2>
            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2 lg:grid-cols-3">
              {outcomes.map((outcome, index) => (
                <div key={index} className="text-center">
                  <p className="text-element-high-em text-3xl font-bold text-orange-600 md:text-4xl">
                    {outcome.metric}
                  </p>
                  <p className="text-element-mid-em mt-2 text-sm">
                    {outcome.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonial Section */}
      {testimonial && (
        <section className="border-y border-gray-200 bg-background-lighter py-16 md:py-20">
          <div className="mx-auto w-full px-4 md:px-6 xl:max-w-[80rem] xl:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <blockquote className="text-element-high-em text-xl font-medium md:text-2xl">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center justify-center gap-4">
                {testimonial.image && (
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      fill
                      alt={testimonial.author}
                      className="object-cover"
                      src={testimonial.image}
                    />
                  </div>
                )}
                <div className="text-left">
                  <p className="text-element-high-em font-medium">
                    {testimonial.author}
                  </p>
                  <p className="text-element-mid-em text-sm">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {faqs && faqs.length > 0 && (
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
                    <span
                      className="mt-1 flex size-6 shrink-0 items-center justify-center transition-transform duration-200"
                    >
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
                      {faq.answer.split('\n\n').map((paragraph, i) => (
                        <p key={i} className={i > 0 ? 'mt-4' : ''}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Use Cases */}
      {relatedUseCases && relatedUseCases.length > 0 && (
        <section className="border-t border-gray-200 py-16">
          <div className="mx-auto w-full px-4 md:px-6 xl:max-w-[80rem] xl:px-8">
            <h3 className="text-element-mid-em mb-10 text-center text-sm font-medium uppercase tracking-wide">
              Related Use Cases
            </h3>
            <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-3">
              {relatedUseCases.map((useCase) => (
                <Link
                  key={useCase.href}
                  className="group flex flex-col rounded-xl border border-gray-200 bg-white p-5 transition-all hover:border-gray-300 hover:shadow-md"
                  href={useCase.href}
                >
                  <span className="text-element-high-em text-sm font-medium group-hover:text-orange-600">
                    {useCase.name}
                  </span>
                  {useCase.description && (
                    <span className="text-element-mid-em mt-1 text-xs">
                      {useCase.description}
                    </span>
                  )}
                </Link>
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

