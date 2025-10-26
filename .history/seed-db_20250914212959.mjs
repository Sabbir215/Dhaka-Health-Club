import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// IMPORTANT: Replace with your actual Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBlTvcKxDVISGL_TOL_z_rkkm8v8Wn6ONI",
    authDomain: "dhakahealthclub-137e4.firebaseapp.com",
    databaseURL: "https://dhakahealthclub-137e4-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "dhakahealthclub-137e4",
    storageBucket: "dhakahealthclub-137e4.appspot.com",
    messagingSenderId: "56734104960",
    appId: "1:56734104960:web:389f2af3ff81eda264d565",
    measurementId: "G-JXFBSBGVXJ"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

// --- Seed Data ---
const dashboardData = {
  projects: 12,
  tasks: 4,
  users: 3,
  notifications: 7,
  recentActivity: [
    {
      id: 1,
      description: "User 'John Doe' joined the project 'Green Initiative'.",
    },
    {
      id: 2,
      description: "Task 'Develop new feature' was completed.",
    },
    {
      id: 3,
      description: "New project 'Eco-friendly packaging' was created.",
    },
  ],
};

async function seedDatabase() {
  try {
    // To write to the database, you must be authenticated.
    // IMPORTANT: Replace with a valid user email and password from your Firebase project.
    const userCredential = await signInWithEmailAndPassword(auth, "user@example.com", "password123");
    const user = userCredential.user;

    if (user) {
      console.log("User authenticated, seeding database...");
      await set(ref(database, 'dashboard'), dashboardData);
      console.log("Database seeded successfully!");
    } else {
      console.error("Authentication failed. Could not seed database.");
    }

  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    process.exit(0); 
  }
}

seedDatabase();
