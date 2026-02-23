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

const googleTagInitScript = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-17910305132');
`;

const apolloTrackerScript = `
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
`;

const googleConsentDefaultsScript = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag("consent","default",{ad_personalization:"denied",ad_storage:"denied",ad_user_data:"denied",analytics_storage:"denied",functionality_storage:"denied",personalization_storage:"denied",security_storage:"granted",wait_for_update:500});gtag("set","ads_data_redaction",true);gtag("set","url_passthrough",false);`;

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
        {/* Google Ads - blocked until marketing consent */}
        <Script
          async
          data-cookieconsent="marketing"
          id="google-tag"
          src="https://www.googletagmanager.com/gtag/js?id=AW-17910305132"
          strategy="afterInteractive"
        />
        <Script
          data-cookieconsent="marketing"
          id="google-tag-init"
          strategy="afterInteractive"
        >
          {googleTagInitScript}
        </Script>
        {/* Apollo - blocked until marketing consent */}
        <Script
          data-cookieconsent="marketing"
          id="apollo-tracker"
          strategy="afterInteractive"
        >
          {apolloTrackerScript}
        </Script>
        {/* Leadsy - blocked until marketing consent (prod only) */}
        {process.env.NODE_ENV === 'production' && (
          <Script
            async
            data-cookieconsent="marketing"
            data-pid="dSGoRhLw6OFI8UwR"
            data-version="062024"
            id="vtag-ai-js"
            src="https://r2.leadsy.ai/tag.js"
            strategy="afterInteractive"
          />
        )}
      </head>
      <body>
        {/* Google Consent Mode v2 - Set default consent states BEFORE any Google tags */}
        <Script
          data-cookieconsent="ignore"
          id="google-consent-mode-default"
          strategy="beforeInteractive"
        >
          {googleConsentDefaultsScript}
        </Script>
        {/* Cookiebot - consent management */}
        <Script
          data-blockingmode="auto"
          data-cbid="20ab4c40-1b45-4e12-95f8-ded614dfc868"
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          strategy="beforeInteractive"
        />
        <Navbar />
        <div className="relative h-full min-h-full pt-16 xl:pt-20">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
