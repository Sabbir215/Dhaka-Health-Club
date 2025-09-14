# Blueprint: Dhaka Health Club (DHC)

## 1. Project Overview

This project is the "Dhaka Health Club (DHC)," a supportive and collaborative web application for individuals seeking to improve their health and well-being. It is built with Astro.js, a modern web framework for building fast, content-focused websites, and integrates with Firebase for backend services. The primary goal is to create a fast, highly-performant, and scalable site.

## 2. Implemented Features & Design

This section documents the current state of the application.

### Core Technology

*   **Framework:** Astro.js
*   **Backend:** Firebase (Authentication, Realtime Database)
*   **Styling:** Tailwind CSS (via Astro's `@astrojs/tailwind` integration)
*   **Development Environment:** Firebase Studio (formerly Project IDX)

### Features

*   **User Authentication:**
    *   Login page (`/login`) using Firebase Authentication (Email/Password).
    *   Client-side authentication state management (`firebase/client.ts`).
    *   Protected routes that redirect to login if the user is not authenticated.
*   **Dashboard (`/dashboard`):**
    *   Displays a welcome message and summary cards for Projects, Tasks, Users, and Notifications.
    *   Summary card data is fetched from the Firebase Realtime Database on the client-side.
    *   **Registered Users List:** Securely fetches the complete list of users from Firebase Authentication on the **server-side** when the page is requested. This is a core feature for administrative visibility.
*   **Credential Management:**
    *   Securely manages Firebase Admin SDK credentials using a `.env` file at the project root.
    *   An example file (`.env.example`) is provided to guide the user.
    *   The dashboard page includes robust error handling to display a clear message if credentials are missing or incorrect, preventing application crashes.

### Design & Layout

*   **Layout:** A single-column layout (`src/layouts/Layout.astro`) is used for all pages, providing a consistent header and background.
*   **Components:**
    *   Uses a "card" component style for displaying information blocks.
    *   Basic styling for form elements (inputs, buttons).
*   **Color Palette:**
    *   Primary: A strong, motivating color for titles and key actions.
    *   Secondary: A complementary color for subheadings.
    *   Background: A clean, neutral background.

## 3. Current Plan: Stabilize User Fetching (Completed)

This section outlines the steps taken to resolve the recent development issues.

*   **Goal:** Create a stable and secure method to display registered Firebase users on the dashboard.
*   **Initial Approach (Failed):** Create a client-side `fetch` call to a dedicated API route (`/api/users`).
    *   **Problem:** This approach led to a series of critical, unrecoverable server crashes due to incorrect handling of Firebase Admin SDK initialization and credential file access. The attempts to fix it resulted in corrupted files and a stuck development server.
*   **Final, Stable Solution (Implemented):**
    1.  **Deleted API Route:** The problematic `/src/pages/api/users.ts` file was removed entirely.
    2.  **Server-Side Fetching:** The logic to fetch users was moved directly into the `src/pages/dashboard.astro` frontmatter. This leverages Astro's core server-side rendering capabilities.
    3.  **Secure Credential Loading:** The page now securely loads credentials from a `.env` file, with clear error messages displayed on the page (not in the console) if the file is missing or incorrect.
    4.  **Result:** This approach is more robust, secure, and aligns with Astro's best practices. It has resolved the crashing issue permanently.

## 4. Next Steps

With the core user data functionality now stable, the next step is to build out the features of the Dhaka Health Club application.