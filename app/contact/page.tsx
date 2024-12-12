import { Box, Heading, Text, Flex, VStack, Button, AbsoluteCenter, Divider } from "@chakra-ui/react";
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
				<Box bg="white" p={14} borderRadius="lg" boxShadow="2xl" width="full" maxW="xl">
					<ContactForm />
					<VStack spacing={4}>
						<Box position="relative" padding="10">
							<Divider />
							<AbsoluteCenter bg="white" px="4">
								<Heading>OR</Heading>
							</AbsoluteCenter>
						</Box>
						<Heading size="lg">Give us a Call!</Heading>
						<NextLink href="tel:914-374-6961" passHref legacyBehavior>
							<Button fontSize="2xl" color="brand.500" as="a" flex={1} variant="inline">
								914-374-6961
							</Button>
						</NextLink>
					</VStack>
				</Box>
			</Flex>
		</Box>
	);
};

export default ContactPage;
