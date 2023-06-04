import { HstSvelte } from '@histoire/plugin-svelte'
import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
  resolve: {
    alias: {
      $src: path.resolve('./src'),
    }
  },
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	histoire: {
    plugins: [
      HstSvelte(),
    ],
    setupFile: './src/histoire.setup.ts',
    tree: {
      groups: [
        {
          id: 'top',
          title: '',
        },
      ],
    },
  },
});
