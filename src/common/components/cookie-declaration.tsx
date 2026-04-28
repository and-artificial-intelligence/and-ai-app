'use client';

import { useEffect, useRef } from 'react';

// Matches the CBID used by the Cookiebot uc.js banner script in
// `src/app/layout.tsx`. Both must point at the same Cookiebot domain group
// or the declaration will list cookies for the wrong project.
const COOKIEBOT_CBID = '20ab4c40-1b45-4e12-95f8-ded614dfc868';
const COOKIEBOT_DECLARATION_SCRIPT_ID = 'CookieDeclaration';

interface CookieDeclarationProps {
  /**
   * When true, inject Cookiebot's `cd.js` so the live, auto-maintained cookie
   * table renders here. When false, render a static placeholder — Cookiebot
   * only authorizes the production hostnames listed in its dashboard, so
   * loading `cd.js` from dev/preview environments would fail with the
   * "not authorized to show the cookie banner" error that
   * `MarketingScriptGuard` swallows but still pollutes network logs.
   */
  enabled: boolean;
}

export const CookieDeclaration = ({ enabled }: CookieDeclarationProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const container = containerRef.current;
    if (!container) return;

    // `cd.js` locates its own <script> element on execution and inserts the
    // declaration table immediately after it, so we host the script inside a
    // dedicated container. Clearing on mount also prevents stacking on HMR or
    // client-side navigation back to /privacy.
    container.replaceChildren();

    const script = document.createElement('script');
    script.id = COOKIEBOT_DECLARATION_SCRIPT_ID;
    script.src = `https://consent.cookiebot.com/${COOKIEBOT_CBID}/cd.js`;
    script.type = 'text/javascript';
    script.async = true;
    container.appendChild(script);

    return () => {
      container.replaceChildren();
    };
  }, [enabled]);

  if (!enabled) {
    return (
      <p>
        A live Cookiebot cookie declaration is rendered here in production. It
        lists every cookie set on the Site, grouped by purpose (necessary,
        preferences, statistics, marketing), along with each cookie&apos;s
        provider, purpose, and expiration.
      </p>
    );
  }

  return (
    <div
      className="text-element-mid-em [&_a]:text-element-high-em [&_a]:underline"
      ref={containerRef}
    />
  );
};
