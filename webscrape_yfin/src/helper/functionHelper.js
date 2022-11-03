const webDriverHelper = require("./webDriverHelper")
const url = "https://finance.yahoo.com/currencies"

class obtainCurrency extends webDriverHelper {
    async WebScrapingLocalTest() {
        try {
            const openWeb = await super.openWeb(url);
            const arrayWeb = await super.accessElementsYahooFin(openWeb)

            return arrayWeb;
        } catch (error) {
            console.error(error);
            throw error;
        } finally {
            await super.quitWeb()
        }
    }

}

module.exports = obtainCurrency;