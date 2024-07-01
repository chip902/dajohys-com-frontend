import { Box } from "@chakra-ui/react";

const HomeHero = () => {
	return (
		<Box position="relative" height="60vh">
			<Box
				bgImage="url('/home_hero.webp')"
				bgRepeat="no-repeat"
				bgSize="cover"
				top="0"
				right="0"
				bottom="0"
				left="0"
				zIndex="1"
				position="relative"
				width="100%"
				height="100%"
			/>
		</Box>
	);
};

export default HomeHero;
