import { merge } from 'webpack-merge';

import webpackConfig from './webpack.config';

const config = merge(webpackConfig, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'babel-loader?cacheDirectory',
        exclude: [/node_modules/],
      },
    ],
  },
});

export default config;
