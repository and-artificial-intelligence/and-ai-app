'use client';
import { useMediaQuery } from 'usehooks-ts';

import { Button } from '@/common/components/button';
import {
  BoxGroupIcon,
  FirstRoundIcon,
  SvaIcon,
  YCombinatorIcon,
} from '@/common/components/icon';
import Image from 'next/image';

export default function Home() {
  const isTablet = useMediaQuery('(min-width: 768px)'); // md

  return (
    <main className="flex min-h-screen flex-col">
      {/* HEADER */}
      <div className="border-b-element-sketch h-16 border-b" />

      <div className="flex items-center gap-2">
        <div className="bg-brand-primary h-1 w-3" />
        <p className="text-element-mid-em text-sm font-medium">Workflows</p>
      </div>
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
    </main>
  );
}
