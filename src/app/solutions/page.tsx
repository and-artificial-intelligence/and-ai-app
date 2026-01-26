import type { Metadata } from 'next';

import Link from 'next/link';

import { Button } from '@/common/components/button';
import { Footer } from '@/common/components/footer';
import { SubHeader } from '@/common/components/subheader';
import { BrandColor } from '@/common/types/common';
import { CTASection } from '@/module/cta';

export const metadata: Metadata = {
  title: 'AI Patent Solutions by Type & Use Case | &AI',
  description:
    'Find the right AI-powered patent litigation solution for your team. Solutions for law firms, in-house teams, and litigation funds across defense, plaintiff, and transaction workflows.',
};

const solutionsByType = [
  {
    name: 'Law Firms',
    href: '/solutions/law-firms',
    description: 'From Am Law 100 to IP Boutiques—slash write-offs, capture billables, and deliver faster results.',
  },
  {
    name: 'In-House',
    href: '/solutions/in-house',
    description: 'Faster compliance, better counsel selection. Litigation prep, infringement mining, and transaction support.',
  },
  {
    name: 'Litigation Funds',
    href: '/solutions/litigation-funds',
    description: 'Discover opportunities at scale. Evaluate case strength and make faster funding decisions.',
  },
];

const solutionsByUseCase = [
  {
    name: 'Defense Litigation',
    href: '/solutions/defense-litigation',
    description: 'Build stronger invalidity positions with rapid prior art search and claim chart generation.',
  },
  {
    name: 'Defense Business Development',
    href: '/solutions/defense-business-development',
    description: 'Win more mandates with rapid preliminary assessments that demonstrate value.',
  },
  {
    name: 'Plaintiff Litigation',
    href: '/solutions/plaintiff-litigation',
    description: 'Find evidence of infringement at scale and build compelling cases efficiently.',
  },
  {
    name: 'Infringement Mining',
    href: '/solutions/infringement-mining',
    description: 'Evidence-of-use search at scale—find infringing products and generate EOU charts.',
  },
  {
    name: 'Transactions',
    href: '/solutions/transactions',
    description: 'Accelerate IP due diligence for M&A and portfolio transactions.',
  },
  {
    name: 'Litigation Funding',
    href: '/solutions/litigation-funding',
    description: 'Evaluate patent strength and infringement evidence for smarter funding decisions.',
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
            Whether you&apos;re at a law firm, in-house, or a litigation funder—and whether you&apos;re working on defense, plaintiff, or transaction matters—&AI has solutions designed for your workflows.
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
      <section className="border-y border-gray-200 bg-background-lighter py-16 md:py-20">
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

      {/* By Use Case Section */}
      <section className="py-16 md:py-20">
        <div className="mx-auto w-full px-4 md:px-6 xl:max-w-[80rem] xl:px-8">
          <h2 className="text-element-high-em mb-4 text-2xl font-medium md:text-3xl">
            By Use Case
          </h2>
          <p className="text-element-mid-em mb-10 max-w-2xl text-lg">
            Select a workflow to see how &AI can help.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutionsByUseCase.map((solution) => (
              <Link
                key={solution.href}
                className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-lg"
                href={solution.href}
              >
                <h3 className="text-element-high-em mb-2 text-lg font-medium group-hover:text-orange-600">
                  {solution.name}
                </h3>
                <p className="text-element-mid-em flex-1 text-sm">
                  {solution.description}
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

      {/* CTA Section */}
      <CTASection showPricing />

      <Footer />
    </main>
  );
}
