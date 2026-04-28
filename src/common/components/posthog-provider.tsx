'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import posthog from 'posthog-js';
import { PostHogProvider as PHProvider, usePostHog } from 'posthog-js/react';
import { Suspense, useEffect } from 'react';

import { subscribeToConsent } from '@/common/components/cookiebot-consent';

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const POSTHOG_HOST =
  process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com';

// PostHog's singleton can only be initialized once per page load; guard so
// React Strict Mode double-mounts don't reinit (which would clear queued
// events and reset distinct_id).
let posthogInitialized = false;

function initPostHogClient({ requireConsent }: { requireConsent: boolean }) {
  if (posthogInitialized || !POSTHOG_KEY || typeof window === 'undefined') {
    return;
  }
  posthogInitialized = true;

  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    person_profiles: 'identified_only',
    capture_pageview: false,
    capture_pageleave: true,
    // Surface uncaught exceptions (including 3rd-party widget failures) in
    // PostHog error tracking so they're observable without having to watch
    // session replays.
    capture_exceptions: true,
    // When Cookiebot is in play, hold back all persistence and event capture
    // until the user grants `statistics` consent. `memory` persistence keeps
    // PostHog state in JS memory only — no cookies, no localStorage — and
    // `opt_out_capturing_by_default` short-circuits every `capture()` call.
    // We flip both back on inside the consent listener below.
    ...(requireConsent && {
      persistence: 'memory',
      opt_out_capturing_by_default: true,
      opt_out_persistence_by_default: true,
    }),
  });
}

function PostHogPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const ph = usePostHog();

  useEffect(() => {
    if (pathname && ph) {
      let url = window.origin + pathname;
      const search = searchParams.toString();
      if (search) url += '?' + search;
      ph.capture('$pageview', { $current_url: url });
    }
  }, [pathname, searchParams, ph]);

  return null;
}

interface PostHogProviderProps {
  children: React.ReactNode;
  /**
   * When true, PostHog is initialized in an opted-out, memory-only mode and
   * only starts capturing once Cookiebot reports `statistics` consent. When
   * false (e.g. local/preview where Cookiebot isn't loaded), PostHog
   * initializes immediately with normal persistence so analytics still work
   * for development and QA.
   */
  requireConsent: boolean;
}

export function PostHogProvider({
  children,
  requireConsent,
}: PostHogProviderProps) {
  useEffect(() => {
    initPostHogClient({ requireConsent });

    if (!requireConsent || !POSTHOG_KEY) return;

    return subscribeToConsent('statistics', (granted) => {
      if (granted) {
        posthog.set_config({ persistence: 'localStorage+cookie' });
        if (posthog.has_opted_out_capturing()) {
          posthog.opt_in_capturing();
        }
      } else {
        if (!posthog.has_opted_out_capturing()) {
          posthog.opt_out_capturing();
        }
        posthog.set_config({ persistence: 'memory' });
      }
    });
  }, [requireConsent]);

  if (!POSTHOG_KEY) return <>{children}</>;

  return (
    <PHProvider client={posthog}>
      <Suspense fallback={null}>
        <PostHogPageView />
      </Suspense>
      {children}
    </PHProvider>
  );
}
