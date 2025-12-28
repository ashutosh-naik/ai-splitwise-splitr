# 🔐 Clerk Setup Guide - Step by Step

This guide will walk you through setting up Clerk authentication for your Splitr app.

---

## Step 1: Create a Clerk Account

1. **Go to Clerk's website:**
   - Open your browser and visit: [https://clerk.com](https://clerk.com)

2. **Sign up for a free account:**
   - Click the **"Sign Up"** or **"Get Started"** button
   - You can sign up with:
     - Email and password
     - Google account
     - GitHub account

3. **Complete the sign-up process:**
   - Fill in your details
   - Verify your email if required

---

## Step 2: Create a New Application

1. **After logging in, you'll see the dashboard:**
   - Click the **"Create Application"** button (usually a big button in the center)

2. **Fill in the application details:**
   - **Application name:** Enter "Splitr" or "ai-splitwise-clone" (any name you prefer)
   - **Authentication methods:** Select at least:
     - ✅ **Email** (required)
     - ✅ **Google** (optional, but recommended)
     - You can add more later if needed
   - Click **"Create Application"**

3. **Wait for setup to complete:**
   - Clerk will create your application (takes a few seconds)

---

## Step 3: Get Your API Keys

1. **Navigate to API Keys:**
   - In your Clerk dashboard, look at the left sidebar
   - Click on **"API Keys"** (under "Configure")

2. **Copy your keys:**
   - You'll see two keys:
     - **Publishable Key** (starts with `pk_test_...` or `pk_live_...`)
     - **Secret Key** (starts with `sk_test_...` or `sk_live_...`)
   - **Important:** Copy both keys and save them somewhere safe (we'll use them soon)

---

## Step 4: Configure Sign-In/Sign-Up URLs

1. **Go to Paths settings:**
   - In the left sidebar, click **"Paths"** (under "Configure")

2. **Set the URLs:**
   - **Sign-in URL:** Enter `/sign-in`
   - **Sign-up URL:** Enter `/sign-up`
   - Click **"Save"** if there's a save button

---

## Step 5: Set Up JWT Template for Convex

1. **Go to JWT Templates:**
   - In the left sidebar, click **"JWT Templates"** (under "Configure")

2. **Create or use existing template:**
   - If you see a default template, you can use it
   - Or click **"New template"** to create one specifically for Convex
   - If creating new:
     - **Name:** Enter "convex"
     - **Token lifetime:** Leave default (usually 60 minutes)
     - Click **"Create"**

3. **Get the JWT Issuer Domain:**
   - Look for **"Issuer"** or **"JWT Issuer Domain"** in the template
   - It will look like: `https://your-app-name.clerk.accounts.dev`
   - **Copy this URL** - this is your `CLERK_JWT_ISSUER_DOMAIN`

---

## Step 6: Summary - What You Need

After completing the above steps, you should have:

✅ **Publishable Key** (pk_test_...)
✅ **Secret Key** (sk_test_...)
✅ **JWT Issuer Domain** (https://xxx.clerk.accounts.dev)

---

## Step 7: Add Credentials to Your Project

Once you have all three values, I'll help you:
1. Create/update your `.env` file with Clerk credentials
2. Add the `CLERK_JWT_ISSUER_DOMAIN` to Convex dashboard

---

## Troubleshooting

### Can't find API Keys?
- Make sure you're in the correct application
- Check the left sidebar for "API Keys" under "Configure"

### Can't find JWT Issuer Domain?
- Go to JWT Templates
- Look at the template details
- The issuer is usually shown at the top or in the template settings

### Need help?
- Clerk has excellent documentation at [clerk.com/docs](https://clerk.com/docs)
- Or ask me and I'll help!

---

**Ready?** Start with Step 1 and work through each step. When you have all three values (Publishable Key, Secret Key, and JWT Issuer Domain), let me know and I'll help you add them to your project!

