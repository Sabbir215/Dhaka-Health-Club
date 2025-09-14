import type { APIRoute } from "astro";
import { db } from "../../firebase/server";

const workouts = [
  {
    title: "Full Body Blast",
    description: "A high-intensity workout that targets all major muscle groups. Perfect for building overall strength and endurance.",
    level: "Intermediate",
    duration: 45, // in minutes
    image: "/images/workouts/full-body.jpg"
  },
  {
    title: "Cardio Core Fusion",
    description: "Combine heart-pumping cardio with core-strengthening exercises for a complete workout.",
    level: "Beginner",
    duration: 30,
    image: "/images/workouts/cardio-core.jpg"
  },
  // ... more workouts
];

export const GET: APIRoute = async () => {
  try {
    const workoutsCollection = db.collection("workouts");
    for (const workout of workouts) {
      await workoutsCollection.add(workout);
    }
    return new Response("Workouts seeded successfully", { status: 200 });
  } catch (error) {
    console.error("Error seeding workouts:", error);
    return new Response("Error seeding workouts", { status: 500 });
  }
};
