const { fontFamily } = require('tailwindcss/defaultTheme');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...fontFamily.sans]
			}
		}
	},

	darkMode: 'class',

	plugins: [require('@tailwindcss/forms')]
};

module.exports = config;
