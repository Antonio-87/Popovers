import puppeteer from "puppeteer";

jest.setTimeout(30000);

describe("Widget", () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  });

  // eslint-disable-next-line jest/expect-expect
  test("Button should render on page start", async () => {
    await page.goto("http://localhost:9000");

    await page.waitForSelector(".btn");
  });

  // eslint-disable-next-line jest/expect-expect
  test("Click to toggle popover", async () => {
    await page.goto("http://localhost:9000");

    await page.waitForSelector(".btn");

    const button = await page.$(".btn");
    await button.click();

    await page.waitForSelector(".popover-container");
    await button.click();
  });

  afterAll(async () => {
    await browser.close();
  });
});
