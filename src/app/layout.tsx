import "@/styles/globals.scss";

import { APP_URL } from "@/lib/config/app";

import type { Metadata } from "next";
import Script from "next/script";

import { fontLanding, fontApp } from "@/styles/config/fonts";

import { themeInitScript } from "@/lib/init/script/theme-init";

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),

  title: {
    default: "Modjiz",
    template: "%s | Modjiz",
  },
  description: "Ton journal d’humeur quotidien",
  icons: {
    icon: "/icons/favicon.svg",
  },

  openGraph: {
    title: "Modjiz",
    description:
      "Modjiz vous aide à suivre votre humeur, comprendre vos émotions et observer leur évolution au fil du temps.",
    url: APP_URL,
    siteName: "Modjiz",
    images: [
      {
        url: "/img/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      data-theme="light"
      className={`${fontLanding.variable} ${fontApp.variable}`}
    >
      <body>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        <div className="appWrapper">{children}</div>
      </body>
    </html>
  );
}

export default RootLayout;
