import localFont from "next/font/local";

const fontLanding = localFont({
  src: "../../assets/fonts/Manrope-Regular.ttf",
  variable: "--font-landing",
  display: "swap",
});

const fontApp = localFont({
  src: [
    {
      path: "../../assets/fonts/SourGummy_SemiExpanded-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../assets/fonts/SourGummy_SemiExpanded-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../assets/fonts/SourGummy_SemiExpanded-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-app",
  display: "swap",
});

export { fontLanding, fontApp };
