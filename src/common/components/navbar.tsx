'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import { Button } from '@/common/components/button';
import { Links } from '@/common/constants/links';
import { cn } from '@/common/functions/cn';

const productLinks = [
  {
    name: 'Overview',
    href: '/product',
    description: 'AI workspace for patent litigation',
  },
  {
    name: 'Prior Art Search',
    href: '/product/prior-art-search',
    description: 'Discover relevant prior art',
  },
  {
    name: 'Claim Charts',
    href: '/product/claim-charts',
    description: 'Generate litigation-ready charts',
  },
  {
    name: 'Business Development',
    href: '/product/business-development',
    description: 'Grow your patent practice',
  },
  {
    name: 'Invalidity Analysis',
    href: '/product/invalidity-analysis',
    description: 'Build stronger invalidity arguments',
  },
  {
    name: 'Infringement Detection',
    href: '/product/infringement-detection',
    description: 'Find evidence of use faster',
  },
];

const solutionsByType = [
  {
    name: 'Law Firms',
    href: '/solutions/law-firms',
    description: 'From Am Law 100 to IP Boutiques',
  },
  {
    name: 'In-House',
    href: '/solutions/in-house',
    description: 'Litigation prep, infringement mining, transactions',
  },
];

export const Navbar = () => {
  const [hasIntersected, setHasIntersected] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);
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

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        productsRef.current &&
        !productsRef.current.contains(event.target as Node)
      ) {
        setProductsOpen(false);
      }
      if (
        solutionsRef.current &&
        !solutionsRef.current.contains(event.target as Node)
      ) {
        setSolutionsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
            {/* Products Dropdown */}
            <div ref={productsRef} className="relative">
              <button
                className={cn(
                  'text-element-high-em hover:text-element-mid-em flex items-center gap-1 text-sm font-medium transition-[color]',
                  productsOpen
                    ? 'no-underline'
                    : mounted &&
                        pathname.startsWith('/product') &&
                        'underline decoration-orange-500 decoration-1 underline-offset-[6px]',
                )}
                onClick={() => setProductsOpen(!productsOpen)}
              >
                Product
                <svg
                  className={cn(
                    'h-3 w-3 transition-transform duration-200',
                    productsOpen && 'rotate-180',
                  )}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 9l-7 7-7-7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
              </button>
              <div
                className={cn(
                  'absolute top-full left-0 z-50 mt-2 min-w-[320px] overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg transition-all duration-200',
                  productsOpen
                    ? 'pointer-events-auto translate-y-0 opacity-100'
                    : 'pointer-events-none -translate-y-2 opacity-0',
                )}
              >
                <div className="bg-white py-2">
                  {productLinks.map((product) => (
                    <Link
                      key={product.href}
                      className={cn(
                        'hover:bg-background-lighter block px-4 py-3 transition-colors',
                        mounted &&
                          pathname === product.href &&
                          'bg-background-lighter',
                      )}
                      href={product.href}
                      onClick={() => setProductsOpen(false)}
                    >
                      <span className="text-element-high-em block text-sm font-medium">
                        {product.name}
                      </span>
                      <span className="text-element-mid-em block text-xs">
                        {product.description}
                      </span>
                    </Link>
                  ))}
                </div>
                {mounted && pathname.startsWith('/product') && (
                  <div className="h-0.5 w-full bg-orange-500" />
                )}
              </div>
            </div>
            {/* Solutions Dropdown */}
            <div ref={solutionsRef} className="relative">
              <button
                className={cn(
                  'text-element-high-em hover:text-element-mid-em flex items-center gap-1 text-sm font-medium transition-[color]',
                  solutionsOpen
                    ? 'no-underline'
                    : mounted &&
                        pathname.startsWith('/solutions') &&
                        'underline decoration-orange-500 decoration-1 underline-offset-[6px]',
                )}
                onClick={() => setSolutionsOpen(!solutionsOpen)}
              >
                Solutions
                <svg
                  className={cn(
                    'h-3 w-3 transition-transform duration-200',
                    solutionsOpen && 'rotate-180',
                  )}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 9l-7 7-7-7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
              </button>
              <div
                className={cn(
                  'absolute top-full left-0 z-50 mt-2 min-w-[320px] overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg transition-all duration-200',
                  solutionsOpen
                    ? 'pointer-events-auto translate-y-0 opacity-100'
                    : 'pointer-events-none -translate-y-2 opacity-0',
                )}
              >
                <div className="bg-white py-2">
                  {solutionsByType.map((solution) => (
                    <Link
                      key={solution.href}
                      className={cn(
                        'hover:bg-background-lighter block px-4 py-3 transition-colors',
                        mounted &&
                          pathname === solution.href &&
                          'bg-background-lighter',
                      )}
                      href={solution.href}
                      onClick={() => setSolutionsOpen(false)}
                    >
                      <span className="text-element-high-em block text-sm font-medium">
                        {solution.name}
                      </span>
                      <span className="text-element-mid-em block text-xs">
                        {solution.description}
                      </span>
                    </Link>
                  ))}
                </div>
                {mounted && pathname.startsWith('/solutions') && (
                  <div className="h-0.5 w-full bg-orange-500" />
                )}
              </div>
            </div>
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
              Insights
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
            {/* Mobile Products Accordion */}
            <div>
              <button
                className={cn(
                  'text-element-high-em hover:text-element-mid-em flex w-full items-center justify-between text-lg font-medium transition-[color]',
                  mounted &&
                    pathname.startsWith('/product') &&
                    'underline decoration-orange-500 decoration-2 underline-offset-[6px]',
                )}
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              >
                Product
                <svg
                  className={cn(
                    'h-4 w-4 transition-transform duration-200',
                    mobileProductsOpen && 'rotate-180',
                  )}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 9l-7 7-7-7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
              </button>
              <div
                className={cn(
                  'mt-3 flex flex-col gap-4 overflow-hidden pl-4 transition-all duration-300',
                  mobileProductsOpen
                    ? 'max-h-[600px] opacity-100'
                    : 'max-h-0 opacity-0',
                )}
              >
                {productLinks.map((product) => (
                  <Link
                    key={product.href}
                    className={cn(
                      'block transition-colors',
                      mounted &&
                        pathname === product.href &&
                        'text-element-high-em',
                    )}
                    href={product.href}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span
                      className={cn(
                        'text-element-mid-em hover:text-element-high-em block text-base transition-colors',
                        mounted &&
                          pathname === product.href &&
                          'text-element-high-em',
                      )}
                    >
                      {product.name}
                    </span>
                    <span className="text-element-low-em block text-sm">
                      {product.description}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            {/* Mobile Solutions Accordion */}
            <div>
              <button
                className={cn(
                  'text-element-high-em hover:text-element-mid-em flex w-full items-center justify-between text-lg font-medium transition-[color]',
                  mounted &&
                    pathname.startsWith('/solutions') &&
                    'underline decoration-orange-500 decoration-2 underline-offset-[6px]',
                )}
                onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
              >
                Solutions
                <svg
                  className={cn(
                    'h-4 w-4 transition-transform duration-200',
                    mobileSolutionsOpen && 'rotate-180',
                  )}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 9l-7 7-7-7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
              </button>
              <div
                className={cn(
                  'mt-3 flex flex-col gap-4 overflow-hidden pl-4 transition-all duration-300',
                  mobileSolutionsOpen
                    ? 'max-h-[400px] opacity-100'
                    : 'max-h-0 opacity-0',
                )}
              >
                {solutionsByType.map((solution) => (
                  <Link
                    key={solution.href}
                    className="block"
                    href={solution.href}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span
                      className={cn(
                        'text-element-mid-em hover:text-element-high-em block text-base transition-colors',
                        mounted &&
                          pathname === solution.href &&
                          'text-element-high-em',
                      )}
                    >
                      {solution.name}
                    </span>
                    <span className="text-element-low-em block text-sm">
                      {solution.description}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
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
              Insights
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
