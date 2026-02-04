# Admin User Management - Requirements

## Overview
Add user management functionality to the admin dashboard at `/admin`.

## Features

### 1. Add New Users
Admin can create new user accounts with the following fields:
- **Email** (required) - Must be unique
- **Password** (required) - Minimum 8 characters
- **Name** (required) - Display name
- **Admin toggle** - Set user as admin or regular user
- **Email Verified toggle** - Mark email as verified (skip verification flow)

The system should:
- Create user record in database
- Create account record with hashed password
- Create subscription with default 3 credits

### 2. Modify Existing Users
Admin can view a list of all users and perform the following actions:

#### 2.1 User List Display
Show all users with columns:
- Name
- Email
- Role (admin/user)
- Credits
- Email Verified status
- Created date
- Actions menu

#### 2.2 Reset Password
- Set a new password for any user
- Password must be at least 8 characters
- Requires confirmation input

#### 2.3 Toggle Admin Status
- Switch user between "admin" and "user" roles
- Changes take effect immediately

#### 2.4 Change Credits
- View current credit balance
- Set credits to any non-negative number
- Quick action buttons for common amounts (+10, +50, +100)

## Access Control
- All functionality restricted to users with `platformRole: "admin"`
- Non-admin users redirected to `/dashboard`
- Unauthenticated users redirected to `/`

## Technical Constraints
- Use existing BetterAuth authentication system
- Use existing Drizzle ORM schema (user, account, subscription tables)
- Follow existing UI patterns (shadcn/ui components)
- Support dark mode
