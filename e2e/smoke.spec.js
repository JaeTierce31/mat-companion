import { expect, test } from '@playwright/test';

// Smoke test for the production build served by `vite preview`.
// Asserts only the fail-closed public state: the review-pending message
// and the generic emergency placeholder. No clinical content is asserted
// here, because none is released (J3S-34).

test('preview shows the heading and the review-pending state', async ({ page }) => {
  await page.goto('/');
  await expect(
    page.getByRole('heading', { name: 'Support that keeps safety visible' }),
  ).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'Medication safety content under review' }),
  ).toBeVisible();
  await expect(page.getByRole('link', { name: /View source label/i })).toHaveCount(0);
  await expect(page.getByRole('heading', { name: 'If you feel unsafe' })).toBeVisible();
  await expect(page.getByText(/pending clinical review/i)).toBeVisible();
  await expect(page.getByText(/no personal health information is collected/i)).toBeVisible();
});

test('loading state is replaced by the app once JavaScript mounts', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('Loading MAT Companion…')).toHaveCount(0);
  await expect(page.getByRole('main')).toBeVisible();
});

for (const { name, width, height } of [
  { name: 'small phone', width: 360, height: 800 },
  { name: 'tablet', width: 768, height: 1024 },
]) {
  test(`no horizontal overflow at ${name} (${width}px)`, async ({ page }) => {
    await page.setViewportSize({ width, height });
    await page.goto('/');
    await expect(
      page.getByRole('heading', { name: 'Support that keeps safety visible' }),
    ).toBeVisible();
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - window.innerWidth,
    );
    expect(overflow).toBeLessThanOrEqual(0);
  });
}
