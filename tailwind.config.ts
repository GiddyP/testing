import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			screens: {
				xxs: "320px",
				xs: "400px",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			fontFamily: {
				outfit: ["Outfit", "sans-serif"],
				// vujahday: ["Vujahday Script", "cursive"],
			},
			colors: {
				// Add your custom colors here
				primary: {
					100: "#4CAB2B",
					200: "#3F4FD7",
					300: "#487DD8",
					400: "#5767EF",
					500: "#A7AFF2",
					600: "#0C1929",
					700: "#D6E5FF",
				},

				black: {
					100: "#000000",
					200: "#282828",
					300: "#000C2D",
					400: "#030602",
					500: "#43474C",
				},

				bg: {
					100: "#525456",
					200: "#FFFFFE",
					300: "#D9D9D9",
					400: "#D6E5FF",
					500: "#828282",
					600: "#5A5A5A",
					700: "#505050",
					800: "#263238",
					900: "#DCDCDC",
				},

				bg2: {
					100: "#C4C4C4",
					200: "#FFFDFD",
					300: "#ECEFFE",
					400: "#BEBEBE",
					500: "#BDF4C6",
					600: "#C3FDE1",
					700: "#F8ADA7",
					800: "#F5DFB9",
					900: "#91378E",
				},
				bg3: {
					100: "#FFD2FE",
					200: "#B6F6FF",
					300: "#D3E1F3",
				},

				secondary: {
					100: "#0E9CA5",
					200: "#EBEBEB",
					300: "#11993787",
					400: "#119937",
					500: "#ECECEC",
					600: "#F5F5F5",
					700: "#00000052",
					800: "#C4C4C433",
					900: "#CCC9E8",
				},

				danger: {
					100: "#E01300",
				},
				blue: {
					100: "#487DD8",
					200: "#1655C1",
					300: "#9CBEF9",
					400: "#123C84",
					500: "#BFD2F4",
				},

				// Add more colors as needed
			},
			fontSize: {
				xxs: "10px",
				mxs: "8px",
			},
		},
	},
	plugins: [],
};
export default config;
