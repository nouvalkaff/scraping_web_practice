const ConfigApp = {
    language: "en-US",
    port: process.env.PORT || 3333,
    version: Date.now(), //version by timestamp server start
}

module.exports = ConfigApp