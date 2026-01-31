import Image from 'next/image';

import { Paragraph } from '@/common/components/animated-text/paragraph';
import { Button } from '@/common/components/button';
import { Footer } from '@/common/components/footer';
import {
  AnonymousIcon,
  ArrowTopRightIcon,
  AtIcon,
  BoxGroupIcon,
  CornerDownIcon,
  DatabaseSlashIcon,
  FirstRoundIcon,
  Shield2CheckIcon,
  SvaIcon,
  YCombinatorIcon,
} from '@/common/components/icon';
import { SchemaScript } from '@/common/components/schema-script';
import { SubHeader } from '@/common/components/subheader';
import { TypingAnimation } from '@/common/components/typing-animation';
import { Links } from '@/common/constants/links';
import { cn } from '@/common/functions/cn';
import { BrandColor } from '@/common/types/common';

import {
  generateBreadcrumbSchema,
  generateSoftwareApplicationSchema,
} from '@/lib/schema';
import { CTASection } from '@/module/cta';
import { FeaturesSection } from '@/module/features';
import { PrivacyCard, PrivacyCardProps } from '@/module/privacy';

const homeBreadcrumb = [{ name: 'Home', url: 'https://tryandai.com' }];

export default function Home() {
  const typingTexts: string[] = [
    'Hey Andy, how is "pivot access" used in the prosecution history?',
    `Hey Andy, what does Asano '782 say about the architecture of the assembly?`,
    'Hey Andy, draft me a defense-side pitch deck for this complaint using my go-to template.',
  ];

  const privacy: PrivacyCardProps[] = [
    {
      imageSrc: '/privacy-logo-1.png',
      title: 'No training',
      description:
        "&AI and subprocessors never train on your or your clients' data, with strict zero data retention policies configured.",
      icon: <AnonymousIcon />,
    },
    {
      imageSrc: '/privacy-logo-2.png',
      title: 'Encryption and authentication',
      description:
        '&AI protects sensitive case information with SAML SSO, role-based access controls, and encryption in transit and at rest.',
      icon: <Shield2CheckIcon />,
    },
    {
      imageSrc: '/privacy-logo-3.png',
      title: 'Public-only mode',
      description:
        '&AI can be used in public-only mode, disabling all ability to access or store confidential information.',
      icon: <DatabaseSlashIcon />,
    },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      <SchemaScript
        schema={[
          generateSoftwareApplicationSchema({
            name: '&AI',
            description:
              '&AI delivers trial-ready work product for patent litigators — fast enough for pitches, strong enough for court.',
            url: 'https://tryandai.com',
          }),
          generateBreadcrumbSchema(homeBreadcrumb),
        ]}
      />

      {/* HERO SECTION */}
      <section
        className="flex flex-col items-center gap-3 px-4 pt-6 md:gap-16 md:px-6 md:pt-24 lg:mx-auto lg:flex-row lg:items-end lg:pt-14 xl:px-8 xl:pt-10"
        id="hero"
      >
        {/* LANDING IMAGE */}
        <div className="relative order-1 aspect-square w-32 rounded-2xl md:w-[34.8125rem] lg:order-2 xl:w-[36.375rem]">
          <Image
            fill
            alt="AI-powered patent litigation workspace illustration"
            className="scale-110 object-contain"
            src="/Illustration-2.png"
          />
        </div>

        <div className="lg:h-fill-available order-2 flex flex-col items-center justify-center lg:order-1 lg:max-w-[360px] lg:min-w-[360px] lg:items-start xl:max-w-[602px] xl:min-w-[602px]">
          <div className="space-y-14 pt-4 md:space-y-20 md:pt-0 lg:space-y-24">
            <div className="space-y-8 md:space-y-10 lg:space-y-12">
              <div className="space-y-6 md:space-y-8">
                <h1 className="md:text-5.5xl text-center text-5xl lg:text-left xl:text-7xl">
                  Scale your
                  <br className="block md:hidden lg:block" />
                  <span className="font-martina italic"> patent expertise</span>
                </h1>
                <p
                  className={cn(
                    'lg:hidden xl:block',
                    'text-element-mid-em text-center text-base md:max-w-[560px] lg:max-w-[22rem] lg:text-left xl:max-w-[26rem] xl:text-lg',
                  )}
                >
                  &AI delivers trial-ready work product for patent litigators —
                  fast enough for pitches, strong enough for court.
                </p>
                <p
                  className={cn(
                    'hidden lg:block xl:hidden',
                    'text-element-mid-em text-center text-base md:max-w-[560px] lg:max-w-[22rem] lg:text-left xl:max-w-[26rem] xl:text-lg',
                  )}
                >
                  &AI delivers trial-ready work product for patent litigators —
                  fast enough for pitches, strong enough for court.
                </p>
              </div>
              <div className="flex items-center justify-center gap-3 lg:justify-start">
                <Button href="/book-demo">Free trial</Button>
                <Button href="/pricing" variant="secondary">
                  See pricing
                </Button>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-10 lg:flex-col lg:items-start lg:justify-start lg:gap-6 xl:flex-row xl:gap-10">
              <p className="text-element-mid-em font-mono text-sm capitalize md:max-w-40 lg:max-w-max xl:max-w-40">
                BACKED BY WORLD-CLASS INVESTORS
              </p>
              <div className="flex items-center gap-8">
                <FirstRoundIcon className="text-element-mid-em" />
                <YCombinatorIcon className="text-element-mid-em" />
                <BoxGroupIcon className="text-element-mid-em" />
                <SvaIcon className="text-element-mid-em" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturesSection />

      {/* ANIMATED TEXT SECTION */}
      <section
        className="mx-auto px-4 py-16 md:px-6 md:pt-[120px] md:pb-24 xl:max-w-[80rem] xl:px-8 xl:py-24 xl:pt-40 xl:pb-[120px]"
        id="assistant"
      >
        <div className="space-y-16">
          <div className="flex flex-col gap-8">
            <SubHeader brand={BrandColor.PRIMARY} title="Assistant" />
            <div className="relative w-full py-2 lg:px-10 xl:px-24">
              <Paragraph value="             Andy is an AI assistant that turns your instructions into high-quality work product. From drafting invalidity contentions to building pitch decks, and everything in-between." />
            </div>
          </div>

          <div className="lg:px-10 xl:px-24">
            <div className="border-gray-dark/10 shadow-gray-dark/10 rounded-lg border bg-white/30 shadow">
              <div className="border-gray-dark/10 flex h-[5rem] items-start border-b p-4">
                <TypingAnimation className="w-full" texts={typingTexts} />
              </div>
              <div className="flex items-center justify-between p-2">
                <Button
                  className="border-gray-300"
                  iconLeft={<AtIcon className="text-element-low-em!" />}
                  variant="secondary"
                >
                  Add context
                </Button>
                <Button iconRight={<CornerDownIcon />}>Ask Andy</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW SECTION //TODO: replace video placeholder*/}
      {/* <section
        className="mx-auto flex flex-col gap-12 px-4 py-12 md:px-6 md:py-20 xl:max-w-[80rem] xl:px-8 xl:py-24"
        id="workflow"
      >
        <div className="flex flex-col items-end gap-6 md:flex-row lg:items-stretch lg:gap-8">
          <div className="space-y-3 md:min-w-[19.75rem] lg:min-w-[25rem] xl:min-w-[44rem]">
            <SubHeader brand={BrandColor.PRIMARY} title="Workflows" />
            <h2 className="font-martina text-element-high-em text-4.5xl xl:text-5xl">
              Your workflow, powered by Andy
            </h2>
          </div>
          <p className="text-element-mid-em lg:pt-10">
            Automate frequent tasks with end-to-end workflows that mirror your
            process. Andy executes exactly how you would, in the format you
            need.
          </p>
        </div>
        <div>
          <div className="border-element-sketch h-[10.375rem] w-full rounded border bg-gray-300 md:h-[20.6875rem] lg:h-[28.0625rem] xl:h-[35rem]" />
        </div>
      </section> */}

      {/* BUILT-FOR-PATENTS SECTION */}
      <section className="mx-auto flex w-full flex-col gap-16 px-4 py-16 md:gap-12 md:px-6 md:py-20 lg:gap-20 xl:max-w-[80rem] xl:px-8 xl:py-24">
        <div className="flex flex-col items-center gap-6 xl:gap-8">
          <div className="flex w-full flex-col items-center gap-3">
            <div className="w-full">
              <SubHeader brand={BrandColor.PRIMARY} title="Context" />
            </div>
            <h2 className="font-martina text-element-high-em text-4.5xl pt-6 text-center xl:text-5xl">
              Everything you need in one place
            </h2>
          </div>
          <p className="text-element-mid-em text-center md:max-w-[40rem]">
            &AI automatically surfaces and processes the full patent family,
            prosecution history, and prior cases. Focus on building stronger
            arguments, not organizing data.
          </p>
        </div>
        <div className="px-4 md:px-8 lg:px-12">
          <div className="border-gray-dark/5 relative aspect-[16/9] w-full rounded-xs border bg-gray-200">
            <Image
              fill
              alt="Patent document analysis showing automated claim mapping and prior art organization"
              className="object-contain object-center"
              src="/built-for-patents-illustration.png"
            />
          </div>
        </div>
      </section>

      {/* PRIVACY SECTION */}
      <section
        className="relative mx-auto flex w-full flex-col gap-16 px-4 py-16 md:gap-12 md:px-6 md:py-20 lg:flex-row lg:justify-between lg:gap-8 lg:py-0 xl:max-w-[80rem] xl:px-8"
        id="privacy"
      >
        <div className="flex flex-col gap-12 md:max-w-[25rem] lg:sticky lg:top-12 lg:self-start lg:pt-24 lg:pb-24 xl:max-w-[30rem]">
          <div className="space-y-6">
            <div className="space-y-3">
              <SubHeader brand={BrandColor.PRIMARY} title="Security" />
              <h2 className="font-martina text-element-high-em text-4.5xl xl:text-5xl">
                Protect confidentiality with confidence
              </h2>
            </div>
            <p className="text-element-mid-em lg:pt-10">
              Enterprise-grade security and compliance built for law. Your data
              stays private, secure, and under your control.
            </p>
          </div>
          <Button
            external
            className="w-fit"
            href={Links.Compliance}
            iconRight={<ArrowTopRightIcon />}
          >
            Trust center
          </Button>
        </div>
        <div className="space-y-12 md:space-y-16 lg:pt-20 lg:pb-24">
          {privacy.map((item) => (
            <PrivacyCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <CTASection />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
