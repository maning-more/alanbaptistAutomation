
exports.homePage =
    class homePage {

        constructor(page) {
            this.page = page;
            this.aboutAlan = "//div[normalize-space()='ABOUT ALAN']",
                this.blogs = "//div[normalize-space()='SUCCESS STORIES']",
                this.passwordInput = "//div[normalize-space()='SERVICES']"
            this.contact = "///div[normalize-space()='CONTACT']"
            this.menuIcon = "//div[@class='nav1 w-100 p-0']//*[name()='svg']"
            this.consultant = "//div[@class='nav1 w-100 p-0']//button[@id='btn']"
        }

        async gotoHomePage() {
            await this.page.goto('https://alanbaptist.com/')

        }

        async homePageComponets() {
            // Wait until the div with text 'ABOUT ALAN' is visible using XPath
            await page.waitForSelector("//span[normalize-space()='ALAN BAPTIST']");

            await this.page.isVisible(aboutAlan)
            await this.page.isVisible(blogs)
            await this.page.isVisible(passwordInput)
            await this.page.isVisible(contact)
            await this.page.isVisible(menuIcon)
            await this.page.isVisible(consultant)



        }
        

    }
