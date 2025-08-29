import { CustomIcon, CustomIconProps } from '@/common/components/icon';

export const XIcon = ({ className }: CustomIconProps) => {
  return (
    <CustomIcon
      className={className}
      height="32"
      viewBox="0 0 32 32"
      width="32"
    >
      <path
        d="M19.6022 10.333H21.5235L17.326 15.1337L22.264 21.6663H18.3976L15.3693 17.7043L11.9042 21.6663H9.9818L14.4714 16.5315L9.73438 10.333H13.6989L16.4362 13.9544L19.6022 10.333ZM18.9279 20.5156H19.9925L13.1204 11.4233H11.978L18.9279 20.5156Z"
        fill="currentColor"
      />
    </CustomIcon>
  );
};
