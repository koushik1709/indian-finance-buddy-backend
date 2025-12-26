# Indian Finance Buddy - Backend

Backend API for Indian Finance Buddy dashboard - Node.js + Express

## Features

- RESTful API endpoints for finance dashboard
- Dashboard summary (balance, income, expenses)
- Spending categories tracking
- Recent transactions history
- Upcoming bills management
- Special offers and rewards

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/koushik1709/indian-finance-buddy-backend.git
cd indian-finance-buddy-backend
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

The server will start on `http://localhost:3000`

## API Endpoints

### Base URL
```
http://localhost:3000
```

### Available Endpoints

#### 1. Health Check
```
GET /
Response: { "message": "Indian Finance Buddy backend is running" }
```

#### 2. Dashboard Summary
```
GET /api/dashboard/summary
Response: {
  "totalBalance": 42500,
  "income": 50000,
  "expenses": 7500
}
```

#### 3. Spending Categories
```
GET /api/dashboard/categories
Response: [
  { "name": "Food", "amount": 1200 },
  { "name": "Transport", "amount": 800 },
  ...
]
```

#### 4. Recent Transactions
```
GET /api/dashboard/transactions
Response: [
  {
    "id": 1,
    "title": "Salary",
    "method": "Bank Transfer",
    "type": "credit",
    "amount": 50000,
    "date": "2024-01-01"
  },
  ...
]
```

#### 5. Upcoming Bills
```
GET /api/dashboard/bills
Response: [
  {
    "id": 1,
    "title": "Electricity Bill",
    "dueDate": "2024-01-15",
    "amount": 2500
  },
  ...
]
```

#### 6. Offers and Rewards
```
GET /api/dashboard/offers
Response: {
  "cashback": {
    "title": "Special Cashback!",
    "description": "Get up to 10% cashback on UPI payments",
    "cta": "Claim"
  },
  ...
}
```

## Project Structure

```
indian-finance-buddy-backend/
├── server.js           # Main server file
├── package.json        # Dependencies and scripts
├── .gitignore         # Git ignore file
└── README.md          # This file
```

## Future Enhancements

- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] User authentication and authorization
- [ ] CRUD operations for transactions
- [ ] Budget tracking features
- [ ] Data analytics and insights
- [ ] Export data to CSV/PDF

## License

MIT

## Author

koushik1709
