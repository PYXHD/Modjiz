import type { Metadata } from "next";
import "@/styles/globals.scss";
import styles from "./layout.module.scss";
import { fontLanding, fontApp } from "@/styles/config/fonts";
import { themeInitScript } from "@/styles/config/theme-init";

export const metadata: Metadata = {
  title: "Modjiz",
  description: "Ton journal d’humeur quotidien",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${fontLanding.variable} ${fontApp.variable}`}
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <div className={styles.appWrapper}>{children}</div>
      </body>
    </html>
  );
}

export default RootLayout;
