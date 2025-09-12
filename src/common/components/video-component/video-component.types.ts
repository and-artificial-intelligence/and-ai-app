import { ComponentPropsWithRef } from 'react';

export interface VideoComponentProps extends ComponentPropsWithRef<'video'> {
  webmUrl: string;
  hevcUrl?: string;
  fallbackUrl?: string;
  isTransparent?: boolean;
  autoplayInView?: boolean;
  showWaveForm?: boolean;
  showMuteButton?: boolean;
  showPlayButton?: boolean;
  wrapperProps?: ComponentPropsWithRef<'div'>;
}
