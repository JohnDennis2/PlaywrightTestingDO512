import { test, expect } from '@playwright/test'


test('navigate to DO512', async ({page}) => {
    await page.goto('https://do512.com/')
})