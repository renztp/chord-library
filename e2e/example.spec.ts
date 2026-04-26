import { test, expect } from '@playwright/test';

test('homepage title contains app name', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Ionic App/);
});
