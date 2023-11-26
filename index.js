const getTasksFromTrello = require("./src/getTasksFromTrello");
const loginIntoTodoist = require("./src/loginIntoTodoist");

async function main() {
  const tasks = await getTasksFromTrello();
  const { browser, page } = await loginIntoTodoist(process.env.TODOIST_EMAIL, process.env.TODOIST_PASSWORD);
}

main();