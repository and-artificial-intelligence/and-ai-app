import BlazeSlider, { BlazeConfig } from 'blaze-slider';
import { RefObject, useEffect, useRef } from 'react';

export const useBlazeSlider = (
  config: BlazeConfig,
): [RefObject<HTMLDivElement | null>, RefObject<BlazeSlider | null>] => {
  const sliderRef = useRef<BlazeSlider | null>(null);
  const elRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!elRef.current) return;

    const slider = new BlazeSlider(elRef.current, config);
    sliderRef.current = slider;

    return () => {
      slider.destroy();
      sliderRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [elRef, sliderRef];
};
