"use client";
import { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";

const BackToTop = () => {
	const [showButton, setShowButton] = useState(false);

	useEffect(() => {
		const checkScrollTop = () => {
			if (!showButton && window.pageYOffset > 100) {
				setShowButton(true);
			} else if (showButton && window.pageYOffset <= 100) {
				setShowButton(false);
			}
		};

		window.addEventListener("scroll", checkScrollTop);
		return () => {
			window.removeEventListener("scroll", checkScrollTop);
		};
	}, [showButton]);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	if (!showButton) {
		return null;
	}

	return (
		<Button variant="solid" onClick={scrollToTop} position="fixed" bottom="20px" right="20px" zIndex="tooltip" borderRadius="full" size="lg">
			<ChevronUpIcon />
		</Button>
	);
};

export default BackToTop;
