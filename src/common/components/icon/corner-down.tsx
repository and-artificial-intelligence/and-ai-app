import { CustomIcon, CustomIconProps } from '@/common/components/icon';

export const CornerDownIcon = ({ className }: CustomIconProps) => {
  return (
    <CustomIcon
      className={className}
      fill="none"
      height="18"
      viewBox="0 0 18 18"
      width="18"
    >
      <path
        d="M15.1875 3.5625V11.25H3M3 11.25L6 8.25M3 11.25L6 14.25"
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth="1.5"
      />
    </CustomIcon>
  );
};
