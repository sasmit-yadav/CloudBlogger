# CloudBlogger

A modern landing page for CloudBlogger with backend API for email handling and payment processing.

## Project Structure

- `src/` — React frontend (TypeScript)
- `backend/` — Express.js API server
- `public/` — Static assets

## Features

- Modern React TypeScript frontend
- Express.js backend API
- Email functionality with Nodemailer
- Razorpay integration for payments
- Responsive design with Tailwind CSS
- Form validation and user feedback
- Date picker for demo bookings

## Razorpay Integration

CloudBlogger uses Razorpay to securely handle payments.  
**How it works:**
- The frontend provides a payment button/form (usually for demo booking or enrollment).
- When a user initiates payment, a request is sent to the backend (`/api/payment/order`) to create a Razorpay order.
- The backend uses Razorpay's Node.js SDK and credentials to create the order and responds with the order details.
- The frontend uses Razorpay's checkout script to complete the transaction.
- On successful payment, the backend verifies the signature and can trigger confirmation emails, enrollments, etc.

**Backend Setup Example:**
```js
// backend/routes/payment.js
const Razorpay = require('razorpay');
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});
app.post('/api/payment/order', async (req, res) => {
  // create Razorpay order and return details
});
```

**Frontend Setup Example:**
```js
// src/components/Payment.js
// Use Razorpay Checkout script with order details from backend
```

**Environment Variables Required:**
- `RAZORPAY_KEY_ID`
- `RAZORPAY_KEY_SECRET`

## Local Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup

1. **Install frontend dependencies:**
   ```bash
   npm install
   ```

2. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
   ```

3. **Start backend server:**
   ```bash
   cd backend
   npm start
   ```
   Backend will run on http://localhost:5000

4. **Start frontend development server:**
   ```bash
   npm start
   ```
   Frontend will run on http://localhost:3000

## Deployment

### Backend Deployment (Render)

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Add deployment configuration"
   git push origin main
   ```

2. **Deploy on Render:**
   - Go to [render.com](https://render.com)
   - Sign up/Login with your GitHub account
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Configure the service:
     - **Name:** `cloudblogger-backend`
     - **Environment:** `Node`
     - **Build Command:** `cd backend && npm install`
     - **Start Command:** `cd backend && npm start`
     - **Plan:** Free

3. **Environment Variables (Optional):**
   - `NODE_ENV`: `production`
   - `PORT`: `10000` (Render will set this automatically)
   - `RAZORPAY_KEY_ID`
   - `RAZORPAY_KEY_SECRET`

4. **Deploy and get your backend URL:**
   - Render will provide a URL like: `https://your-app-name.onrender.com`

## Environment Variables

### Frontend (.env file for local development)
```
REACT_APP_API_URL=http://localhost:5000
REACT_APP_RAZORPAY_KEY_ID=your_razorpay_key_id
```

### Backend (Render Environment Variables)
```
NODE_ENV=production
PORT=10000
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

## API Endpoints

- `POST /api/send-demo-email` — Send demo booking email
- `POST /api/enroll-now` — Send enrollment email
- `POST /api/payment/order` — Create Razorpay payment order

## Tech Stack

- **Frontend:** React 19, TypeScript, Tailwind CSS
- **Backend:** Express.js, Node.js, Nodemailer, Razorpay

## Support

For any issues or questions, please contact the development team.
