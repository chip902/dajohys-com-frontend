import { Box } from "@chakra-ui/react";

interface Props {
	imageAddress: string;
}

const Hero = ({ imageAddress }: Props) => {
	return (
		<Box position="relative" height="60vh">
			<Box
				bgImage={imageAddress}
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

export default Hero;
