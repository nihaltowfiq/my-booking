/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/my-booking',
  webpack: function (config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack', 'url-loader'],
    });

    return config;
  },
};

export default nextConfig;
