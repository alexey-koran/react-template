import CopyWebpackPlugin from 'copy-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { resolve } from 'path';

import type { Configuration as WebpackConfiguration } from 'webpack';
import type { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

const isProduction = process.env.NODE_ENV === 'production';
const isAnalyze = process.env.analyze;

type Configuration = WebpackConfiguration & WebpackDevServerConfiguration;

const nothing = () => {};

const config: Configuration = {
  mode: isProduction ? 'production' : 'development',
  devtool: isProduction ? 'source-map' : 'eval',
  entry: './src/index.tsx',
  output: {
    path: resolve(__dirname, 'build'),
    filename: '[name].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
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
      {
        test: /\.(css|pcss)$/,
        exclude: /node_modules/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
              importLoaders: 1,
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        issuer: /\.[jt]sx?$/,
        loader: '@svgr/webpack',
      },
    ],
  },
  resolve: {
    extensions: ['.wasm', '.js', '.json', '.mjs', '.cjs', '.jsx', '.d.ts', '.ts', '.tsx'],
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  devServer: {
    static: {
      directory: resolve(__dirname, 'src/static'),
    },
    historyApiFallback: true,
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: './src/public/index.html',
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
