# Blueprint: Dhaka Health Club (DHC)

## 1. Project Overview

This project is the "Dhaka Health Club (DHC)," a supportive and collaborative web application for individuals seeking to improve their health and well-being. It is built with Astro.js, a modern web framework for building fast, content-focused websites, and integrates with Firebase for backend services and Cloudinary for image management. The primary goal is to create a fast, highly-performant, and scalable site.

## 2. Implemented Features & Design

This section documents the current state of the application.

### Core Technology

*   **Framework:** Astro.js
*   **Backend:** Firebase (Authentication, Firestore)
*   **Image Management:** Cloudinary
*   **Styling:** Tailwind CSS (via Astro's `@astrojs/tailwind` integration)
*   **Development Environment:** Firebase Studio (formerly Project IDX)

### Features

*   **User Authentication & Registration:**
    *   **Comprehensive Registration (`/register`):** The registration page captures the user's **Full Name**, **Email**, **Phone Number**, **Date of Birth**, **Address**, and an optional **Profile Picture**.
    *   **Login page (`/login`)** using Firebase Authentication (Email/Password).
    *   Client-side authentication state management (`firebase/client.ts` and `firebase/auth.ts`).
    *   Protected routes that redirect to login if the user is not authenticated.
*   **Image Handling (Cloudinary):**
    *   Securely manages Cloudinary credentials using a `.env` file.
    *   A dedicated API endpoint (`/api/upload`) handles image uploads to Cloudinary's cloud storage.
*   **User Profile Management (`/profile`):**
    *   A dedicated page where users can view their complete profile information, fetched from Firestore.
    *   Users can upload or change their profile picture. The new image is uploaded to Cloudinary, and the URL is updated in both Firebase Auth and Firestore.
*   **User Data Storage (Firestore):**
    *   Upon registration, a new document is created in a `users` collection in Firebase Firestore.
    *   This document stores the user's full name, email, phone number, date of birth, address, and `photoURL`, linked to their unique Firebase Auth UID.
    *   **Security Rules:** `firestore.rules` are in place to ensure that users can only read and write their own data.
*   **Dashboard (`/dashboard`):**
    *   Displays a personalized welcome message and summary cards for key metrics.
    *   **Registered Users List:** Fetches and displays a table of all registered users, showing their **Full Name** and **Email Address** from Firestore.
*   **Credential Management:**
    *   Securely manages Firebase and Cloudinary credentials using a `.env` file for server-side operations.

### Design & Layout

*   **Layout:** A consistent single-column layout (`src/layouts/Layout.astro`) with a header and footer is used across all pages.
*   **Components:** Reusable "card" components provide a clean and modern interface for forms and information blocks.
*   **Responsiveness:** The layout is mobile-responsive, ensuring a good user experience on all devices.

## 3. Current Plan: Profile Picture & Dashboard Enhancements (Completed)

This section outlines the steps taken to integrate image uploads and improve the dashboard.

*   **Goal:** Allow users to upload profile pictures and provide administrators with a view of all registered users.
*   **Steps Implemented:**
    1.  **Cloudinary Integration:** Set up the Cloudinary Node.js SDK, configured with credentials stored in a `.env` file.
    2.  **Image Upload API:** Created a serverless API route (`/api/upload`) to handle the logic of uploading images to Cloudinary securely.
    3.  **Profile Page Creation:** Built the `/profile` page, allowing users to view their data and upload a new profile picture, which updates their profile across the application.
    4.  **Registration Enhancement:** Integrated the upload functionality directly into the `/register` page, allowing new users to add a profile picture upon sign-up.
    5.  **Auth Logic Update:** Modified the `signUp` function in `src/firebase/auth.ts` to handle the `photoURL` from Cloudinary and save it to Firebase Auth and Firestore.
    6.  **Dashboard Update:** Replaced the "Recent Activity" feed with a "Users" table that fetches and displays the full name and email of all users from Firestore.

## 4. Next Steps

*   **Edit Profile Information:** Enhance the `/profile` page to allow users to edit their personal information (name, phone, address, etc.).
*   **Implement "My Tasks" Page:** Build out the functionality for the `/tasks` page, allowing users to create, view, and manage their personal health tasks.
*   **Admin Dashboard Features:** Expand the dashboard with more administrative capabilities, such as the ability to view user details or manage content.
*   **Refine Error Handling:** Improve user feedback for API calls and form submissions throughout the application.
