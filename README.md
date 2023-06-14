<div>
  <h1 align="center">exo</h1>
  <h4 align="center">
    Svelte Components Library
  </h4>
</div>

<div align="center">

[![Discord](https://img.shields.io/discord/1011702194925490186?color=blue&label=discord&logo=discord)](https://discord.gg/yde6mcgs2C)
![Publish](https://github.com/whizzes/exo/workflows/publish/badge.svg)
[![Version](https://img.shields.io/npm/v/@whizzes/exo.svg?style=flat)](https://www.npmjs.com/package/@whizzes/exo)
[![Downloads](https://img.shields.io/npm/dm/@whizzes/exo.svg?style=flat)](https://www.npmjs.com/package/@whizzes/exo)

</div>

## Getting Started

1. Install `@whizzes/exo`

```
npm i -D @whizzes/exo
```

2. Import styles in the `+layout.svelte` script section

```ts
import '@whizzes/exo/dist/styles.css';
```

## Development

```bash
bun run story:dev
```

### Setting up for Local Use

Include Exo as a local dependecy by clonning and building the project locally.

```json
  "@whizzes/exo": "file:../exo",
```

## Cloudflare Pages Preview Environments

Every time you open a new pull request, Cloudflare Pages will create a unique
preview URL, which will stay updated as you continue to push new commits to the
branch. This is only true when pull requests originate from the repository
itself.

## References

Check out all the available controls in their book: controls.histoire.dev.
https://sveltesociety.dev/recipes/testing-and-debugging/unit-testing-svelte-component