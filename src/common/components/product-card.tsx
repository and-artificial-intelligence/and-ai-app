import Image from 'next/image';
import Link from 'next/link';

import type { Product } from '@/common/constants/products';

interface ProductCardProps extends Product {
  /**
   * Size variant for different contexts
   * - 'default': Standard size for product grids
   * - 'compact': Slightly smaller for "related products" sections
   */
  variant?: 'default' | 'compact';
}

export function ProductCard({
  name,
  href,
  image,
  description,
  variant = 'default',
}: ProductCardProps) {
  const isCompact = variant === 'compact';

  return (
    <Link
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all hover:border-gray-300 hover:shadow-xl"
      href={href}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-50">
        <Image
          fill
          alt={name}
          className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
          src={image}
        />
      </div>
      <div className={`flex flex-col ${isCompact ? 'p-5' : 'p-6'}`}>
        <h3
          className={`text-element-high-em font-semibold ${isCompact ? 'text-lg' : 'text-lg'}`}
        >
          {name}
        </h3>
        <p className="text-element-mid-em mt-2 text-sm">{description}</p>
      </div>
    </Link>
  );
}
