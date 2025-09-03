import {
  HTMLAttributes,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@/common/functions/cn';

const tabVariants = tv({
  slots: {
    base: [
      'p-1',
      'rounded-full',
      'border',
      'border-gray-dark/5',
      'bg-gray-200',
      'inline-flex',
      'items-center',
      'gap-1',
      'relative',
    ],
    tabButton: [
      'rounded-full',
      'font-medium',
      'text-text-em-high',
      'transition-colors',
      'duration-200',
      'whitespace-nowrap',
      'flex',
      'items-center',
      'justify-center',
      'relative',
      'z-10',
    ],
    indicator: [
      'absolute',
      'rounded-full',
      'bg-gray-50',
      'border',
      'border-gray-dark/10',
      'box-border',
      'transition-all',
      'duration-300',
      'ease-out',
      'z-0',
    ],
  },
  variants: {
    size: {
      sm: {
        base: ['h-9'],
        tabButton: ['py-1', 'px-3', 'text-sm', 'w-20', 'h-7'],
      },
      md: {
        base: ['h-11'],
        tabButton: ['py-2', 'px-3', 'text-base', 'w-30', 'h-9'],
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

type TabContextValue = {
  size: VariantProps<typeof tabVariants>['size'];
  registerActive: (el: HTMLButtonElement | null) => void;
};

const TabContext = createContext<TabContextValue | null>(null);

export interface TabRootProps
  extends VariantProps<typeof tabVariants>,
    HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

export const TabRoot = ({
  className,
  size,
  children,
  ...props
}: TabRootProps) => {
  const { base, indicator } = tabVariants({ size });
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState<
    Pick<React.CSSProperties, 'left' | 'top' | 'width' | 'height'>
  >({ left: 0, top: 0, width: 0, height: 0 });

  const registerActive = useCallback((el: HTMLButtonElement | null) => {
    if (!el || !containerRef.current) return;
    // Use offset* to position relative to the container's padding box,
    // and keep the indicator the same outer size as the button.
    const next = {
      left: el.offsetLeft,
      top: el.offsetTop,
      width: el.offsetWidth,
      height: el.offsetHeight,
    } as const;
    setIndicatorStyle((prev) => {
      if (
        prev.left === next.left &&
        prev.top === next.top &&
        prev.width === next.width &&
        prev.height === next.height
      )
        return prev;
      return { ...next };
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const active = containerRef.current?.querySelector(
        'button[data-tab-active="true"]',
      ) as HTMLButtonElement | null;
      if (active) registerActive(active);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <TabContext.Provider value={{ size, registerActive }}>
      <div
        className={base({ className: cn(className) })}
        ref={containerRef}
        {...props}
      >
        <div className={indicator()} style={indicatorStyle} />
        {children}
      </div>
    </TabContext.Provider>
  );
};

export interface TabButtonProps
  extends VariantProps<typeof tabVariants>,
    HTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  isActive?: boolean;
}

export const TabButton = ({
  className,
  size,
  isActive = false,
  children,
  ...props
}: TabButtonProps) => {
  const { tabButton } = tabVariants({ size });
  const ctx = useContext(TabContext);
  const registerActive = ctx?.registerActive;
  const ref = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (isActive) {
      registerActive?.(ref.current);
    }
  }, [isActive, registerActive]);

  return (
    <button
      ref={ref}
      className={tabButton({ className })}
      data-tab-active={isActive ? 'true' : 'false'}
      {...props}
    >
      {children}
    </button>
  );
};

export const Tab = Object.assign(TabRoot, { Button: TabButton });

export default Tab;
