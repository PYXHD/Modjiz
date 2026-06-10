import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://modjiz.vercel.app",
    },
    {
      url: "https://modjiz.com/mentions-legales",
    },
    {
      url: "https://modjiz.com/politique-confidentialite",
    },
  ];
}
