import { config } from "dotenv";
import { resolve } from "path";

// Load environment variables
config({ path: resolve(process.cwd(), ".env") });

import { db } from "../lib/db";
import { user } from "../lib/schema";
import { eq } from "drizzle-orm";

async function setAdminRole() {
  const email = "radu.c.crisan@gmail.com";

  const result = await db
    .update(user)
    .set({ platformRole: "admin" })
    .where(eq(user.email, email))
    .returning();

  if (result.length > 0) {
    console.log(`✅ Successfully set ${email} as admin`);
    console.log(`User:`, result[0]);
  } else {
    console.log(`❌ User with email ${email} not found`);
  }

  process.exit(0);
}

setAdminRole().catch(console.error);
