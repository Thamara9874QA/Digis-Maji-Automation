import { test, expect } from '@playwright/test';

test('Login with valid credentials', async ({ page }) => {
  await page.goto('https://dev-maji-backoffice.digisglobal.com/perusal');
  await page.getByRole('textbox', { name: 'Email' }).fill('thamara@digitalservices.lk');
  await page.getByRole('textbox', { name: 'Password' }).fill('Thamara@1234');
  await page.getByRole('button', { name: 'Sign In' }).click();
});

test('Login with invalid credentials', async ({ page }) => {
  await page.goto('https://dev-maji-backoffice.digisglobal.com/perusal');
  await page.getByRole('textbox', { name: 'Email' }).fill('thamara@insurme.lk');
  await page.getByRole('textbox', { name: 'Password' }).fill('Thamara@1234');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await expect(page.locator('#input-error')).toHaveText('Invalid username or password.');
});

test('Login with empty field', async ({ page }) => {
  await page.goto('https://dev-maji-backoffice.digisglobal.com/perusal');
  await page.getByRole('textbox', { name: 'Email' }).fill('');
  await page.getByRole('textbox', { name: 'Password' }).fill('');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await expect(page.locator('#input-error')).toHaveText('Invalid username or password.');
});