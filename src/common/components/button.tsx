import { ReactNode } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const buttonVariants = tv({
  base: [
    'flex',
    'items-center',
    'justify-center',
    'rounded-full',
    'border',
    'transition-all',
    'duration-300',
    'ease-out',
    'font-medium',
  ],
  variants: {
    variant: {
      primary: [
        'bg-gray-950',
        'text-white',
        'border-transparent',
        'hover:bg-gray-800',
      ],
      secondary: [
        'bg-transparent',
        'text-element-high-em',
        'border-element-mid-em',
        'hover:border-element-high-em',
      ],
      tertiary: [
        'bg-transparent',
        'border-transparent',
        'text-element-high-em',
      ],
    },
    size: {
      sm: ['px-6', 'h-9', 'text-sm'],
      md: ['px-6', 'h-[2.375rem]', 'text-sm'],
    },
    fullWidth: {
      true: ['w-full'],
    },
    disabled: {
      true: ['opacity-50', 'cursor-not-allowed'],
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  children: ReactNode;
  className?: string;
  href?: string;
  external?: boolean;
  onClick?: () => void;
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
}: ButtonProps) => {
  if (href) {
    return (
      <a
        className={buttonVariants({
          variant,
          size,
          fullWidth,
          disabled,
          className,
        })}
        href={href}
        rel={external ? 'noopener noreferrer' : undefined}
        target={external ? '_blank' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={buttonVariants({
        variant,
        size,
        fullWidth,
        disabled,
        className,
      })}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
