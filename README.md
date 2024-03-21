# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

npm install
npm start

Here are the features implemented in the app:

1. *Add New Task:*
   - Users can enter a task title and add it to the list.
   - Input validation prevents empty tasks from being added.

2. *Delete Task:*
   - Users can remove a task from the list.
   - Implemented a confirmation prompt to avoid accidental deletion.

3. *Mark Task as Complete:*
   - Users can mark tasks as completed.
   - Completed tasks are visually distinct with strike-through text.
   - Users can also undo the completion of tasks.

4. *Edit Task:*
   - Users can modify the title of existing tasks.
   - An intuitive interface is provided for editing, such as an edit button next to each task.

5. *Persistence:*
   - Task data persists between sessions, ensuring data is not lost when the application is closed or refreshed.
   - Implemented using local storage to save and retrieve task data.

These features collectively allow users to manage their to-do list effectively, adding, editing, completing, and deleting tasks as needed, with the added convenience of data persistence across sessions.
