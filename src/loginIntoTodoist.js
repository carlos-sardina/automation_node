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
    await page.waitForNavigation();

    console.log('\x1b[32m', '>> Logged into Todoist!');

    return { browser, page };
  } catch (e) {
    console.error('Error during login:', e);
    await browser.close();
  }
}

module.exports = loginIntoTodoist;