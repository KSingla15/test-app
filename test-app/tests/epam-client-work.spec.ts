import { test, expect } from '@playwright/test';

test.describe('EPAM - Services to Client Work navigation', () => {
  test('Navigate via Services > Explore Our Client Work and verify Client Work page', async ({ page }) => {
    await page.goto('https://www.epam.com/');

    // Header navigation contains multiple "Services" links (desktop + mobile/duplicated nav).
    // Click the first visible one to keep the test resilient to DOM duplication.
    const servicesLink = page.getByRole('link', { name: 'Services' }).filter({ has: page.locator(':visible') }).first();
    await servicesLink.click();

    await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

    await expect(page.getByRole('heading', { name: 'Client Work' })).toBeVisible();
  });
});
