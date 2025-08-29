import { useScroll } from 'motion/react';
import { useRef } from 'react';

import { Word } from './word';

interface ParagraphProps {
  value: string;
}

export const Paragraph = ({ value }: ParagraphProps) => {
  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start 0.9', 'start 0.25'],
  });

  const words = value.split(' ');
  return (
    <p
      ref={element}
      className="font-martina md:text-4.5xl flex flex-wrap text-4xl xl:text-5xl"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};
