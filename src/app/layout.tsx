import type { Metadata } from "next";
import "@/styles/globals.scss";
import { fontLanding, fontApp } from "@/styles/config/fonts";
import { themeInitScript } from "@/styles/config/theme-init";

export const metadata: Metadata = {
  title: "Modjiz",
  description: "Ton journal d’humeur quotidien",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${fontLanding.variable} ${fontApp.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
