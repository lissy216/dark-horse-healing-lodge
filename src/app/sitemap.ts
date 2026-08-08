import type { MetadataRoute } from "next";

const BASE = "https://www.darkhorsehealinglodge.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`, priority: 1 },
    { url: `${BASE}/book`, priority: 0.9 },
    { url: `${BASE}/about`, priority: 0.8 },
    { url: `${BASE}/events`, priority: 0.7 },
    { url: `${BASE}/gallery`, priority: 0.6 },
    { url: `${BASE}/contact`, priority: 0.6 },
  ];
}
