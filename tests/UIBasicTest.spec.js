const {test , expect } = require('@playwright/test')

test('UI Automation', async({page})=>{

    await page.goto('https://www.redbus.in/');
    console.log(await page.title());
     await expect (page).toHaveTitle('Bus Booking Online and Train Tickets at Lowest Price - redBus');
await page.locator("[aria-label='Account']").click();
await page.locator("[aria-label='Log in']").click();
await page.locator("[type='tel']").fill("9611128287");
await page.locator("class.recaptcha-checkbox-checkmark").click();
await page.pause();
})


test('testName', async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('ADFZgxb');
    await page.locator()
})

test('practiceWork',async({browser})=>{
const context=await browser.newContext();
const page=await context.newPage();
await page.goto('https://rahulshettyacademy.com/client/#/auth/login');


});
