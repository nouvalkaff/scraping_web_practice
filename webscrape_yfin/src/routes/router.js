const { Router } = require("express")
const router = Router()

const { scrapeWeb } = require("../helper/controller.js")

router.get("/", scrapeWeb)

module.exports = router;