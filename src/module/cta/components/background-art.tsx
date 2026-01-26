import Image from 'next/image';

interface BackgroundArtProps {
  className?: string;
}

export const BackgroundArt = ({ className }: BackgroundArtProps) => {
  return (
    <Image
      alt=""
      aria-hidden="true"
      className={className}
      height={531}
      priority={false}
      src="/background-art.svg"
      width={944}
    />
  );
};
