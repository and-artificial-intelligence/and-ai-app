import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import Script from 'next/script';

import '@/common/styles/main.css';

import { Navbar } from '@/common/components/navbar';
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
      <head>
        <Script
          dangerouslySetInnerHTML={{
            __html: `
              function initApollo(){
                var n=Math.random().toString(36).substring(7),
                    o=document.createElement("script");
                o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n;
                o.async=true;
                o.defer=true;
                o.onload=function(){
                  window.trackingFunctions.onLoad({appId:"69672cf689c8f4001579b4f0"})
                };
                document.head.appendChild(o);
              }
              initApollo();
            `,
          }}
          id="apollo-tracker"
          strategy="beforeInteractive"
        />
      </head>
      <body>
        <Navbar />
        <div className="relative h-full min-h-full pt-16 xl:pt-20">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
