
const config = {
  stories: [ '../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)' ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config, { configType }) => {
    const assetIndex = config.module.rules.findIndex(({ test }) => test?.test('.svg'));

    config.module.rules.splice(assetIndex, 1);
    config.module.rules.unshift({ test: /\.svg$/, use: [ '@svgr/webpack' ] });
    config.module.rules.unshift({
      test: /\.(ttf|woff|woff2|png)$/,
      type: 'asset/resource',
      generator: { filename: 'static/media/[path][name][ext]' },
    });
    return config;
  },
};

export default config;
