module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary': '#00C853',      // A vibrant, energetic green
        'primary-dark': '#00A746', // A slightly darker green for gradients
        'secondary': '#69F0AE',    // A light, almost ethereal teal
        'accent': '#FFD600',       // A rich, magical gold
        'light': '#E0E0E0',        // A very light gray for text and highlights
        'dark': '#121212',         // A deep, dark background color
        'dark-light': '#1E1E1E',   // A slightly lighter dark for UI elements
      },
    },
  },
  plugins: [],
};
