const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// ---------- Static demo data (can be replaced with DB later) ----------

const dashboardSummary = {
  totalBalance: 42500,
  income: 50000,
  expenses: 7500
};

const spendingCategories = [
  { name: "Food", amount: 1200 },
  { name: "Transport", amount: 800 },
  { name: "Bills", amount: 2500 },
  { name: "Shopping", amount: 3000 }
];

const recentTransactions = [
  {
    id: 1,
    title: "Salary",
    method: "Bank Transfer",
    type: "credit",
    amount: 50000,
    date: "2024-01-01"
  },
  {
    id: 2,
    title: "Food",
    method: "UPI",
    type: "debit",
    amount: 1200,
    date: "2024-01-02"
  },
  {
    id: 3,
    title: "Transport",
    method: "Cash",
    type: "debit",
    amount: 800,
    date: "2024-01-03"
  }
];

const upcomingBills = [
  {
    id: 1,
    title: "Electricity Bill",
    dueDate: "2024-01-15",
    amount: 2500
  },
  {
    id: 2,
    title: "Home Loan EMI",
    dueDate: "2024-01-10",
    amount: 25000
  }
];

const offers = {
  cashback: {
    title: "Special Cashback!",
    description: "Get up to 10% cashback on UPI payments",
    cta: "Claim"
  },
  savingsChallenge: {
    title: "Savings Challenge",
    description: "Save ₹1000 this week and earn rewards!",
    cta: "Start"
  },
  investmentBonus: {
    title: "Investment Bonus",
    description: "Get 5% bonus on your first mutual fund investment",
    cta: "Invest"
  }
};

// ---------- API routes ----------

// Health check
app.get("/", (req, res) => {
  res.json({ message: "Indian Finance Buddy backend is running" });
});

// Dashboard summary: total balance, income, expenses
app.get("/api/dashboard/summary", (req, res) => {
  res.json(dashboardSummary);
});

// Spending categories
app.get("/api/dashboard/categories", (req, res) => {
  res.json(spendingCategories);
});

// Recent transactions
app.get("/api/dashboard/transactions", (req, res) => {
  res.json(recentTransactions);
});

// Upcoming bills
app.get("/api/dashboard/bills", (req, res) => {
  res.json(upcomingBills);
});

// Offers / rewards
app.get("/api/dashboard/offers", (req, res) => {
  res.json(offers);
});

// ---------- Start server ----------
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
