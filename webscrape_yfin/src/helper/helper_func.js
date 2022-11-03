const obtainCurrency = require("./functionHelper");

async function WebScrapingLocalTest() {
    try {
        return await new obtainCurrency().WebScrapingLocalTest()
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

module.exports = WebScrapingLocalTest