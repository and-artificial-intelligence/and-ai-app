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
import { Navbar } from '@/common/components/navbar';
import { SubHeader } from '@/common/components/subheader';
import { TypingAnimation } from '@/common/components/typing-animation';
import { Links } from '@/common/constants/links';
import { cn } from '@/common/functions/cn';
import { BrandColor } from '@/common/types/common';

import { BackgroundArt } from '@/module/cta';
import { FeaturesSection } from '@/module/features';
import { PrivacyCard, PrivacyCardProps } from '@/module/privacy';

export default function Home() {
  const typingTexts: string[] = [
    'Hey Andy, help me find more prior art for claim 4 that pair well with my key references',
    `Hey Andy, what does Mozak '479 say about the architecture of the assembly?`,
    'Hey Andy, turn these charts into an invalidity contentions draft. Use my go-to template',
  ];

  const privacy: PrivacyCardProps[] = [
    {
      imageSrc: '/privacy-logo-1.png',
      title: 'No training',
      description:
        'AndAI does not train models on your data. Zero-retention with configured model providers.',
      icon: <AnonymousIcon />,
    },
    {
      imageSrc: '/privacy-logo-2.png',
      title: 'Access and Encryption',
      description:
        'SAML SSO, role-based access controls, and encryption in transit and at rest.',
      icon: <Shield2CheckIcon />,
    },
    {
      imageSrc: '/privacy-logo-3.png',
      title: 'Data control',
      description:
        'On request, AndAI deletes organization, user, or project data.',
      icon: <DatabaseSlashIcon />,
    },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      {/* HEADER */}
      <Navbar />

      {/* HERO SECTION */}
      <section
        className="flex flex-col items-center gap-12 px-4 pt-8 md:gap-16 md:px-6 md:pt-24 lg:mx-auto lg:flex-row lg:items-end lg:pt-14 xl:px-8 xl:pt-10"
        id="hero"
      >
        <div className="lg:h-fill-available flex flex-col items-center justify-center lg:max-w-[360px] lg:min-w-[360px] lg:items-start xl:max-w-[602px] xl:min-w-[602px]">
          <div className="space-y-14 pt-8 md:space-y-20 md:pt-0 lg:space-y-24">
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
                    'text-element-mid-em text-center text-base md:max-w-[592px] lg:max-w-[22.5rem] lg:text-left xl:max-w-[30rem] xl:text-lg',
                  )}
                >
                  Engineered for patents, AndAI executes litigation-
                  <br />
                  grade work at machine scale. You set strategy;
                  <br /> AndAI delivers the work.
                </p>
                <p
                  className={cn(
                    'hidden lg:block xl:hidden',
                    'text-element-mid-em text-center text-base md:max-w-[592px] lg:max-w-[22.5rem] lg:text-left xl:max-w-[30rem] xl:text-lg',
                  )}
                >
                  Engineered for patents, AndAI executes litigation-grade work
                  at machine scale. You set strategy; AndAI delivers the work.
                </p>
              </div>
              <div className="flex items-center justify-center gap-3 lg:justify-start">
                <Button external href={Links.Contact}>
                  Book demo
                </Button>
                <Button external href={Links.Security} variant="secondary">
                  Learn more
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

        {/* LANDING IMAGE */}
        <div className="relative h-[22.5625rem] w-[23.4375rem] rounded-2xl md:h-[33.5rem] md:w-[34.8125rem] xl:h-[35rem] xl:w-[36.375rem]">
          <Image
            fill
            alt="landing-page-bg"
            className="absolute scale-110"
            src="/illustration.png"
          />
        </div>
      </section>

      {/* ANIMATED TEXT SECTION */}
      <section
        className="mx-auto px-4 md:px-6 md:pt-[120px] md:pb-24 xl:max-w-[80rem] xl:px-8 xl:py-24 xl:pt-40 xl:pb-[120px]"
        id="assistant"
      >
        <div className="space-y-16">
          <div className="flex flex-col gap-8">
            <SubHeader brand={BrandColor.PRIMARY} title="Assistant" />
            <span className="lg:px-10 xl:px-24">
              <Paragraph
                value="             Andy is an AI patent assistant that turns your instructions into
              high-quality first drafts, delivered on a collaborative platform. It
              then helps refine the work through smart review and editing."
              />
            </span>
          </div>

          <div className="lg:px-10 xl:px-24">
            <div className="border-gray-dark/10 rounded-lg border bg-white/30">
              <div className="border-gray-dark/10 border-b p-4">
                <TypingAnimation texts={typingTexts} />
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

      <FeaturesSection />

      {/* WORKFLOW SECTION */}
      <section
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
          {/* //TODO: video placeholder */}
          <div className="border-element-sketch h-[10.375rem] w-full rounded border bg-gray-300 md:h-[20.6875rem] lg:h-[28.0625rem] xl:h-[35rem]" />
        </div>
      </section>

      {/* BUILT-FOR-PATENTS SECTION */}
      <section className="mx-auto flex w-full flex-col gap-16 px-4 py-16 md:gap-12 md:px-6 md:py-20 lg:gap-20 xl:max-w-[80rem] xl:px-8 xl:py-24">
        <div className="flex flex-col items-center gap-6 xl:gap-8">
          <div className="flex flex-col items-center gap-3">
            <SubHeader brand={BrandColor.PRIMARY} title="Built for Patents" />
            <h2 className="font-martina text-element-high-em text-4.5xl text-center xl:text-5xl">
              All the context in one place, accessible
            </h2>
          </div>
          <p className="text-element-mid-em text-center md:max-w-[40rem]">
            Specialized processing across patent types and jurisdictions. Full
            context from the patent family, prosecution history, and prior
            cases.
          </p>
        </div>
        <div>
          <div className="border-gray-dark/5 relative h-[20.75rem] w-full rounded-xs border bg-gray-200 lg:h-[27.5625rem] xl:h-[32.4375rem]">
            <Image
              fill
              alt="built-for-patents-illustration"
              className="object-cover object-center md:object-contain"
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
        <div className="flex flex-col gap-12 md:max-w-[25rem] lg:sticky lg:top-1/2 lg:self-start lg:pt-24 lg:pb-24 xl:max-w-[30rem]">
          <div className="space-y-6">
            <div className="space-y-3">
              <SubHeader brand={BrandColor.PRIMARY} title="Privacy" />
              <h2 className="font-martina text-element-high-em text-4.5xl xl:text-5xl">
                Your data, your rules
              </h2>
            </div>
            <p className="text-element-mid-em lg:pt-10">
              &AI is built on the leading security standards and best practices
              to ensure your data is safe and secure.
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

      {/* CTA SECTION */}
      <section
        className="mx-auto w-full px-4 md:px-6 xl:max-w-[80rem] xl:px-0"
        id="cta"
      >
        <div className="bg-brand-accent-blue border-gray-dark/5 relative w-full overflow-hidden border px-4 pt-24 pb-16 md:px-6 md:pb-16 xl:px-8 xl:pt-[7.5rem] xl:pb-20">
          <BackgroundArt className="pointer-events-none absolute top-1/2 left-1/2 size-[38.375rem] -translate-x-1/2 -translate-y-1/2 md:size-[58.9375rem]" />
          <div className="flex flex-col items-center gap-12">
            <div className="space-y-6 text-center xl:space-y-8">
              <h2 className="text-element-high-em text-5.5xl md:text-7xl">
                Scale your
                <br />
                <span className="font-martina italic">patent expertise</span>
              </h2>
              <p className="text-element-high-em max-w-[20.5625rem] text-center md:max-w-[30rem] xl:max-w-[35rem] xl:text-lg">
                Engineered for patents, AndAI executes litigation-grade work at
                machine scale. You set strategy; AndAI delivers the work.
              </p>
            </div>

            <Button external href={Links.Contact}>
              Book demo
            </Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
