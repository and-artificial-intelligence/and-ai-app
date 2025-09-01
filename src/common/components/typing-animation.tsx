'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { cn } from '@/common/functions/cn';

interface TypingAnimationProps {
  texts: string[];
  typingSpeedMs?: number;
  pauseMs?: number;
  className?: string;
}

export const TypingAnimation = ({
  texts,
  typingSpeedMs = 40,
  pauseMs = 500,
  className,
}: TypingAnimationProps) => {
  const [index, setIndex] = useState(0);
  const [visibleChars, setVisibleChars] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'pause' | 'fading'>('typing');
  const activeText = texts[index] ?? '';

  const intervalRef = useRef<number | null>(null);
  const clear = () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    clear();
    if (phase === 'typing') {
      intervalRef.current = window.setInterval(() => {
        setVisibleChars((prev) => {
          if (prev >= activeText.length) {
            clear();
            setPhase('pause');
            return prev;
          }
          return prev + 1;
        });
      }, typingSpeedMs);
      return clear;
    }
  }, [phase, activeText.length, typingSpeedMs]);

  useEffect(() => {
    if (phase !== 'pause') return;
    const timeout = window.setTimeout(() => {
      setPhase('fading');
    }, pauseMs);
    return () => window.clearTimeout(timeout);
  }, [phase, pauseMs]);

  const onFadeComplete = () => {
    if (phase !== 'fading') return;
    const next = (index + 1) % texts.length;
    setIndex(next);
    setVisibleChars(0);
    setPhase('typing');
  };

  const shown = useMemo(
    () => activeText.slice(0, visibleChars),
    [activeText, visibleChars],
  );

  return (
    <div className={cn('flex items-baseline', className)}>
      <AnimatePresence mode="wait" onExitComplete={onFadeComplete}>
        {phase !== 'fading' && (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="break-words whitespace-pre-wrap"
          >
            {shown}
            <motion.span
              aria-hidden
              className="ml-0.5 inline-block h-[1em] w-[1px] bg-current"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.9, repeat: Infinity }}
            />
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};
