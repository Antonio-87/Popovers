import puppeteer from "puppeteer";

describe("Widget", () => {
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
  test("Button should render on page start", async () => {
    // jest.setTimeout(30000);
    await page.goto("http://localhost:9000");

    await page.waitForSelector(".btn");
  }, 40000);

  // eslint-disable-next-line jest/expect-expect
  test("Click to toggle popover", async () => {
    // jest.setTimeout(30000);
    await page.goto("http://localhost:9000");

    await page.waitForSelector(".btn");

    const button = await page.$(".btn");
    await button.click();

    await page.waitForSelector(".popover-container");
    // jest.setTimeout(3000);
    await button.click();
  }, 40000);

  afterAll(async () => {
    await browser.close();
  });
});
