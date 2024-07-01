/* theme.ts */
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
	initialColorMode: "light",
	useSystemColorMode: false,
};

const colors = {
	brand: {
		50: "#e0f7ec", // Light Green
		100: "#b3e7c6", // Light Green
		200: "#80d79f", // Light Green
		300: "#4dc778", // Light Green
		400: "#1ab751", // Green (primary)
		500: "#12973b", // Green (dark)
		600: "#0e7430", // Darker Green
		700: "#095225", // Dark Green
		800: "#05311a", // Dark Green
		900: "#01120e", // Very Dark Green
	},
	black: "#000000", // Black
	white: "#ffffff", // White
};

const theme = extendTheme({
	colors,
	fonts: {
		heading: "var(--font-poppins), sans-serif",
		body: `var(--font-poppins), 'Raleway', sans-serif`,
	},
	components: {
		Button: {
			baseStyle: {
				fontWeight: "bold",
			},
			sizes: {
				md: {
					h: "48px",
					fontSize: "lg",
					px: "32px",
				},
			},
			variants: {
				solid: {
					bg: "brand.200",
					color: "white",
					_hover: {
						bg: "brand.400",
					},
				},
				mobileNav: {
					color: "black",
				},
				linkNav: {
					position: "relative",
					color: "white",
					_hover: {
						textDecoration: "none",
						_after: {
							width: "100%",
						},
					},
					_after: {
						content: '""',
						position: "absolute",
						width: "0",
						height: "2px",
						backgroundColor: "white",
						bottom: "0",
						left: "50%",
						transform: "translateX(-50%)",
						transition: "width 0.3s ease-out",
					},
				},
			},
		},
		Heading: {
			baseStyle: {
				color: "black",
			},
		},
		Text: {
			baseStyle: {
				color: "black",
			},
		},
	},
});

export default theme;
