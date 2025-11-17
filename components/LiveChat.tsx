"use client";

import Script from "next/script";
import { useEffect } from "react";

const TAWK_PROPERTY_ID = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID;
const TAWK_WIDGET_ID = process.env.NEXT_PUBLIC_TAWK_WIDGET_ID;

/**
 * Tawk.to Live Chat Integration
 * Free live chat widget for customer support
 *
 * Setup:
 * 1. Sign up at https://www.tawk.to
 * 2. Create a property
 * 3. Get your Property ID and Widget ID
 * 4. Add to .env.local:
 *    NEXT_PUBLIC_TAWK_PROPERTY_ID=your-property-id
 *    NEXT_PUBLIC_TAWK_WIDGET_ID=your-widget-id
 */

declare global {
  interface Window {
    Tawk_API?: any;
    Tawk_LoadStart?: Date;
  }
}

export function LiveChat() {
  useEffect(() => {
    if (!TAWK_PROPERTY_ID || !TAWK_WIDGET_ID) return;

    // Set Tawk variables
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // Customize Tawk behavior
    window.Tawk_API.onLoad = function () {
      console.log("Live chat loaded");
    };

    // Optionally set visitor info (if you have user data)
    window.Tawk_API.setAttributes = function (attributes: any) {
      window.Tawk_API.setAttributes(
        {
          name: attributes.name,
          email: attributes.email,
          hash: attributes.hash,
        },
        function (error: any) {
          if (error) console.error("Tawk error:", error);
        }
      );
    };
  }, []);

  // Don't load if IDs not configured
  if (!TAWK_PROPERTY_ID || !TAWK_WIDGET_ID) {
    return null;
  }

  return (
    <Script
      id="tawk-chat"
      strategy="lazyOnload"
      src={`https://embed.tawk.to/${TAWK_PROPERTY_ID}/${TAWK_WIDGET_ID}`}
    />
  );
}

/**
 * Programmatically open/close chat
 * Use these functions in your components
 */
export const openChat = () => {
  if (window.Tawk_API) {
    window.Tawk_API.maximize();
  }
};

export const closeChat = () => {
  if (window.Tawk_API) {
    window.Tawk_API.minimize();
  }
};

/**
 * Send a message to the chat
 */
export const sendChatMessage = (message: string) => {
  if (window.Tawk_API) {
    window.Tawk_API.addEvent("message", {
      message: message,
    });
  }
};
