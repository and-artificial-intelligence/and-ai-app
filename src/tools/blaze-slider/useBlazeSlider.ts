import BlazeSlider, { BlazeConfig } from 'blaze-slider';
import { RefObject, useEffect, useRef } from 'react';

export const useBlazeSlider = (
  config: BlazeConfig,
): [RefObject<HTMLDivElement | null>, RefObject<BlazeSlider | null>] => {
  const sliderRef = useRef<BlazeSlider | null>(null);
  const elRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sliderRef.current && elRef.current) {
      sliderRef.current = new BlazeSlider(elRef.current, config);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [elRef, sliderRef];
};
