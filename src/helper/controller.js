const { WebScrapingLocalTest } = require("./helper_func")


exports.scrapeWeb = async (req, res) => {
    try {
        const data = await WebScrapingLocalTest();
        res.status(200).json(data);
    } catch (error) {
        console.error(error)
        return res.status(500).send({
            code: 500,
            codeMessage: "Internal Server Error",
            success: false,
        });
    }
}
