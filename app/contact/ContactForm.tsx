"use client";
import { useState } from "react";
import axios from "axios";
import { useToast, Button, FormControl, FormLabel, Input, Textarea, VStack } from "@chakra-ui/react";

const ContactForm = () => {
	const toast = useToast();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const res = await axios.post("/api/send-email", {
				body: {
					to: "DaJohys Cleaning Inc. <dajohys@gmail.com>",
					from: "DaJohys Cleaning Inc. <no-reply@dajohys.com>",
					replyTo: `${formData.name} <${formData.email}>`,
					subject: `Website Form Submission from ${formData.name || "Website Visitor"}`,
					text: `From: ${formData.name} <${formData.email}>\n\n${formData.message}`,
					html: `<p>From: <strong>${formData.name}</strong> (${formData.email})</p><p>${formData.message}</p>`,
				},
			});

			if (res.status !== 200 && res.status !== 202) {
				toast({
					title: "Message send failed.",
					description: "There was a problem and your message was not set.",
					status: "error",
					duration: 5000,
					isClosable: true,
				});
			} else {
				toast({
					title: "Message sent!",
					description: "Thank you for your note!  I'll be in touch shortly...",
					status: "success",
					duration: 5000,
					isClosable: true,
				});
				setFormData({
					name: "",
					email: "",
					message: "",
				});
			}
		} catch (error) {
			toast({
				title: "Message send failed.",
				description: "There was a problem and your message was not set",
				status: "error",
				duration: 5000,
				isClosable: true,
			});
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<VStack spacing={4}>
				<FormControl id="name" isRequired>
					<FormLabel color="brand.300">Name</FormLabel>
					<Input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" />
				</FormControl>
				<FormControl id="email" isRequired>
					<FormLabel color="brand.300">Email</FormLabel>
					<Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" />
				</FormControl>
				<FormControl id="message" isRequired>
					<FormLabel color="brand.300">Message</FormLabel>
					<Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" />
				</FormControl>
				<Button type="submit" variant="outline" size="lg" mt={4} color="brand.300">
					Send Message
				</Button>
			</VStack>
		</form>
	);
};

export default ContactForm;
