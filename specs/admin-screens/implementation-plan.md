# Admin User Management - Implementation Plan

## Files to Create

### API Routes

| File | Purpose |
|------|---------|
| `src/app/api/admin/users/route.ts` | GET (list users), POST (create user) |
| `src/app/api/admin/users/[userId]/route.ts` | PATCH (update user role/name) |
| `src/app/api/admin/users/[userId]/password/route.ts` | POST (reset password) |
| `src/app/api/admin/users/[userId]/credits/route.ts` | PATCH (update credits) |

### UI Components

| File | Purpose |
|------|---------|
| `src/components/admin/user-management.tsx` | Main client component orchestrating the UI |
| `src/components/admin/user-table.tsx` | Table displaying all users |
| `src/components/admin/add-user-dialog.tsx` | Dialog form for creating users |
| `src/components/admin/edit-user-dialog.tsx` | Dialog for editing user (role, name) |
| `src/components/admin/reset-password-dialog.tsx` | Dialog for resetting password |
| `src/components/admin/credits-dialog.tsx` | Dialog for modifying credits |

### Files to Modify

| File | Change |
|------|--------|
| `src/app/admin/page.tsx` | Replace placeholder with UserManagement component |

## Implementation Details

### 1. API Route: List & Create Users (`/api/admin/users`)

**GET** - List all users with subscriptions:
```typescript
// Join user + subscription tables
// Return: { users: UserWithSubscription[], total: number }
```

**POST** - Create new user:
- Validate: email, password (min 8 chars), name
- Hash password using `better-auth/crypto` → `hashPassword()`
- Create user record with `platformRole`
- Create account record with hashed password (providerId: "credential", accountId: email)
- Create subscription with default 3 credits
- Return created user

### 2. API Route: Update User (`/api/admin/users/[userId]`)

**PATCH** - Update user properties:
- Update `platformRole` (admin/user toggle)
- Update `name`
- Update `emailVerified`

### 3. API Route: Reset Password (`/api/admin/users/[userId]/password`)

**POST** - Set new password:
- Hash new password using `hashPassword()` from `better-auth/crypto`
- Update account.password where providerId = "credential"

### 4. API Route: Update Credits (`/api/admin/users/[userId]/credits`)

**PATCH** - Set credits:
- Update subscription.credits directly (allow any positive number or 0)

### 5. Admin Page UI

Server Component wrapper with client UserManagement:
- Fetch users on mount
- DataTable with columns: Name, Email, Role (Badge), Credits, Verified, Created, Actions
- "Add User" button opens AddUserDialog
- Row actions dropdown: Edit, Reset Password, Change Credits

## Password Hashing

Use BetterAuth's built-in crypto utilities:
```typescript
import { hashPassword } from "better-auth/crypto";

const hashedPassword = await hashPassword(plainTextPassword);
```

This ensures consistency with how BetterAuth handles passwords during normal registration.

## Admin Protection Pattern

All API routes will use this pattern:
```typescript
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

async function requireAdminApi() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) return { error: "Unauthorized", status: 401 };
  if (session.user.platformRole !== "admin") return { error: "Forbidden", status: 403 };
  return { session };
}
```

## Database Operations (Drizzle)

### Create User
```typescript
// 1. Insert into user table
const newUser = await db.insert(user).values({
  id: crypto.randomUUID(),
  name, email, emailVerified, platformRole,
}).returning();

// 2. Insert into account table (for password auth)
await db.insert(account).values({
  id: crypto.randomUUID(),
  userId: newUser[0].id,
  accountId: email,
  providerId: "credential",
  password: hashedPassword,
});

// 3. Insert into subscription table
await db.insert(subscription).values({
  id: crypto.randomUUID(),
  userId: newUser[0].id,
  plan: "free",
  credits: 3,
});
```

### List Users with Subscriptions
```typescript
const users = await db
  .select()
  .from(user)
  .leftJoin(subscription, eq(user.id, subscription.userId))
  .orderBy(desc(user.createdAt));
```

## UI Components Structure

### AddUserDialog
- Email input (required)
- Password input (required, min 8 chars)
- Name input (required)
- Admin toggle (Switch)
- Email Verified toggle (Switch)

### EditUserDialog
- Name input
- Admin toggle (Switch)
- Email Verified toggle (Switch)

### ResetPasswordDialog
- New Password input
- Confirm Password input

### CreditsDialog
- Current credits display
- New credits input (number)
- Quick buttons: +10, +50, +100, Set to 0

## Existing Code to Reuse

- `src/lib/session.ts`: `requireAdmin()` pattern for page protection
- `src/lib/subscription.ts`: `ensureSubscription()` pattern
- `src/lib/schema.ts`: All table definitions
- `src/components/ui/*`: shadcn components (Dialog, Table, Button, Input, Switch, Badge, etc.)

## Verification Steps

1. **Run lint and typecheck**: `pnpm run lint && pnpm run typecheck`
2. **Test in browser**:
   - Login as admin user
   - Navigate to `/admin`
   - Create a new user with email/password
   - Verify new user appears in list
   - Test login with new user credentials
   - Toggle admin status and verify
   - Reset password and verify login with new password
   - Modify credits and verify change
