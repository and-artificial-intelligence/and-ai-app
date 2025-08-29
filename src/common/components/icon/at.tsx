import { CustomIcon, CustomIconProps } from '@/common/components/icon';

export const AtIcon = ({ className }: CustomIconProps) => {
  return (
    <CustomIcon
      className={className}
      fill="none"
      height="18"
      viewBox="0 0 18 18"
      width="18"
    >
      <path
        d="M12.6513 14.9C11.5908 15.5577 10.3397 15.9375 9 15.9375C5.16852 15.9375 2.0625 12.8315 2.0625 9C2.0625 5.16852 5.16852 2.0625 9 2.0625C12.8315 2.0625 15.9375 5.16852 15.9375 9C15.9375 10.4848 15.1996 12.0181 13.4786 11.8617C12.0628 11.733 11.0437 10.4443 11.2447 9.03693L11.6419 6.30208M11.2031 9.36035C10.9725 11.0011 9.62179 12.1676 8.18615 11.9658C6.75051 11.7641 5.77363 10.2704 6.00422 8.62969C6.23481 6.98896 7.58555 5.82245 9.02119 6.02422C10.4568 6.22598 11.4337 7.71962 11.2031 9.36035Z"
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth="1.5"
      />
    </CustomIcon>
  );
};
