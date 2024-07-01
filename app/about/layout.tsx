import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
	title: "About Our Team",
	description:
		"DaJohys Cleaning Inc. offers exclusive Cleaning services at affordable prices. We pride ourselves on providing high-quality	service and offer a quality guarantee on all services.",
};
interface LayoutProps {
	children: ReactNode;
}

const RootLayout = ({ children }: LayoutProps) => {
	return <>{children}</>;
};
export default RootLayout;
