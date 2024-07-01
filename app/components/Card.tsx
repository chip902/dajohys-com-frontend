import { Box, Text, Heading, Center } from "@chakra-ui/react";
import { Card as Cards } from "../types/Card";
import React from "react";

const Card = ({ icon, title, description }: Cards) => {
	return (
		<Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" bg="white" shadow="lg" _hover={{ shadow: "2xl" }} transition="all 0.3s">
			<Box alignContent="center" p="6">
				<Center>{icon}</Center>
				<Heading as="h4" mb="2">
					{title}
				</Heading>
				<Text color="gray.700">{description}</Text>
			</Box>
		</Box>
	);
};

export default Card;
