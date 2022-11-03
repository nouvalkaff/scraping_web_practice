const webDriverHelper = require("./webDriverHelper")
const url = "https://finance.yahoo.com/currencies"

class obtainCurrency extends webDriverHelper {
    async WebScrapingLocalTest() {
        try {
            const openWeb = await super.openWeb(url);
            return await super.accessElementsYahooFin(openWeb)
        } catch (error) {
            console.error(error);
            throw error;
        } finally {
            await super.quitWeb()
        }
    }

}

// const 