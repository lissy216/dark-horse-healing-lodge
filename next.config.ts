import type { NextConfig } from "next";

const securityHeaders = [
  // Never let this site be embedded in an iframe on another domain (clickjacking)
  { key: "X-Frame-Options", value: "DENY" },
  // Browsers must respect declared content types (MIME sniffing)
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Send only the origin to external sites, full URL to our own pages
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // This site never needs camera, mic, or location access
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
