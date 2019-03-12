const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = env => {
  const isProduction = env === 'production';

  return {
    mode: isProduction ? 'production' : 'development',
    entry: ['@babel/polyfill', './src/index.tsx'],
    output: {
      chunkFilename: '[name].[chunkhash:4].js',
      filename: '[name].[chunkhash:4].js',
      publicPath: '/',
      path: path.resolve(__dirname, 'build'),
    },

    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',

    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
      alias: {
        src: path.resolve(__dirname, 'src'),
        public: path.resolve(__dirname, 'public'),
      },
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: ['babel-loader'],
        },
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
          ],
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]',
                outputPath: 'images',
              },
            },
          ],
        },
      ],
    },

    devServer: {
      stats: 'errors-only',
      historyApiFallback: true,
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
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
    ],
  };
};
