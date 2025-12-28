# 🔵 Convex Setup Guide

## Step-by-Step Instructions

### Step 1: Run the Convex Dev Command

Open a **new terminal window** (keep your Next.js dev server running in the other terminal) and run:

```bash
npx convex dev
```

### Step 2: What Will Happen

When you run `npx convex dev`, it will:

1. **First time?** It will ask you to log in:
   - Your browser will open automatically
   - Or you'll see a URL to visit
   - Sign up/Log in to Convex (it's free)

2. **Create a new deployment:**
   - It will ask: "Create a new deployment? (Y/n)"
   - Type `Y` and press Enter

3. **Choose a deployment name:**
   - It will suggest a name (you can accept or change it)
   - Press Enter to accept

4. **Deploy your schema:**
   - Convex will automatically push your database schema
   - You'll see: "Schema pushed successfully"

### Step 3: Get Your Credentials

After setup, Convex will display something like:

```
✅ Deployment created: your-deployment-name
📝 Deployment URL: https://your-deployment.convex.cloud
🔑 Deployment ID: abc123xyz456
```

**IMPORTANT:** Copy these values! You'll need them for your `.env` file.

### Step 4: Update Your .env File

Add these to your `.env` file:

```env
CONVEX_DEPLOYMENT=your-deployment-id-here
NEXT_PUBLIC_CONVEX_URL=https://your-deployment.convex.cloud
```

### Step 5: Keep Convex Dev Running

**Important:** Keep the `npx convex dev` terminal running while developing. It:
- Syncs your schema changes
- Provides real-time updates
- Shows logs and errors

---

## Troubleshooting

### Issue: Browser doesn't open
**Solution:** Copy the URL shown in the terminal and paste it in your browser

### Issue: "Already logged in" but no deployment
**Solution:** Run `npx convex dev` again, it will create a deployment

### Issue: Schema push fails
**Solution:** 
- Check your `convex/schema.js` file for syntax errors
- Make sure you're in the project root directory

### Issue: Can't find deployment ID
**Solution:** 
- Check the terminal output for the deployment information
- Or visit [convex.dev/dashboard](https://convex.dev/dashboard) to see your deployments

---

## What Convex Does

Convex provides:
- ✅ Real-time database
- ✅ Serverless functions (queries/mutations)
- ✅ Automatic API generation
- ✅ Real-time subscriptions
- ✅ Built-in authentication integration

---

## Next Steps After Convex Setup

Once Convex is set up, you'll need to:
1. ✅ Set up Clerk (authentication)
2. ✅ Set up Resend (email)
3. ✅ Get Google Gemini API key
4. ✅ Complete your `.env` file
5. ✅ Restart your Next.js dev server

---

Need help? Check the main [SETUP_GUIDE.md](./SETUP_GUIDE.md) for complete instructions.

