# Splitr – AI-Powered Expense Splitting App 💰

Splitr is a full-stack expense splitting application inspired by Splitwise, built with modern web technologies and AI-powered insights. Track shared expenses, split bills effortlessly, and settle up quickly with friends and groups.

![Splitr Preview](https://github.com/user-attachments/assets/11e138c4-efcf-4a85-8586-f2993da118d8)

---

## 🚀 Features

### 🔹 Core Functionality

- **Expense Tracking** – Create and manage expenses with descriptions, categories, and dates
- **Multiple Split Types**
  - **Equal** – Automatically divide equally among participants
  - **Percentage** – Custom percentage-based split
  - **Exact** – Specify exact amounts per person
- **Group Management** – Organize expenses for trips, roommates, or events
- **Balance Calculation** – Real-time balance tracking (you owe vs you’re owed)
- **Settlements** – Record payments to settle debts
- **Contacts Management** – Manage users and groups in one place

---

### 🤖 AI-Powered Features

- **Monthly Spending Insights** – AI-generated analysis using Google Gemini
- **Payment Reminders** – Automated reminder emails for outstanding balances
- **Spending Analytics** – Charts and monthly summaries to track patterns

---

### 🎨 User Experience

- **Real-time Updates** – Instant UI updates via Convex subscriptions
- **Responsive Design** – Works seamlessly across all devices
- **Dashboard Overview** – Balance summaries and spending trends
- **Dark Mode** – Built-in support via `next-themes`
- **Accessible UI** – Built using Radix UI & shadcn/ui

---

## 🛠️ Tech Stack

### Frontend

- **Next.js 15 (App Router)**
- **React 19**
- **Tailwind CSS**
- **shadcn/ui + Radix UI**
- **Recharts**
- **React Hook Form + Zod**
- **Lucide Icons**

### Backend & Database

- **Convex**
  - Serverless queries & mutations
  - Real-time database
  - Auth-aware backend logic

### Authentication

- **Clerk**
  - Google / Email authentication
  - JWT-based auth with Convex
  - Protected routes

### Background Jobs

- **Inngest**
  - Payment reminders (daily)
  - Monthly AI spending insights

### AI & Email

- **Google Gemini (Gemini 1.5 Flash)**
- **Resend** – Email delivery service

---

## 📋 Prerequisites

Ensure you have the following installed and configured:

- **Node.js** (v18+)
- **npm** or **yarn**

Accounts required:

- [Convex](https://convex.dev)
- [Clerk](https://clerk.com)
- [Inngest](https://inngest.com)
- [Resend](https://resend.com)
- [Google AI Studio](https://makersuite.google.com/app/apikey)

---
