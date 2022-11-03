const WebScrapingLocalTest = require("../helper/helper_func")

exports.scrapeWeb = async (req, res) => {
    try {
        const data = await WebScrapingLocalTest();
        // console.log(data);
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

exports.scrapeWebCtn = async (req, res) => {
    try {
        const result = await WebScrapingLocalTest();
        console.log("CALLED");

        console.log(result, "data from scrapping web")
        // res.write(JSON.stringify(result));
        // res.end();

        setInterval(async () => {
            const result = await WebScrapingLocalTest();
            console.log("CALLED");

            console.log(result, "data from scrapping web")
            // res.write(JSON.stringify(result));
            // res.end();
        }, 30000);

        setTimeout(() => {
            return res.status(200).send({
                code: 200,
                codeMessage: "OK",
                success: true,
                message: "Data already scrapped"
            });
        }, 60000);
    } catch (error) {
        console.error(error)
        return res.status(500).send({
            code: 500,
            codeMessage: "Internal Server Error",
            success: false,
        });
    }
}
