# React template

This repository provides a modern React + TypeScript template for building Single Page Applications

It was created during my time working at a company as a replacement for Create React App in 2021

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiI+CiAgPHVzZSB4bGluazpocmVmPSIjYSIvPgogIDx1c2UgeGxpbms6aHJlZj0iI2IiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMuNjI1IDEuNSkiLz4KICA8ZGVmcz4KICAgIDxwYXRoIGlkPSJhIiBmaWxsPSIjZmZmZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS40MjQuNzY4YTcgNyAwIDEgMCAzLjY1OCAxMC45NTdBOCA4IDAgMSAxIDExLjQyNC43NjhaIi8+CiAgICA8cGF0aCBpZD0iYiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOC41NjguNTc2YTUuMjUgNS4yNSAwIDEgMCAyLjc0MyA4LjIxOEE2IDYgMCAxIDEgOC41NjguNTc2WiIvPgogIDwvZGVmcz4KPC9zdmc+Cg==)](CODE_OF_CONDUCT.md)

| Node                                                                                                                                        | Package manager                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [![Minimum node version](https://img.shields.io/badge/min%20node-22.19.0-orange?style=for-the-badge&logo=node.js)](https://nodejs.org/en/)  | [![Minimum npm version](https://img.shields.io/badge/min%20npm-10.9.3-orange?style=for-the-badge&logo=npm)](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) |
| [![Recommended node version](https://img.shields.io/badge/rec%20node-24.7.0-blue?style=for-the-badge&logo=node.js)](https://nodejs.org/en/) | [![Recommended pnpm](https://img.shields.io/badge/rec%20pnpm-10.15.0-blue?style=for-the-badge&logo=pnpm)](https://pnpm.io/)                                                    |

# Installation

> [!TIP]
> Highly recommend
>
> [PNPM](https://pnpm.io/) as a **package manager**
>
> [NVM](https://github.com/nvm-sh/nvm) as a **Node.js version manager**

```bash
git clone repo_url
cd project_location
pnpm i
```

# Scripts

> [!IMPORTANT]
> Development server use the **8080** port

```bash
http://localhost:8080/
```

> [!NOTE]
>
> `allJsTsExtensions` = js, cjs, mjs, jsx, cjsx, mjsx, ts, cts, mts, tsx, ctsx, mtsx
>
> For the more details check [scripts section in package.json](./package.json#L17)

<details open>

<summary><h3>Scripts table</h3></summary>

| Command                    | Description                                              | Path                            |
| -------------------------- | -------------------------------------------------------- | ------------------------------- |
|                            |                                                          |                                 |
|                            | `Dev server`                                             |                                 |
| `pnpm dev`                 | dev-server in **developer** mode (hot reload)            |                                 |
| `pnpm prod`                | dev-server in **production** mode (build optimizations)  |                                 |
|                            |                                                          |                                 |
|                            | `Build application`                                      |                                 |
| `pnpm clean`               | clean build folder                                       | `./build`                       |
| `pnpm buildapp`            | build application for deploy                             | `./build`                       |
| `pnpm build`               | clean build folder & build application for deploy        | `./build`                       |
|                            |                                                          |                                 |
|                            | `Code linting & formatting`                              |                                 |
| `pnpm prettier`            | code format check                                        | `**/*.{allJsTsExtensions,pcss}` |
| `pnpm prettier:fix`        | code format autofix                                      | `**/*.{allJsTsExtensions,pcss}` |
| `pnpm lint`                | eslint check                                             | `**/*.{allJsTsExtensions}`      |
| `pnpm lint:fix`            | eslint autofix                                           | `**/*.{allJsTsExtensions}`      |
| `pnpm lint:fix-staged`     | eslint autofix                                           | only on git staged files        |
| `pnpm lint:css`            | stylelint check                                          | `./src`                         |
| `pnpm lint:css:fix`        | stylelint autofix                                        | `./src`                         |
| `pnpm lint:css:fix-staged` | stylelint autofix                                        | only on git staged files        |
| `pnpm lint-all`            | prettier, eslint & stylelint check processes in order    | see above                       |
| `pnpm fix-all`             | prettier, eslint & stylelint autofix processes in order  | see above                       |
| `pnpm fix-staged`          | scripts from `.lintstagedrc` in autofix mode             | only on git staged files        |
|                            |                                                          |                                 |
|                            | `Analyzation & config check`                             |                                 |
| `pnpm analyze`             | analyze webpack bundle                                   |                                 |
| `pnpm test:eslint-config`  | eslint config inspector, displays flat configs & rules   |                                 |
| `pnpm test:webpack-config` | webpack config test                                      |                                 |
|                            |                                                          |                                 |
|                            | `Optimization`                                           |                                 |
| `pnpm svgo $FILE_PATH`     | svgo on passed `.svg` file for optimization              | `$FILE_PATH`                    |
| `pnpm svgo-all`            | svgo on all `.svg` files in the project for optimization | `./src`                         |
|                            |                                                          |                                 |
|                            | `Utility`                                                |                                 |
| `pnpm prepare`             | runs automatically after installation, setup husky       |                                 |

</details>

# Dependencies

> [!NOTE]
>
> For the more details check [dev & prod dependencies in package.json](./package.json#L41)

<details open>

<summary><h3>Dependencies table</h3></summary>

| Package name                   | Description                                                                                                                             | Version                                                                 |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
|                                |                                                                                                                                         |                                                                         |
|                                | `Webpack`                                                                                                                               |                                                                         |
| webpack                        | application bundler                                                                                                                     | [v5.101.\*](https://webpack.js.org/)                                    |
| webpack-cli                    | CLI for webpack                                                                                                                         | [v5.1.\*](https://webpack.js.org/api/cli/)                              |
| webpack-dev-server             | development server                                                                                                                      | [v6.0.\*](https://webpack.js.org/configuration/dev-server/)             |
| webpack-bundle-analyzer        | application bundle analysis                                                                                                             | [v4.10.\*](https://github.com/webpack-contrib/webpack-bundle-analyzer)  |
|                                | `Plugins`                                                                                                                               |                                                                         |
| fork-ts-checker-webpack-plugin | runs [TypeScript](https://www.typescriptlang.org/) type checker on a separate process                                                   | [v9.1.\*](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin) |
| html-webpack-plugin            | generate HTML5 output file entry path: `./public/index.html`                                                                            | [v5.6.\*](https://github.com/jantimon/html-webpack-plugin)              |
| mini-css-extract-plugin        | create a CSS file per JS file which contains CSS                                                                                        | [v2.9.\*](https://github.com/webpack-contrib/mini-css-extract-plugin)   |
| copy-webpack-plugin            | copy files to the build directory entry path `./src/static`                                                                             | [v13.0.\*](https://www.npmjs.com/package/copy-webpack-plugin)           |
| dotenv-webpack                 | support `.env` and other environment variables                                                                                          | [v8.1.\*](https://github.com/mrsteele/dotenv-webpack)                   |
|                                | `Loaders `                                                                                                                              |                                                                         |
| esbuild-loader                 | faster alternatives for transpilation and minification with [esbuild](https://github.com/evanw/esbuild)                                 | [v4.3.\*](https://github.com/privatenumber/esbuild-loader)              |
| @svgr/webpack                  | transform SVG's into React components                                                                                                   | [v8.1.\*](https://react-svgr.com/)                                      |
| style-loader                   | inject CSS into the DOM                                                                                                                 | [v4.0.\*](https://github.com/webpack-contrib/style-loader/)             |
| css-loader                     | interprets `@import` and `url()` like `import/require()` and will resolve them                                                          | [v7.1.\*](https://github.com/webpack-contrib/css-loader)                |
| postcss-loader                 | loader to process CSS with [PostCSS](https://github.com/postcss/postcss)                                                                | [v8.2.\*](https://github.com/webpack-contrib/postcss-loader)            |
|                                |                                                                                                                                         |                                                                         |
|                                | `Typescript`                                                                                                                            |                                                                         |
| typescript                     | [TypeScript](https://www.typescriptlang.org/) is JavaScript with syntax for types                                                       | [v5.9.\*](https://github.com/microsoft/TypeScript/releases)             |
| ts-node                        | [TypeScript](https://www.typescriptlang.org/) execution and REPL for [node.js](https://nodejs.org/)                                     | [v10.9.\*](https://typestrong.org/ts-node/)                             |
|                                |                                                                                                                                         |                                                                         |
|                                | `React`                                                                                                                                 |                                                                         |
| react                          | library for web and native user interfaces                                                                                              | [v19.1.\*](https://react.dev/versions)                                  |
| react-dom                      | React package for working with the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)                        | [v19.1.\*](https://github.com/facebook/react)                           |
| react-error-boundary           | reusable React [error boundary](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary) component | [v4.0.\*](https://github.com/bvaughn/react-error-boundary)              |
|                                |                                                                                                                                         |                                                                         |
|                                | `CSS`                                                                                                                                   |                                                                         |
| tailwindcss                    | A utility-first CSS framework for rapidly building custom user interfaces                                                               | [v4.1.\*](https://tailwindcss.com/)                                     |
| postcss                        | tool for transforming styles with JS plugins                                                                                            | [v8.5.\*](https://postcss.org/)                                         |
| postcss-preset-env             | polyfills modern CSS based on `.browserslistrc`                                                                                         | [v10.3.\*](https://www.npmjs.com/package/postcss-preset-env)            |
| postcss-assets                 | asset manager for CSS (archived)                                                                                                        | [v6.0.0](https://www.npmjs.com/package/postcss-assets)                  |
| clsx                           | utility for constructing className strings conditionally                                                                                | [v2.1.\*](https://github.com/lukeed/clsx)                               |
|                                |                                                                                                                                         |                                                                         |
|                                | `Git hooks`                                                                                                                             |                                                                         |
| husky                          | automatically lint commit messages, code run tests upon committing or pushing, works with git hooks                                     | [v9.1.\*](https://typicode.github.io/husky/)                            |
| lint-staged                    | run linters & formatters scripts on git staged files                                                                                    | [v16.1.\*](https://github.com/lint-staged/lint-staged)                  |
|                                |                                                                                                                                         |                                                                         |
|                                | `Code linting & formatting`                                                                                                             |                                                                         |
|                                | `Tools`                                                                                                                                 |                                                                         |
| eslint                         | configurable JavaScript linter                                                                                                          | [v9.34.\*](https://eslint.org/)                                         |
| prettier                       | opinionated code formatter                                                                                                              | [v3.6.\*](https://prettier.io/)                                         |
| stylelint                      | mighty CSS linter that helps you avoid errors and enforce conventions                                                                   | [v16.23.\*](https://github.com/stylelint/stylelint)                     |
|                                | `Configs`                                                                                                                               |                                                                         |
| @alexey-koran/prettier-config  | Prettier [sharing configuration](https://prettier.io/docs/en/configuration.html#sharing-configurations)                                 | [v0.1\*](https://npmjs.com/@alexey-koran/prettier-config)               |
| @alexey-koran/eslint-config    | ESLint [shareable config](https://eslint.org/docs/latest/extend/shareable-configs)                                                      | [v0.2\*](https://npmjs.com/@alexey-koran/eslint-config)                 |
| stylelint-config-clean-order   | order your styles with [stylelint-order](https://github.com/hudochenkov/stylelint-order)                                                | [v7.0.\*](https://github.com/kutsan/stylelint-config-clean-order)       |
| stylelint-config-standard      | standard shareable config for [Stylelint](https://stylelint.io/)                                                                        | [v39.0.\*](https://github.com/stylelint/stylelint-config-standard)      |
|                                | `Plugins`                                                                                                                               |                                                                         |
| @eslint/js                     | ESLint JavaScript plugin. Separating out JavaScript-specific functionality from ESLint                                                  | [v9.34.\*](https://www.npmjs.com/package/@eslint/js)                    |
| prettier-plugin-tailwindcss    | Prettier plugin for Tailwind CSS v3.0+ that automatically sorts classes                                                                 | [v0.6.\*](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)  |
| stylelint-prettier             | runs [Prettier](https://github.com/prettier/prettier) as a Stylelint rule and reports differences as individual Stylelint issues        | [v5.0.\*](https://github.com/prettier/stylelint-prettier)               |
|                                |                                                                                                                                         |                                                                         |
|                                | `Other`                                                                                                                                 |                                                                         |
| svgo                           | [Node.js](https://nodejs.org/) library and command-line application for optimizing SVG files                                            | [v4.0.\*](https://github.com/svg/svgo)                                  |
| cross-env                      | run scripts that set and use environment variables across platforms                                                                     | [v10.0.0](https://github.com/kentcdodds/cross-env)                      |
| @eslint/config-inspector       | ESLint config inspector                                                                                                                 | [v1.2.\*](https://github.com/eslint/config-inspector)                   |
| @alexey-koran/tsconfig         | TSConfig [sharing configuration](https://www.typescriptlang.org/tsconfig/#extends)                                                      | [v0.1.\*](https://www.npmjs.com/package/@alexey-koran/tsconfig)         |
|                                |                                                                                                                                         |                                                                         |
|                                | `@types`                                                                                                                                |                                                                         |
| @types/dotenv-webpack          | type definitions for [dotenv-webpack](https://github.com/mrsteele/dotenv-webpack)                                                       | [v7.0.\*](https://www.npmjs.com/package/@types/dotenv-webpack)          |
| @types/html-webpack-plugin     | type definitions for [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)                                             | [v3.2.\*](https://www.npmjs.com/package/@types/html-webpack-plugin)     |
| @types/node                    | type definitions for [node.js](https://nodejs.org/)                                                                                     | [v24.3.\*](https://www.npmjs.com/package/@types/node)                   |
| @types/react                   | type definitions for [react](https://react.dev/)                                                                                        | [v19.1.\*](https://www.npmjs.com/package/@types/react)                  |
| @types/react-dom               | type definitions for [react-dom](https://react.dev/)                                                                                    | [v19.1.\*](https://www.npmjs.com/package/@types/react-dom)              |
| @types/webpack                 | type definitions for [webpack](https://webpack.js.org/)                                                                                 | [v5.28.\*](https://www.npmjs.com/package/@types/webpack)                |
| @types/webpack-bundle-analyzer | type definitions for [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)                              | [v4.7.\*](https://www.npmjs.com/package/@types/webpack-bundle-analyzer) |

</details>
