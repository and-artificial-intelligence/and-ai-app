import { MotionValue } from 'motion/react';

import { Character } from './character';

interface WordProps {
  children: string;
  range: [number, number];
  progress: MotionValue<number>;
}
export const Word = ({ children, range, progress }: WordProps) => {
  const characters = children.split('');
  const amount = range[1] - range[0];
  const step = amount / children.length;

  return (
    <span className="relative mr-2">
      {characters.map((ch, i) => {
        const start = range[0] + step * i;
        const end = range[0] + step * (i + 1);
        return (
          <Character key={i} progress={progress} range={[start, end]}>
            {ch}
          </Character>
        );
      })}
    </span>
  );
};
