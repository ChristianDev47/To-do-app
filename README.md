# To-Do App

This project is a responsive To-Do application built using **React** with **TypeScript** and styled with **Tailwind CSS**. The application provides an intuitive interface for managing tasks, including adding, marking as complete, and deleting tasks. It also features local storage functionality to persist tasks across page reloads.

## Project Overview

The To-Do app consists of a main page where users can manage their tasks efficiently. The application includes:

1. **Task List**:
   - Displays a list of tasks with checkboxes to mark them as complete.
   - Each task can be deleted using a dedicated button.

2. **Task Input**:
   - An input field at the top of the list for adding new tasks.
   - Tasks are added to the list with a submit button.

3. **Filters**:
   - A filter section at the bottom allows users to view tasks based on their status:
     - **All**: Displays all tasks.
     - **Active**: Displays tasks that are not yet completed.
     - **Completed**: Displays tasks that have been marked as complete.
   - An additional button to clear all completed tasks appears when at least one task is marked as complete.

4. **Task Count**:
   - Displays the number of pending tasks.

5. **Responsive Design**:
   - The interface is designed to be fully responsive, ensuring usability across various devices, from desktops to mobile phones.

6. **Local Storage**:
   - The state of tasks is saved in local storage, allowing the list to persist across page reloads.

## Core Features

- **Task Management**: Add, complete, and delete tasks.
- **Filters**: View tasks based on their status (all, active, completed).
- **Clear Completed Tasks**: Option to remove all completed tasks when applicable.
- **Pending Tasks Count**: Displays the number of tasks that are still pending.
- **Responsive Layout**: Ensures a seamless experience on different devices.

## Technologies Used

- **React**: Framework for building the user interface and managing task state.
- **TypeScript**: Provides static typing to enhance code quality and maintainability.
- **Tailwind CSS**: Utility-first CSS framework for styling the application.
- **Local Storage**: For persisting task data across page reloads.

## Demo

You can see the application in action here: [To-Do App Live Demo](https://to-do-app-nine-flame.vercel.app/).

![To-Do App Demo](https://raw.githubusercontent.com/ChristianDev47/To-do-app/refs/heads/master/public/to_do_app.webp)
