import { resolve } from 'path';

import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { Configuration } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const isProduction = process.env.NODE_ENV === 'production';
const isAnalyze = process.env.analyze;

const nothing = () => {};

const formStylesRule = (useModules = false) => ({
  test: /\.(css|scss|sass)$/,
  [useModules ? 'exclude' : 'include']: /assets\/stylesheets|node_modules/,
  use: [
    isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
    {
      loader: 'css-loader',
      options: {
        url: false,
        importLoaders: 1,
        sourceMap: true,
        ...(useModules && {
          modules: {
            localIdentName: '[local]-[hash:base64:5]',
          },
        }),
      },
    },
    'sass-loader',
  ],
});

const config: Configuration = {
  mode: isProduction ? 'production' : 'development',
  devtool: isProduction ? false : 'source-map',
  entry: './src/index.tsx',
  output: {
    path: resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: isProduction ? '[contenthash].[ext]' : '[name].[ext]',
              outputPath: 'static/images',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'static/fonts',
            },
          },
        ],
      },
      formStylesRule(false),
      formStylesRule(true),
      {
        test: /\.svg$/,
        loader: 'react-svg-loader',
        options: {
          svgo: {
            plugins: [{ removeUselessStrokeAndFill: false }],
            floatPrecision: 2,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.mjs', '.jsx', '.d.ts', '.ts', '.tsx'],
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  devServer: {
    contentBase: './src/static',
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new MiniCssExtractPlugin({
      chunkFilename: '[id].css',
      filename: '[name].css',
    }),
    isAnalyze ? new BundleAnalyzerPlugin() : nothing,
    isProduction
      ? new CopyWebpackPlugin({ patterns: [{ from: './src/static', to: '.' }] })
      : nothing,
  ],
};

export default config;
