import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // disable eslint & typescript during build
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  //enable fetch logging
  logging: { fetches: { fullUrl: true, hmrRefreshes: true } },
  // transpile workspace packages
  transpilePackages: ['@chronzo/lib'],
};

export default nextConfig;
