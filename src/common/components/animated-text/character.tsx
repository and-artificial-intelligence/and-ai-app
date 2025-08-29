import { motion, MotionValue, useTransform } from 'motion/react';

interface CharacterProps {
  children: string;
  range: [number, number];
  progress: MotionValue<number>;
}

export const Character = ({ children, range, progress }: CharacterProps) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span>
      <span className="absolute opacity-30">{children}</span>
      <motion.span className="text-element-high-em" style={{ opacity }}>
        {children}
      </motion.span>
    </span>
  );
};
