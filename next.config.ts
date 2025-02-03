import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  webpack(config: any) {
    config.cache = false;
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = withNextIntl(nextConfig);

export default withNextIntl(nextConfig);
