import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/common/components/button';
import { Links } from '@/common/constants/links';
import { cn } from '@/common/functions/cn';

export const Navbar = () => {
  return (
    <nav className={cn('bg-background sticky top-0 z-[99]')}>
      <div
        className={cn(
          'mx-auto flex h-16 w-full items-center justify-between px-6 py-3 md:max-w-[592px] md:px-0 lg:max-w-[976px] xl:h-20 xl:max-w-[1280px] xl:px-8',
        )}
      >
        <div className="flex items-center gap-6">
          <Link className="pr-6" href="/">
            <Image
              priority
              alt="&AI"
              className="h-[18px] w-auto"
              height={18}
              src="/logo-off-black.png"
              width={92}
            />
          </Link>
          <div className="hidden items-center gap-6 md:flex">
            <Link
              className="text-element-high-em hover:text-element-mid-em text-sm transition-colors"
              href="/pricing"
            >
              Pricing
            </Link>
            <Link
              className="text-element-high-em hover:text-element-mid-em text-sm transition-colors"
              href="/blog"
            >
              Blog
            </Link>
            <Link
              className="text-element-high-em hover:text-element-mid-em text-sm transition-colors"
              href="/about"
            >
              Company
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link
            className="text-element-high-em hover:text-element-mid-em hidden pr-3 text-sm transition-colors md:block"
            href={Links.LogIn}
          >
            Log in
          </Link>
          <Button href="/book-demo">Book demo</Button>
        </div>
      </div>
    </nav>
  );
};
