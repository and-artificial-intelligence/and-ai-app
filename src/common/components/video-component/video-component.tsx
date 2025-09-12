import { forwardRef, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { PlayVideoIcon } from '@/common/components/icon';
import { cn } from '@/common/functions/cn';

import { VideoComponentProps } from './video-component.types';

const VideoComponent = forwardRef<HTMLVideoElement, VideoComponentProps>(
  (
    {
      webmUrl,
      hevcUrl,
      fallbackUrl,
      isTransparent,
      autoplayInView = true,
      showWaveForm = true,
      showMuteButton = false,
      showPlayButton = false,
      wrapperProps,
      ...props
    },
    ref,
  ) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [inViewRef, inView] = useInView({ threshold: 0.1 });

    const [isPlaying, setIsPlaying] = useState(false);

    const [isControlsVisible, setIsControlsVisible] = useState(false);
    const [hasPlayButtonBeenClicked, setHasPlayButtonBeenClicked] =
      useState(false);

    const setRefs = (element: HTMLVideoElement | null) => {
      inViewRef(element);
      videoRef.current = element;
      if (typeof ref === 'function') {
        ref(element);
      } else if (ref) {
        if (element) {
          (ref as React.MutableRefObject<HTMLVideoElement>).current = element;
        }
      }
    };

    useEffect(() => {
      if (videoRef.current) {
        if (autoplayInView) {
          if (inView) {
            videoRef.current.play().catch((error) => {
              console.error('Video play error:', error);
            });
          } else {
            videoRef.current.pause();
          }
        }
      }
    }, [inView, autoplayInView]);

    const handlePlay = () => {
      if (videoRef.current) {
        videoRef.current.play();
        videoRef.current.muted = false;
        if (!isControlsVisible) {
          setIsControlsVisible(true);
        }
        setHasPlayButtonBeenClicked(true);
      }
    };

    return (
      <div className="relative" {...wrapperProps}>
        <video
          loop
          playsInline
          controls={isControlsVisible}
          poster={fallbackUrl}
          preload="none"
          {...props}
          ref={setRefs}
          muted
          className={cn(
            'relative',
            !isPlaying &&
              showPlayButton &&
              !hasPlayButtonBeenClicked &&
              'opacity-40',
            props.className,
          )}
          onPause={() => {
            setIsPlaying(false);
          }}
          onPlay={() => setIsPlaying(true)}
        >
          {isTransparent ? (
            <>
              <source src={hevcUrl} type="video/quicktime; codecs=hvc1" />
              <source src={webmUrl} type="video/webm" />
            </>
          ) : (
            <>
              {hevcUrl && (
                <source src={hevcUrl} type="video/mp4; codecs=hvc1" />
              )}
              <source src={webmUrl} type="video/webm" />
            </>
          )}
        </video>
        {showPlayButton && !isPlaying && !hasPlayButtonBeenClicked && (
          <button
            className="absolute top-1/2 left-1/2 z-10 h-16 w-16 -translate-x-1/2 -translate-y-1/2"
            onClick={handlePlay}
          >
            <PlayVideoIcon />
          </button>
        )}
      </div>
    );
  },
);

VideoComponent.displayName = 'VideoComponent';

export { VideoComponent };
