import Link from 'next/link';

import { cn } from '@/common/functions/cn';

export interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Breadcrumbs navigation component
 * Schema markup is handled separately via SchemaScript component
 */
export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn('text-sm', className)}
    >
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.href} className="flex items-center gap-2">
              {isLast ? (
                <span
                  aria-current="page"
                  className="text-element-mid-em"
                >
                  {item.name}
                </span>
              ) : (
                <>
                  <Link
                    className="text-element-mid-em hover:text-element-high-em transition-colors"
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9 5l7 7-7 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
