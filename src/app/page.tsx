'use client';
import { useMediaQuery } from 'usehooks-ts';

import { Button } from '@/common/components/button';
import {
  AnonymousIcon,
  ArrowTopRightIcon,
  BoxGroupIcon,
  DatabaseSlashIcon,
  FirstRoundIcon,
  Shield2CheckIcon,
  SvaIcon,
  YCombinatorIcon,
} from '@/common/components/icon';
import Image from 'next/image';
import { SubHeader } from '@/common/components/subheader';
import {
  FeatureCard,
  FeatureCardProps,
} from '@/module/privacy/components/feature-card';
import { FeatureLogo1 } from '@/module/privacy/components/logo-1';
import { FeatureLogo3 } from '@/module/privacy/components/logo-3';
import { FeatureLogo2 } from '@/module/privacy/components/logo-2';

export default function Home() {
  const isTablet = useMediaQuery('(min-width: 768px)'); // md

  const features: FeatureCardProps[] = [
    {
      featureIcon: <FeatureLogo1 />,
      title: 'No training',
      description:
        'AndAI does not train models on your data. Zero-retention with configured model providers.',
      icon: <AnonymousIcon />,
    },
    {
      featureIcon: <FeatureLogo2 />,
      title: 'Access and Encryption',
      description:
        'SAML SSO, role-based access controls, and encryption in transit and at rest.',
      icon: <Shield2CheckIcon />,
    },
    {
      icon: <DatabaseSlashIcon />,
      featureIcon: <FeatureLogo3 />,
      title: 'Data control',
      description:
        'On request, AndAI deletes organization, user, or project data.',
    },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      {/* HEADER */}
      <div className="border-b-element-sketch h-16 border-b" />

      {/* HERO SECTION */}
      <section className="flex flex-col items-center gap-12 px-4 pt-8 md:gap-16 md:px-6 md:pt-24 lg:mx-auto lg:flex-row lg:items-end lg:pt-14 xl:px-8 xl:pt-10">
        <div className="flex flex-col items-center justify-center lg:max-w-[22.5rem] lg:min-w-[22.5rem] xl:max-w-[37.625rem] xl:min-w-[37.625rem]">
          <div className="space-y-14 pt-8 md:space-y-20 md:pt-0 lg:space-y-24">
            <div className="space-y-8 md:space-y-10 lg:space-y-12">
              <div className="space-y-6 md:space-y-8">
                <h1 className="md:text-5.5xl text-center text-5xl lg:text-left xl:text-7xl">
                  Scale your
                  <br className="block md:hidden lg:block" />
                  <span className="font-martina italic"> patent expertise</span>
                </h1>
                <p className="text-element-mid-em text-center text-base md:max-w-[37rem] lg:max-w-[360px] lg:text-left xl:max-w-[480px] xl:text-lg">
                  Engineered for patents, AndAI executes litigation-
                  {!isTablet && <br />}
                  grade work at machine scale. You set strategy;
                  {!isTablet && <br />} AndAI delivers the work.
                </p>
              </div>
              <div className="flex items-center justify-center gap-3 lg:justify-start">
                <Button>Book demo</Button>
                <Button variant="secondary">Learn more</Button>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-10 lg:flex-col lg:items-start lg:justify-start lg:gap-6 xl:flex-row xl:gap-10">
              <p className="text-element-mid-em font-mono text-sm capitalize md:max-w-40 lg:max-w-max xl:max-w-40">
                Backed by world-class investors
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

        {/* LANDING IMAGE */}
        <div className="relative h-[361px] w-[375px] rounded-2xl md:h-[536px] md:w-[557px] xl:h-[560px] xl:w-[582px]">
          <Image
            className="absolute scale-110"
            alt="landing-page-bg"
            src="/illustration.png"
            fill
          />
        </div>
      </section>

      {/* PRIVACY SECTION */}
      <section className="relative mx-auto flex w-full flex-col gap-16 px-4 py-16 md:gap-12 md:px-6 md:py-20 lg:flex-row lg:justify-between lg:gap-8 lg:py-0 xl:max-w-[1280px] xl:px-8">
        <div className="flex flex-col gap-12 md:max-w-[400px] lg:sticky lg:top-1/2 lg:self-start lg:pt-24 xl:max-w-[480px]">
          <div className="space-y-6">
            <div className="space-y-3">
              <SubHeader brand="primary" title="Privacy" />
              <h2 className="font-martina text-element-high-em text-4.5xl xl:text-5xl">
                Your data, your rules
              </h2>
            </div>
            <p className="text-element-mid-em lg:pt-10">
              &AI is built on the leading security standards and best practices
              to ensure your data is safe and secure.
            </p>
          </div>
          <Button className="w-fit" iconRight={<ArrowTopRightIcon />}>
            Trust center
          </Button>
        </div>
        <div className="space-y-12 md:space-y-16 lg:pt-20">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      {/* WORKFLOW SECTION */}
      <section className="mx-auto flex flex-col gap-12 px-4 py-12 md:px-6 md:py-20 xl:max-w-[1280px] xl:px-8 xl:py-24">
        <div className="flex flex-col items-end gap-6 md:flex-row lg:items-stretch lg:gap-8">
          <div className="space-y-3 md:min-w-[316px] lg:min-w-[400px] xl:min-w-[704px]">
            <SubHeader brand="primary" title="Workflows" />
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
          {/* video placeholder */}
          <div className="border-element-sketch h-[166px] w-full rounded border bg-gray-300 md:h-[331px] lg:h-[449px] xl:h-[560px]" />
        </div>
      </section>

      {/* BUILT-FOR-PATENTS SECTION */}
      <section className="mx-auto flex w-full flex-col gap-16 px-4 py-16 md:gap-12 md:px-6 md:py-20 lg:gap-20 xl:max-w-[1280px] xl:px-8 xl:py-24">
        <div className="flex flex-col items-center gap-6 xl:gap-8">
          <div className="flex flex-col items-center gap-3">
            <SubHeader brand="primary" title="Built for Patents" />
            <h2 className="font-martina text-element-high-em text-4.5xl text-center xl:text-5xl">
              All the context in one place, accessible
            </h2>
          </div>
          <p className="text-element-mid-em text-center md:max-w-[640px]">
            Specialized processing across patent types and jurisdictions. Full
            context from the patent family, prosecution history, and prior
            cases.
          </p>
        </div>
        <div>
          <div className="border-gray-dark/5 relative h-[332px] w-full rounded-xs border bg-gray-200 lg:h-[441px] xl:h-[519px]">
            <Image
              alt="built-for-patents-illustration"
              src="/built-for-patents-illustration.png"
              fill
              className="object-cover object-center md:object-contain"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
