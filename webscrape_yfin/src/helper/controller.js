const configDir = require("../config/ConfigDir")
// const WebScrapingLocalTest = require("./helper_func")

exports.scrapeWeb = async (req, res) => {
    try {
        res.sendFile(configDir.templateDir + "/yfin.html");
    } catch (error) {
        console.error(error)
        return res.status(500).send({
            code: 500,
            codeMessage: "Internal Server Error",
            success: false,
        });
    }
}
