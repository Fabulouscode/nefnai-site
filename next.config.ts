import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/programmes', destination: '/news-events', permanent: true },
      { source: '/training-certification', destination: '/training', permanent: true },
      { source: '/who-we-are/', destination: '/who-we-are', permanent: true },
      { source: '/contact-us', destination: '/get-help#contact', permanent: true },
      { source: '/login', destination: '/account/login', permanent: true },
      { source: '/register', destination: '/account/register', permanent: true },
      { source: '/password-reset', destination: '/account/forgot-password', permanent: true },
    ];
  },
};

export default nextConfig;
