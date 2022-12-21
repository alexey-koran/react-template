import CopyWebpackPlugin from 'copy-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { resolve } from 'path';

import type { Configuration as WebpackConfiguration, WebpackOptionsNormalized } from 'webpack';
import type { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

interface AdditionalOptions {
  hot?: boolean;
  analyze?: boolean;
}

type Env = Record<string, boolean> | undefined;
type Options = Pick<WebpackOptionsNormalized, 'mode'> & AdditionalOptions;
type Configuration = WebpackConfiguration & WebpackDevServerConfiguration;

const config = (env: Env, options: Options): Configuration => {
  const isProduction = options.mode === 'production';
  const isDevelopment = options.mode === 'development';
  const isDevServer = isDevelopment && options?.hot;
  const isAnalyze = isDevelopment && options?.analyze;

  const appConfig: Configuration = {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? false : 'eval-source-map',

    entry: './src/index.tsx',

    output: {
      path: resolve(__dirname, 'build'),
      filename: 'js/[name].[contenthash].js',
      assetModuleFilename: 'assets/[hash][ext][query]',
    },

    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
          },
          default: {
            minChunks: 1,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
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
          test: /\.(png|jpg|jpeg|gif|webp)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'images/[hash][ext][query]',
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[hash][ext][query]',
          },
        },
        {
          test: /\.(css|pcss)$/,
          exclude: /node_modules/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: {
                  auto: true,
                  localIdentName: isProduction ? '[hash:base64]' : '[name]-[local]-[hash:base64:8]',
                },
              },
            },
            {
              loader: 'postcss-loader',
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

    plugins: [
      new Dotenv(),
      new HtmlWebpackPlugin({
        title: 'Webpack react and typescript boilerplate',
        template: './src/public/index.html',
      }),
      new MiniCssExtractPlugin({
        filename: isProduction ? 'css/[name].[contenthash].css' : 'css/[name].css',
        chunkFilename: isProduction ? 'css/[id].[contenthash].css' : 'css/[id].css',
      }),
      ...(isAnalyze
        ? [
          new BundleAnalyzerPlugin({
            analyzerPort: 8081,
          }),
        ]
        : []),
      ...(isProduction
        ? [new CopyWebpackPlugin({ patterns: [{ from: './src/static', to: '.' }] })]
        : []),
    ],
  };

  const devServer: WebpackDevServerConfiguration = {
    static: {
      directory: resolve(__dirname, 'src/static'),
    },
    historyApiFallback: true,
    compress: true,
    port: 8080,
  };

  return isDevServer
    ? {
      ...appConfig,
      devServer,
    }
    : appConfig;
};

export default config;
