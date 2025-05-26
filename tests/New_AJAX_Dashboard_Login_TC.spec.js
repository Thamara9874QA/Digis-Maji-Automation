import { test, expect } from '@playwright/test';

// Test configuration for this file
test.describe('AJAX Dashboard Login Tests', () => {
  
  // Run before each test - ensures clean state
  test.beforeEach(async ({ page }) => {
    // Navigate to login page before each test
    await page.goto('https://dev-maji-backoffice.digisglobal.com/perusal');
    
    // Wait for page to be fully loaded
    await page.waitForLoadState('networkidle');
  });

  test('Login with valid credentials', async ({ page }) => {
    // Fill login form
    await page.getByRole('textbox', { name: 'Email' }).fill('thamara@digitalservices.lk');
    await page.getByRole('textbox', { name: 'Password' }).fill('Thamara@1234');
    
    // Click sign in button
    await page.getByRole('button', { name: 'Sign In' }).click();
    
    // Wait for navigation or success indicator
    await page.waitForLoadState('networkidle');
    
    // Add assertion to verify successful login
    // You might need to adjust this based on what happens after successful login
    await expect(page).toHaveURL(/.*perusal.*/);
    // OR check for a specific element that appears after login
    // await expect(page.locator('[data-testid="dashboard"]')).toBeVisible();
  });

  test('Login with invalid credentials', async ({ page }) => {
    // Fill with invalid credentials
    await page.getByRole('textbox', { name: 'Email' }).fill('thamara@insurme.lk');
    await page.getByRole('textbox', { name: 'Password' }).fill('Thamara@1234');
    
    // Click sign in button
    await page.getByRole('button', { name: 'Sign In' }).click();
    
    // Wait a bit for error message to appear
    await page.waitForTimeout(2000);
    
    // Check for error message
    await expect(page.locator('#input-error')).toHaveText('Invalid username or password.');
    
    // Ensure we're still on login page
    await expect(page).toHaveURL(/.*realms.*/);
  });

  test('Login with empty fields', async ({ page }) => {
    // Leave fields empty (clear any existing content)
    await page.getByRole('textbox', { name: 'Email' }).clear();
    await page.getByRole('textbox', { name: 'Password' }).clear();
    
    // Click sign in button
    await page.getByRole('button', { name: 'Sign In' }).click();
    
    // Wait for error message
    await page.waitForTimeout(2000);
    
    // Check for error message
    await expect(page.locator('#input-error')).toHaveText('Invalid username or password.');
    
    // Ensure we're still on login page
    await expect(page).toHaveURL(/.*realms.*/);
  });

  test('Login with empty email only', async ({ page }) => {
    // Fill only password field
    await page.getByRole('textbox', { name: 'Email' }).clear();
    await page.getByRole('textbox', { name: 'Password' }).fill('Thamara@1234');
    
    // Click sign in button
    await page.getByRole('button', { name: 'Sign In' }).click();
    
    // Wait for error message
    await page.waitForTimeout(2000);
    
    // Check for error message
    await expect(page.locator('#input-error')).toHaveText('Invalid username or password.');
  });

  test('Login with empty password only', async ({ page }) => {
    // Fill only email field
    await page.getByRole('textbox', { name: 'Email' }).fill('thamara@digitalservices.lk');
    await page.getByRole('textbox', { name: 'Password' }).clear();
    
    // Click sign in button
    await page.getByRole('button', { name: 'Sign In' }).click();
    
    // Wait for error message
    await page.waitForTimeout(2000);
    
    // Check for error message
    await expect(page.locator('#input-error')).toHaveText('Invalid username or password.');
  });
});