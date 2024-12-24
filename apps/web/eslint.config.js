import nextConfig from '@crxup/eslint/next';

const config = [...nextConfig, { settings: { tailwind: { config: './tailwind.config.ts' } } }];

export default config;
