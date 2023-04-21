import puppeteer from "puppeteer";

jest.setTimeout(30000);

describe("Page start", () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: true,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  });

  // eslint-disable-next-line jest/expect-expect
  test("start", async () => {
    await page.goto("http://localhost:9000");

    await page.waitForSelector("body");
  });

  afterEach(async () => {
    await browser.close();
  });
});
