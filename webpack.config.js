const merge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'dist'),
};

const commonConfig = merge([
  {
    entry: PATHS.app,
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
      }),
    ],
    resolve: {
      extensions: ['.ts', '.tsx', 'js', 'json'],
    },
  },
]);

const productionConfig = merge([
  {
    output: {
      path: PATHS.build,
    },
  },
]);

const developmentConfig = merge([]);

module.exports = mode => {
  if (mode === 'production') {
    return merge(commonConfig, productionConfig, { mode });
  }
  return merge(commonConfig, developmentConfig, { mode });
};
