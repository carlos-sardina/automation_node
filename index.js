const addTasksToTodoist = require("./src/addTasksToTodoist");
const getTasksFromTrello = require("./src/getTasksFromTrello");
const loginIntoTodoist = require("./src/loginIntoTodoist");

async function main() {
  const tasks = await getTasksFromTrello();
  const { browser, page } = await loginIntoTodoist(process.env.TODOIST_EMAIL, process.env.TODOIST_PASSWORD);
  await addTasksToTodoist(browser, page, tasks.slice(0, 5));

  console.log('\x1b[32m', '>> All done!');
}

main();