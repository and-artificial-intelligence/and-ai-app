'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Button } from '@/common/components/button';
import { Links } from '@/common/constants/links';
import { cn } from '@/common/functions/cn';

export const Navbar = () => {
  const [hasIntersected, setHasIntersected] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const intersection = document.getElementById('hero');
    if (!intersection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setHasIntersected(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      },
    );

    observer.observe(intersection);
    return () => observer.disconnect();
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <nav className={cn('bg-background fixed top-0 right-0 left-0 z-[100]')}>
      <div
        className={cn(
          'relative mx-auto flex h-16 w-full items-center justify-between px-6 py-3 md:max-w-[592px] md:px-0 lg:max-w-[976px] xl:h-20 xl:max-w-[1280px] xl:px-8',
        )}
      >
        <div className="flex items-center gap-6">
          <Link
            className="pr-6"
            href="/"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Image
              priority
              alt="&AI"
              className="h-[18px] w-auto"
              height={18}
              src="/logo-off-black.png"
              style={{ width: 'auto' }}
              width={92}
            />
          </Link>
          <div className="hidden items-center gap-6 md:flex">
            <Link
              className={cn(
                'text-element-high-em hover:text-element-mid-em text-sm font-medium transition-[color]',
                mounted &&
                  pathname === '/pricing' &&
                  'underline decoration-orange-500 decoration-1 underline-offset-[6px]',
              )}
              href="/pricing"
            >
              Pricing
            </Link>
            <Link
              className={cn(
                'text-element-high-em hover:text-element-mid-em text-sm font-medium transition-[color]',
                mounted &&
                  pathname.startsWith('/blog') &&
                  'underline decoration-orange-500 decoration-1 underline-offset-[6px]',
              )}
              href="/blog"
            >
              Blog
            </Link>
            <Link
              className={cn(
                'text-element-high-em hover:text-element-mid-em text-sm font-medium transition-[color]',
                mounted &&
                  pathname === '/company' &&
                  'underline decoration-orange-500 decoration-1 underline-offset-[6px]',
              )}
              href="/company"
            >
              Company
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link
            className="text-element-high-em hover:text-element-mid-em hidden px-5 text-sm font-medium transition-colors md:block"
            href={Links.LogIn}
          >
            Log in
          </Link>
          <div className="hidden md:block">
            <Button href="/request-sample-chart" variant="secondary">
              Request sample chart
            </Button>
          </div>
          <div className="hidden md:block">
            <Button href="/book-demo">Free trial</Button>
          </div>
          {/* Hamburger Menu Button */}
          <button
            aria-label="Toggle menu"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span
              className={cn(
                'bg-element-high-em h-0.5 w-5 transition-all duration-300',
                mobileMenuOpen && 'translate-y-2 rotate-45',
              )}
            />
            <span
              className={cn(
                'bg-element-high-em h-0.5 w-5 transition-all duration-300',
                mobileMenuOpen && 'opacity-0',
              )}
            />
            <span
              className={cn(
                'bg-element-high-em h-0.5 w-5 transition-all duration-300',
                mobileMenuOpen && '-translate-y-2 -rotate-45',
              )}
            />
          </button>
        </div>
        <div
          className="pointer-events-none absolute bottom-0 left-0 hidden h-px w-full xl:block"
          style={{
            backgroundColor: 'var(--color-border)',
            transform: hasIntersected ? 'scaleX(1)' : 'scaleX(0)',
            transformOrigin: 'center',
            transition: 'transform 800ms var(--ease-emphasized)',
          }}
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-0 block h-px w-full xl:hidden"
        style={{
          backgroundColor: 'var(--color-border)',
          transform: hasIntersected ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'center',
          transition: 'transform 800ms var(--ease-emphasized)',
        }}
      />

      {/* Mobile Menu */}
      <div
        className={cn(
          'bg-background fixed inset-0 top-16 z-50 flex flex-col transition-all duration-300 md:hidden',
          mobileMenuOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0',
        )}
      >
        <div className="flex flex-col gap-8 p-6">
          <div className="flex flex-col gap-6">
            <Link
              className={cn(
                'text-element-high-em hover:text-element-mid-em text-lg font-medium transition-[color]',
                mounted &&
                  pathname === '/pricing' &&
                  'underline decoration-orange-500 decoration-2 underline-offset-[6px]',
              )}
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              className={cn(
                'text-element-high-em hover:text-element-mid-em text-lg font-medium transition-[color]',
                mounted &&
                  pathname.startsWith('/blog') &&
                  'underline decoration-orange-500 decoration-2 underline-offset-[6px]',
              )}
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              className={cn(
                'text-element-high-em hover:text-element-mid-em text-lg font-medium transition-[color]',
                mounted &&
                  pathname === '/company' &&
                  'underline decoration-orange-500 decoration-2 underline-offset-[6px]',
              )}
              href="/company"
              onClick={() => setMobileMenuOpen(false)}
            >
              Company
            </Link>
          </div>

          <div className="border-gray-dark/10 border-t pt-6">
            <Link
              className="text-element-high-em hover:text-element-mid-em block text-lg font-medium transition-colors"
              href={Links.LogIn}
              onClick={() => setMobileMenuOpen(false)}
            >
              Log in
            </Link>
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <Button
              className="w-full"
              href="/request-sample-chart"
              variant="secondary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Request sample chart
            </Button>
            <Button
              className="w-full"
              href="/book-demo"
              onClick={() => setMobileMenuOpen(false)}
            >
              Free trial
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
