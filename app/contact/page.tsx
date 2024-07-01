import { Box, Heading, Text, Flex, VStack, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";
import React from "react";

const ContactPage = () => {
	return (
		<Box py={20} px={6} bg="white" bgSize="cover" bgRepeat="no-repeat" bgAttachment="fixed">
			<Flex justify="center" mb={12}>
				<VStack spacing={4} textAlign="center">
					<Heading as="h1" size="2xl" color="green.700">
						Contact Us
					</Heading>
					<Text fontSize="lg" color="gray.700" maxW="2xl">
						We would love to hear from you! Whether you have a question about our services, pricing, need a quote, or anything else, our team is
						ready to answer all your questions.
					</Text>
				</VStack>
			</Flex>
			<Flex justify="center">
				<Box bg="white" p={8} borderRadius="lg" boxShadow="2xl" width="full" maxW="lg">
					<VStack spacing={4}>
						<FormControl id="name">
							<FormLabel>Your Name</FormLabel>
							<Input type="text" />
						</FormControl>
						<FormControl id="email">
							<FormLabel>Email Address</FormLabel>
							<Input type="email" />
						</FormControl>
						<FormControl id="message">
							<FormLabel>Your Message</FormLabel>
							<Textarea />
						</FormControl>
						<Button colorScheme="green" size="lg" width="full">
							Send Message
						</Button>
					</VStack>
				</Box>
			</Flex>
		</Box>
	);
};

export default ContactPage;
