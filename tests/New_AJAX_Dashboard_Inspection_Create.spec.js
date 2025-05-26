import { test, expect } from '@playwright/test';

test('Valid inspection create', async ({ page }) => {
  await page.goto('https://dev-maji-backoffice.digisglobal.com/perusal/');
  await page.getByRole('textbox', { name: 'Email' }).fill('thamara@digitalservices.lk');
  await page.getByRole('textbox', { name: 'Password' }).fill('Thamara@1234');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'Add New' }).click();
  await page.getByRole('button', {name: 'Add New Insured Car Plate Number'}).click();
  await page.getByPlaceholder('Enter Insured car plate number (e.g., ABC-1234)').fill('WP-1998');
  await page.getByRole('button',{name: 'Next '}).click();
  await page.getByRole('tab',{name: 'Overview'}).click();
  await page.getByRole('radio',{name: 'Yes, It is'}).click();
  await page.getByText('Third Party').click();
  await page.getByRole('option', { name: 'Own Damage' }).click();
  

});