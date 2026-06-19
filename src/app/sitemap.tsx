import { MetadataRoute } from "next";

import { APP_URL } from "@/lib/config/app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: APP_URL,
      lastModified: now,
    },
    {
      url: `${APP_URL}/mentions-legales`,
      lastModified: now,
    },
    {
      url: `${APP_URL}/politique-confidentialite`,
      lastModified: now,
    },
  ];
}
