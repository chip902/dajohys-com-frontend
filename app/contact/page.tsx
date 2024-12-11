import { Box, Heading, Text, Flex, VStack, FormControl, FormLabel, Input, Textarea, Button, AbsoluteCenter, Divider } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import ContactForm from "./ContactForm";

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
					<ContactForm />
				</Box>
			</Flex>
		</Box>
	);
};

export default ContactPage;
