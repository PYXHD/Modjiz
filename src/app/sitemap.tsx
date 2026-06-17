import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: "https://modjiz.fr",
      lastModified: now,
    },
    {
      url: "https://modjiz.fr/mentions-legales",
      lastModified: now,
    },
    {
      url: "https://modjiz.fr/politique-confidentialite",
      lastModified: now,
    },
  ];
}
