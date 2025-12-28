# 🚀 Step-by-Step Setup Guide for Splitr

This guide will walk you through setting up and running the Splitr project from scratch.

## ✅ Step 1: Verify Prerequisites

You need Node.js v18 or higher installed. Check if you have it:

```bash
node --version
npm --version
```

If not installed:
- Download Node.js from [nodejs.org](https://nodejs.org/)
- Install it and restart your terminal

---

## 📦 Step 2: Install Project Dependencies

1. **Navigate to the project directory** (if not already there):
   ```bash
   cd ai-splitwise-clone-main
   ```

2. **Install all dependencies**:
   ```bash
   npm install
   ```

   This will install all required packages. Wait for it to complete (may take 2-5 minutes).

---

## 🔵 Step 3: Set Up Convex (Backend & Database)

Convex provides the backend and database for this project.

1. **Create a Convex account**:
   - Go to [convex.dev](https://convex.dev)
   - Sign up for a free account

2. **Initialize Convex in your project**:
   ```bash
   npx convex dev
   ```

   This command will:
   - Ask you to log in to Convex (if not already logged in)
   - Create a new deployment
   - Generate a `convex` folder with configuration
   - Provide you with your Convex URL and deployment ID

3. **Save the Convex credentials**:
   - Copy the `NEXT_PUBLIC_CONVEX_URL` (looks like: `https://xxx.convex.cloud`)
   - Copy the `CONVEX_DEPLOYMENT` (looks like: `xxx-xxx-xxx`)
   - You'll need these for the `.env` file

4. **Keep the Convex dev server running** in this terminal (or run it in a separate terminal later)

---

## 🔐 Step 4: Set Up Clerk (Authentication)

Clerk handles user authentication.

1. **Create a Clerk account**:
   - Go to [clerk.com](https://clerk.com)
   - Sign up for a free account

2. **Create a new application**:
   - Click "Create Application"
   - Choose a name (e.g., "Splitr")
   - Select authentication methods (Email, Google, etc.)

3. **Get your Clerk keys**:
   - Go to **API Keys** in your Clerk dashboard
   - Copy the **Publishable Key** (starts with `pk_test_...`)
   - Copy the **Secret Key** (starts with `sk_test_...`)

4. **Set up JWT configuration**:
   - Go to **JWT Templates** in Clerk dashboard
   - Create a new template named "convex" (or use default)
   - Copy the **JWT Issuer Domain** (looks like: `https://xxx.clerk.accounts.dev`)

5. **Configure sign-in/sign-up URLs**:
   - In Clerk dashboard, go to **Paths**
   - Set Sign-in URL: `/sign-in`
   - Set Sign-up URL: `/sign-up`

---

## 📧 Step 5: Set Up Resend (Email Service)

Resend is used for sending payment reminders and AI insights.

1. **Create a Resend account**:
   - Go to [resend.com](https://resend.com)
   - Sign up for a free account

2. **Get your API key**:
   - Go to **API Keys** in Resend dashboard
   - Click "Create API Key"
   - Name it (e.g., "Splitr")
   - Copy the API key (starts with `re_...`)

---

## 🤖 Step 6: Set Up Google Gemini AI

Gemini AI is used for generating spending insights.

1. **Get a Gemini API key**:
   - Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Sign in with your Google account
   - Click "Create API Key"
   - Copy the API key

---

## ⚙️ Step 7: Set Up Inngest (Background Jobs) - Optional for Development

Inngest handles automated tasks like payment reminders.

**Note**: For local development, you can skip this step initially. The app will work without it, but automated emails won't be sent.

1. **Create an Inngest account**:
   - Go to [inngest.com](https://inngest.com)
   - Sign up for a free account

2. **Set up Inngest locally** (for development):
   ```bash
   npx inngest-cli@latest dev
   ```
   This runs Inngest locally. Keep it running in a separate terminal.

3. **For production**, you'll need to:
   - Deploy your app
   - Configure the Inngest endpoint in your Inngest dashboard

---

## 📝 Step 8: Create Environment File

1. **Create a `.env` file** in the root directory of the project:
   ```bash
   # On Windows (PowerShell)
   New-Item .env

   # On Mac/Linux
   touch .env
   ```

2. **Open the `.env` file** and add all your credentials:

   ```env
   # Convex Configuration (from Step 3)
   CONVEX_DEPLOYMENT=your-convex-deployment-id-here
   NEXT_PUBLIC_CONVEX_URL=https://your-deployment.convex.cloud

   # Clerk Authentication (from Step 4)
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your-key-here
   CLERK_SECRET_KEY=sk_test_your-key-here
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   CLERK_JWT_ISSUER_DOMAIN=https://your-domain.clerk.accounts.dev

   # Email Service (from Step 5)
   RESEND_API_KEY=re_your-api-key-here

   # AI Service (from Step 6)
   GEMINI_API_KEY=your-gemini-api-key-here
   ```

3. **Replace all placeholder values** with your actual keys from the previous steps.

4. **Save the file**

---

## 🗄️ Step 9: Set Up Database Schema

The Convex schema is already defined, but you need to push it:

1. **Make sure Convex dev is running**:
   ```bash
   npx convex dev
   ```

   This will automatically push your schema and functions to Convex.

2. **Verify the schema is deployed**:
   - Check the terminal output for "Schema pushed successfully"
   - Or visit your Convex dashboard to see the tables

---

## 🚀 Step 10: Run the Development Server

1. **Open a new terminal** (keep Convex dev running in the first terminal)

2. **Start the Next.js development server**:
   ```bash
   npm run dev
   ```

3. **Wait for the server to start** - You should see:
   ```
   ▲ Next.js 15.2.3
   - Local:        http://localhost:3000
   ```

4. **Open your browser** and go to:
   ```
   http://localhost:3000
   ```

---

## ✅ Step 11: Verify Everything Works

1. **Landing Page**: You should see the Splitr landing page
2. **Sign Up**: Click "Get Started" and create an account
3. **Dashboard**: After signing in, you should see the dashboard
4. **Test Features**:
   - Try creating an expense
   - Add a contact
   - Create a group

---

## 🔧 Troubleshooting

### Issue: "Cannot find module" errors
**Solution**: Run `npm install` again

### Issue: Convex connection errors
**Solution**: 
- Make sure `npx convex dev` is running
- Check your `.env` file has the correct `NEXT_PUBLIC_CONVEX_URL`

### Issue: Clerk authentication not working
**Solution**:
- Verify all Clerk keys in `.env` are correct
- Check that sign-in/sign-up URLs match your Clerk dashboard settings
- Make sure `CLERK_JWT_ISSUER_DOMAIN` is correct

### Issue: Port 3000 already in use
**Solution**: 
- Kill the process using port 3000, or
- Run on a different port: `npm run dev -- -p 3001`

### Issue: Environment variables not loading
**Solution**:
- Make sure `.env` is in the root directory (same level as `package.json`)
- Restart the dev server after changing `.env`
- Check for typos in variable names

---

## 📋 Quick Start Checklist

- [ ] Node.js v18+ installed
- [ ] Dependencies installed (`npm install`)
- [ ] Convex account created and configured
- [ ] Clerk account created and configured
- [ ] Resend account created and API key obtained
- [ ] Google Gemini API key obtained
- [ ] `.env` file created with all credentials
- [ ] Convex dev server running (`npx convex dev`)
- [ ] Next.js dev server running (`npm run dev`)
- [ ] App opens at `http://localhost:3000`

---

## 🎉 You're All Set!

Your Splitr app should now be running locally. You can:
- Create expenses
- Split bills with friends
- Create groups
- View spending analytics
- Receive AI-powered insights (when configured)

For production deployment, you'll need to:
1. Deploy your Next.js app (Vercel, Netlify, etc.)
2. Set up Inngest for background jobs
3. Update environment variables in your hosting platform

---

## 💡 Tips

- **Keep Convex dev running**: Always run `npx convex dev` in a separate terminal while developing
- **Check logs**: Both Convex and Next.js terminals will show helpful error messages
- **Convex Dashboard**: Visit your Convex dashboard to see database data in real-time
- **Hot Reload**: Changes to code will automatically reload in the browser

---

Need help? Check the main [README.md](./README.md) for more information.

