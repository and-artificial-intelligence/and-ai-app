import { cn } from '@/common/functions/cn';

interface SubHeaderProps {
  brand: 'primary' | 'accent-blue-dark' | 'accent-blue' | 'accent-purple';
  title: string;
}

export const SubHeader = ({ brand, title }: SubHeaderProps) => {
  const brandColor =
    brand === 'primary'
      ? 'bg-brand-primary'
      : brand === 'accent-blue-dark'
        ? 'bg-brand-accent-blue-dark'
        : brand === 'accent-blue'
          ? 'bg-brand-accent-blue'
          : 'bg-brand-accent-purple';

  return (
    <div className="flex items-center gap-2">
      <div className={cn('h-1 w-3', brandColor)} />
      <p className="text-element-mid-em text-sm font-medium">{title}</p>
    </div>
  );
};
