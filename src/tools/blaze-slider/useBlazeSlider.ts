import BlazeSlider, { BlazeConfig } from 'blaze-slider';
import { RefObject, useEffect, useRef } from 'react';

const BASE_MEDIA_QUERY = '(min-width: 0px)';

const normalizeBlazeConfig = (config: BlazeConfig): BlazeConfig => {
  const configWithBase = config as BlazeConfig & {
    all?: BlazeConfig[string];
  };

  if (!configWithBase.all) return config;

  const { all, ...responsiveConfig } = configWithBase;

  return {
    [BASE_MEDIA_QUERY]: all,
    ...responsiveConfig,
  };
};

export const useBlazeSlider = (
  config: BlazeConfig,
): [RefObject<HTMLDivElement | null>, RefObject<BlazeSlider | null>] => {
  const sliderRef = useRef<BlazeSlider | null>(null);
  const elRef = useRef<HTMLDivElement | null>(null);
  const normalizedConfigRef = useRef<BlazeConfig>(normalizeBlazeConfig(config));

  useEffect(() => {
    if (!elRef.current) return;

    const slider = new BlazeSlider(elRef.current, normalizedConfigRef.current);
    sliderRef.current = slider;

    return () => {
      slider.destroy();
      sliderRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [elRef, sliderRef];
};
