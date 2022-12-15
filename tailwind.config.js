/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./src/Pages/**/*.{html,js}",
		"./src/Components/**/*.{html,js}",
	],
	theme: {
		extend: {
			colors: {
				"custom-grey": {
					light: "#999999",
					DEFAULT: "#31313a",
					dark: "#26262d",
				},
			},
		},
	},
	plugins: [],
};
