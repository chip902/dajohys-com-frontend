import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
	return (
		<Box bg="brand.500" p={4} mt={8}>
			<Text color="white" textAlign="center">
				&copy; {new Date().getFullYear()} Dajohys Cleaning Inc.
			</Text>
		</Box>
	);
};

export default Footer;
