import { Links } from '@/common/constants/links';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-auto flex w-full flex-col items-center gap-4 px-4 pt-6 pb-6 sm:pb-12 md:max-w-[592px] md:flex-row md:justify-between lg:max-w-[976px] lg:px-6 xl:max-w-[1280px] xl:px-8 xl:pb-16">
      <p className="text-element-mid-em text-sm font-medium">
        © {currentYear} AndAI, Inc. All rights reserved.
      </p>
      <div className="flex items-center gap-8">
        <a
          className="text-element-mid-em hover:text-element-high-em cursor-pointer text-sm font-medium hover:underline"
          href="/company"
        >
          About
        </a>
        <a
          className="text-element-mid-em hover:text-element-high-em cursor-pointer text-sm font-medium hover:underline"
          href="/privacy"
        >
          Privacy
        </a>
        <a
          className="text-element-mid-em hover:text-element-high-em cursor-pointer text-sm font-medium hover:underline"
          href="/terms"
        >
          Terms
        </a>
        <a
          className="text-element-mid-em hover:text-element-high-em cursor-pointer text-sm font-medium hover:underline"
          href={Links.LinkedIn}
          rel="noopener noreferrer"
          target="_blank"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};
