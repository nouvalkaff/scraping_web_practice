const { Builder, By } = require("selenium-webdriver");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

const csvWriter = createCsvWriter({
    path: "./bookData.csv",
    fieldDelimiter: ";",
    header: [
        {
            id: "bookLink", title: "Link Buku"
        },
        {
            id: "title", title: "Judul"
        },
        {
            id: "imageUrl", title: "Link Sampul"
        },
        {
            id: "price", title: "Harga"
        },
        {
            id: "ratingFormat", title: "Rating"
        },
        {
            id: "status", title: "Status"
        },
    ]
});

async function WebScrapingLocalTest() {
    try {
        driver = await new Builder().forBrowser("chrome").build();
        for (let i = 1; i <= 50; i++) {
            await driver.get(`https://books.toscrape.com/catalogue/page-${i}.html`);
            const target = await driver.findElements(By.xpath("//li[contains(@class, 'col-xs-6 col-sm-4 col-md-3 col-lg-3')]"));
            for (let el of target) {
                const bookLink = await el.findElement(By.xpath('.//article/div/a')).getAttribute("href");
                const title = await el.findElement(By.xpath('.//article/div/a/img')).getAttribute("alt");
                const imageUrl = await el.findElement(By.xpath('.//article/div/a/img')).getAttribute("src");
                let price = await el.findElement(By.xpath('.//article/div/p[1]')).getText();
                price = price.replace("£", "");
                const rating = await el.findElement(By.xpath('.//article/p')).getAttribute("class");
                const ratingFormat = rating.split(" ")[1] + " of Five";
                const status = await el.findElement(By.xpath('.//article/div[2]/p[2]')).getText();

                const data = { bookLink, title, imageUrl, price, ratingFormat, status };
                await csvWriter.writeRecords([data]).then(() => console.log(title + " added to csv"))
            }
        }
        return {
            status: 200,
            message: "Selesai ya"
        };
    } catch (error) {
        console.error(error);
    } finally {
        await driver.quit();
    }
}

module.exports = { WebScrapingLocalTest }