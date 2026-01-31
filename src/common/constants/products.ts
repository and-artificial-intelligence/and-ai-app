/**
 * @file products.ts
 * @description Centralized product definitions for reuse across the application.
 *
 * This file contains the single source of truth for all product information
 * including names, descriptions, images, and links. Use this to ensure consistency
 * across product grids, related product sections, and other product listings.
 *
 * @example Basic usage - Display all products
 * ```tsx
 * import { PRODUCTS } from '@/common/constants/products';
 *
 * export default function ProductGrid() {
 *   return (
 *     <div>
 *       {PRODUCTS.map(product => (
 *         <ProductCard key={product.href} {...product} />
 *       ))}
 *     </div>
 *   );
 * }
 * ```
 *
 * @example Get specific products by name
 * ```tsx
 * import { getProductsByName } from '@/common/constants/products';
 *
 * const relatedProducts = getProductsByName([
 *   'Prior Art Search',
 *   'Claim Charts',
 *   'Invalidity Analysis'
 * ]);
 * ```
 *
 * @example Get all products except specified ones
 * ```tsx
 * import { getProductsExcept } from '@/common/constants/products';
 *
 * // Get up to 3 products, excluding the current one
 * const relatedProducts = getProductsExcept(['Prior Art Search'], 3);
 * ```
 */

export interface Product {
  name: string;
  href: string;
  image: string;
  description: string;
}

/**
 * All products available in the &AI platform.
 * This is the single source of truth for product information.
 * Update descriptions here and they will automatically propagate to all pages.
 */
export const PRODUCTS: Product[] = [
  {
    name: 'Prior Art Search',
    href: '/product/prior-art-search',
    image: '/stylized-features/search-patent.png',
    description:
      'Discover 60M+ patents and the full internet of NPL and products.',
  },
  {
    name: 'Claim Charts',
    href: '/product/claim-charts',
    image: '/stylized-features/chart-claim.png',
    description: 'Generate litigation-ready claim charts in minutes.',
  },
  {
    name: 'Business Development',
    href: '/product/business-development',
    image: '/stylized-features/opportunities-feed.png',
    description: 'Grow your practice as both plaintiff and defense counsel.',
  },
  {
    name: 'Invalidity Analysis',
    href: '/product/invalidity-analysis',
    image: '/stylized-features/chart-construction.png',
    description: 'Build robust arguments for §101, §102, §103, and §112.',
  },
  {
    name: 'Infringement Detection',
    href: '/product/infringement-detection',
    image: '/stylized-features/table.png',
    description:
      'Find evidence of use faster with product search and analysis.',
  },
];

/**
 * Get specific products by their names for use in "Explore More Products" sections
 * @param productNames - Array of product names to retrieve
 * @returns Array of products matching the specified names
 */
export function getProductsByName(productNames: string[]): Product[] {
  return productNames
    .map((name) => PRODUCTS.find((p) => p.name === name))
    .filter((p): p is Product => p !== undefined);
}

/**
 * Get all products except the specified ones (useful for related products on individual pages)
 * @param excludeNames - Array of product names to exclude
 * @param limit - Optional limit on number of products to return
 * @returns Array of products excluding the specified names
 */
export function getProductsExcept(
  excludeNames: string[],
  limit?: number,
): Product[] {
  const filtered = PRODUCTS.filter((p) => !excludeNames.includes(p.name));
  return limit ? filtered.slice(0, limit) : filtered;
}
