# Project Blueprint

## Overview

This document outlines the project structure, design, and features of the Dhaka Health Club application.

## Vision v2.4: Dynamic Navigation & Logout

**Objective:** To enhance user navigation and account management by implementing a dynamic header that displays context-aware links and a prominent logout button.

*   **Dynamic Header:** The `Header.astro` component now uses client-side JavaScript to check the user's authentication status with Firebase.
*   **Conditional Navigation:**
    *   **Logged-Out Users:** See links for "Home," "Login," and "Register."
    *   **Logged-In Users:** See links for "Home," "Dashboard," "Profile," and a "Logout" button.
*   **Logout Functionality:** The "Logout" button securely signs the user out using the Firebase `logOut()` function and redirects them to the login page for a clear and secure session termination.

---

## Previous Versions

### Vision v2.3: Professional Rebranding & Style Overhaul

**Objective:** To establish a strong, professional brand identity and a cohesive, modern design system for the Dhaka Health Club platform. This overhaul replaces the previous abstract styles with a clean, trustworthy, and inviting "health and wellness" theme.

*   **Branding:** Replaced all instances of "DHC" and "DHC-Green" with the full "Dhaka Health Club" name to improve brand clarity and professionalism.
*   **New Color Palette:** Introduced a sophisticated and harmonious color palette featuring a calming primary green (`#2E7D32`), a vibrant accent yellow (`#FFC107`), and clean neutrals for text and backgrounds.
*   **Enhanced Typography:** Imported and applied the "Poppins" font from Google Fonts to ensure a modern, elegant, and highly readable interface.
*   **Refined Component Styles:** Completely redesigned buttons and cards to be more polished and interactive.
    *   **Buttons:** Now feature subtle gradients, improved hover effects, and consistent sizing for a clear call-to-action.
    *   **Cards:** Redesigned with soft, deep drop shadows to "lift" off the page, rounded corners, and clean backgrounds.
*   **Improved Layout & Spacing:** Adjusted the global spacing and background colors (`bg-gray-100`, `bg-surface`) to create a cleaner, more breathable, and professional layout.
*   **Hero Section Refactor:** The hero section was redesigned to be more visually striking. The layout was changed from a two-column design to a single, centered column, giving more prominence to both the hero image and the main headline.

### Vision v2.2: Modern & Vibrant Visual Refresh

**Objective:** To execute a visual refresh that aligned the Dhaka Health Club platform with contemporary design trends, making it more dynamic and visually engaging.

*   **Vibrant Color Palette:** Introduced a new, energetic color palette with gradients to create a modern feel, moving away from the corporate blue.
*   **Enhanced Typography:** Refined typography with more expressive font weights and sizes to create a clearer visual hierarchy.
*   **Modern Graphics & Iconography:** Replaced the static hero image with a dynamic, abstract gradient graphic and introduced icons to the "Our Mission" section.
*   **Polished UI Elements:** Updated button and card styles with more depth, using gradients and refined shadows.

### Vision v2.1: Dynamic & Creative Enhancements

**Objective:** To elevate the user experience by injecting a new layer of creativity and interactivity into the Dhaka Health Club platform.

*   **Animate on Scroll:** Implemented subtle fade-in and slide-in animations to sections on the homepage to create a more engaging experience as users scroll.
*   **Interactive Card Effects:** Added a "glow" and "lift" effect to the cards on the homepage to make them feel more interactive and responsive.
*   **Background Texture:** Applied a subtle noise texture to the background to give the site a more premium, tactile feel.

### v2.0: The Dhaka Health Club Community Platform

**Objective:** To transform the website from a business-oriented service into a vibrant community platform focused on social networking, health consciousness, and societal betterment. The "green" theme represents health, growth, and vitality.

*   **Core Pillars:**
    *   **Social Connection:** Fostering a welcoming environment for users to connect, form groups, and build relationships.
    *   **Holistic Health:** Providing resources, events, and discussions around physical and mental well-being.
    *   **Societal Betterment:** Empowering members to collaborate on positive social initiatives.
*   **Target Audience:** Individuals seeking a supportive community to improve their well-being and make a positive impact.

### Community Values (v1.5)

*   **Objective:** Establish and display the core community values.
*   **Code of Conduct:**
    *   Created a `CODE_OF_CONDUCT.md` file to define the community standards, inspired by the Contributor Covenant.
*   **Core Values Section:**
    *   Updated the "Core Values" section on the homepage (`index.astro`) to reflect the principles of the Code of Conduct.
    *   The new values are: "Be Welcoming," "Be Respectful," and "Be Kind."

### User Authentication (v1.4)

*   **Objective:** Implement a complete user authentication flow using Firebase Authentication.
*   **Firebase Setup:**
    *   Configured Firebase SDK in `src/firebase/client.ts` with project credentials.
*   **Authentication Logic:**
    *   Created `src/firebase/auth.ts` to handle user interactions with Firebase.
    *   Implemented `signUp`, `logIn`, and `logOut` functions.
*   **Registration & Login:**
    *   Added client-side scripts to `src/pages/register.astro` and `src/pages/login.astro` to handle form submissions.
    *   Users are redirected to the `/dashboard` page upon successful registration or login.
*   **Protected Routes:**
    *   Added scripts to `src/pages/dashboard.astro` and `src/pages/profile.astro` to check for an active user session.
    *   Unauthenticated users are automatically redirected to the `/login` page.
*   **User Profile & Logout:**
    *   The `src/pages/profile.astro` page now displays the current user's information (email and display name).
    *   Added a "Logout" button that signs the user out and redirects them to the login page.

### Eco-Tech Redesign (v1.3)

*   **Objective:** Implemented a new design with a lighter, cleaner, and more modern "eco-tech" feel. This design prioritizes clarity, professionalism, and a fresh aesthetic.
*   **Color Palette:** Introduced a new color palette with fresh greens, clean whites, and professional blues.
*   **Background:** Changed the background to a light, clean, and modern theme.
*   **UI Elements:**
    *   **Buttons:** Redesigned with solid, accessible colors and clear hover states.
    *   **Cards:** Use a clean, light theme with subtle shadows for a professional look.
    *   **Text:** Ensured high contrast and readability with a dark, professional font color.
*   **Graphics:** Replaced the previous magical graphics with clean, nature-inspired SVG illustrations.
*   **Layout:** Adjusted spacing and layout to create a balanced, modern, and user-friendly interface.

### Mobile Responsiveness (v1.1)

*   **Global:**
    *   Implemented a responsive header with a hamburger menu for improved navigation on mobile devices.
*   **Homepage:**
    *   Adjusted font sizes, padding, and layout of the hero section and subsequent content for better readability on smaller screens.
*   **Login & Register Pages:**
    *   Modified the layout to be a single column on mobile devices, with the image hidden to prioritize form accessibility.
    *   Added padding to ensure the forms are not against the screen edges.
*   **Dashboard Page:**
    *   Adjusted the grid layout of the stats section to be a two-column layout on mobile.
    *   Ensured other sections stack vertically for a better mobile viewing experience.
*   **Profile Page:**
    *   Updated the profile header to stack vertically on mobile.
    *   Adjusted padding and form layout to be more mobile-friendly.

### Initial Setup (v1.0)

*   **Framework:** Astro.js
*   **Styling:** Tailwind CSS
*   **Components:** Basic Header and Footer
*   **Pages:** index, login, register, dashboard, profile
*   **Authentication:** Basic Firebase integration
