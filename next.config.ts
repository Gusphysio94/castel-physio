import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ancien site Wix (castelphysio.com) : redirections permanentes vers le nouveau site.
  // N'ont d'effet que pour les requêtes arrivant par l'ancien domaine.
  async redirects() {
    const oldHost = [{ type: "host" as const, value: "(www\\.)?castelphysio\\.com" }];
    const to = (source: string, destination: string) => ({
      source,
      has: oldHost,
      destination: `https://castel-physio.com${destination}`,
      permanent: true,
    });
    return [
      to("/about", "/a-propos"),
      to("/services", "/kinesitherapie"),
      to("/faq", "/premiere-seance"),
      to("/blog", "/blog"),
      to("/post/:slug*", "/blog"),
      to("/blog/:slug*", "/blog"),
      // Tout le reste de l'ancien domaine (dont l'accueil) renvoie vers l'accueil
      to("/:path*", "/"),
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
