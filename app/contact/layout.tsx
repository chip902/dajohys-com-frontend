import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
	title: "Contact Us",
	description:
		"We would love to hear from you! Whether you have a question about our services, pricing, need a quote, or anything else, our team is ready to answer all your questions.",
};

interface LayoutProps {
	children: ReactNode;
}

const RootLayout = ({ children }: LayoutProps) => {
	return <>{children}</>;
};
export default RootLayout;
