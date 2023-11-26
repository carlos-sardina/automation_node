const getTasksFromTrello = require("./src/getTasksFromTrello");

async function main() {
  const tasks = await getTasksFromTrello();
  console.log('Trello tasks:', tasks);
}

main();