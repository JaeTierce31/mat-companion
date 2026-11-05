import { configDefaults, defineConfig } from 'vitest/config';

// This file only sets test + coverage options. JSX is handled by Vite's
// built-in esbuild transform (see vite.config.js); no extra plugin needed.

export default defineConfig({
  test: {
    // Individual test files opt into jsdom with a
    // `// @vitest-environment jsdom` pragma (claim tests run in node).
    // Playwright specs live in e2e/ and are run with `npm run test:e2e`,
    // never by Vitest.
    exclude: [...configDefaults.exclude, 'e2e/**'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: ['src/**/*.{js,jsx}'],
      exclude: ['src/main.jsx'],
      // Thresholds are set from the measured baseline (see README / report):
      // the suite currently covers 100% of the safety gate and ~95% of the
      // app shell. Keep the bar modest so it guards against regressions
      // without blocking unrelated work.
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 70,
        statements: 80,
      },
    },
  },
});
