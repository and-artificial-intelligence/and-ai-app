import { RefObject, useEffect, useRef } from 'react';
import BlazeSlider, { BlazeConfig } from 'blaze-slider';

export const useBlazeSlider = (
  config: BlazeConfig,
): [RefObject<HTMLDivElement | null>, RefObject<BlazeSlider | null>] => {
  const sliderRef = useRef<BlazeSlider | null>(null);
  const elRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sliderRef.current && elRef.current) {
      sliderRef.current = new BlazeSlider(elRef.current, config);
    }
  }, []);

  return [elRef, sliderRef];
};
