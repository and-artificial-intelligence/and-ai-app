import {
  ButtonHTMLAttributes,
  CSSProperties,
  HTMLAttributes,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';

import { cn } from '@/common/functions/cn';

type TabSize = 'sm' | 'md' | 'responsive';

const baseClassName =
  'inline-flex items-center gap-1 rounded-full border border-gray-dark/5 bg-gray-200 p-1 relative';
const indicatorClassName =
  'pointer-events-none absolute z-0 box-border rounded-full border border-gray-dark/10 bg-gray-50 transition-all duration-300 ease-out';
const tabButtonClassName =
  'relative z-10 flex cursor-pointer items-center justify-center whitespace-nowrap rounded-full font-medium text-text-em-high transition-colors duration-200';

const rootSizeClassNames: Record<TabSize, string> = {
  sm: 'h-9',
  md: 'h-11',
  responsive: 'h-9 md:h-11',
};

const buttonSizeClassNames: Record<TabSize, string> = {
  sm: 'h-7 w-20 px-3 py-1 text-sm',
  md: 'h-9 w-30 px-3 py-2 text-base',
  responsive: 'h-7 w-24 px-3 py-1 text-sm md:h-9 md:w-32 md:px-3 md:py-2 md:text-base',
};

type TabContextValue = {
  size: TabSize;
  registerActive: (el: HTMLButtonElement | null) => void;
};

const TabContext = createContext<TabContextValue | null>(null);

export interface TabRootProps
  extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  size?: TabSize;
}

export const TabRoot = ({
  className,
  size,
  children,
  ...props
}: TabRootProps) => {
  const resolvedSize = size ?? 'md';
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState<
    Pick<CSSProperties, 'left' | 'top' | 'width' | 'height'>
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TabContext.Provider value={{ size: resolvedSize, registerActive }}>
      <div
        ref={containerRef}
        className={cn(baseClassName, rootSizeClassNames[resolvedSize], className)}
        {...props}
      >
        <div className={indicatorClassName} style={indicatorStyle} />
        {children}
      </div>
    </TabContext.Provider>
  );
};

export interface TabButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  isActive?: boolean;
  size?: TabSize;
}

export const TabButton = ({
  className,
  size,
  isActive = false,
  children,
  ...props
}: TabButtonProps) => {
  const ctx = useContext(TabContext);
  const registerActive = ctx?.registerActive;
  const ref = useRef<HTMLButtonElement | null>(null);
  const resolvedSize = size ?? ctx?.size ?? 'md';

  useEffect(() => {
    if (isActive) {
      registerActive?.(ref.current);
    }
  }, [isActive, registerActive]);

  return (
    <button
      ref={ref}
      className={cn(
        tabButtonClassName,
        buttonSizeClassNames[resolvedSize],
        className,
      )}
      data-tab-active={isActive ? 'true' : 'false'}
      {...props}
    >
      {children}
    </button>
  );
};

export const Tab = Object.assign(TabRoot, { Button: TabButton });

export default Tab;
