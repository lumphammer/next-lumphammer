"use client";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { useEffect } from "react";

// updated from https://posthog.com/docs/libraries/next-js 2025-01-16

export function CSPostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (!posthogKey) {
      return;
    }
    posthog.init(posthogKey, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      // capture_pageview: false, // Disable automatic pageview capture, as we capture manually
    });
  }, []);

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
