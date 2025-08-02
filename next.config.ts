import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(js|ts|tsx)$/,
      use: {
        loader: require.resolve('string-replace-loader'),
        options: {
          search: 'from\\s+[\'"]next/document[\'"]',
          replace: (match) => {
            console.log('Detected import from next/document');
            return match;
          },
          flags: 'g',
        },
      },
    });
    return config;
  },
};

module.exports = nextConfig;