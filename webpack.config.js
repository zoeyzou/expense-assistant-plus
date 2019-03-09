const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
  const isProduction = env === 'production';

  return {
    mode: isProduction ? 'production' : 'development',
    entry: './src/index.tsx',
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'build'),
    },

    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
      alias: {
        src: path.resolve(__dirname, 'src'),
      },
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: ['babel-loader'],
        },
      ],
    },

    devServer: {
      stats: 'errors-only',
      open: true,
      overlay: true,
    },

    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
      }),
    ],
  };
};
