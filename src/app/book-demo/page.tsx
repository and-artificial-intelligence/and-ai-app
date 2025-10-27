'use client';
import { useState, FormEvent } from 'react';

import { Button } from '@/common/components/button';
import { Footer } from '@/common/components/footer';
import { SubHeader } from '@/common/components/subheader';
import { cn } from '@/common/functions/cn';
import { BrandColor } from '@/common/types/common';

export default function BookDemo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    useCase: '',
    referralSource: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          useCase: '',
          referralSource: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <main className="flex min-h-screen flex-col">
      <section className="relative mx-auto w-full flex-1 px-4 py-16 md:px-6 md:py-20 xl:max-w-[80rem] xl:px-8 xl:py-24">
        <div className="flex flex-col gap-16 lg:flex-row lg:gap-20 xl:gap-24">
          <div className="space-y-3 lg:pt-8">
            <SubHeader brand={BrandColor.PRIMARY} title="Contact us" />
            <h1 className="text-element-high-em text-5xl md:text-6xl xl:text-7xl">
              Book <span className="font-martina italic">demo</span>
            </h1>
          </div>

          <div className="relative -my-8 flex-1 py-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-0 -mx-8"
            >
              <div className="relative h-full w-full [background-image:linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_2%,rgba(0,0,0,1)_98%,rgba(0,0,0,0)_100%),linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_5%,rgba(0,0,0,1)_100%)] [background-size:20px_20px,20px_20px] [background-position:0_0,0_0] [background-repeat:repeat,repeat] [mask-composite:intersect] [mask-mode:alpha] [mask-repeat:no-repeat] [-webkit-mask-composite:source-in] [-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_2%,rgba(0,0,0,1)_98%,rgba(0,0,0,0)_100%),linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_5%,rgba(0,0,0,1)_100%)] [-webkit-mask-repeat:no-repeat]" />
            </div>

            <div className="border-gray-dark/10 bg-background-lighter relative z-10 rounded-lg border p-6 shadow-sm md:p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label
                    className="text-element-high-em text-sm"
                    htmlFor="name"
                  >
                    Name <span className="text-brand-primary">*</span>
                  </label>
                  <input
                    required
                    className="text-element-high-em placeholder:text-element-low-em border-gray-dark/20 focus:border-gray-dark/40 bg-background-lighter h-11 w-full rounded-md border px-4 text-sm transition-colors focus:outline-none"
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <label
                    className="text-element-high-em text-sm"
                    htmlFor="email"
                  >
                    Work email <span className="text-brand-primary">*</span>
                  </label>
                  <input
                    required
                    className="text-element-high-em placeholder:text-element-low-em border-gray-dark/20 focus:border-gray-dark/40 bg-background-lighter h-11 w-full rounded-md border px-4 text-sm transition-colors focus:outline-none"
                    id="email"
                    name="email"
                    placeholder="you@company.com"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <label
                    className="text-element-high-em text-sm"
                    htmlFor="useCase"
                  >
                    Tell us about your use case{' '}
                    <span className="text-brand-primary">*</span>
                  </label>
                  <textarea
                    required
                    className="text-element-high-em placeholder:text-element-low-em border-gray-dark/20 focus:border-gray-dark/40 bg-background-lighter min-h-[120px] w-full rounded-md border px-4 py-3 text-sm transition-colors focus:outline-none"
                    id="useCase"
                    name="useCase"
                    placeholder="E.g., pitching clients, drafting invalidity contentions, building claim charts..."
                    value={formData.useCase}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <label
                    className="text-element-high-em text-sm"
                    htmlFor="referralSource"
                  >
                    How did you hear about us?{' '}
                    <span className="text-brand-primary">*</span>
                  </label>
                  <input
                    required
                    className="text-element-high-em placeholder:text-element-low-em border-gray-dark/20 focus:border-gray-dark/40 bg-background-lighter h-11 w-full rounded-md border px-4 text-sm transition-colors focus:outline-none"
                    id="referralSource"
                    name="referralSource"
                    placeholder="E.g., Google, a colleague, LinkedIn..."
                    type="text"
                    value={formData.referralSource}
                    onChange={handleChange}
                  />
                </div>

                <Button
                  fullWidth
                  className={cn('mt-2', isSubmitting && 'opacity-50')}
                  disabled={isSubmitting}
                  type="submit"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </Button>

                {submitStatus === 'success' && (
                  <p className="text-center text-sm text-green-700">
                    Thank you! We&apos;ll be in touch soon.
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-center text-sm text-red-700">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
