import Image from 'next/image';
import { cloneElement, ReactElement } from 'react';

export interface PrivacyCardProps {
  imageSrc: string;
  title: string;
  description: string;
  icon: ReactElement;
}

export const PrivacyCard = ({
  imageSrc,
  title,
  description,
  icon,
}: PrivacyCardProps) => {
  return (
    <div className="flex flex-col gap-6 lg:max-w-[544px] xl:max-w-[560px]">
      <div className="border-gray-dark/5 relative grid h-[320px] w-full place-content-center rounded-sm border bg-gray-200">
        <Image
          fill
          alt={title}
          className="h-[80%]! w-auto place-self-center object-contain"
          src={imageSrc}
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          {cloneElement(icon as ReactElement<{ className: string }>, {
            className: 'size-6 text-gray-800',
          })}
          <p className="text-element-high-em text-lg font-medium">{title}</p>
        </div>
        <p className="text-element-mid-em">{description}</p>
      </div>
    </div>
  );
};
