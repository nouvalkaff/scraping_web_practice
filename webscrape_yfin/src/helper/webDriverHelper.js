const { Builder, By } = require("selenium-webdriver");

class webDriverHelper {
    constructor(driver) {
        this.timeout = 30000;
        this.driver = driver;
    }

    async openWeb(url) {
        try {
            if (!this.driver)
                this.driver = await new Builder().forBrowser('chrome').build();

            await this.driver.get(url);
            return this.driver;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async accessElementsYahooFin(datafromWeb) {
        let result = [];
        const theClass = await datafromWeb.findElements(
            By.xpath("//tr[contains(@class, 'simpTblRow')]")
        )

        for (const el of theClass) {
            const nameCurrency = await el.findElement(By.xpath(".//td[2]")).getText();
            const lastPrice = await el.findElement(By.xpath(".//td[3]")).getText();
            const changeInPercent = await el.findElement(By.xpath(".//td[4]/fin-streamer")).getAttribute("value");

            result.push({
                currency: nameCurrency ?? "",
                lastPrice: String(+lastPrice.replace(",", "")) ?? "",
                changeInPercent: String((+changeInPercent.replace(",", "")).toFixed(3)) ?? "",
            })
        }
        return result;
    }

    async quitWeb() {
        try {
            await this.driver.quit();
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

module.exports = webDriverHelper;