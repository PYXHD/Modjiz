"use client";

import styles from "./MobileTurnstile.module.scss";

import { Turnstile } from "@marsidev/react-turnstile";

declare global {
  interface Window {
    ReactNativeWebView?: {
      postMessage: (message: string) => void;
    };
  }
}

function MobileTurnstile() {
  return (
    <div className={styles.overlay}>
      <Turnstile
        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
        onSuccess={(token) => {
          window.ReactNativeWebView?.postMessage(token);

          if (window.parent !== window) {
            window.parent.postMessage({ token }, "*");
          }
        }}
      />
    </div>
  );
}

export default MobileTurnstile;
