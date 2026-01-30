'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { Button } from '@/common/components/button';
import { Footer } from '@/common/components/footer';
import { SubHeader } from '@/common/components/subheader';
import { BrandColor } from '@/common/types/common';
import { CTASection } from '@/module/cta';

export interface UseCaseLink {
  name: string;
  href: string;
  description: string;
}

export interface ValueProp {
  title: string;
  description: string;
  icon?: 'speed' | 'quality' | 'scale' | 'savings';
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface SolutionsByTypePageProps {
  // Hero
  badge: string;
  h1: string;
  h1Highlight?: string;
  subheading: string;
  description: string;

  // Hero image (optional)
  heroImage?: string;

  // Value props section
  valueProps?: ValueProp[];

  // Use case links - what this type of customer can do (optional)
  useCasesTitle?: string;
  useCasesDescription?: string;
  useCases?: UseCaseLink[];

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

  // CTAs
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function SolutionsByTypePage({
  badge,
  h1,
  h1Highlight,
  subheading,
  description,
  heroImage,
  valueProps,
  useCasesTitle = 'How teams like yours use &AI',
  useCasesDescription,
  useCases,
  testimonial,
  faqs,
  primaryCta = { label: 'Book demo', href: '/book-demo' },
  secondaryCta = { label: 'See pricing', href: '/pricing' },
}: SolutionsByTypePageProps) {
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
                  priority
                  alt={h1}
                  className="object-cover"
                  src={heroImage}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Value Props Section */}
      {valueProps && valueProps.length > 0 && (
        <section className="border-y border-gray-200 bg-background-lighter py-16 md:py-20">
          <div className="mx-auto w-full px-4 md:px-6 xl:max-w-[80rem] xl:px-8">
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
              {valueProps.map((prop, index) => (
                <div key={index} className="w-full max-w-[280px] text-center sm:w-auto">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                    <ValuePropIcon type={prop.icon} />
                  </div>
                  <h3 className="text-element-high-em mb-2 text-lg font-medium">
                    {prop.title}
                  </h3>
                  <p className="text-element-mid-em text-sm">
                    {prop.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Use Cases Section */}
      {useCases && useCases.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="mx-auto w-full px-4 md:px-6 xl:max-w-[80rem] xl:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-element-high-em text-2xl font-medium md:text-3xl">
                {useCasesTitle}
              </h2>
              {useCasesDescription && (
                <p className="text-element-mid-em mx-auto mt-4 max-w-2xl text-lg">
                  {useCasesDescription}
                </p>
              )}
            </div>
            <div className={`mx-auto grid gap-6 md:grid-cols-2 ${useCases.length > 4 ? 'max-w-5xl lg:grid-cols-3' : 'max-w-4xl'}`}>
              {useCases.map((useCase) => (
                <Link
                  key={useCase.href}
                  className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-lg"
                  href={useCase.href}
                >
                  <h3 className="text-element-high-em mb-2 text-lg font-medium group-hover:text-orange-600">
                    {useCase.name}
                  </h3>
                  <p className="text-element-mid-em flex-1 text-sm">
                    {useCase.description}
                  </p>
                  <div className="mt-4 flex items-center text-sm font-medium text-orange-600">
                    Learn more
                    <svg
                      className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 5l7 7-7 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                    </svg>
                  </div>
                </Link>
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

      {/* CTA Section */}
      <CTASection showPricing />

      <Footer />
    </main>
  );
}

function ValuePropIcon({ type }: { type?: 'speed' | 'quality' | 'scale' | 'savings' }) {
  switch (type) {
    case 'speed':
      return (
        <svg className="h-6 w-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        </svg>
      );
    case 'quality':
      return (
        <svg className="h-6 w-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        </svg>
      );
    case 'scale':
      return (
        <svg className="h-6 w-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        </svg>
      );
    case 'savings':
      return (
        <svg className="h-6 w-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        </svg>
      );
    default:
      return (
        <svg className="h-6 w-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        </svg>
      );
  }
}
