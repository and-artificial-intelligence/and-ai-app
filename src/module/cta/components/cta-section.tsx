import { Button } from '@/common/components/button';

import { BackgroundArt } from './background-art';

export const CTASection = () => (
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
          <p className="text-element-high-em max-w-[24rem] text-center md:max-w-[35rem] xl:max-w-[40rem] xl:text-lg">
            &AI delivers trial-ready work product for patent litigators —
            fast enough for pitches, strong enough for court.
          </p>
        </div>
        <Button href="/book-demo">Free trial</Button>
      </div>
    </div>
  </section>
);
