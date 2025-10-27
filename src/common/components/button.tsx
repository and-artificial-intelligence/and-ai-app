import { cloneElement, HTMLAttributes, ReactElement, ReactNode } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const buttonVariants = tv({
  slots: {
    base: [
      'flex',
      'items-center',
      'justify-center',
      'gap-1.5',
      'rounded-full',
      'border',
      'transition-all',
      'duration-300',
      'ease-out',
      'font-medium',
    ],
    icon: [],
  },
  variants: {
    variant: {
      primary: {
        base: [
          'bg-gray-950',
          'text-white',
          'border-transparent',
          'hover:bg-gray-800',
        ],
      },
      secondary: {
        base: [
          'bg-transparent',
          'text-element-high-em',
          'border-element-mid-em',
          'hover:border-element-high-em',
        ],
      },
      tertiary: {
        base: ['bg-transparent', 'border-transparent', 'text-element-high-em'],
      },
      unstyled: {
        base: [],
      },
    },
    size: {
      sm: {
        base: ['px-6', 'h-9', 'text-sm'],
        icon: ['size-3'],
      },
      md: {
        base: ['px-6', 'h-[2.375rem]', 'text-sm'],
        icon: ['size-3.5'],
      },
    },
    fullWidth: {
      true: {
        base: ['w-full'],
      },
    },
    disabled: {
      true: {
        base: ['opacity-50', 'cursor-not-allowed'],
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

interface ButtonProps
  extends VariantProps<typeof buttonVariants>,
    Omit<HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>, 'type'> {
  children: ReactNode;
  className?: string;
  href?: string;
  external?: boolean;
  onClick?: () => void;
  iconRight?: ReactElement<{ className?: string }>;
  iconLeft?: ReactElement<{ className?: string }>;
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({
  children,
  className,
  disabled = false,
  fullWidth = false,
  href,
  external = false,
  onClick,
  size,
  variant,
  iconRight,
  iconLeft,
  type,
  ...props
}: ButtonProps) => {
  const { base: baseTheme, icon: iconTheme } = buttonVariants({
    variant,
    size,
    fullWidth,
    disabled,
    className,
  });

  const styledIcon = (icon?: ReactElement<{ className?: string }>) => {
    if (!icon) return null;
    return cloneElement(icon, {
      className: iconTheme(),
    }) as ReactElement;
  };

  // throw error to pass aria-label if button is icon only
  if (typeof children === 'undefined' && !props['aria-label']) {
    throw new Error(
      'Button must have a label if it is icon only. Please add an aria-label prop.',
    );
  }

  if (href) {
    return (
      <a
        className={baseTheme({ className })}
        href={href}
        rel={external ? 'noopener noreferrer' : undefined}
        target={external ? '_blank' : undefined}
        {...props}
      >
        {styledIcon(iconLeft)}
        {children}
        {styledIcon(iconRight)}
      </a>
    );
  }

  return (
    <button
      className={baseTheme({ className })}
      disabled={disabled}
      type={type}
      onClick={onClick}
      {...props}
    >
      {styledIcon(iconLeft)}
      {children}
      {styledIcon(iconRight)}
    </button>
  );
};
