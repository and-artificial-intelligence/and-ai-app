import { CustomIcon, CustomIconProps } from '@/common/components/icon';

export const ArrowTopRightIcon = ({ className }: CustomIconProps) => {
  return (
    <CustomIcon
      className={className}
      height="14"
      viewBox="0 0 14 14"
      width="14"
    >
      <path
        d="M4.66667 4.09375H10.6458V10.0729M3.5 11.2396L10.5 4.23958"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </CustomIcon>
  );
};
