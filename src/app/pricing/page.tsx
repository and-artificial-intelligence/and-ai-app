'use client';
import { useState } from 'react';

import { Button } from '@/common/components/button';
import { Footer } from '@/common/components/footer';
import { SubHeader } from '@/common/components/subheader';
import Tab from '@/common/components/tab';
import { BrandColor } from '@/common/types/common';

type BillingPeriod = 'monthly' | 'yearly';

interface FAQItem {
  question: string;
  answer: string;
}

interface PricingTier {
  name: string;
  monthlyPrice: string | null;
  yearlyPrice: string | null;
  monthlyCredits: number | null;
  yearlyCredits: number | null;
  monthlyCreditPrice: string | null;
  yearlyCreditPrice: string | null;
  description: string;
  features: string[];
}

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>('monthly');
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqItems: FAQItem[] = [
    {
      question: 'What counts as a credit?',
      answer:
        'Every time you use an AI action on &AI — for example, when you search for prior art, build a claim chart, or interact with Andy — you use credits. Each action consumes credits based on the operation type, configurations, and amount of content processed.',
    },
    {
      question: 'How can I get started?',
      answer:
        "Book a demo through our contact form or email support@tryandai.com and we'll walk you through the platform and answer any questions you have.",
    },
    {
      question: 'How does billing work?',
      answer:
        'We offer a monthly subscription model with credits that can be used for AI actions. Credits are pre-purchased and not refundable or transferable. Payments are processed through Stripe.\n\nFor Enterprise customers, we offer a custom pricing model based on your needs.',
    },
    {
      question: 'How does public-only mode work?',
      answer:
        'Public-only mode is a feature that allows you to use &AI without storing or accessing any confidential information, and it is the default mode for all Core users. With public-only mode enabled, you are unable to upload any documents or provide any context or prompts for the models. This makes it impossible for you to store any confidential information with &AI.\n\n Pro and Enterprise customers can enable public-only mode by contacting support@tryandai.com.',
    },
    {
      question: 'I have a question not answered yet. Who can I talk to?',
      answer:
        "We're here to help! Book a demo to speak with a member of our team directly, or reach out to support@tryandai.com.",
    },
  ];

  const pricingTiers: PricingTier[] = [
    {
      name: 'Core',
      monthlyPrice: '$375',
      yearlyPrice: '$3,600',
      monthlyCredits: 1500,
      yearlyCredits: 18000,
      monthlyCreditPrice: '$0.25',
      yearlyCreditPrice: '$0.20',
      description: '',
      features: [
        'Limited, public-only access to &AI',
        'Patent, NPL, and product search',
        'Prosecution, previous IPRs, and global family',
        'Claim construction',
        'Invalidity and evidence-of-use charts',
        'Default draft and pitch templates',
        'Exports to Word, PowerPoint, and Excel',
      ],
    },
    {
      name: 'Pro',
      monthlyPrice: '$625',
      yearlyPrice: '$6,000',
      monthlyCredits: 2500,
      yearlyCredits: 30000,
      monthlyCreditPrice: '$0.25',
      yearlyCreditPrice: '$0.20',
      description: '',
      features: [
        'Unrestricted access to &AI',
        'Andy, the AI patent assistant',
        'Portfolio and document tables',
        'Document uploads',
        'Custom prompt libraries',
        'Custom draft and table templates',
        'Instructions and annotations',
      ],
    },
    {
      name: 'Enterprise',
      monthlyPrice: null,
      yearlyPrice: null,
      monthlyCredits: null,
      yearlyCredits: null,
      monthlyCreditPrice: null,
      yearlyCreditPrice: null,
      description: 'Customized for your needs.',
      features: [
        'SSO and RBAC',
        'Priority support',
        'Single-tenant architecture',
        'Self-hosted models',
        'Passthrough invoicing',
        'Workflow automation',
        'Custom integrations',
      ],
    },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      <section className="relative mx-auto w-full flex-1 px-4 py-16 md:px-6 md:py-20 xl:max-w-[80rem] xl:px-8 xl:py-24">
        <div className="mb-16 flex flex-col items-center gap-4 text-center md:mb-20">
          <SubHeader brand={BrandColor.PRIMARY} title="Pricing" />
          <h1 className="text-element-high-em text-5xl md:text-6xl">
            From essentials to{' '}
            <span className="font-martina italic">unlimited</span>
          </h1>
          <div className="mt-6">
            <Tab size="responsive">
              <Tab.Button
                isActive={billingPeriod === 'monthly'}
                size="responsive"
                onClick={() => setBillingPeriod('monthly')}
              >
                Monthly
              </Tab.Button>
              <Tab.Button
                isActive={billingPeriod === 'yearly'}
                size="responsive"
                onClick={() => setBillingPeriod('yearly')}
              >
                <span className="flex items-center gap-1.5">
                  Annual
                  <span className="text-xs font-medium text-orange-500">
                    -20%
                  </span>
                </span>
              </Tab.Button>
            </Tab>
          </div>
        </div>

        <div className="relative -my-12 py-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-[50%] left-[50%] z-0 mr-[-50vw] ml-[-50vw] w-screen"
          >
            <div className="relative h-full w-full [background-image:linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_2%,rgba(0,0,0,1)_98%,rgba(0,0,0,0)_100%)] [background-size:20px_20px,20px_20px] [background-position:0_0,0_0] [background-repeat:repeat,repeat] [mask-mode:alpha] [mask-repeat:no-repeat] [-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_2%,rgba(0,0,0,1)_98%,rgba(0,0,0,0)_100%)] [-webkit-mask-repeat:no-repeat]" />
          </div>

          <div className="relative z-10 grid gap-6 md:grid-cols-3 lg:gap-8">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className="bg-background-lighter border-gray-dark/10 flex flex-col rounded-lg border p-6 shadow-sm md:p-8"
              >
                <div className="mb-6 space-y-1">
                  <h2 className="text-element-mid-em text-sm font-medium">
                    {tier.name}
                  </h2>
                  <div className="flex items-baseline gap-1">
                    {tier.monthlyPrice || tier.yearlyPrice ? (
                      <>
                        <span className="text-element-high-em text-4xl font-medium">
                          {billingPeriod === 'monthly'
                            ? tier.monthlyPrice
                            : tier.yearlyPrice}
                        </span>
                        <span className="text-element-mid-em text-sm">
                          /
                          {billingPeriod === 'monthly'
                            ? 'monthly user'
                            : 'annual user'}
                        </span>
                      </>
                    ) : (
                      <span className="text-element-high-em text-4xl font-medium">
                        Custom
                      </span>
                    )}
                  </div>
                  {(billingPeriod === 'monthly'
                    ? tier.monthlyCredits
                    : tier.yearlyCredits) && (
                    <p className="text-element-mid-em text-sm">
                      {(billingPeriod === 'monthly'
                        ? tier.monthlyCredits
                        : tier.yearlyCredits
                      )?.toLocaleString()}{' '}
                      credits included,{' '}
                      {billingPeriod === 'monthly'
                        ? tier.monthlyCreditPrice
                        : tier.yearlyCreditPrice}
                      /credit after
                    </p>
                  )}
                  <p className="text-element-mid-em text-sm">
                    {tier.description}
                  </p>
                </div>

                <Button fullWidth className="mb-6" href="/book-demo">
                  Free trial
                </Button>

                <div className="border-gray-dark/10 flex-1 space-y-3 border-t pt-6">
                  <p className="text-element-high-em text-sm font-medium">
                    {tier.name === 'Core'
                      ? 'Core:'
                      : tier.name === 'Pro'
                        ? 'Core, plus:'
                        : 'Pro, plus:'}
                  </p>
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm"
                      >
                        <svg
                          className="text-element-high-em mt-0.5 size-4 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M5 13l4 4L19 7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-element-mid-em">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full px-4 py-16 md:px-6 md:py-20 xl:max-w-[80rem] xl:px-8 xl:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16 xl:gap-24">
          <div>
            <h2 className="font-martina text-element-high-em text-4.5xl xl:text-5xl">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border-gray-dark/10 border-b last:border-b-0"
              >
                <button
                  aria-expanded={openFAQ === index}
                  className="text-element-high-em hover:text-element-high-em/70 flex w-full items-start justify-between gap-4 py-6 text-left transition-colors"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <span className="text-lg font-medium">{item.question}</span>
                  <span
                    className="mt-1 flex size-6 shrink-0 items-center justify-center transition-transform duration-200"
                    style={{
                      transform:
                        openFAQ === index ? 'rotate(0deg)' : 'rotate(0deg)',
                    }}
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
                    {item.answer.split('\n\n').map((paragraph, i) => (
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

      <Footer />
    </main>
  );
}
