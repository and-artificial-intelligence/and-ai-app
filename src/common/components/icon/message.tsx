import { CustomIcon, CustomIconProps } from '@/common/components/icon';

export const MessageIcon = ({ className }: CustomIconProps) => {
  return (
    <CustomIcon
      className={className}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
    >
      <path
        d="M2.29199 3.125H17.7087V15.2083H12.5132L9.9986 17.2917L7.51324 15.2083H2.29199V3.125Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </CustomIcon>
  );
};
