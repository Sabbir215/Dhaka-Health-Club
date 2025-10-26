
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import serviceAccount from './firebase-admin-sdk.json' assert { type: 'json' };

// --- Initialize Firebase Admin SDK ---
// The admin SDK grants privileged access to your Firebase project.
// It bypasses all security rules, so it's perfect for server-side scripts.
initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

console.log('Firebase Admin SDK initialized. Connecting to Firestore...');

// --- Seed Data ---
// This is the data we want to write to Firestore.
const dashboardSeedData = {
  projects: 12,
  tasks: 4,
  users: 3,
  notifications: 7,
  recentActivity: [
    {
      id: 1,
      description: "User 'John Doe' joined the project 'Green Initiative'.",
      timestamp: new Date()
    },
    {
      id: 2,
      description: "Task 'Develop new feature' was completed.",
      timestamp: new Date()
    },
    {
      id: 3,
      description: "New project 'Eco-friendly packaging' was created.",
      timestamp: new Date()
    },
  ],
  lastSeeded: new Date()
};

async function seedDatabase() {
  try {
    console.log('Attempting to seed data into the \'dashboard\' collection...');

    // Get a reference to the document we want to create/update.
    // We'll create a single document 'stats' inside a 'dashboard' collection.
    const docRef = db.collection('dashboard').doc('stats');

    // Use .set() to write the data. This will create the document if it doesn't exist
    // or completely overwrite it if it does.
    await docRef.set(dashboardSeedData);

    console.log('✅ Database seeded successfully!');
    console.log('Data written to: /dashboard/stats');

  } catch (error) {
    console.error('❌ Error seeding database:');
    console.error(error);
    console.error('\n*** PLEASE ENSURE a firebase-admin-sdk.json file exists in the root directory. ***');
  } finally {
    // The process doesn't always exit automatically in some environments.
    process.exit(0);
  }
}

seedDatabase();
