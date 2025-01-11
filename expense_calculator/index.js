// DOM Elements
const expenseForm = document.getElementById("expense-form");
const titleInput = document.getElementById("title");
const amountInput = document.getElementById("amount");
const dateInput = document.getElementById("date");
const submitBtn = document.getElementById("submit-btn");
const expenseList = document.getElementById("expense-list");
const sortDateBtn = document.getElementById("sort-date");
const sortAmountBtn = document.getElementById("sort-amount");
const message = document.getElementById("message");

let expenses = [];
let editIndex = null;

// Load expenses from local storage on page load
window.addEventListener("load", () => {
  const storedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
  expenses = storedExpenses;
  renderExpenses();
});

// Handle form submission
expenseForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get input values
  const title = titleInput.value.trim();
  const amount = Number(amountInput.value);
  const date = dateInput.value;

  // Validation
  if (!title || title.length < 1 || title.length > 20) {
    showMessage("Title must be between 1 and 20 characters!", "error");
    return;
  }
  if (amount < 1 || amount > 100000) {
    showMessage("Amount must be between 1 and 100,000 USD!", "error");
    return;
  }
  if (!date) {
    showMessage("Date is required!", "error");
    return;
  }

  const expense = { title, amount, date };

  if (editIndex !== null) {
    // Update existing expense
    expenses[editIndex] = expense;
    editIndex = null;
    submitBtn.textContent = "Add";
  } else {
    // Add new expense
    expenses.push(expense);
  }

  saveExpenses();
  renderExpenses();
  expenseForm.reset();
  showMessage("Expense saved successfully!");
});

// Render expenses to the table
function renderExpenses() {
  expenseList.innerHTML = "";
  expenses.forEach((expense, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${expense.title}</td>
      <td>${expense.amount}</td>
      <td>${expense.date}</td>
      <td>
        <button onclick="editExpense(${index})">Edit</button>
        <button onclick="deleteExpense(${index})">Delete</button>
      </td>
    `;
    expenseList.appendChild(row);
  });
}

// Edit an expense
window.editExpense = function (index) {
  const expense = expenses[index];
  titleInput.value = expense.title;
  amountInput.value = expense.amount;
  dateInput.value = expense.date;
  submitBtn.textContent = "Update";
  editIndex = index;
};

// Delete an expense
window.deleteExpense = function (index) {
  expenses.splice(index, 1);
  saveExpenses();
  renderExpenses();
  showMessage("Expense deleted successfully!");
};

// Save expenses to local storage
function saveExpenses() {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

// Show a message
function showMessage(msg, type = "success") {
  message.textContent = msg;
  message.className = type;
  setTimeout(() => (message.textContent = ""), 3000);
}

// Sort expenses by date or amount
sortDateBtn.addEventListener("click", () => {
  expenses.sort((a, b) => new Date(a.date) - new Date(b.date));
  renderExpenses();
});

sortAmountBtn.addEventListener("click", () => {
  expenses.sort((a, b) => a.amount - b.amount);
  renderExpenses();
});
