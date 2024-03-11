const { test, expect } = require('@playwright/test');
const { homePage } = require('../pages/homePage');



test('test', async ({ page }) => {
  // Create an instance of the homePage class
  const homePageInstance = new homePage(page);
  
  // Navigate to the home page
  await homePageInstance.gotoHomePage();
  
  // Test home page components
  await homePageInstance.homePageComponets();

  // Take a screenshot of the home page
  await page.screenshot({ path: 'homePage.png' });

  // Wait for 3 seconds
  await page.waitForTimeout(3000);
  // Continue with your test scenarios...
});
