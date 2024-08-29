# React template

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiI+CiAgPHVzZSB4bGluazpocmVmPSIjYSIvPgogIDx1c2UgeGxpbms6aHJlZj0iI2IiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMuNjI1IDEuNSkiLz4KICA8ZGVmcz4KICAgIDxwYXRoIGlkPSJhIiBmaWxsPSIjZmZmZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS40MjQuNzY4YTcgNyAwIDEgMCAzLjY1OCAxMC45NTdBOCA4IDAgMSAxIDExLjQyNC43NjhaIi8+CiAgICA8cGF0aCBpZD0iYiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOC41NjguNTc2YTUuMjUgNS4yNSAwIDEgMCAyLjc0MyA4LjIxOEE2IDYgMCAxIDEgOC41NjguNTc2WiIvPgogIDwvZGVmcz4KPC9zdmc+Cg==)](CODE_OF_CONDUCT.md)

| Node                                                                                                                                        | Package manager                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [![Minimum node version](https://img.shields.io/badge/min%20node-20.17.0-orange?style=for-the-badge&logo=node.js)](https://nodejs.org/en/)  | [![Minimum npm version](https://img.shields.io/badge/min%20npm-10.8.2-orange?style=for-the-badge&logo=npm)](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) |
| [![Recommended node version](https://img.shields.io/badge/rec%20node-22.7.0-blue?style=for-the-badge&logo=node.js)](https://nodejs.org/en/) | [![Recommended pnpm](https://img.shields.io/badge/rec%20pnpm-9.9.0-blue?style=for-the-badge&logo=pnpm)](https://pnpm.io/)                                                      |

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

| Package name                      | Description                                                                                                                             | Version                                                                   |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
|                                   |                                                                                                                                         |                                                                           |
|                                   | `Webpack`                                                                                                                               |                                                                           |
| webpack                           | application bundler                                                                                                                     | [v5.94.\*](https://webpack.js.org/)                                       |
| webpack-cli                       | CLI for webpack                                                                                                                         | [v5.1.\*](https://webpack.js.org/api/cli/)                                |
| webpack-dev-server                | development server                                                                                                                      | [v5.0.\*](https://webpack.js.org/configuration/dev-server/)               |
| webpack-bundle-analyzer           | application bundle analysis                                                                                                             | [v4.10.\*](https://github.com/webpack-contrib/webpack-bundle-analyzer)    |
|                                   | `Plugins`                                                                                                                               |                                                                           |
| fork-ts-checker-webpack-plugin    | runs [TypeScript](https://www.typescriptlang.org/) type checker on a separate process                                                   | [v9.0.\*](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin)   |
| html-webpack-plugin               | generate HTML5 output file entry path: `./src/public/index.html`                                                                        | [v5.6.\*](https://github.com/jantimon/html-webpack-plugin)                |
| mini-css-extract-plugin           | create a CSS file per JS file which contains CSS                                                                                        | [v2.9.\*](https://github.com/webpack-contrib/mini-css-extract-plugin)     |
| copy-webpack-plugin               | copy files to the build directory entry path `./src/static`                                                                             | [v12.0.\*](https://www.npmjs.com/package/copy-webpack-plugin)             |
| dotenv-webpack                    | support `.env` and other environment variables                                                                                          | [v8.1.\*](https://github.com/mrsteele/dotenv-webpack)                     |
|                                   | `Loaders `                                                                                                                              |                                                                           |
| esbuild-loader                    | faster alternatives for transpilation and minification with [esbuild](https://github.com/evanw/esbuild)                                 | [v4.2.\*](https://github.com/privatenumber/esbuild-loader)                |
| @svgr/webpack                     | transform SVG's into React components                                                                                                   | [v8.1.\*](https://react-svgr.com/)                                        |
| style-loader                      | inject CSS into the DOM                                                                                                                 | [v4.0.\*](https://github.com/webpack-contrib/style-loader/)               |
| css-loader                        | interprets `@import` and `url()` like `import/require()` and will resolve them                                                          | [v7.1.\*](https://github.com/webpack-contrib/css-loader)                  |
| postcss-loader                    | loader to process CSS with [PostCSS](https://github.com/postcss/postcss)                                                                | [v8.1.\*](https://github.com/webpack-contrib/postcss-loader)              |
|                                   |                                                                                                                                         |                                                                           |
|                                   | `Typescript`                                                                                                                            |                                                                           |
| typescript                        | [TypeScript](https://www.typescriptlang.org/) is JavaScript with syntax for types                                                       | [v5.5.\*](https://github.com/microsoft/TypeScript/releases)               |
| ts-node                           | [TypeScript](https://www.typescriptlang.org/) execution and REPL for [node.js](https://nodejs.org/)                                     | [v10.9.\*](https://typestrong.org/ts-node/)                               |
|                                   |                                                                                                                                         |                                                                           |
|                                   | `React`                                                                                                                                 |                                                                           |
| react                             | library for web and native user interfaces                                                                                              | [v18.3.\*](https://react.dev/versions)                                    |
| react-dom                         | React package for working with the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)                        | [v18.3.\*](https://github.com/facebook/react)                             |
| react-error-boundary              | reusable React [error boundary](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary) component | [v4.0.\*](https://github.com/bvaughn/react-error-boundary)                |
|                                   |                                                                                                                                         |                                                                           |
|                                   | `CSS`                                                                                                                                   |                                                                           |
| tailwindcss                       | A utility-first CSS framework for rapidly building custom user interfaces                                                               | [v3.4.\*](https://tailwindcss.com/)                                       |
| postcss                           | tool for transforming styles with JS plugins                                                                                            | [v8.4.\*](https://postcss.org/)                                           |
| postcss-preset-env                | polyfills modern CSS based on `.browserslistrc`                                                                                         | [v10.0.\*](https://www.npmjs.com/package/postcss-preset-env)              |
| postcss-import                    | [PostCSS](https://github.com/postcss/postcss) plugin to transform `@import` rules by inlining content                                   | [v16.1.\*](https://github.com/postcss/postcss-import)                     |
| postcss-assets                    | asset manager for CSS (archived)                                                                                                        | [v6.0.0](https://www.npmjs.com/package/postcss-assets)                    |
| clsx                              | utility for constructing className strings conditionally                                                                                | [v2.1.\*](https://github.com/lukeed/clsx)                                 |
|                                   |                                                                                                                                         |                                                                           |
|                                   | `Git hooks`                                                                                                                             |                                                                           |
| husky                             | automatically lint commit messages, code run tests upon committing or pushing, works with git hooks                                     | [v9.1.\*](https://typicode.github.io/husky/)                              |
| lint-staged                       | run linters & formatters scripts on git staged files                                                                                    | [v15.2.\*](https://github.com/lint-staged/lint-staged)                    |
|                                   |                                                                                                                                         |                                                                           |
|                                   | `Code linting & formatting`                                                                                                             |                                                                           |
|                                   | `Tools`                                                                                                                                 |                                                                           |
| eslint                            | configurable JavaScript linter                                                                                                          | [v9.9.\*](https://eslint.org/)                                            |
| prettier                          | opinionated code formatter                                                                                                              | [v3.3.\*](https://prettier.io/)                                           |
| typescript-eslint                 | enables ESLint and Prettier to support [TypeScript](https://www.typescriptlang.org/)                                                    | [v8.2.\*](https://typescript-eslint.io/)                                  |
| stylelint                         | mighty CSS linter that helps you avoid errors and enforce conventions                                                                   | [v16.9.\*](https://github.com/stylelint/stylelint)                        |
|                                   | `Configs`                                                                                                                               |                                                                           |
| eslint-config-prettier            | turns off all rules that are unnecessary or might conflict with [Prettier](https://github.com/prettier/prettier)                        | [v9.1.\*](https://github.com/prettier/eslint-config-prettier)             |
| @alexey-koran/prettier-config     | Prettier [sharing configuration](https://prettier.io/docs/en/configuration.html#sharing-configurations)                                 | [v0.1\*](https://npmjs.com/@alexey-koran/prettier-config)                 |
| stylelint-config-clean-order      | order your styles with [stylelint-order](https://github.com/hudochenkov/stylelint-order)                                                | [v6.1.\*](https://github.com/kutsan/stylelint-config-clean-order)         |
| stylelint-config-standard         | standard shareable config for [Stylelint](https://stylelint.io/)                                                                        | [v36.0.\*](https://github.com/stylelint/stylelint-config-standard)        |
|                                   | `Plugins`                                                                                                                               |                                                                           |
| @eslint/js                        | ESLint JavaScript plugin Separating out JavaScript-specific functionality from ESLint                                                   | [v9.9.\*](https://www.npmjs.com/package/@eslint/js)                       |
| eslint-plugin-import              | intends to support linting of ES2015+ (ES6+) import/export syntax, prevent issues with misspelling of file paths and import names       | [v2.29.\*](https://github.com/import-js/eslint-plugin-import)             |
| eslint-import-resolver-typescript | adds [TypeScript](https://www.typescriptlang.org/) support to [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import) | [v3.6.\*](https://github.com/import-js/eslint-import-resolver-typescript) |
| eslint-import-resolver-webpack    | webpack-literate module resolution plugin for [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)                | [v0.13.\*](https://www.npmjs.com/package/eslint-import-resolver-webpack)  |
| eslint-plugin-jsx-a11y            | static AST checker for accessibility rules on JSX elements                                                                              | [v6.9.\*](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)           |
| eslint-plugin-prettier            | runs [Prettier](https://github.com/prettier/prettier) as an ESLint rule and reports differences as individual ESLint issues             | [v5.2.\*](https://github.com/prettier/eslint-plugin-prettier)             |
| eslint-plugin-react               | React specific linting rules for ESLint                                                                                                 | [v7.35.\*](https://github.com/jsx-eslint/eslint-plugin-react)             |
| eslint-plugin-react-hooks         | enforces the [Rules of Hooks](https://react.dev/reference/rules/rules-of-hooks)                                                         | [v5.1.\*-rc](https://www.npmjs.com/package/eslint-plugin-react-hooks)     |
| prettier-plugin-tailwindcss       | Prettier plugin for Tailwind CSS v3.0+ that automatically sorts classes                                                                 | [v0.6.\*](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)    |
| @stylistic/eslint-plugin-js       | JavaScript stylistic rules for ESLint                                                                                                   | [v2.7.\*](https://www.npmjs.com/package/@stylistic/eslint-plugin-js)      |
| @stylistic/eslint-plugin-jsx      | [JSX](https://react.dev/learn/writing-markup-with-jsx) stylistic rules for ESLint                                                       | [v2.7.\*](https://www.npmjs.com/package/@stylistic/eslint-plugin-jsx)     |
| @stylistic/eslint-plugin-ts       | [TypeScript](https://www.typescriptlang.org/) stylistic rules for ESLint                                                                | [v2.7.\*](https://www.npmjs.com/package/@stylistic/eslint-plugin-ts)      |
| stylelint-prettier                | runs [Prettier](https://github.com/prettier/prettier) as a Stylelint rule and reports differences as individual Stylelint issues        | [v5.0.\*](https://github.com/prettier/stylelint-prettier)                 |
|                                   |                                                                                                                                         |                                                                           |
|                                   | `Other`                                                                                                                                 |                                                                           |
| globals                           | global identifiers from different JavaScript environments                                                                               | [v15.9.\*](https://github.com/sindresorhus/globals)                       |
| svgo                              | [Node.js](https://nodejs.org/) library and command-line application for optimizing SVG files                                            | [v4.0.\*-rc](https://github.com/svg/svgo)                                 |
| cross-env                         | run scripts that set and use environment variables across platforms (archived)                                                          | [v7.0.3](https://github.com/kentcdodds/cross-env)                         |
| @eslint/compat                    | ESLint compatibility utilities                                                                                                          | [v1.1.\*](https://github.com/eslint/rewrite)                              |
| @eslint/config-inspector          | ESLint config inspector                                                                                                                 | [v0.5.\*](https://github.com/eslint/config-inspector)                     |
| @alexey-koran/tsconfig            | TSConfig [sharing configuration](https://www.typescriptlang.org/tsconfig/#extends)                                                      | [v0.1.\*](https://www.npmjs.com/package/@alexey-koran/tsconfig)           |
|                                   |                                                                                                                                         |                                                                           |
|                                   | `@types`                                                                                                                                |                                                                           |
| @types/dotenv-webpack             | type definitions for [dotenv-webpack](https://github.com/mrsteele/dotenv-webpack)                                                       | [v7.0.\*](https://www.npmjs.com/package/@types/dotenv-webpack)            |
| @types/eslint\_\_js               | type definitions for [@eslint/js](https://www.npmjs.com/package/@eslint/js)                                                             | [v8.42.\*](https://www.npmjs.com/package/@types/eslint__js)               |
| @types/html-webpack-plugin        | type definitions for [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)                                             | [v3.2.\*](https://www.npmjs.com/package/@types/html-webpack-plugin)       |
| @types/node                       | type definitions for [node.js](https://nodejs.org/)                                                                                     | [v22.5.\*](https://www.npmjs.com/package/@types/node)                     |
| @types/react                      | type definitions for [react](https://react.dev/)                                                                                        | [v18.3.\*](https://www.npmjs.com/package/@types/react)                    |
| @types/react-dom                  | type definitions for [react-dom](https://react.dev/)                                                                                    | [v18.3.\*](https://www.npmjs.com/package/@types/react-dom)                |
| @types/webpack                    | type definitions for [webpack](https://webpack.js.org/)                                                                                 | [v5.28.\*](https://www.npmjs.com/package/@types/webpack)                  |
| @types/webpack-bundle-analyzer    | type definitions for [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)                              | [v4.7.\*](https://www.npmjs.com/package/@types/webpack-bundle-analyzer)   |

</details>
