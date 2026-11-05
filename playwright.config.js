import { defineConfig, devices } from '@playwright/test';

// E2E smoke tests run against a local `vite preview` of the production
// build. No live deploy, no network calls to third parties.
export default defineConfig({
  testDir: './e2e',
  timeout: 30 * 1000,
  retries: process.env.CI ? 1 : 0,
  reporter: 'list',
  use: {
    baseURL: 'http://127.0.0.1:4173',
    trace: 'on-first-retry',
  },
  webServer: {
    // --host 127.0.0.1: plain `vite preview` binds localhost, which in
    // some sandboxes resolves to IPv6 ::1 only, so the 127.0.0.1 health
    // check below would time out. Binding explicitly avoids that.
    command: 'npm run preview -- --port 4173 --strictPort --host 127.0.0.1',
    url: 'http://127.0.0.1:4173',
    reuseExistingServer: !process.env.CI,
    timeout: 60 * 1000,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
