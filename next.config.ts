import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects() {
    return [
      {
        source: "/sobre-mi",
        destination: "/es/sobre-mi",
        permanent: true,
      },
      {
        source: "/proyectos",
        destination: "/es/proyectos",
        permanent: true,
      },
      {
        source: "/contacto",
        destination: "/es/contacto",
        permanent: true,
      },
    ];
  },
  headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "frame-ancestors 'none'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self' https://formspree.io",
            ].join("; "),
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
  /* config options here */
  allowedDevOrigins: ["192.168.0.129", "192.168.1.7"],
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
