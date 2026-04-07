import type { Metadata } from "next";
import Script from "next/script";

import "@/styles/globals.scss";

import { fontLanding, fontApp } from "@/styles/config/fonts";
import { themeInitScript } from "@/lib/init/script/theme-init";

export const metadata: Metadata = {
  title: "Modjiz",
  description: "Ton journal d’humeur quotidien",
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
