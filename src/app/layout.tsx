import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import Script from 'next/script';

import '@/common/styles/main.css';

import { Navbar } from '@/common/components/navbar';
import { SchemaScript } from '@/common/components/schema-script';
import { geist, martina, mono } from '@/common/fonts';
import { cn } from '@/common/functions/cn';

import { generateOrganizationSchema } from '@/lib/schema';

import 'blaze-slider/dist/blaze.css';

export const metadata: Metadata = {
  title: {
    default: '&AI | Scale your patent expertise',
    template: '%s | &AI',
  },
  description:
    'The AI workspace for executing litigation-grade patent work at machine scale. Built for in-house counsel and litigation teams.',
  authors: [{ name: 'And AI' }],
  metadataBase: new URL('https://tryandai.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tryandai.com',
    siteName: '&AI',
    title: '&AI | Scale your patent expertise',
    description:
      'The AI workspace for executing litigation-grade patent work at machine scale. Built for in-house counsel and litigation teams.',
    images: [
      {
        url: '/Logo-Design-Full-Color-Black.png',
        width: 1200,
        height: 630,
        alt: '&AI - Patent Litigation AI Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '&AI | Scale your patent expertise',
    description:
      'The AI workspace for executing litigation-grade patent work at machine scale. Built for in-house counsel and litigation teams.',
    images: ['/Logo-Design-Full-Color-Black.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
        <SchemaScript schema={generateOrganizationSchema()} />
        <Script
          async
          id="google-tag"
          src="https://www.googletagmanager.com/gtag/js?id=AW-17910305132"
          strategy="afterInteractive"
        />
        <Script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17910305132');
            `,
          }}
          id="google-tag-init"
          strategy="afterInteractive"
        />
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
        <Script
          async
          data-pid="dSGoRhLw6OFI8UwR"
          data-version="062024"
          id="vtag-ai-js"
          src="https://r2.leadsy.ai/tag.js"
          strategy="afterInteractive"
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
