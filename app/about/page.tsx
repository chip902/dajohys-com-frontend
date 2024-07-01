import { Heading, Text, Box, Flex, VStack } from "@chakra-ui/react";
import React from "react";
import Hero from "../components/Hero";

const AboutPage = () => {
	return (
		<Box py={20} px={6} bg="white" bgSize="cover" bgRepeat="no-repeat" bgAttachment="fixed">
			<Hero imageAddress="url('/car_hero.jpeg')" />
			<Flex justify="center" mt={12}>
				<VStack spacing={4} textAlign="center">
					<Heading as="h1" size="2xl" color="green.700">
						Our Story
					</Heading>
					<Text fontSize="lg" color="gray.700" maxW="2xl">
						DaJohys Cleaning Inc. offers exclusive Cleaning and Handyman services at affordable prices. We pride ourselves on providing high-quality
						service and offer a quality guarantee on all services.
					</Text>
					<Text fontSize="lg" color="gray.700" maxW="2xl">
						Small or large, your request will be met with expert advice, individualized attention, and innovative solutions. Contact us and discover
						all we have to offer. Our staff is looking forward to speaking and working with you.
					</Text>
				</VStack>
			</Flex>
			<Flex justify="center" my={12}>
				<VStack spacing={4} textAlign="center">
					<Heading as="h2" size="xl" color="green.700">
						Why We Are Different
					</Heading>
					<Text fontSize="lg" color="gray.700" maxW="2xl">
						DaJohys Cleaning Inc. is a family-owned business that offers residential, commercial, and handyman services. At DaJohys Cleaning Inc.,
						the customer always comes first, and we constantly strive to exceed your expectations! With our wide range of services, you&apos;re sure
						to find exactly what you&apos;re looking for. We are not a franchise, which gives us the advantage to customize our services to
						accommodate your needs. We offer daily, weekly, bi-weekly, and occasional services depending on your request. We will help you develop a
						plan to suit your needs.
					</Text>
				</VStack>
			</Flex>
		</Box>
	);
};

export default AboutPage;
