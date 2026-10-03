const {test , expect} = require('@playwright/test')

test('Basic TestCase', async({page})=>
{
await page.goto('https://rahulshettyacademy.com/client/');
await page.locator('#userEmail').fill('pavannayak@gmail.com');
await page.getByPlaceholder('enter your passsword').fill('PlayWright#1');
await page.locator("input[type='submit']").click();
await page.locator('.card-body').first().waitFor();
 expect( await page.locator('.card-body').locator('h5').nth(1).textContent()==='ZARA COAT 3');
console.log(await page.locator('.card-body').locator('h5').nth(1).textContent());
 await page.locator('.card-body').locator('h5').nth(1).filter({hasText:' Add To Cart'}).click();

})