import type { Metadata } from 'next';
import Link from 'next/link';

import { Button } from '@/common/components/button';
import { Footer } from '@/common/components/footer';
import { SubHeader } from '@/common/components/subheader';
import { BrandColor } from '@/common/types/common';
import { CTASection } from '@/module/cta';

export const metadata: Metadata = {
  title: 'AI Patent Solutions | &AI',
  description:
    'Find the right AI-powered patent litigation solution for your team. Solutions for law firms and in-house teams.',
};

const solutionsByType = [
  {
    name: 'Law Firms',
    href: '/solutions/law-firms',
    description:
      'From Am Law 100 to IP Boutiques—slash write-offs, capture billables, and deliver faster results.',
  },
  {
    name: 'In-House',
    href: '/solutions/in-house',
    description:
      'Faster compliance, better counsel selection. Litigation prep, infringement mining, and transaction support.',
  },
];

export default function SolutionsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="mx-auto w-full px-4 py-16 md:px-6 md:py-20 xl:max-w-[80rem] xl:px-8 xl:py-24">
        <div className="max-w-4xl">
          <SubHeader brand={BrandColor.PRIMARY} title="Solutions" />
          <h1 className="text-element-high-em mt-6 text-4xl md:text-5xl xl:text-6xl">
            AI-powered patent litigation for{' '}
            <span className="font-martina italic">every team</span>
          </h1>
          <p className="text-element-mid-em mt-6 text-lg xl:text-xl">
            Whether you&apos;re at a law firm or in-house—&AI has solutions
            designed for your workflows.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/book-demo">Book demo</Button>
            <Button href="/pricing" variant="secondary">
              See pricing
            </Button>
          </div>
        </div>
      </section>

      {/* By Type Section */}
      <section className="bg-background-lighter border-y border-gray-200 py-16 md:py-20">
        <div className="mx-auto w-full px-4 md:px-6 xl:max-w-[80rem] xl:px-8">
          <h2 className="text-element-high-em mb-4 text-2xl font-medium md:text-3xl">
            By Type
          </h2>
          <p className="text-element-mid-em mb-10 max-w-2xl text-lg">
            Select your team type to see relevant use cases and workflows.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {solutionsByType.map((solution) => (
              <Link
                key={solution.href}
                className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-lg"
                href={solution.href}
              >
                <h3 className="text-element-high-em mb-2 text-xl font-medium group-hover:text-orange-600">
                  {solution.name}
                </h3>
                <p className="text-element-mid-em flex-1 text-sm">
                  {solution.description}
                </p>
                <div className="mt-4 flex items-center text-sm font-medium text-orange-600">
                  Explore
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

      {/* CTA Section */}
      <CTASection showPricing />

      <Footer />
    </main>
  );
}
