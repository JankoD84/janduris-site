import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Retired pages: their content now lives on /projects. Permanent so search engines move the URL. */
  async redirects() {
    return [
      { source: "/proof", destination: "/projects", permanent: true },
      { source: "/websites", destination: "/projects", permanent: true },
    ];
  },
};

export default nextConfig;
