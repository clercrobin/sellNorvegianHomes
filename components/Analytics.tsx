"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

// Google Analytics configuration
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

// Declare gtag and fbq on window object
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

/**
 * Google Analytics Component
 * Tracks page views and custom events
 */
export function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!GA_ID || !window.gtag) return;

    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : "");

    window.gtag("config", GA_ID, {
      page_path: url,
    });
  }, [pathname, searchParams]);

  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}

/**
 * Meta Pixel (Facebook/Instagram) Component
 * Tracks events for Facebook Ads
 */
export function MetaPixel() {
  const pathname = usePathname();

  useEffect(() => {
    if (!META_PIXEL_ID || !window.fbq) return;

    window.fbq("track", "PageView");
  }, [pathname]);

  if (!META_PIXEL_ID) return null;

  return (
    <Script id="meta-pixel" strategy="afterInteractive">
      {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${META_PIXEL_ID}');
        fbq('track', 'PageView');
      `}
    </Script>
  );
}

/**
 * Analytics Helper Functions
 * Call these to track custom events
 */

// Google Analytics Events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track form submissions
export const trackFormSubmit = (formName: string) => {
  trackEvent("form_submit", "engagement", formName);
  if (window.fbq) {
    window.fbq("track", "Lead");
  }
};

// Track CTA clicks
export const trackCTAClick = (ctaName: string, location: string) => {
  trackEvent("cta_click", "engagement", `${ctaName}_${location}`);
};

// Track house model views
export const trackModelView = (modelName: string) => {
  trackEvent("view_item", "engagement", modelName);
  if (window.fbq) {
    window.fbq("track", "ViewContent", {
      content_name: modelName,
      content_category: "house_model",
    });
  }
};

// Track quote requests
export const trackQuoteRequest = (modelName: string, budget: string) => {
  trackEvent("request_quote", "conversion", modelName);
  if (window.fbq) {
    window.fbq("track", "Lead", {
      content_name: modelName,
      value: budget,
      currency: "EUR",
    });
  }
};

// Track phone clicks
export const trackPhoneClick = () => {
  trackEvent("phone_click", "engagement", "contact");
  if (window.fbq) {
    window.fbq("track", "Contact");
  }
};

// Track downloads
export const trackDownload = (resourceName: string) => {
  trackEvent("download", "engagement", resourceName);
  if (window.fbq) {
    window.fbq("track", "Lead", {
      content_name: resourceName,
    });
  }
};
