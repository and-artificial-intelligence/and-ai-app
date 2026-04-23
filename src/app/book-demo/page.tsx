'use client';
import posthog from 'posthog-js';
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from 'react';

import { Button } from '@/common/components/button';
import { Footer } from '@/common/components/footer';
import { SubHeader } from '@/common/components/subheader';
import Tab from '@/common/components/tab';
import { cn } from '@/common/functions/cn';
import { BrandColor } from '@/common/types/common';

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        prefill?: Record<string, unknown>;
        utm?: Record<string, unknown>;
      }) => void;
    };
  }
}

const CALENDLY_BASE_URL = 'https://calendly.com/caleb-andai/ai-demo-1';

function calendlyUrl(extra?: Record<string, string>) {
  const params = new URLSearchParams({
    background_color: 'f2efe9',
    primary_color: '0c0b09',
    ...extra,
  });
  return `${CALENDLY_BASE_URL}?${params.toString()}`;
}

const CALENDLY_INLINE_URL = calendlyUrl({ hide_gdpr_banner: '1' });
const CALENDLY_POPUP_URL = calendlyUrl();
const CALENDLY_FALLBACK_URL = CALENDLY_BASE_URL;
const CALENDLY_SCRIPT_SRC =
  'https://assets.calendly.com/assets/external/widget.js';
const CALENDLY_CSS_SRC =
  'https://assets.calendly.com/assets/external/widget.css';
const CALENDLY_LOAD_TIMEOUT_MS = 8000;

type WidgetState = 'loading' | 'ready' | 'failed';
type FailureReason =
  | 'timeout'
  | 'network_error'
  | 'missing_api'
  | 'ssr'
  | 'unknown';

const KNOWN_FAILURE_REASONS: ReadonlySet<FailureReason> = new Set([
  'timeout',
  'network_error',
  'missing_api',
  'ssr',
  'unknown',
]);

function toFailureReason(err: unknown): FailureReason {
  if (err instanceof Error) {
    const msg = err.message;
    if (KNOWN_FAILURE_REASONS.has(msg as FailureReason)) {
      return msg as FailureReason;
    }
  }
  return 'unknown';
}

function capture(event: string, properties: Record<string, unknown> = {}) {
  // posthog-js's singleton no-ops when it hasn't been initialized
  // (no POSTHOG_KEY), so we don't need defensive try/catch here.
  if (typeof window === 'undefined') return;
  posthog.capture(event, properties);
}

function ensureCalendlyCss() {
  if (document.querySelector('link[data-calendly-css="true"]')) return;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = CALENDLY_CSS_SRC;
  link.dataset.calendlyCss = 'true';
  document.head.appendChild(link);
}

// Memoise at module scope so React Strict Mode double-mounts and tab toggles
// don't kick off redundant network requests. A rejected promise is cached on
// purpose: if Calendly's CDN is blocked, we want subsequent consumers to see
// the failure immediately and render the fallback.
let calendlyScriptLoad: Promise<void> | null = null;

function ensureCalendlyScript(): Promise<void> {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('ssr'));
  }
  if (window.Calendly?.initInlineWidget) return Promise.resolve();
  if (calendlyScriptLoad) return calendlyScriptLoad;

  calendlyScriptLoad = new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');
    script.src = CALENDLY_SCRIPT_SRC;
    script.async = true;
    script.dataset.calendlyScript = 'true';

    let settled = false;
    const finish = (action: () => void) => {
      if (settled) return;
      settled = true;
      window.clearTimeout(timeoutId);
      script.removeEventListener('load', onLoad);
      script.removeEventListener('error', onError);
      action();
    };

    const onLoad = () =>
      finish(() => {
        if (window.Calendly?.initInlineWidget) {
          script.dataset.calendlyScriptLoaded = 'true';
          resolve();
        } else {
          reject(new Error('missing_api'));
        }
      });
    const onError = () => finish(() => reject(new Error('network_error')));
    const timeoutId = window.setTimeout(
      () => finish(() => reject(new Error('timeout'))),
      CALENDLY_LOAD_TIMEOUT_MS,
    );

    script.addEventListener('load', onLoad);
    script.addEventListener('error', onError);
    document.head.appendChild(script);
  });

  return calendlyScriptLoad;
}

export default function BookDemo() {
  const [viewMode, setViewMode] = useState<'calendly' | 'form'>('calendly');
  const [widgetState, setWidgetState] = useState<WidgetState>('loading');
  const [failureReason, setFailureReason] = useState<FailureReason | null>(
    null,
  );
  const inlineWidgetRef = useRef<HTMLDivElement | null>(null);
  const widgetInitializedRef = useRef(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    useCase: '',
    referralSource: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const initInlineWidget = useCallback(() => {
    if (widgetInitializedRef.current) return;
    const el = inlineWidgetRef.current;
    if (!el || !window.Calendly?.initInlineWidget) return;
    // Calendly's widget.js runs an auto-scan of `.calendly-inline-widget`
    // elements on load and initializes them via their `data-url`. On the
    // first mount that scan has already produced an iframe for us; avoid
    // double-injecting on top of it.
    if (!el.querySelector('iframe')) {
      window.Calendly.initInlineWidget({
        url: CALENDLY_INLINE_URL,
        parentElement: el,
      });
    }
    widgetInitializedRef.current = true;
    // Flip to `ready` here (not in the load effect) so a synchronous init from
    // the ref callback removes the skeleton in the same commit, avoiding a
    // flash of the skeleton over an already-rendered widget.
    setWidgetState('ready');
    capture('calendly_widget_rendered', { location: 'inline' });
  }, []);

  const setInlineRef = useCallback(
    (node: HTMLDivElement | null) => {
      inlineWidgetRef.current = node;
      if (!node) {
        widgetInitializedRef.current = false;
        return;
      }
      if (window.Calendly?.initInlineWidget) {
        initInlineWidget();
      }
    },
    [initInlineWidget],
  );

  useEffect(() => {
    ensureCalendlyCss();

    let cancelled = false;
    ensureCalendlyScript()
      .then(() => {
        if (cancelled) return;
        initInlineWidget();
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        const reason = toFailureReason(err);
        setFailureReason(reason);
        setWidgetState('failed');
        capture('calendly_widget_failed', {
          reason,
          location: 'inline',
        });
      });

    return () => {
      cancelled = true;
    };
  }, [initInlineWidget]);

  const handlePopup = () => {
    if (window.Calendly?.initPopupWidget) {
      window.Calendly.initPopupWidget({ url: CALENDLY_POPUP_URL });
      return;
    }
    capture('calendly_widget_failed', {
      reason: 'popup_unavailable',
      location: 'mobile_popup',
    });
    window.open(CALENDLY_FALLBACK_URL, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          useCase: '',
          referralSource: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const switchToForm = useCallback(() => {
    capture('calendly_fallback_switch_to_form');
    setViewMode('form');
  }, []);

  // If Calendly's script couldn't even be fetched, the user's network/extension
  // is likely blocking calendly.com too — hide the "open in new tab" CTA so we
  // don't send them to a URL that will also fail.
  const calendlyBlockedAtNetwork = failureReason === 'network_error';

  return (
    <main className="flex min-h-screen flex-col">
      <section className="relative mx-auto w-full flex-1 px-4 py-16 md:px-6 md:py-20 xl:max-w-[80rem] xl:px-8 xl:py-24">
        <div className="flex flex-col">
          <div className="mb-12 space-y-6 text-center">
            <div className="flex justify-center">
              <SubHeader brand={BrandColor.PRIMARY} title="Contact us" />
            </div>
            <h1 className="text-element-high-em text-5xl md:text-6xl xl:text-7xl">
              Book your <span className="font-martina italic">free trial</span>
            </h1>

            <Tab size="responsive">
              <Tab.Button
                className="!w-auto px-5"
                isActive={viewMode === 'calendly'}
                size="responsive"
                onClick={() => setViewMode('calendly')}
              >
                Schedule a time
              </Tab.Button>
              <Tab.Button
                className="!w-auto px-5"
                isActive={viewMode === 'form'}
                size="responsive"
                onClick={() => setViewMode('form')}
              >
                Send a message
              </Tab.Button>
            </Tab>
          </div>

          <div className="relative -my-8 flex justify-center py-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-0 -mx-8"
            >
              <div className="relative h-full w-full [background-image:linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_2%,rgba(0,0,0,1)_98%,rgba(0,0,0,0)_100%),linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_5%,rgba(0,0,0,1)_100%)] [background-size:20px_20px,20px_20px] [background-position:0_0,0_0] [background-repeat:repeat,repeat] [mask-composite:intersect] [mask-mode:alpha] [mask-repeat:no-repeat] [-webkit-mask-composite:source-in] [-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_2%,rgba(0,0,0,1)_98%,rgba(0,0,0,0)_100%),linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_5%,rgba(0,0,0,1)_100%)] [-webkit-mask-repeat:no-repeat]" />
            </div>

            {/* Keep Calendly's DOM mounted across tab toggles so the widget's
                iframe + internal `message` listeners aren't torn down and
                re-created every time the user switches to "Send a message"
                and back. Visibility is controlled via the `hidden` class. */}
            <div
              className={cn(
                'relative z-10 flex w-full justify-center',
                viewMode !== 'calendly' && 'hidden',
              )}
            >
              {/* Mobile: Popup link or fallback */}
              <div className="flex w-full justify-center md:hidden">
                {widgetState === 'failed' ? (
                  <CalendlyFallback
                    hideExternalLink={calendlyBlockedAtNetwork}
                    onSwitchToForm={switchToForm}
                  />
                ) : (
                  <Button
                    disabled={widgetState === 'loading'}
                    size="md"
                    onClick={handlePopup}
                  >
                    {widgetState === 'loading'
                      ? 'Loading scheduler…'
                      : 'Click here to book'}
                  </Button>
                )}
              </div>

              {/* Desktop: Inline widget with skeleton + fallback */}
              <div className="hidden w-full md:block">
                {widgetState === 'failed' ? (
                  <CalendlyFallback
                    hideExternalLink={calendlyBlockedAtNetwork}
                    onSwitchToForm={switchToForm}
                  />
                ) : (
                  <div
                    className="relative w-full"
                    style={{ minWidth: '320px', height: '700px' }}
                  >
                    <div
                      ref={setInlineRef}
                      aria-busy={widgetState === 'loading'}
                      aria-label="Scheduling calendar"
                      className="calendly-inline-widget absolute inset-0"
                      data-url={CALENDLY_INLINE_URL}
                    />
                    {widgetState === 'loading' && <CalendlySkeleton />}
                  </div>
                )}
              </div>
            </div>

            {viewMode === 'form' && (
              <div className="border-gray-dark/10 bg-background-lighter relative z-10 w-full max-w-2xl rounded-lg border p-6 shadow-sm md:p-8">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <label
                      className="text-element-high-em text-sm"
                      htmlFor="name"
                    >
                      Name <span className="text-brand-primary">*</span>
                    </label>
                    <input
                      required
                      className="text-element-high-em placeholder:text-element-low-em border-gray-dark/20 focus:border-gray-dark/40 bg-background-lighter h-11 w-full rounded-md border px-4 text-sm transition-colors focus:outline-none"
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      className="text-element-high-em text-sm"
                      htmlFor="email"
                    >
                      Work email <span className="text-brand-primary">*</span>
                    </label>
                    <input
                      required
                      className="text-element-high-em placeholder:text-element-low-em border-gray-dark/20 focus:border-gray-dark/40 bg-background-lighter h-11 w-full rounded-md border px-4 text-sm transition-colors focus:outline-none"
                      id="email"
                      name="email"
                      placeholder="you@company.com"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      className="text-element-high-em text-sm"
                      htmlFor="useCase"
                    >
                      Tell us about your use case{' '}
                      <span className="text-brand-primary">*</span>
                    </label>
                    <textarea
                      required
                      className="text-element-high-em placeholder:text-element-low-em border-gray-dark/20 focus:border-gray-dark/40 bg-background-lighter min-h-[120px] w-full rounded-md border px-4 py-3 text-sm transition-colors focus:outline-none"
                      id="useCase"
                      name="useCase"
                      placeholder="E.g., pitching clients, drafting invalidity contentions, building claim charts..."
                      value={formData.useCase}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      className="text-element-high-em text-sm"
                      htmlFor="referralSource"
                    >
                      How did you hear about us?{' '}
                      <span className="text-brand-primary">*</span>
                    </label>
                    <input
                      required
                      className="text-element-high-em placeholder:text-element-low-em border-gray-dark/20 focus:border-gray-dark/40 bg-background-lighter h-11 w-full rounded-md border px-4 text-sm transition-colors focus:outline-none"
                      id="referralSource"
                      name="referralSource"
                      placeholder="E.g., Google, a colleague, LinkedIn..."
                      type="text"
                      value={formData.referralSource}
                      onChange={handleChange}
                    />
                  </div>

                  <Button
                    fullWidth
                    className={cn('mt-2', isSubmitting && 'opacity-50')}
                    disabled={isSubmitting}
                    type="submit"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </Button>

                  {submitStatus === 'success' && (
                    <p className="text-center text-sm text-green-700">
                      Thank you! We&apos;ll be in touch soon.
                    </p>
                  )}
                  {submitStatus === 'error' && (
                    <p className="text-center text-sm text-red-700">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function CalendlySkeleton() {
  return (
    <div
      aria-hidden="true"
      className="border-gray-dark/10 bg-background-lighter absolute inset-0 flex animate-pulse items-center justify-center rounded-lg border"
    >
      <span className="text-element-low-em text-sm">Loading scheduler…</span>
    </div>
  );
}

function CalendlyFallback({
  hideExternalLink = false,
  onSwitchToForm,
}: {
  hideExternalLink?: boolean;
  onSwitchToForm: () => void;
}) {
  return (
    <div className="border-gray-dark/10 bg-background-lighter relative mx-auto w-full max-w-2xl rounded-lg border p-6 shadow-sm md:p-8">
      <h2 className="text-element-high-em mb-2 text-2xl">
        Scheduler failed to load
      </h2>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        {/* Promote the form CTA: if Calendly assets failed to load, the form
            is the most reliable recovery path for the user. */}
        <Button onClick={onSwitchToForm}>Send us a message instead</Button>
        {!hideExternalLink && (
          <Button external href={CALENDLY_FALLBACK_URL} variant="secondary">
            Open scheduler in new tab
          </Button>
        )}
      </div>
    </div>
  );
}
