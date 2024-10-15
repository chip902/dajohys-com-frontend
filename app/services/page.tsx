"use client";
import { Box, Grid, List, ListIcon, ListItem } from "@chakra-ui/react";
import React from "react";
import { MdCheckCircle } from "react-icons/md";
import Hero from "../components/Hero";
import { motion } from "framer-motion";

const services = [
	"Our signature Deep Clean",
	"Move In / Move Out Clean",
	"Power Washing",
	"Single Family Home Cleaning",
	"Commercial Space Cleaning",
	"Apartment / Condo Cleaning",
	"Post-construction Cleaning",
	"Window Cleaning",
	"Carpet Cleaning",
	"Upholstery Cleaning",
	"Garage Cleaning",
	"Basement Cleaning",
	"Vehicle Cleaning",
	"Soft Washing",
	"Steam Cleaning",
	"Chandelier Cleaning",
	"Weekly Services",
	"Bi-weekly Services",
	"Monthly Services",
	"One-time Service",
];

const MotionBox = motion.div;

const ServicesPage = () => {
	return (
		<>
			<Hero imageAddress="url('/clean_room.png')" />
			<Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6} p={20}>
				{services.map((service, index) => (
					<MotionBox key={index} initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: index * 0.1 }}>
						<List spacing={3}>
							<ListItem>
								<ListIcon as={MdCheckCircle} color="green.500" />
								{service}
							</ListItem>
						</List>
					</MotionBox>
				))}
			</Grid>
		</>
	);
};

export default ServicesPage;
