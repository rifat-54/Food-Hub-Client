# 🍱 FoodHub Client

FoodHub Client is the frontend of the FoodHub meal ordering platform. It provides a modern, responsive, and user-friendly interface where customers can browse meals, place orders, providers can manage their menus, and administrators can manage the platform.

The application is built with **Next.js**, **TypeScript**, **Tailwind CSS**, **Shadcn UI**, and **Better Auth**.

---

## 🌐 Live Links

### Frontend Live

https://food-hub-client-iota.vercel.app

### Backend Live

https://food-hub-server-blue.vercel.app

### Backend Repository

https://github.com/rifat-54/Food-Hub-Server

---

# 🚀 Features

## 🌍 Public Features

- Responsive Homepage
- Hero Section
- Featured Meals
- Categories
- Browse Providers
- Browse Meals
- Search Meals
- Filter Meals by Category
- Filter Meals by Cuisine
- Filter Meals by Dietary Type
- Meal Details Page

---

## 👤 Customer Features

- Register & Login
- Google Authentication
- Update Profile
- Add Meals to Cart
- Checkout (Cash on Delivery)
- View Order History
- Track Order Status
- Submit Reviews
- Manage Profile

---

## 🍽️ Provider Features

- Provider Dashboard
- Create Provider Profile
- Add Meals
- Update Meals
- Delete Meals
- View Provider Orders
- Update Order Status

---

## 👨‍💼 Admin Features

- Admin Dashboard
- Manage Users
- Suspend / Activate Users
- Manage Categories
- View All Orders

---

# 🛠 Tech Stack

### Frontend

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Shadcn UI
- Better Auth
- TanStack Form
- Zustand
- Zod
- Sonner
- Lucide React

---

### Backend

- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- Better Auth

---

# 📁 Project Structure

```
src
│
├── app
├── actions
├── components
├── constant
├── env
├── hooks
├── lib
├── services
├── store
├── types
└── utils
```

---

# 🔐 Authentication

FoodHub uses **Better Auth** for secure authentication.

Supported authentication methods:

- Email & Password
- Google Login

Authentication is secured using session-based authentication and role-based authorization.

---

# 👥 User Roles

## Customer

- Browse Meals
- Add Meals to Cart
- Place Orders
- Track Orders
- Submit Reviews

---

## Provider

- Manage Meals
- Manage Orders
- Update Order Status

---

## Admin

- Manage Users
- Manage Categories
- View All Orders

---

# 📱 Responsive Design

The application is fully responsive and optimized for:

- Desktop
- Laptop
- Tablet
- Mobile

---

# ✨ Main Functionalities

- Authentication
- Authorization
- Protected Routes
- CRUD Operations
- Cart Management
- Meal Management
- Order Management
- Category Management
- User Management
- Review System
- Provider Dashboard
- Admin Dashboard

---

# ⚙️ Environment Variables

Create a `.env.local` file.

```env
NEXT_PUBLIC_API_URL=

NEXT_PUBLIC_FRONTEND_URL=

NEXT_PUBLIC_BETTER_AUTH_URL=
```

---

# 💻 Installation

Clone the repository

```bash
git clone https://github.com/rifat-54/Food-Hub-Client.git
```

Go to the project directory

```bash
cd Food-Hub-Client
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

---

# 📦 Available Scripts

Development

```bash
npm run dev
```

Build

```bash
npm run build
```

Start Production

```bash
npm start
```

Lint

```bash
npm run lint
```

---

# 👤 Demo Accounts

## Admin

Email

```
admin@gmail.com
```

Password

```
Admin@123
```

---

## Provider

Email

```
sarahkhan@gamail.com
```

Password

```
12345678
```

---

# 🎥 Demo Video

https://drive.google.com/file/d/1NA3vFvH1xlb8_gfW6MguV7ZgcFX68_ys/view?usp=sharing

---

# 👨‍💻 Author

**MD. Mashur Rahman Rifat**

GitHub

https://github.com/rifat-54

LinkedIn

https://www.linkedin.com/in/md-mashur-rahaman-rifat-28a61640b

Portfolio

https://portfollio-rifat-54.web.app/

---

# 📄 License

This project was developed as an academic assignment for educational purposes.