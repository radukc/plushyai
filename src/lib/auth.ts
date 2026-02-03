import { betterAuth } from "better-auth"
import { drizzleAdapter } from "better-auth/adapters/drizzle"
import { db } from "./db"

const appURL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"

// Types for our custom user fields
export type PlatformRole = "admin" | "user"

export const auth = betterAuth({
  baseURL: appURL,
  trustedOrigins: [appURL],
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  // Define custom user fields to let Better Auth know about our platform_role column
  user: {
    additionalFields: {
      platformRole: {
        type: "string",
        required: false,
        default: "user",
      },
    },
  },
  advanced: {
    useSecureCookies: process.env.NODE_ENV === "production",
    defaultCookieAttributes: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    },
    // Explicitly enable CSRF protection (default: false, but explicit for security clarity)
    disableCSRFCheck: false,
    disableOriginCheck: false,
  },
  session: {
    expiresIn: 604800, // 7 days
    updateAge: 86400, // 1 day
    disableSessionRefresh: false,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    sendResetPassword: async ({ user, url }) => {
      // Log password reset URL to terminal (no email integration yet)
      // eslint-disable-next-line no-console
      console.log(`\n${"=".repeat(60)}\nPASSWORD RESET REQUEST\nUser: ${user.email}\nReset URL: ${url}\n${"=".repeat(60)}\n`)
    },
  },
  emailVerification: {
    sendOnSignUp: true,
    expiresIn: 86400, // 24 hours
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ user, url }) => {
      // Log verification URL to terminal (no email integration yet)
      // eslint-disable-next-line no-console
      console.log(`\n${"=".repeat(60)}\nEMAIL VERIFICATION\nUser: ${user.email}\nVerification URL: ${url}\n${"=".repeat(60)}\n`)
    },
  },
})
