import { Box, Flex, Heading, Text, Button, Image, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { SpotlightProps } from "../types/Spotlight";

const Spotlight = ({ title, description, image, first, link }: SpotlightProps) => {
	if (first === "image") {
		return (
			<Flex bg="brand.100" py={10} px={6} alignItems="center" justifyContent="center">
				<Flex maxW="1200px" width="100%" bg="brand.500" color="white" boxShadow="2xl" borderRadius="md" overflow="hidden">
					<Box flex="1">
						<Image src={image} alt={title} objectFit="cover" width="100%" height="100%" />
					</Box>
					<Box flex="1" p={8}>
						<VStack align="start" spacing={4}>
							<Heading color="white" as="h3" size="lg">
								{title}
							</Heading>
							<Text color="white">{description}</Text>
							<NextLink href={link} passHref>
								<Button mt={5} as="a" size="md" variant="solid">
									Learn More
								</Button>
							</NextLink>
						</VStack>
					</Box>
				</Flex>
			</Flex>
		);
	} else {
		return (
			<Flex bg="brand.100" py={10} px={6} alignItems="center" justifyContent="center">
				<Flex maxW="1200px" width="100%" bg="brand.500" color="white" boxShadow="2xl" borderRadius="md" overflow="hidden">
					<Box flex="1" p={8}>
						<VStack align="start" spacing={4}>
							<Heading color="white" as="h3" size="lg">
								{title}
							</Heading>
							<Text color="white">{description}</Text>
							<NextLink href={link} passHref>
								<Button mt={5} as="a" size="md" variant="solid">
									Learn More
								</Button>
							</NextLink>
						</VStack>
					</Box>
					<Box flex="1">
						<Image src={image} alt={title} objectFit="cover" width="100%" height="100%" />
					</Box>
				</Flex>
			</Flex>
		);
	}
};
export default Spotlight;
