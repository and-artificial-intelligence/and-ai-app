import { CustomIcon, CustomIconProps } from '@/common/components/icon';

export const SearchDocumentIcon = ({ className }: CustomIconProps) => {
  return (
    <CustomIcon
      className={className}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
    >
      <path
        d="M8.54134 17.7084H3.95801V2.29175H16.0413V8.95841M17.083 17.9167L15.9772 16.7752M15.9772 16.7752C16.5322 16.2112 16.8747 15.4373 16.8747 14.5834C16.8747 12.8575 15.4756 11.4584 13.7497 11.4584C12.0238 11.4584 10.6247 12.8575 10.6247 14.5834C10.6247 16.3093 12.0238 17.7084 13.7497 17.7084C14.6217 17.7084 15.4103 17.3512 15.9772 16.7752Z"
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth="1.5"
      />
    </CustomIcon>
  );
};
