import { Button } from '@/common/components/button';
import { Footer } from '@/common/components/footer';
import { Navbar } from '@/common/components/navbar';
import { SubHeader } from '@/common/components/subheader';
import { Links } from '@/common/constants/links';
import { cn } from '@/common/functions/cn';
import { BrandColor } from '@/common/types/common';

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
}

export default function Pricing() {
  const pricingTiers: PricingTier[] = [
    {
      name: 'Basic',
      price: '$10',
      description: 'Our most popular plan.',
      features: [
        'Basic functionality',
        'Access to basic features',
        'Basic reporting and analytics',
        'Up to 10 individual users',
        '20 GB individual data each user',
        'Basic chat and email support',
      ],
    },
    {
      name: 'Premium',
      price: '$35',
      description: 'Our most popular plan.',
      features: [
        'Basic, plus',
        'Access to all basic features',
        'Basic reporting and analytics',
        'Up to 10 individual users',
        '20 GB individual data each user',
        'Basic chat and email support',
      ],
    },
    {
      name: 'Enterprise',
      price: '$50',
      description: 'Our most popular plan.',
      features: [
        'Premium, plus',
        'Access to basic features',
        'Basic reporting and analytics',
        'Up to 10 individual users',
        '20 GB individual data each user',
        'Basic chat and email support',
      ],
    },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      <section className="relative mx-auto w-full flex-1 px-4 py-16 md:px-6 md:py-20 xl:max-w-[80rem] xl:px-8 xl:py-24">
        <div className="mb-16 flex flex-col items-center gap-4 text-center md:mb-20">
          <SubHeader brand={BrandColor.PRIMARY} title="Flexible plans" />
          <h1 className="text-element-high-em text-5xl md:text-6xl">
            Plan that <span className="font-martina italic">grow</span> with you
          </h1>
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
                    <span className="text-element-high-em text-4xl font-medium">
                      {tier.price}
                    </span>
                    <span className="text-element-mid-em text-sm">/month</span>
                  </div>
                  <p className="text-element-mid-em text-sm">
                    {tier.description}
                  </p>
                </div>

                <Button fullWidth className="mb-6" href="/book-demo">
                  Book demo
                </Button>

                <div className="border-gray-dark/10 flex-1 space-y-3 border-t pt-6">
                  <p className="text-element-high-em text-sm font-medium">
                    {tier.name === 'Basic'
                      ? 'Basic functionality'
                      : tier.name === 'Premium'
                        ? 'Basic, plus'
                        : 'Premium, plus'}
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

      <Footer />
    </main>
  );
}
