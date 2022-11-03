const express = require("express");
const { language, port, version } = require("./config/ConfigApp")
const app = express();

const webScrapper = require("./routes/router.js");
app.use("", webScrapper);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
