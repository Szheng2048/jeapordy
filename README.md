# JavaScript Jeopardy

Welcome to JavaScript Jeopardy! In this project, you'll build a web application that emulates the classic game show Jeopardy. Your application will display a grid of dollar amounts representing questions, allow users to select a question, submit answers, keep track of their score, and persist the score even when the page is refreshed. This project will need to use your new jQuery skills!

## Project Requirements

* Display a grid of Jeopardy dollar amounts on the screen.
* Upon clicking a dollar amount, display a random question corresponding to that amount.
* Allow users to submit answers to the displayed questions.
  * Update the user's score if their answer is correct.
* Persist the user's score even after the page is refreshed.
* Host the project on GitHub Pages.

## Getting Started

To get started with the project, follow these steps:

1. Create the necessary files: `index.html`, `main.js`, and `styles.css`.
2. Import `jeopardy.json` and `main.js` in your `index.html`.
3. Import `styles.css` to add styling to your project.
4. Include jQuery in your `index.html` using a CDN link.
5. Build the layout of the dollar amounts grid in your JavaScript file using jQuery.
6. Fetch the questions from `jeopardy.json` and display a random question when a dollar amount is clicked.
7. Allow users to submit answers and handle their guesses.
8. Implement a scoring system and store the score in local storage to persist it across page refreshes.

## Stretch Goals

If you want to challenge yourself further, consider implementing the following stretch goals:

* Disable selected dollar amounts after they've been chosen.
* Populate the game with questions from a single past Jeopardy game based on a randomly chosen show number.
* Make the game fully refreshable, persisting the selected questions and categories, and maintaining the grayed-out state of selected dollar amounts.
