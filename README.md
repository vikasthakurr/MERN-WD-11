# ShopHub - MERN Stack E-commerce Application

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=flat-square) 
![GitHub stars](https://img.shields.io/github/stars/vikasthakurr/MERN-WD-11?style=flat-square) 
![GitHub forks](https://img.shields.io/github/forks/vikasthakurr/MERN-WD-11?style=flat-square)


![ShopHub Mockup](./assets/mockup.png)

ShopHub is a full-featured e-commerce platform built using the MERN (MongoDB, Express, React, Node.js) stack. It supports user authentication, product management, a shopping cart, and a dedicated admin dashboard for order and user management.

## 🚀 Key Features

- **User Authentication**: Secure signup and login with JWT and role-based access (User/Admin).
- **Product Catalog**: Diverse range of products across multiple categories with high-quality images.
- **Shopping Cart**: Fully functional cart with the ability to add/remove items and adjust quantities.
- **Checkout Process**: Integrated payment simulations with Stripe and Razorpay.
- **Admin Dashboard**:
  - Live statistics (Total Users, Total Orders, Total Revenue).
  - User management (View registered users).
  - Order management (Track recent orders and their details).
- **Email Notifications**: Automated welcome and login emails (requires configuration).

## 📚 Topics Covered (Curriculum)

This repository serves as a comprehensive learning hub for modern web development. Below are the key concepts and technologies explored throughout the modules:

### 🟨 JavaScript (Core & Advanced)

- **Basics**: Data Types, Scopes, Closures, Hoisting.
- **Async Programming**: Callbacks, Promises, Async/Await.
- **Functional JS**: Higher-Order Functions (HOF), Currying, Function Borrowing.
- **DOM & Browser**: Event Bubbling/Capturing, Debouncing, Throttling, DOM Manipulation.
- **Objects**: Prototypes, Object Methods, and Advanced Object Manipulation.

### ⚛️ React.js

- **State Management**: Redux Toolkit, Context API, UseState.
- **Hooks**: UseEffect, UseCallback, UseMemo, UseRef, Custom Hooks.
- **Routing**: React Router (Params, Protected Routes).
- **Forms**: Formik and Yup Validation.
- **Optimization**: Skeleton Loading, Optimization techniques.
- **Integration**: Axios for API calls and interceptors.

### 🟩 Node.js & Express

- **Core Modules**: Filesystem (FS), OS, Path, Events.
- **CRUD Operations**: Building RESTful APIs with Express.
- **Middleware**: Custom Middleware, CORS, Auth Interceptors.
- **File Systems**: Multer for file/image uploads.
- **Database**: MongoDB (Atlas/Local), Mongoose Schemas, Populate, Relationships.
- **Communication**: Nodemailer for automated email services.

## 🛠️ Tech Stack

- **Frontend**: React, Redux Toolkit, Tailwind CSS, Lucide Icons, Vite.
- **Backend**: Node.js, Express.js, MongoDB (Mongoose), JWT, Bcrypt, Nodemailer.

## 📦 Project Structure

```bash
MERN-WD-11/
├── project/
│   ├── backend/        # Node.js/Express API
│   │   ├── controllers/ # Route handlers
│   │   ├── Schema/      # Mongoose models
│   │   └── index.js     # Entry point
│   └── front-end/      # React application
│       ├── src/
│       │   ├── components/  # UI Components
│       │   ├── redux/       # State management
│       │   └── product-api/ # Product data
│       └── index.html
└── .gitignore          # Root ignore file
```

## ⚙️ Setup Instructions

### 1. Prerequisites

- Node.js installed
- MongoDB URI (local or Atlas)

### 2. Backend Setup

1. Navigate to `project/backend`.
2. Install dependencies: `npm install`.
3. Create a `.env` file with:
   ```env
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_secret_key
   EMAIL_USER=your_email
   EMAIL_PASS=your_app_password
   ```
4. Start the server: `npm start`.

### 3. Frontend Setup

1. Navigate to `project/front-end`.
2. Install dependencies: `npm install`.
3. Start the application: `npm start`.

## 🛡️ License

Distributed under the MIT License.