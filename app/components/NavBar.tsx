"use client";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, IconButton, Image, Stack, useDisclosure } from "@chakra-ui/react";
import NextLink from "next/link";
import useResponsive from "../hooks/useResponsive";

const NavBar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	if (!useResponsive()) {
		return (
			<Box as="nav" bg="brand.500" color="white" py={4} px={6}>
				<Flex align="center" justify="space-between">
					<NextLink href="/" passHref>
						<Flex align="center">
							<Image src="/dajohys-logo.jpg" alt="Logo" boxSize="60px" mr={4} />
							<Box fontWeight="bold" fontSize="lg">
								Dajohys Cleaning Inc.
							</Box>
						</Flex>
					</NextLink>
					<Flex align="center">
						<NextLink href="/" passHref>
							<Button as="a" variant="linkNav" mx={3}>
								Home
							</Button>
						</NextLink>
						<NextLink href="/services" passHref>
							<Button as="a" variant="linkNav" mx={3}>
								Services
							</Button>
						</NextLink>
						<NextLink href="/about" passHref>
							<Button as="a" variant="linkNav" mx={3}>
								About
							</Button>
						</NextLink>
						<NextLink href="/contact" passHref>
							<Button as="a" variant="linkNav" mx={3}>
								Contact
							</Button>
						</NextLink>
					</Flex>
				</Flex>
			</Box>
		);
	} else {
		return (
			<Box as="nav" bg="brand.500" color="white" py={4} px={6}>
				<Flex align="center" justify="space-between">
					<NextLink href="/" passHref>
						<Flex align="center">
							<Image src="/dajohys-logo.jpg" alt="Logo" boxSize="40px" mr={4} />
							<Box fontWeight="bold" fontSize="lg">
								Dajohys Cleaning Inc.
							</Box>
						</Flex>
					</NextLink>
					<IconButton aria-label="Open menu" icon={<HamburgerIcon />} variant="solid" onClick={onOpen} />
				</Flex>
				<Drawer isOpen={isOpen} placement="left" onClose={onClose}>
					<DrawerOverlay />
					<DrawerContent>
						<DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
						<DrawerBody>
							<Stack spacing={4}>
								<NextLink href="/" passHref>
									<Button variant="mobileNav" onClick={onClose}>
										Home
									</Button>
								</NextLink>
								<NextLink href="/services" passHref>
									<Button variant="mobileNav" onClick={onClose}>
										Services
									</Button>
								</NextLink>
								<NextLink href="/about" passHref>
									<Button variant="mobileNav" onClick={onClose}>
										About
									</Button>
								</NextLink>
								<NextLink href="/contact" passHref>
									<Button variant="mobileNav" onClick={onClose}>
										Contact
									</Button>
								</NextLink>
							</Stack>
						</DrawerBody>
					</DrawerContent>
				</Drawer>
			</Box>
		);
	}
};

export default NavBar;
