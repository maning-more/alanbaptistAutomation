
exports.consultPage = 
class consultPage{
consultPage
constructor(page){
    this.page = page;
    this.consultLink = "//div[@class='nav1 w-100 p-0']//button[@id='btn']",
    this.usernameInput = '#name',
    this.mailInput ="//input[@id='email_id']"
    this.mobileNo ="connect_name"
    this.message = "//textarea[@id='message']"
}

async gotoconsultPage(){
    await this.page.goto('https://alanbaptist.com/')

}

async consult(username,mail,mobNum,msg){
    await this.page.locator(this.consultLink).click();
    // await page.waitForSelector(this.usernameInput);
    const myModal = await page.$("#modal");
if (await myModal.isVisible()) {
  await page.waitForSelector("//span[normalize-space()='ALAN BAPTIST']");
  await page.click("//div[@class='nav1 w-100 p-0']//button[@id='btn']");
}
    await this.page.locator(this.usernameInput).fill(username);
    await this.page.locator(this.mailInput).fill(mail);
    await this.page.locator(this.mobileNo).fill(mobNum);
    await this.page.locator(this.message).fill(msg);
    await this.page.locator(this.mobileNo).click();

}

}
