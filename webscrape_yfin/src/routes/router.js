const { Router } = require("express")
const router = Router()

const { scrapeWeb, scrapeWebCtn } = require("../helper/controller.js")

router.get("/", scrapeWeb)
router.get("/continous", scrapeWebCtn)

module.exports = router;