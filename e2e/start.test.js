import puppeteer from "puppeteer";

describe("Page start", () => {
  // jest.setTimeout(1000);
  let browser;
  let page;

  beforeEach(async () => {
    // jest.setTimeout(30000);
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  }, 40000);

  // eslint-disable-next-line jest/expect-expect
  test("start", async () => {
    // jest.setTimeout(30000);
    await page.goto("http://localhost:9000");

    await page.waitForSelector("body");
  });

  afterEach(async () => {
    await browser.close();
  }, 40000);
});
