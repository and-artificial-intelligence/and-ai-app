'use client';

import { useEffect, useState } from 'react';

type CookiebotConsentClass = 'necessary' | 'preferences' | 'statistics' | 'marketing';

type CookiebotConsent = Record<CookiebotConsentClass, boolean>;

interface CookiebotApi {
  consent?: CookiebotConsent;
  consented?: boolean;
  hasResponse?: boolean;
}

declare global {
  interface Window {
    Cookiebot?: CookiebotApi;
  }
}

// Cookiebot dispatches these as window-level events. We listen for any of
// them — `OnAccept` fires both when the user accepts and when an existing
// consent cookie is restored on subsequent visits.
const COOKIEBOT_EVENTS = [
  'CookiebotOnAccept',
  'CookiebotOnDecline',
  'CookiebotOnConsentReady',
] as const;

export function readCookiebotConsent(
  category: CookiebotConsentClass,
): boolean {
  if (typeof window === 'undefined') return false;
  return Boolean(window.Cookiebot?.consent?.[category]);
}

/**
 * Subscribes to Cookiebot consent changes. Fires the listener immediately
 * with the current value, then re-fires whenever Cookiebot reports a change.
 * Returns an unsubscribe function.
 */
export function subscribeToConsent(
  category: CookiebotConsentClass,
  listener: (granted: boolean) => void,
): () => void {
  if (typeof window === 'undefined') return () => undefined;

  let lastValue = readCookiebotConsent(category);
  listener(lastValue);

  const handler = () => {
    const next = readCookiebotConsent(category);
    if (next === lastValue) return;
    lastValue = next;
    listener(next);
  };

  for (const eventName of COOKIEBOT_EVENTS) {
    window.addEventListener(eventName, handler);
  }

  return () => {
    for (const eventName of COOKIEBOT_EVENTS) {
      window.removeEventListener(eventName, handler);
    }
  };
}

/**
 * React hook returning whether the given Cookiebot consent class is granted.
 * Returns `false` until Cookiebot reports consent (or always `false` in
 * environments where Cookiebot isn't loaded).
 */
export function useCookiebotConsent(category: CookiebotConsentClass): boolean {
  const [granted, setGranted] = useState(false);

  useEffect(() => subscribeToConsent(category, setGranted), [category]);

  return granted;
}
