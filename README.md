# React template

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiI+CiAgPHVzZSB4bGluazpocmVmPSIjYSIvPgogIDx1c2UgeGxpbms6aHJlZj0iI2IiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMuNjI1IDEuNSkiLz4KICA8ZGVmcz4KICAgIDxwYXRoIGlkPSJhIiBmaWxsPSIjZmZmZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS40MjQuNzY4YTcgNyAwIDEgMCAzLjY1OCAxMC45NTdBOCA4IDAgMSAxIDExLjQyNC43NjhaIi8+CiAgICA8cGF0aCBpZD0iYiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOC41NjguNTc2YTUuMjUgNS4yNSAwIDEgMCAyLjc0MyA4LjIxOEE2IDYgMCAxIDEgOC41NjguNTc2WiIvPgogIDwvZGVmcz4KPC9zdmc+Cg==)](CODE_OF_CONDUCT.md)

| Node                                                                                                                                        | Package manager                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [![Minimum node version](https://img.shields.io/badge/min%20node-20.15.1-orange?style=for-the-badge&logo=node.js)](https://nodejs.org/en/)  | [![Minimum npm version](https://img.shields.io/badge/min%20npm-10.7.0-orange?style=for-the-badge&logo=npm)](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) |
| [![Recommended node version](https://img.shields.io/badge/rec%20node-22.5.1-blue?style=for-the-badge&logo=node.js)](https://nodejs.org/en/) | [![Recommended pnpm](https://img.shields.io/badge/rec%20pnpm-9.6.0-blue?style=for-the-badge&logo=pnpm)](https://pnpm.io/)                                                      |

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
> Dev & prod scripts use the **8080** port

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
| `pnpm test:eslint-config`  | eslint config inspector                                  |                                 |
| `pnpm test:webpack-config` | webpack config test                                      |                                 |
|                            |                                                          |                                 |
|                            | `Optimization`                                           |                                 |
| `pnpm svgo $FILE_PATH`     | svgo on passed `.svg` file for optimization              | `$FILE_PATH`                    |
| `pnpm svgo-all`            | svgo on all `.svg` files in the project for optimization | `./src`                         |
|                            |                                                          |                                 |
|                            | `Utility`                                                |                                 |
| `pnpm prepare`             | runs automatically after installation, setup husky       |                                 |

</details>
