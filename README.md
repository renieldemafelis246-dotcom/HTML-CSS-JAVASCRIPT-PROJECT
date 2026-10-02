# 💰 Expense Tracker

A simple and responsive web application for recording, managing, and monitoring personal expenses using HTML, CSS, and JavaScript.

## Overview

Expense Tracker is a beginner-friendly web application that allows users to record, organize, and track their daily expenses. Users can add expense details, categorize them, view a list of all expenses, and see the total amount spent. The application saves data locally using the browser's LocalStorage, ensuring expenses persist after page reloads or browser restarts. It was created as a practical project to demonstrate core frontend web development skills.

## Features

* Add new expenses with name, amount, and category
* Automatic date recording when an expense is added
* Display expenses in a clear table format
* Automatic calculation and display of total expenses
* Delete individual expenses
* Clear all expenses with confirmation
* Search expenses by name
* Filter expenses by category
* Display the number of recorded expenses
* Format amounts in Philippine Peso (₱)
* Responsive design for desktop, tablet, and mobile devices
* Show a message when no expenses are recorded
* Data persistence using LocalStorage

## Technologies Used

| Technology       | Purpose                                |
| ---------------- | -------------------------------------- |
| HTML5            | Structure and content                  |
| CSS3             | Styling and responsive layout          |
| JavaScript       | Application logic and user interaction |
| LocalStorage API | Local browser data storage             |

## Project Structure

```text
Expense-Tracker/
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run

1. Clone the repository: `git clone YOUR_REPOSITORY_URL`
2. Open the project folder in your file explorer.
3. Open `index.html` in any web browser (Chrome, Firefox, Safari, Edge).

The project does not require any frameworks, packages, or external dependencies. It runs entirely in the browser.

## How It Works

1. The user enters an expense name in the input field.
2. The user enters a monetary amount.
3. The user selects a category from the dropdown menu.
4. The user clicks the "Add Expense" button.
5. JavaScript validates the input, creates an expense object, and adds it to the expenses array.
6. The expense is displayed in the table with its name, formatted amount, category, date, and a delete button.
7. The total expense amount and expense count are automatically updated.
8. The expense is saved to LocalStorage so it remains available after refreshing the page.
9. Users can search for expenses by typing in the search box or filter by category using the dropdown.
10. Clicking the delete button removes an expense and updates the totals.
11. Clicking "Clear All Expenses" removes all records after a confirmation prompt.

## Data Storage

The application uses the browser's LocalStorage API to save expense records. Expenses are stored as a JSON array under the key "expenses". This data persists even after refreshing the page, closing the browser, or reopening it later, as long as the browser's local storage is not cleared. No remote database or backend server is used; all data is stored locally on the user's device.

## Responsive Design

The application is designed to adapt to different screen sizes, providing an optimal viewing experience on:
* Desktop computers
* Laptops
* Tablets
* Mobile devices

The layout adjusts using CSS media queries to ensure readability and usability across devices.

## Project Purpose

This project was created to practice and demonstrate fundamental frontend development skills, including:
* HTML structure and semantic elements
* CSS styling, responsive design, and layout techniques
* JavaScript programming and DOM manipulation
* Event handling and user interaction
* Form validation and input handling
* Working with arrays and objects
* Using the LocalStorage API for data persistence
* Dynamically generating and updating HTML content

## Future Improvements

Possible future enhancements include:
* Expense charts and statistics (using a library like Chart.js)
* Monthly expense reports and summaries
* Export expenses to CSV format
* Dark mode toggle
* Date-based expense filtering (e.g., show expenses from last week)
* Monthly budget tracking with alerts
* User authentication and personalized accounts
* Cloud/database storage for data synchronization across devices

These features are planned for future versions and are not currently implemented.

## Learning Outcomes

Through building this project, I gained practical experience in:
* Creating a functional web interface from scratch
* Connecting HTML, CSS, and JavaScript to work together seamlessly
* Manipulating the DOM to dynamically update content
* Handling user input and form submissions with validation
* Managing application state using JavaScript arrays and objects
* Persisting data in the browser using LocalStorage
* Designing responsive layouts that work on multiple screen sizes
* Implementing interactive features such as search, filter, and delete

## Author

**Reniel Demafelis**
Bachelor of Science in Information Technology
Central Philippines State University – Moises Padilla Campus

## License / Usage

This project was created for educational and personal portfolio purposes.