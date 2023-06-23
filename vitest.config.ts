import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';

const COVERAGE_THRESHOLD = 75;

export default defineConfig({
  plugins: [svelte({
    hot: !process.env.VITEST,
  })],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      lines: COVERAGE_THRESHOLD,
      branches: COVERAGE_THRESHOLD,
      functions: COVERAGE_THRESHOLD,
      statements: COVERAGE_THRESHOLD,
      reporter: ['text', 'json-summary', 'json', 'html'],
    }
  },
  resolve: {
    alias: {
      $lib: '/src/lib/',
      $src: '/src/'
    }
  }
});
