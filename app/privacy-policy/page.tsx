import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

const PrivacyPolicyPage = () => {
	return (
		<Box py={20} px={6} bg="gray.50">
			<VStack spacing={6} align="flex-start" maxW="4xl" mx="auto">
				<Heading as="h1" size="2xl" color="green.700">
					Privacy Policy
				</Heading>
				<Text>
					<strong>Who we are</strong>
					<br />
					Our website address is:{" "}
					<a href="https://dajohys.com" style={{ color: "blue" }}>
						https://dajohys.com
					</a>
					.
				</Text>
				<Box>
					<Heading as="h2" size="lg" color="green.700" mt={4}>
						What personal data we collect and why we collect it
					</Heading>
					<VStack spacing={4} align="flex-start">
						<Box>
							<Heading as="h3" size="md" color="green.700">
								Comments
							</Heading>
							<Text>
								When visitors leave comments on the site, we collect the data shown in the comments form, and also the visitor’s IP address and
								browser user agent string to help spam detection. An anonymized string created from your email address (also called a hash) may
								be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here:{" "}
								<a href="https://automattic.com/privacy/" style={{ color: "blue" }}>
									https://automattic.com/privacy/
								</a>
								. After approval of your comment, your profile picture is visible to the public in the context of your comment.
							</Text>
						</Box>
						<Box>
							<Heading as="h3" size="md" color="green.700">
								Media
							</Heading>
							<Text>
								If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors
								to the website can download and extract any location data from images on the website.
							</Text>
						</Box>
						<Box>
							<Heading as="h3" size="md" color="green.700">
								Contact forms
							</Heading>
						</Box>
						<Box>
							<Heading as="h3" size="md" color="green.700">
								Cookies
							</Heading>
							<Text>
								If you leave a comment on our site, you may opt-in to saving your name, email address, and website in cookies. These are for
								your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last
								for one year. If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This
								cookie contains no personal data and is discarded when you close your browser. When you log in, we will also set up several
								cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options
								cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the
								login cookies will be removed. If you edit or publish an article, an additional cookie will be saved in your browser. This
								cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.
							</Text>
						</Box>
					</VStack>
				</Box>
				<Box>
					<Heading as="h2" size="lg" color="green.700" mt={4}>
						Embedded content from other websites
					</Heading>
					<Text>
						Articles on this site may include embedded content (e.g., videos, images, articles, etc.). Embedded content from other websites behaves
						in the exact same way as if the visitor has visited the other website. These websites may collect data about you, use cookies, embed
						additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the
						embedded content if you have an account and are logged in to that website.
					</Text>
				</Box>
				<Box>
					<Heading as="h2" size="lg" color="green.700" mt={4}>
						Analytics
					</Heading>
					<Text>
						Psudeo randomized data of traffic to our site helps us measure performance so that we can make better business decisions. This data is
						collected and sent to Google.
					</Text>
				</Box>
				<Box>
					<Heading as="h2" size="lg" color="green.700" mt={4}>
						Who we share your data with
					</Heading>
					<Text>Google</Text>
				</Box>
				<Box>
					<Heading as="h2" size="lg" color="green.700" mt={4}>
						How long we retain your data
					</Heading>
					<Text>
						If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up
						comments automatically instead of holding them in a moderation queue. For users that register on our website (if any), we also store the
						personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time
						(except they cannot change their username). Website administrators can also see and edit that information.
					</Text>
				</Box>
				<Box>
					<Heading as="h2" size="lg" color="green.700" mt={4}>
						What rights you have over your data
					</Heading>
					<Text>
						If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold
						about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does
						not include any data we are obliged to keep for administrative, legal, or security purposes.
					</Text>
				</Box>
				<Box>
					<Heading as="h2" size="lg" color="green.700" mt={4}>
						Where we send your data
					</Heading>
					<Text>Visitor comments may be checked through an automated spam detection service.</Text>
				</Box>
			</VStack>
		</Box>
	);
};

export default PrivacyPolicyPage;
