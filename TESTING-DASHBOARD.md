# Testing the Dashboard - User Display

## The Issue

The dashboard shows "No community members yet" because there are **no users registered in the Firestore database**.

## How the Dashboard Works

1. ✅ Real-time listener (`onSnapshot`) is correctly set up
2. ✅ When users register, they are automatically added to the `users` collection
3. ✅ The dashboard will **automatically update in real-time** when users are added
4. ✅ Console will log: `📢 Users collection updated! Total members: X`

## Solution: Register Test Users

### Option 1: Register Through the UI (Recommended)

1. Open your browser to `http://localhost:4323/register`
2. Create 2-3 test accounts with different emails:
   - **Email**: `test1@example.com`, **Password**: `password123`, **Name**: `Test User 1`
   - **Email**: `test2@example.com`, **Password**: `password123`, **Name**: `Test User 2`
   - **Email**: `test3@example.com`, **Password**: `password123`, **Name**: `Test User 3`
3. After registration, each user will be automatically added to Firestore
4. Navigate to `/dashboard` to see them appear in real-time!

### Option 2: Use Firebase Console

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project
3. Go to **Firestore Database**
4. Click **Start Collection**
5. Collection ID: `users`
6. Add documents with these fields:
   - `fullName`: "John Doe"
   - `email`: "john@example.com"
   - `phone`: "+1234567890"
   - `dob`: "1995-01-01"
   - `address`: "123 Main St"
   - `photoURL`: null
   - `createdAt`: (timestamp)

## What You'll See

Once users are in the database:

- ✅ User cards with profile pictures or gradient avatars
- ✅ User's full name and email
- ✅ Latest contribution info
- ✅ Real-time updates when new users register
- ✅ Console log: `📢 Users collection updated! Total members: 3`

## Console Output

Open browser console (F12) to see:

```
📢 Users collection updated! Total members: 0
📊 User documents: []
```

After registering users:

```
📢 Users collection updated! Total members: 3
📊 User documents: [
  { id: "abc123", fullName: "Test User 1", email: "test1@example.com", ... },
  { id: "def456", fullName: "Test User 2", email: "test2@example.com", ... },
  { id: "ghi789", fullName: "Test User 3", email: "test3@example.com", ... }
]
```

## Verify Registration Works

1. Go to `/register`
2. Fill in the form with test data
3. Click "Register"
4. You should be redirected to `/dashboard`
5. Check the console - you should see the user count increase!
6. The user should appear in the "Community Members" section

---

**Note**: The dashboard is working perfectly - it just needs users to display! 🌿
