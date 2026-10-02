// Expense Tracker JavaScript

// Array to hold expenses
let expenses = [];

// DOM Elements
const expenseForm = document.getElementById('expense-form');
const expenseNameInput = document.getElementById('expense-name');
const amountInput = document.getElementById('amount');
const categorySelect = document.getElementById('category');
const expensesList = document.getElementById('expenses-list');
const totalAmountSpan = document.getElementById('total-amount');
const expenseCountSpan = document.getElementById('expense-count');
const noExpensesMessage = document.getElementById('no-expenses-message');
const clearAllBtn = document.getElementById('clear-all-btn');
const searchInput = document.getElementById('search-expense');
const filterCategorySelect = document.getElementById('filter-category');

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    loadExpenses();
    renderExpenses();
});

// Load expenses from localStorage
function loadExpenses() {
    const stored = localStorage.getItem('expenses');
    if (stored) {
        try {
            expenses = JSON.parse(stored);
        } catch (e) {
            console.error('Failed to parse expenses from localStorage', e);
            expenses = [];
        }
    }
}

// Save expenses to localStorage
function saveExpenses() {
    localStorage.setItem('expenses', JSON.stringify(expenses));
}

// Format amount as Philippine Peso
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-PH', {
        style: 'currency',
        currency: 'PHP'
    }).format(amount);
}

// Render the expenses list
function renderExpenses() {
    // Clear the list
    expensesList.innerHTML = '';

    // Get filter values
    const searchTerm = searchInput.value.trim().toLowerCase();
    const filterCategory = filterCategorySelect.value;

    // Filter expenses
    const filteredExpenses = expenses.filter(expense => {
        const matchesSearch = expense.name.toLowerCase().includes(searchTerm);
        const matchesCategory = !filterCategory || expense.category === filterCategory;
        return matchesSearch && matchesCategory;
    });

    // If no expenses, show message
    if (filteredExpenses.length === 0) {
        noExpensesMessage.style.display = 'block';
    } else {
        noExpensesMessage.style.display = 'none';
    }

    // Add each expense to the list
    filteredExpenses.forEach(expense => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${expense.name}</td>
            <td>${formatCurrency(expense.amount)}</td>
            <td>${expense.category}</td>
            <td>${expense.date}</td>
            <td>
                <button class="delete-btn" data-id="${expense.id}">Delete</button>
            </td>
        `;

        expensesList.appendChild(tr);
    });

    // Update total and count
    updateTotals();

    // Add event listeners to delete buttons
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id);
            deleteExpense(id);
        });
    });
}

// Update total amount and expense count
function updateTotals() {
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    totalAmountSpan.textContent = formatCurrency(total);
    expenseCountSpan.textContent = expenses.length;
}

// Add a new expense
function addExpense(e) {
    e.preventDefault();

    const name = expenseNameInput.value.trim();
    const amount = parseFloat(amountInput.value);
    const category = categorySelect.value;

    // Validate
    if (!name || isNaN(amount) || amount <= 0 || !category) {
        alert('Please fill in all fields with valid values.');
        return;
    }

    // Create expense object
    const expense = {
        id: Date.now(), // Simple ID generation
        name,
        amount,
        category,
        date: new Date().toLocaleDateString() // Format: MM/DD/YYYY
    };

    // Add to array
    expenses.push(expense);

    // Save and render
    saveExpenses();
    renderExpenses();

    // Reset form
    expenseForm.reset();
    categorySelect.selectedIndex = 0; // Reset to default option
}

// Delete an expense by ID
function deleteExpense(id) {
    expenses = expenses.filter(expense => expense.id !== id);
    saveExpenses();
    renderExpenses();
}

// Clear all expenses with confirmation
function clearAllExpenses() {
    if (confirm('Are you sure you want to delete all expenses? This action cannot be undone.')) {
        expenses = [];
        saveExpenses();
        renderExpenses();
    }
}

// Event Listeners
expenseForm.addEventListener('submit', addExpense);
clearAllBtn.addEventListener('click', clearAllExpenses);

// Filter event listeners
searchInput.addEventListener('input', renderExpenses);
filterCategorySelect.addEventListener('change', renderExpenses);