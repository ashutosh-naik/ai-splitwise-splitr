import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { internal } from "./_generated/api";

/**
 * Create or update logged-in user
 */
export const store = mutation({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Not authenticated");

    const existingUser = await ctx.db
      .query("users")
      .withIndex("by_token", (q) =>
        q.eq("tokenIdentifier", identity.tokenIdentifier)
      )
      .unique();

    // ✅ BEST & RELIABLE name resolution (works for Google, email, OAuth)
    const name =
      identity.name || // Google full name
      identity.email?.split("@")[0] || // fallback from email
      "User";

    const userData = {
      tokenIdentifier: identity.tokenIdentifier,
      name,
      email: identity.email ?? null,
      imageUrl: identity.pictureUrl ?? null,
    };

    if (existingUser) {
      await ctx.db.patch(existingUser._id, userData);
      return existingUser._id;
    }

    return await ctx.db.insert("users", userData);
  },
});

/**
 * Get current user
 */
export const getCurrentUser = query({
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Not authenticated");

    const user = await ctx.db
      .query("users")
      .withIndex("by_token", (q) =>
        q.eq("tokenIdentifier", identity.tokenIdentifier)
      )
      .first();

    if (!user) throw new Error("User not found");
    return user;
  },
});

/**
 * Search users (Add participant / Add member)
 */
export const searchUsers = query({
  args: { query: v.string() },
  handler: async (ctx, args) => {
    const currentUser = await ctx.runQuery(internal.users.getCurrentUser);

    if (args.query.length < 2) return [];

    const nameResults = await ctx.db
      .query("users")
      .withSearchIndex("search_name", (q) => q.search("name", args.query))
      .collect();

    const emailResults = await ctx.db
      .query("users")
      .withSearchIndex("search_email", (q) => q.search("email", args.query))
      .collect();

    const combined = [
      ...nameResults,
      ...emailResults.filter((e) => !nameResults.some((n) => n._id === e._id)),
    ];

    return combined
      .filter((u) => u._id !== currentUser._id)
      .map((u) => ({
        id: u._id,
        name: u.name,
        email: u.email,
        imageUrl: u.imageUrl,
      }));
  },
});
