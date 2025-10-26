
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#2E7D32', // A deeper, more professional green
				'secondary': '#66BB6A', // A lighter, friendly green
				'accent': '#FFC107',   // A vibrant, optimistic yellow for accents
				'surface': '#F5F5F5',   // A very light grey for card/section backgrounds
				'text-primary': '#212121', // Dark grey for primary text
				'text-secondary': '#757575', // Lighter grey for secondary text
			},
			fontFamily: {
				'sans': ['Poppins', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
