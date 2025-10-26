import { cert, initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(
  readFileSync('./firebase-admin-sdk.json', 'utf8')
);

// --- Initialize Firebase Admin SDK ---
initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();
const auth = getAuth();

console.log('Firebase Admin SDK initialized. Creating test users...');

// --- Seed Users Data ---
const testUsers = [
  {
    email: 'alice@example.com',
    password: 'password123',
    fullName: 'Alice Johnson',
    phone: '+1234567890',
    dob: '1995-03-15',
    address: '123 Green St, Dhaka',
    photoURL: null
  },
  {
    email: 'bob@example.com',
    password: 'password123',
    fullName: 'Bob Smith',
    phone: '+1234567891',
    dob: '1992-07-22',
    address: '456 Health Ave, Dhaka',
    photoURL: null
  },
  {
    email: 'carol@example.com',
    password: 'password123',
    fullName: 'Carol Williams',
    phone: '+1234567892',
    dob: '1998-11-08',
    address: '789 Community Rd, Dhaka',
    photoURL: null
  }
];

async function seedUsers() {
  try {
    console.log('Creating test users in Firebase Auth and Firestore...\n');

    for (const userData of testUsers) {
      try {
        // Create user in Firebase Auth
        const userRecord = await auth.createUser({
          email: userData.email,
          password: userData.password,
          displayName: userData.fullName,
          photoURL: userData.photoURL
        });

        console.log(`✅ Created auth user: ${userData.email} (UID: ${userRecord.uid})`);

        // Create corresponding document in Firestore
        const userDocRef = db.collection('users').doc(userRecord.uid);
        await userDocRef.set({
          fullName: userData.fullName,
          email: userData.email,
          phone: userData.phone,
          dob: userData.dob,
          address: userData.address,
          photoURL: userData.photoURL,
          createdAt: new Date()
        });

        console.log(`✅ Created Firestore document for: ${userData.email}\n`);

      } catch (error) {
        if (error.code === 'auth/email-already-exists') {
          console.log(`⚠️  User ${userData.email} already exists, skipping...\n`);
        } else {
          console.error(`❌ Error creating user ${userData.email}:`, error.message);
        }
      }
    }

    // Also update the dashboard stats
    const statsRef = db.collection('dashboard').doc('stats');
    await statsRef.set({
      users: testUsers.length,
      projects: 12,
      tasks: 4,
      notifications: 7,
      lastSeeded: new Date()
    }, { merge: true });

    console.log('\n✅ Test users seeded successfully!');
    console.log('📊 Dashboard stats updated');
    console.log('\n📝 You can now login with any of these accounts:');
    testUsers.forEach(u => {
      console.log(`   - ${u.email} / password123`);
    });

  } catch (error) {
    console.error('❌ Error seeding users:');
    console.error(error);
  } finally {
    process.exit(0);
  }
}

seedUsers();
