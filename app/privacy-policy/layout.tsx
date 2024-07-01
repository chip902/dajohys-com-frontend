import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
	title: "Privacy Policy",
	description: "DaJohys Cleaning Inc. cares about your data and your privacy.  Reach out if you have a question about your data.",
};

interface LayoutProps {
	children: ReactNode;
}

const RootLayout = ({ children }: LayoutProps) => {
	return <>{children}</>;
};
export default RootLayout;
