import { test, expect } from '@playwright/test'


test('navigate to DO512', async ({page}) => {
    await page.goto('https://do512.com/');
})
test('should click on the dropdown by text', async ({ page }) => {
    await page.goto('https://do512.com'); 
    
    // Locate the link by its text
    const dropdown = page.locator('a:has-text("events")'); 
    
    // Click the link
    await dropdown.click();
    
    // Verify subsequent actions
    const menuItem = page.locator('selector-for-menu-item'); 
    await expect(menuItem).toBeVisible();
  });
  