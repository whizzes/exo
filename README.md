<div>
  <h1 align="center">exo</h1>
  <h4 align="center">
    Svelte Components Library
  </h4>
</div>

<div align="center">

[![Discord](https://img.shields.io/discord/1011702194925490186?color=blue&label=discord&logo=discord)](https://discord.gg/yde6mcgs2C)
![CI](https://github.com/whizzes/exo/workflows/ci/badge.svg)
![Pages](https://github.com/whizzes/exo/workflows/pages/badge.svg)
![Publish](https://github.com/whizzes/exo/workflows/publish/badge.svg)
[![Version](https://img.shields.io/npm/v/@whizzes/exo.svg?style=flat)](https://www.npmjs.com/package/@whizzes/exo)
[![Downloads](https://img.shields.io/npm/dm/@whizzes/exo.svg?style=flat)](https://www.npmjs.com/package/@whizzes/exo)

</div>

## Getting Started

1. Install `@whizzes/exo`

```
npm i -D @whizzes/exo
```

2. Add the package to Svelte Scope

```diff
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
+    './node_modules/@whizzes/exo/**/*.{html,js,svelte,ts}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      }
    },
    variants: {
      extend: {}
    },
    plugins: [require('@tailwindcss/forms')]
  }
};
```

> Refer to the following links for details on why this is required
>
> https://github.com/svelte-add/svelte-add/issues/180
> https://github.com/cozemble/json-schema-data-editor/issues/6
> https://adamtuttle.codes/blog/2023/tailwind-svelte-design-system/

## Development

```bash
bun run story:dev
```

## Cloudflare Pages Preview Environments

Every time you open a new pull request, Cloudflare Pages will create a unique
preview URL, which will stay updated as you continue to push new commits to the
branch. This is only true when pull requests originate from the repository
itself.

## References

Check out all the available controls in their book: controls.histoire.dev.
https://sveltesociety.dev/recipes/testing-and-debugging/unit-testing-svelte-component