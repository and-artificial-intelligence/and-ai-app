'use client';

import { Analytics } from '@vercel/analytics/next';

import { useCookiebotConsent } from '@/common/components/cookiebot-consent';

interface ConsentGatedAnalyticsProps {
  /**
   * If true, Cookiebot is expected to be loaded and Analytics will only mount
   * after the user grants the `statistics` consent class. If false (e.g. in
   * non-production environments where Cookiebot isn't loaded), Analytics
   * mounts immediately so dev/preview environments still get telemetry.
   */
  requireConsent: boolean;
}

export function ConsentGatedAnalytics({
  requireConsent,
}: ConsentGatedAnalyticsProps) {
  const statisticsGranted = useCookiebotConsent('statistics');

  if (requireConsent && !statisticsGranted) return null;

  return <Analytics />;
}
