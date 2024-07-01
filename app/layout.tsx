import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import { Providers } from "./Providers";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

const popppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "DaJohys Cleaning Inc",
	description: "A family owned business that offers residential and commercial cleaning services",
};

interface LayoutProps {
	children: ReactNode;
}

const RootLayout = ({ children }: LayoutProps) => {
	return (
		<html className={popppins.variable} lang="en">
			<head>{/* Any additional head elements */}</head>
			<body>
				<Providers>
					<NavBar />
					{children}
					<BackToTop />
					<Footer />
				</Providers>
			</body>
		</html>
	);
};

export default RootLayout;
