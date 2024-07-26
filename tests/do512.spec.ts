import { test, expect } from '@playwright/test'


test('navigate to DO512', async ({page}) => {
    await page.goto('https://do512.com/');
})
test('Get search bar', async ({page}) =>{
    await page.getByRole('link',({name:'search'}));

    await page.fill('input,[name="search"]','Food');

    const searchValue = await page.inputValue('input[name="search"]');
    expect(searchValue).toBe('Food');
})