const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
  const isProduction = env === 'production';

  return {
    mode: isProduction ? 'production' : 'development',
    entry: './src/index.tsx',
    output: {
      filename: '[name].js',
      publicPath: '/',
      path: path.resolve(__dirname, 'build'),
    },

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
    ],
  };
};
