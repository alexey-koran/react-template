# React template

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiI+CiAgPHVzZSB4bGluazpocmVmPSIjYSIvPgogIDx1c2UgeGxpbms6aHJlZj0iI2IiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMuNjI1IDEuNSkiLz4KICA8ZGVmcz4KICAgIDxwYXRoIGlkPSJhIiBmaWxsPSIjZmZmZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS40MjQuNzY4YTcgNyAwIDEgMCAzLjY1OCAxMC45NTdBOCA4IDAgMSAxIDExLjQyNC43NjhaIi8+CiAgICA8cGF0aCBpZD0iYiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOC41NjguNTc2YTUuMjUgNS4yNSAwIDEgMCAyLjc0MyA4LjIxOEE2IDYgMCAxIDEgOC41NjguNTc2WiIvPgogIDwvZGVmcz4KPC9zdmc+Cg==)](CODE_OF_CONDUCT.md)

[![Minimum node version](https://img.shields.io/badge/min%20node-16.20.1-orange?style=for-the-badge&logo=node.js)](https://nodejs.org/en/) [![Minimum npm version](https://img.shields.io/badge/min%20npm-8.19.4-orange?style=for-the-badge&logo=npm)](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

[![Recommended node version](https://img.shields.io/badge/rec%20node-20.5.1-blue?style=for-the-badge&logo=node.js)](https://nodejs.org/en/) [![Recommended pnpm](https://img.shields.io/badge/rec%20pnpm-8.6.12-blue?style=for-the-badge&logo=pnpm)](https://pnpm.io/)

**AS A PACKAGE MANAGER, I HIGHLY RECOMMEND USING** [PNPM](https://pnpm.io/)

**AS A NODE.JS VERSION MANAGER, I HIGHLY RECOMMEND USING** [NVM](https://github.com/nvm-sh/nvm)

# Installation

```bash
git clone repo_url
cd project_location
pnpm i
```

# Scripts

**Start developer mode (support hot reload)**

```bash
pnpm dev
```

**Start production mode (with some build optimizations)**

```bash
pnpm prod
```

**Clean build folder**

```bash
pnpm clean
```

**Build application for deploy**

```bash
pnpm buildapp
```

**Clean build folder & rebuild application for deploy**

```bash
pnpm build
```

**Start webpack plugin for bundle analyze**

```bash
pnpm analyze
```

**Husky utility script, starts only once, at the packages installation (not need to be manually called anytime)**

```bash
pnpm prepare
```

**Start formatter check on all files**

```bash
pnpm prettier
```

**Start formatter autofix on all files**

```bash
pnpm prettier:fix
```

**Start eslint check on all files**

```bash
pnpm lint
```

**Start eslint autofix on all files**

```bash
pnpm lint:fix
```

**Start eslint autofix only on git staged files**

```bash
pnpm lint:fix-staged
```

**Start stylelint check on all files**

```bash
pnpm lint:css
```

**Start stylelint autofix on all files**

```bash
pnpm lint:css:fix
```

**Start stylelint autofix only on git staged files**

```bash
pnpm lint:css:fix-staged
```

**Start prettier, eslint & stylelint check processes in order**

```bash
pnpm lint-all
```

**Start prettier, eslint & stylelint autofix processes in order**

```bash
pnpm fix-all
```

**Start lint-staged fix scripts from .lintstagedrc on git staged files (husky automatically call it on git pre-commit hook)**

```bash
pnpm fix-staged
```

**Start svgo on passed svg file (size optimization)**

```bash
pnpm svgo $FILE_PATH
```

**Start svgo on all svg files in the project (size optimization)**

```bash
pnpm svgo-all
```

# Known issues:

Temporary disabled postcss stylelint due to that it and stylelint-prettier don't support ESM
