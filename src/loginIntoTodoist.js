const puppeteer = require('puppeteer');

/**
 * Login Todoist.
 * @param {string} email - Todoist email.
 * @param {string} password - Todoist password.
 * @returns {Promise<{browser: import('puppeteer').Browser, page: import('puppeteer').Page}>}
 */
async function loginIntoTodoist(email, password) {
  console.log('\x1b[32m', '>> Logging into Todoist...');
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  try {
    await page.goto('https://app.todoist.com/auth/login');

    await page.waitForSelector('input[type="email"]');
    await page.type('input[type="email"]', email);

    await page.waitForSelector('input[type="password"]');
    await page.type('input[type="password"]', password);

    await page.waitForSelector('button[type="submit"]');
    await page.click('button[type="submit"]');
    
    await Promise.race([
      page.waitForNavigation(),
      page.waitForSelector('._8f5b5f2b'),
    ]);

    const errorMessage = await page.evaluate(() => {
      const errorElement = document.querySelector('._8f5b5f2b');
      return errorElement ? errorElement.textContent.trim() : null;
    });

    if (errorMessage) {
      throw new Error('Login error: ' + errorMessage);
    }

    console.log('\x1b[32m', '>> Logged into Todoist!');

    return { browser, page };
  } catch (e) {
    await browser.close();
    throw new Error(e);
  }
}

module.exports = loginIntoTodoist;