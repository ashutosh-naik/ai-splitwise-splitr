# Splitr - AI-Powered Expense Splitting App 💰

A full-stack expense splitting application inspired by Splitwise, built with modern web technologies and AI-powered insights. Track shared expenses, split bills effortlessly, and settle up quickly with friends and groups.

![splitr](https://github.com/user-attachments/assets/11e138c4-efcf-4a85-8586-f2993da118d8)

## 🚀 Features

### Core Functionality
- **Expense Tracking**: Create and manage expenses with detailed descriptions, categories, and dates
- **Multiple Split Types**: 
  - Equal split (divide equally among participants)
  - Percentage split (split by custom percentages)
  - Exact amounts (specify exact amounts for each person)
- **Group Management**: Create groups for roommates, trips, or events to organize shared expenses
- **Balance Calculations**: Real-time balance tracking for both one-on-one and group expenses
- **Settlements**: Record payments to settle debts between users
- **Contacts Management**: View all your contacts and groups in one place

### AI-Powered Features
- **Monthly Spending Insights**: Automated AI-generated financial analysis using Google Gemini
- **Payment Reminders**: Automated email reminders for outstanding debts
- **Spending Analytics**: Track spending patterns with visual charts and monthly summaries

### User Experience
- **Real-time Updates**: See new expenses and settlements instantly
- **Responsive Design**: Beautiful, modern UI that works on all devices
- **Dashboard Overview**: Comprehensive dashboard with balance summaries and spending trends
- **Dark Mode Support**: Built-in dark mode support (via next-themes)

## 🛠️ Tech Stack

### Frontend
- **Next.js 15.2.3** - React framework with App Router
- **React 19** - UI library
- **Tailwind CSS 4.1.3** - Utility-first CSS framework
- **shadcn/ui** - High-quality component library built on Radix UI
- **Recharts** - Chart library for data visualization
- **React Hook Form + Zod** - Form handling and validation
- **Lucide React** - Icon library

### Backend & Database
- **Convex** - Backend-as-a-Service with real-time database
  - Serverless functions (queries/mutations)
  - Real-time subscriptions
  - Built-in authentication integration

### Authentication
- **Clerk** - Complete authentication solution
  - Sign-in/sign-up flows
  - JWT-based authentication
  - Protected routes

### Background Jobs & Automation
- **Inngest** - Workflow automation platform
  - Cron jobs for scheduled tasks
  - Payment reminders (daily at 10 AM UTC)
  - Monthly spending insights (1st of month at 8 AM)

### AI & Email
- **Google Gemini AI** (Gemini 1.5 Flash) - AI-powered spending analysis
- **Resend** - Email delivery service

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** or **yarn**
- Accounts for:
  - [Convex](https://convex.dev) - Backend and database
  - [Clerk](https://clerk.com) - Authentication
  - [Inngest](https://inngest.com) - Background jobs
  - [Resend](https://resend.com) - Email service
  - [Google AI Studio](https://makersuite.google.com/app/apikey) - Gemini API key

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-splitwise-clone-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Convex**
   ```bash
   npx convex dev
   ```
   This will create a new Convex deployment and generate the necessary configuration files.

4. **Create environment file**
   Create a `.env` file in the root directory with the following variables:

   ```env
   # Convex Configuration
   CONVEX_DEPLOYMENT=your-convex-deployment-id
   NEXT_PUBLIC_CONVEX_URL=your-convex-url

   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
   CLERK_SECRET_KEY=your-clerk-secret-key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   CLERK_JWT_ISSUER_DOMAIN=your-clerk-jwt-issuer-domain

   # Email Service
   RESEND_API_KEY=your-resend-api-key

   # AI Service
   GEMINI_API_KEY=your-gemini-api-key
   ```

5. **Set up Inngest**
   - Create an account at [Inngest](https://inngest.com)
   - Set up your Inngest endpoint (usually `/api/inngest`)
   - Configure your Inngest functions in `lib/inngest/`

## 🚀 Running the Project

### Development Mode
```bash
npm run dev
```
The application will be available at `http://localhost:3000`

### Production Build
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── (auth)/            # Authentication routes (sign-in, sign-up)
│   ├── (main)/            # Main application routes
│   │   ├── dashboard/     # Dashboard page with overview
│   │   ├── expenses/      # Expense creation and management
│   │   ├── contacts/      # Contacts and groups management
│   │   ├── groups/        # Group detail pages
│   │   ├── person/        # One-on-one expense pages
│   │   └── settlements/   # Settlement pages
│   ├── api/               # API routes (Inngest webhook)
│   └── page.jsx           # Landing page
├── components/             # Reusable React components
│   ├── ui/                # shadcn/ui components
│   └── ...                # Custom components
├── convex/                # Convex backend functions
│   ├── schema.js          # Database schema definition
│   ├── expenses.js        # Expense operations
│   ├── dashboard.js       # Dashboard queries
│   ├── groups.js          # Group operations
│   ├── settlements.js     # Settlement operations
│   ├── contacts.js        # Contact queries
│   ├── users.js           # User operations
│   ├── email.js           # Email sending functions
│   └── inngest.js         # Background job queries
├── lib/                   # Utility functions
│   ├── inngest/           # Inngest workflow functions
│   │   ├── payment-reminders.js
│   │   └── spending-insights.js
│   ├── expense-categories.js
│   └── utils.js
├── hooks/                 # Custom React hooks
└── public/                # Static assets
```

## 🎯 Key Features Explained

### Expense Splitting
The app supports three types of expense splitting:
- **Equal**: Automatically divides the expense equally among all participants
- **Percentage**: Allows you to specify what percentage each person pays
- **Exact**: Enter exact dollar amounts for each participant

### Balance Calculation
The system automatically calculates balances by:
1. Tracking all expenses where you're involved (as payer or participant)
2. Applying settlements (payments made)
3. Computing net balances (you owe vs. you're owed)

### AI-Powered Insights
Every month, users receive personalized spending analysis emails that include:
- Monthly overview
- Top spending categories
- Unusual spending patterns
- Saving opportunities
- Recommendations for next month

### Automated Workflows
- **Payment Reminders**: Daily emails sent to users with outstanding debts
- **Spending Insights**: Monthly AI-generated financial analysis emails

## 🔐 Security

- All routes are protected with Clerk authentication
- User authorization checks in all Convex mutations
- JWT-based authentication with Convex
- Secure API key management via environment variables

## 📝 Database Schema

The application uses the following main tables:
- **users**: User profiles and authentication
- **expenses**: Expense records with splits
- **settlements**: Payment records
- **groups**: Group information and members

## 🎨 UI/UX Features

- Responsive design that works on all screen sizes
- Loading states with smooth animations
- Toast notifications for user feedback
- Interactive charts and visualizations
- Modern gradient design with green/teal theme
- Accessible components built on Radix UI

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 🔗 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Convex Documentation](https://docs.convex.dev)
- [Clerk Documentation](https://clerk.com/docs)
- [Inngest Documentation](https://www.inngest.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)

## 📺 Tutorial

This project is based on a tutorial video: [YouTube Tutorial](https://youtu.be/Ce7O3p7-YDI)

---

Built with ❤️ using Next.js, Convex, and AI
#   a i - s p l i t w i s e - s p l i t r  
 #   a i - s p l i t w i s e - s p l i t r  
 #   a i - s p l i t w i s e - s p l i t r  
 #   a i - s p l i t w i s e - s p l i t r  
 #   a i - s p l i t w i s e - s p l i t r  
 