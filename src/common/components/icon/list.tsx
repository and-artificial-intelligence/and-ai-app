import { CustomIcon, CustomIconProps } from '@/common/components/icon';

export const ListIcon = ({ className }: CustomIconProps) => {
  return (
    <CustomIcon
      className={className}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
    >
      <path
        d="M7.29134 5.62508H12.708M7.29134 8.95842H12.708M7.29134 12.2917H9.37467M3.95801 2.29175H16.0413V17.7084H3.95801V2.29175Z"
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth="1.5"
      />
    </CustomIcon>
  );
};
