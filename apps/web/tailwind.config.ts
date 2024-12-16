import tailwindPresets from '@repo/ui/tailwind.config';
import type { Config } from 'tailwindcss';

const tailwindConfig: Config = {
  content: [
    './src/components/**/*.{js,ts,tsx,mdx}',
    './src/app/**/*.{js,ts,tsx,mdx}',
    '../../packages/ui/src/**/*.{ts,tsx}',
  ],
  presets: [tailwindPresets],
};

export default tailwindConfig;
