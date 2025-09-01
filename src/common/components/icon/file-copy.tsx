import { CustomIcon, CustomIconProps } from '@/common/components/icon';

export const FileCopyIcon = ({ className }: CustomIconProps) => {
  return (
    <CustomIcon
      className={className}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
    >
      <path
        d="M14.3747 15.2084V17.7084H3.95801V4.79175H6.45801M12.708 2.29175H6.45801V15.2084H16.8747V6.45841M12.708 2.29175L16.8747 6.45841M12.708 2.29175V6.45841H16.8747"
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth="1.5"
      />
    </CustomIcon>
  );
};
