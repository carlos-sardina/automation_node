const puppeteer = require('puppeteer');

/**
 * Get tasks from Trello board.
 * @returns {Promise<string[]>}
 */
async function getTasksFromTrello() {
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

  await browser.close();
  return tasks;
}

module.exports = getTasksFromTrello;