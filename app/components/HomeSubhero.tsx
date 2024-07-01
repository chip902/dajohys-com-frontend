import { Box, Center, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Card from "./Card";
import { FaDollarSign } from "react-icons/fa";
import { PiTimerDuotone } from "react-icons/pi";
import { RiMailSendFill } from "react-icons/ri";

const sloganData = [
	{
		title: "Custom Priced Projects",
		description: "No two jobs are alike! After a free in person consultation, we will custom price your job no matter how big or how small.",
		icon: <FaDollarSign size={40} />,
	},
	{
		title: "On Budget and On Time",
		description: "We will work with you and your schedule to make sure we align with your timeline; not the other way around.",
		icon: <PiTimerDuotone size={40} />,
	},
	{
		title: "Fast Work Turnaround",
		description: "Our goal is not only speed, but a job well done. This is why our team is so large.",
		icon: <RiMailSendFill size={40} />,
	},
];

const HomeSubhero = () => {
	return (
		<Box py={20} px={6}>
			<Heading as="h1" textAlign="center" mb={10}>
				Our Promises
			</Heading>
			<Center>
				<SimpleGrid spacingX={20} textAlign="center" columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
					{sloganData.map((project, index) => (
						<Card key={index} icon={project.icon} title={project.title} description={project.description} />
					))}
				</SimpleGrid>
			</Center>
		</Box>
	);
};

export default HomeSubhero;
