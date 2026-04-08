'use client';

import { useEffect } from 'react';

// cspell:ignore aplo cookiebot evnt trovo
const MARKETING_SCRIPT_SOURCES = [
  'leadsy.ai',
  'apollo.io',
  'aplo-evnt.com',
  'tag.trovo-tag.com',
  'cookiebot.com',
] as const;

const KNOWN_MARKETING_ERROR_MESSAGES = [
  // Cookiebot throws this on preview domains that are not allowlisted.
  'not authorized to show the cookie banner',
] as const;

function stringifyValue(value: unknown): string {
  if (typeof value === 'string') {
    return value;
  }

  if (value instanceof Error) {
    return [value.message, value.stack].filter(Boolean).join('\n');
  }

  if (value && typeof value === 'object') {
    try {
      return JSON.stringify(value);
    } catch {
      return '';
    }
  }

  return '';
}

function matchesMarketingSource(...values: unknown[]): boolean {
  const haystack = values
    .map((value) => stringifyValue(value).toLowerCase())
    .filter(Boolean)
    .join('\n');

  return (
    MARKETING_SCRIPT_SOURCES.some((source) => haystack.includes(source)) ||
    KNOWN_MARKETING_ERROR_MESSAGES.some((message) => haystack.includes(message))
  );
}

function getEventTargetSource(target: EventTarget | null): string {
  if (target instanceof HTMLScriptElement) {
    return target.src;
  }

  return '';
}

export function MarketingScriptGuard() {
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      const errorSource = getEventTargetSource(event.target);
      const errorStack =
        event.error instanceof Error ? event.error.stack : event.error;

      if (
        !matchesMarketingSource(
          event.message,
          event.filename,
          errorSource,
          errorStack,
        )
      ) {
        return;
      }

      event.preventDefault();
      event.stopImmediatePropagation();
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const reason =
        event.reason instanceof Error
          ? [event.reason.message, event.reason.stack].filter(Boolean).join('\n')
          : event.reason;

      if (!matchesMarketingSource(reason)) {
        return;
      }

      event.preventDefault();
      event.stopImmediatePropagation();
    };

    window.addEventListener('error', handleError, true);
    window.addEventListener('unhandledrejection', handleUnhandledRejection, true);

    return () => {
      window.removeEventListener('error', handleError, true);
      window.removeEventListener(
        'unhandledrejection',
        handleUnhandledRejection,
        true,
      );
    };
  }, []);

  return null;
}
