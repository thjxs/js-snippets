const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.on("workercreated", worker => {
    console.log("worker start");
  });
  page.on("workerdestroyed", worker => {
    console.log("worker done!");
    browser.close();
  });
  await page.goto("http://localhost:5000");
})();
