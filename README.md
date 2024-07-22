# React template

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiI+CiAgPHVzZSB4bGluazpocmVmPSIjYSIvPgogIDx1c2UgeGxpbms6aHJlZj0iI2IiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMuNjI1IDEuNSkiLz4KICA8ZGVmcz4KICAgIDxwYXRoIGlkPSJhIiBmaWxsPSIjZmZmZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS40MjQuNzY4YTcgNyAwIDEgMCAzLjY1OCAxMC45NTdBOCA4IDAgMSAxIDExLjQyNC43NjhaIi8+CiAgICA8cGF0aCBpZD0iYiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOC41NjguNTc2YTUuMjUgNS4yNSAwIDEgMCAyLjc0MyA4LjIxOEE2IDYgMCAxIDEgOC41NjguNTc2WiIvPgogIDwvZGVmcz4KPC9zdmc+Cg==)](CODE_OF_CONDUCT.md)

[![Minimum node version](https://img.shields.io/badge/min%20node-20.15.1-orange?style=for-the-badge&logo=node.js)](https://nodejs.org/en/) [![Minimum npm version](https://img.shields.io/badge/min%20npm-10.7.0-orange?style=for-the-badge&logo=npm)](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

[![Recommended node version](https://img.shields.io/badge/rec%20node-22.5.1-blue?style=for-the-badge&logo=node.js)](https://nodejs.org/en/) [![Recommended pnpm](https://img.shields.io/badge/rec%20pnpm-9.6.0-blue?style=for-the-badge&logo=pnpm)](https://pnpm.io/)

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

**Dev & prod scripts use the 8080 port**

```bash
http://localhost:8080/
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

**Start ESLint check on all files**

```bash
pnpm lint
```

**Start ESLint autofix on all files**

```bash
pnpm lint:fix
```

**Start ESLint autofix only on git staged files**

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

**Start ESLint config inspector**

```bash
pnpm test:eslint-config
```

**Start Webpack config test**

```bash
pnpm test:webpack-config
```

**Start prettier, ESLint & stylelint check processes in order**

```bash
pnpm lint-all
```

**Start prettier, ESLint & stylelint autofix processes in order**

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

Unstable packages (rc, beta & etc.):

- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [@stylistic/eslint-plugin-js, @stylistic/eslint-plugin-jsx, @stylistic/eslint-plugin-ts](https://eslint.style/)
- [typescript-eslint](https://www.npmjs.com/package/typescript-eslint)
- [svgo](https://github.com/svg/svgo)

Unmet peer eslint@9.6.0 for ESLint plugins (wait ESLint v9 support releases):

- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
- [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)

Use fixupPluginRules from [@eslint/compat](https://www.npmjs.com/package/@eslint/compat) to fix [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import) plugin rules

Archived [postcss-assets](https://www.npmjs.com/package/postcss-assets) plugin
