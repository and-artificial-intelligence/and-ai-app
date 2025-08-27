import type { Metadata } from 'next';

import '@/common/styles/main.css';
import { geist, martina, mono } from '@/common/fonts';
import { cn } from '@/common/functions/cn';

export const metadata: Metadata = {
  title: '&AI',
  description: 'And AI',
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
