import { Box } from "@chakra-ui/react";

const HomeHero = () => {
	return (
		<Box position="fixed" height="60vh">
			<Box
				bgImage="url('/home_hero.webp')"
				bgPosition="center"
				bgRepeat="no-repeat"
				bgSize="cover"
				bgAttachment="fixed"
				top="0"
				right="0"
				bottom="0"
				left="0"
				opacity="0.75"
				zIndex="-1"
				height="60vh"
				position="relative"
			/>
		</Box>
	);
};

export default HomeHero;
