import { CustomIcon, CustomIconProps } from '@/common/components/icon';

export const Shield2CheckIcon = ({ className }: CustomIconProps) => {
  return (
    <CustomIcon
      className={className}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path
        d="M8.75 12L10.9167 14.25L15.25 9.75M12 2.25L3.75 5.75V13C3.75 17.5563 7.44365 21.25 12 21.25C16.5563 21.25 20.25 17.5563 20.25 13V5.75L12 2.25Z"
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth="1.5"
      />
    </CustomIcon>
  );
};
