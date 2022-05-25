import { expect, test } from '@playwright/test';

test('index endpoint can retrieve city by query params', async ({ page }) => {
	await page.goto('/?q=tokyo');
	expect(await page.textContent('h1')).toBe('Tokyo');
});
