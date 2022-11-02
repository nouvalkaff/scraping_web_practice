const ConfigApp = {
    language: "en-US",
    port: process.env.PORT || 3000,
    version: Date.now(), //version by timestamp server start
}

module.exports = ConfigApp