import type { Metadata } from 'next';

import '@/common/styles/main.css';

import { geist, martina, mono } from '@/common/fonts';
import { cn } from '@/common/functions/cn';

import 'blaze-slider/dist/blaze.css';

export const metadata: Metadata = {
  title: '&AI | Scale your patent expertise',
  description:
    '&AI is the AI workspace for executing litigation-grade patent work at machine scale.',
  authors: [{ name: 'And AI' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={cn(
        geist.className,
        geist.variable,
        mono.variable,
        martina.variable,
      )}
      lang="en"
    >
      <body>
        <div className="relative h-full min-h-full">{children}</div>
      </body>
    </html>
  );
}
