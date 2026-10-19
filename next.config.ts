import type { NextConfig } from "next";

const pages = process.env.GITHUB_PAGES === 'true';
const basePath = pages ? '/nefnai-site' : '';

const nextConfig: NextConfig = pages
  ? {
      output: 'export',
      basePath,
      trailingSlash: true,
      images: { loader: 'custom', loaderFile: './src/lib/image-loader.ts' },
      env: { NEXT_PUBLIC_BASE_PATH: basePath },
    }
  : {
      async redirects() {
        return [
          { source: '/programmes', destination: '/news-events', permanent: true },
          { source: '/training', destination: '/training-certification', permanent: true },
          { source: '/who-we-are/', destination: '/who-we-are', permanent: true },
          { source: '/contact-us', destination: '/get-help#contact', permanent: true },
          { source: '/login', destination: '/account/login', permanent: true },
          { source: '/register', destination: '/account/register', permanent: true },
          { source: '/password-reset', destination: '/account/forgot-password', permanent: true },
        ];
      },
    };

export default nextConfig;
