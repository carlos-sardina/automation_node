/**
 * Add tasks to Todoist.
 * @param {import('puppeteer').Browser} browser - Puppeteer browser instance.
 * @param {import('puppeteer').Page} page - Puppeteer page instance.
 * @param {string[]} tasks - Array of tasks to add.
 */
async function addTasksToTodoist(browser, page, tasks) {
  console.log('\x1b[32m', '>> Adding tasks to Todoist...');
  try {
    await new Promise(r => setTimeout(r, 2000));

    for (let i = 0; i < tasks.length; i++) {
      const task = tasks[i];

      await page.waitForSelector('.plus_add_button');
      await page.click('.plus_add_button');

      await page.waitForSelector('.tiptap');
      await page.type('.tiptap', task);

      await page.keyboard.press('Enter');

      await new Promise(r => setTimeout(r, 500));

      await page.keyboard.press('Escape');

      console.log('\x1b[32m', '>> Added ' + (i + 1) + ' tasks to Todoist!');
    }
    
  } catch (error) {
    throw new Error('Error adding tasks to Todoist: ' + error);
  } finally {
    await browser.close();
  }
}

module.exports = addTasksToTodoist;