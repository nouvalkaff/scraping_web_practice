const { Builder, By } = require("selenium-webdriver");

async function WebScrapingLocalTest() {
    try {
        driver = await new Builder().forBrowser("chrome").build();
        await driver.get("https://finance.yahoo.com/currencies");
        const currData = await driver.findElements(
            By.xpath("//tr[contains(@class, 'simpTblRow')]")
        );

        // console.table(await getCurr(currData));
        return await getCurr(currData);
    } catch (error) {
        throw new Error(error);
    } finally {
        await driver.quit();
    }
}

async function getCurr(data) {
    let result = [];
    try {
        for (const el of data) {
            const name = await el.findElement(By.xpath(".//td[2]")).getText();
            const lastPrice = await el.findElement(By.xpath(".//td[3]")).getText();

            result.push({
                name: name ?? "",
                lastPrice: lastPrice ?? "",
            });
        }

        return result;
    } catch (error) {
        console.log(error);
    }
    return result;
}

module.exports = WebScrapingLocalTest