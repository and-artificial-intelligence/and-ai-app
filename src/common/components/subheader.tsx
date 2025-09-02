import { cn } from '@/common/functions/cn';
import { BrandColor } from '@/common/types/common';

interface SubHeaderProps {
  brand: BrandColor;
  title: string;
}

export const SubHeader = ({ brand, title }: SubHeaderProps) => {
  const brandColor =
    brand === BrandColor.PRIMARY
      ? 'bg-brand-primary'
      : brand === BrandColor.ACCENT_BLUE_DARK
        ? 'bg-brand-accent-blue-dark'
        : brand === BrandColor.ACCENT_BLUE
          ? 'bg-brand-accent-blue'
          : 'bg-brand-accent-purple';

  return (
    <div className="flex items-center gap-2">
      <div className={cn('h-1 w-3', brandColor)} />
      <p className="text-element-mid-em text-sm font-medium">{title}</p>
    </div>
  );
};
