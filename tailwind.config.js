/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		colors: {
			// Configure your color palette here
			white: '#ffffff',
			black: '#000000',
			primary: '#1e3a8a',
			secondary: '#2f0c70',
			accent1: '#1c1917',
			accent2: '#292524',
		},
		extend: {},
	},
	plugins: [],
};
