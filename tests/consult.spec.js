import { test, expect } from '@playwright/test';
import { consultPage } from '../pages/consultPage';

test('test', async ({ page }) => {
  //consult
  const consult = new consultPage(page);
  await consult.gotoconsultPage()
  
  await consult.consult('maning','maningmore41@gmail.com', '8971870188','please reachout')
  await page.screenshot({path:'homePage.png'})
  await page.waitForTimeout(3000)
  //home
  //cart
});


