import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
	title: "Services",
	description: "DaJohys Cleaning Inc. Cleaning Services are catered to whatever your needs are.  Let us know what you need and we'll put your mind at ease.",
};

interface LayoutProps {
	children: ReactNode;
}

const RootLayout = ({ children }: LayoutProps) => {
	return <>{children}</>;
};
export default RootLayout;
