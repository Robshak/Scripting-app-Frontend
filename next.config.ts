import createNextIntlPlugin from "next-intl/plugin";
import type { Configuration } from "webpack";

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  webpack(config: Configuration) {
    config.cache = false;

    if (!config.module) {
      config.module = { rules: [] };
    }

    config.module.rules = config.module.rules || [];

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = withNextIntl(nextConfig);

export default withNextIntl(nextConfig);
