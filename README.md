# Todoist Task Importer

This project allows you to import tasks from a Trello board to Todoist.

## Prerequisites

Before running the project, you need to set up your environment variables:

1. Edit the `.env` file in the root directory of the project.

2. Edit the following lines of the `.env` file, replacing `your_email@gmail.com` and `your_password` with your Todoist login credentials:

   ```dotenv
    TODOIST_EMAIL = 'your_email@gmail.com'
    TODOIST_PASSWORD = 'your_password'
    ```

## How to run

1. Install the dependencies:

   ```bash
   npm install
   ```

2. Run the project:

   ```bash
    npm start
    ```

The project will log in to your Todoist account and add tasks from your Trello board.

## Notes
1. Ensure that you have Node.js and npm installed on your machine.