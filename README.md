# In-Progress-To-Do-list-
A lightweight, browser‑based to‑do list application built with HTML, CSS, and vanilla JavaScript.
This project focuses on clean UI structure, DOM manipulation, event handling, and persistent storage using localStorage.

## Features
Add new tasks

Mark tasks as completed (click to toggle)

Delete tasks

Filter tasks by:

All

Active

Completed

Tasks persist automatically using localStorage

Fully responsive and framework‑free

## Technical Skills Demonstrated
DOM manipulation (createElement, event listeners, dataset filters)

State management using JavaScript arrays

Persistent storage with localStorage

Clean separation of concerns (HTML / CSS / JS)

Basic UI/UX design principles

Filtering logic and dynamic rendering


## How It Works
1. Task Storage
Tasks are stored as objects:

js
{ text: "Example task", completed: false }
They are saved and loaded from localStorage so the list persists across page reloads.

2. Rendering
The renderTasks() function:

Clears the list

Applies the current filter

Rebuilds the DOM dynamically

3. Interactions
Clicking a task toggles completion

Clicking “Delete” removes the task

Pressing Enter adds a task

Filter buttons update the view without deleting data

## Running the Project
Just open index.html in any modern browser.
No build tools, dependencies, or frameworks required.


## Future Improvements

Editable tasks

Drag‑and‑drop reordering

Animations

Dark mode

Category tags

Due dates and reminders
