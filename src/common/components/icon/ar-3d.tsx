import { CustomIcon, CustomIconProps } from '@/common/components/icon';

export const Ar3DIcon = ({ className }: CustomIconProps) => {
  return (
    <CustomIcon
      className={className}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
    >
      <path
        d="M3.125 6.13281L10 2.26562L16.875 6.13281M3.125 6.13281V13.8672L10 17.7344M3.125 6.13281L10.0002 10M10 17.7344L16.875 13.8672V6.13281M10 17.7344L10.0002 10M16.875 6.13281L10.0002 10"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </CustomIcon>
  );
};
