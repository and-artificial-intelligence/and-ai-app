import Image from 'next/image';
import Link from 'next/link';

import type { Product } from '@/common/constants/products';
import { cn } from '@/common/functions/cn';

// Product-specific colors (matching feature section colors)
const productColors: Record<string, { bg: string; gradient: string }> = {
  'Business Development': { bg: 'bg-[#e2e8dc]', gradient: 'to-[#e2e8dc]' }, // Green/sage
  'Invalidity Analysis': { bg: 'bg-[#dce8e8]', gradient: 'to-[#dce8e8]' }, // Blue
  'Infringement Detection': { bg: 'bg-[#f5e6d3]', gradient: 'to-[#f5e6d3]' }, // Orange
  'Prior Art Search': { bg: 'bg-[#f5e6d3]', gradient: 'to-[#f5e6d3]' }, // Orange
  'Claim Charts': { bg: 'bg-[#dce8e8]', gradient: 'to-[#dce8e8]' }, // Blue
};

const defaultColors = { bg: 'bg-[#ece8df]', gradient: 'to-[#ece8df]' };

interface ProductCardProps extends Product {
  /**
   * Size variant for different contexts
   * - 'default': Standard size for product grids
   * - 'compact': Slightly smaller for "related products" sections
   */
  variant?: 'default' | 'compact';
  /**
   * Index for color cycling (legacy, now uses name-based colors)
   */
  index?: number;
}

export function ProductCard({
  name,
  href,
  image,
  description,
  variant = 'default',
}: ProductCardProps) {
  const isCompact = variant === 'compact';
  const { bg, gradient } = productColors[name] || defaultColors;

  return (
    <Link className="group flex flex-col" href={href}>
      {/* Card with light background like features section */}
      <div className="flex flex-col overflow-hidden rounded-sm border border-gray-300 bg-background-lighter">
        {/* Colored border frame around image with gradient */}
        <div className="p-4 pb-0 md:p-5 md:pb-0">
          <div className={cn('relative rounded-xs p-3 md:p-4', bg)}>
            <div
              className={cn(
                'relative w-full overflow-hidden rounded-xs bg-white',
                isCompact ? 'aspect-[4/3]' : 'aspect-[4/3]',
              )}
            >
              <Image
                fill
                alt={name}
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={image}
              />
            </div>
            {/* Gradient overlay */}
            <div
              className={cn(
                'pointer-events-none absolute inset-0 rounded-xs bg-gradient-to-b from-transparent via-transparent to-100%',
                gradient,
              )}
            />
          </div>
        </div>

        {/* Text content on light background */}
        <div className={`${isCompact ? 'p-4 pt-4' : 'p-5 pt-5'}`}>
          <h3
            className={`text-element-high-em font-medium ${isCompact ? 'text-lg' : 'text-xl'}`}
          >
            {name}
          </h3>
          <p
            className={`text-element-mid-em mt-1 ${isCompact ? 'text-sm' : 'text-base'}`}
          >
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
