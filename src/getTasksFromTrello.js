const puppeteer = require('puppeteer');

/**
 * Get tasks from Trello board.
 * @returns {Promise<string[]>}
 */
async function getTasksFromTrello() {
  try {
    console.log('\x1b[32m', '>> Getting tasks from Trello...');
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto('https://trello.com/b/QvHVksDa/personal-work-goals');
    await page.waitForSelector('a[data-testid="card-name"]');
    await new Promise(r => setTimeout(r, 2000));

    const tasks = await page.evaluate(() => {
      const taskElements = document.querySelectorAll('a[data-testid="card-name"]');
      const taskList = Array.from(taskElements).map((task) => task.innerText.trim());
      return taskList;
    });

    console.log('\x1b[32m', '>> Got ' + tasks.length + ' tasks from Trello!');
    await browser.close();
    return tasks;
  } catch (e) {
    throw new Error('Error getting tasks from Trello: ' + e);
  }
}

module.exports = getTasksFromTrello;