"use client";
import { Box, Heading, Text, Avatar, Icon } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const TestimonialCarousel = () => {
	const testimonials = [
		{
			name: "William Logan",
			role: "Past Client",
			testimonial:
				"I met John Keith Doherty on the street outside my house in Hastings-on-Hudson while he was examining the buildings along our street, Old Broadway. He said he had some theories about the history of our neighborhood and was sure that my house at 532 once belonged to Peter Post and was formerly the Peter Post Tavern during the Revolutionary War. He asked me if I was interested in sponsoring him to do some more research and I readily agreed. \n\nA few weeks later he produced a detailed report complete with copies of the original deed from 1785 in which Peter Post purchased from the Committee of Forfeiture 286 acres of property that once belonged to the Loyalist Phillips, and which had become a large part of Hastings. The report also included detailed histories of six previous owners, one of whom was George Baker from 1934, a cabinet maker, undertaker and the third mayor of Hastings. I was fascinated and glad I had encouraged Keith in his work. \n\nKeith is also an excellent lecturer and gave a talk in my front yard to 50 guest about the history of my property. He is also a trustee of the Hastings Historical Society and a member of Revolutionary Hastings, a committee dedicated to uncovering its revolutionary war history, especially the Battle of Edgars' Lane. I would heartily recommend him as a dedicated researcher, original thinker and an excellent writer.",
		},
		{
			name: "Caity Scanlon Korn",
			role: "Past Client",
			testimonial:
				"We had the pleasure of working closely with Keith, as we delved into the long and rich history of our unique and historical Hastings-on-Hudson home. Keith's passion for the subject is palpable, and his extensive knowledge not only of this town, but of historical architecture and building brought the past to life again. His task was to find as close to accurate history as possible for our small stone cottage, as the history we had was a bit unclear in some areas. John's background in research not only unearthed fascinating details about the property but also added depth and authenticity to the overall historical narrative.\n\nKeith was collaborative and inquisitive of our home and made the entire process enjoyable. His dedication to preserving and sharing the heritage of our river town shines through and is such an asset to anyone fortunate enough to engage with him as a local historian",
		},
		{
			name: "Yaron Cohen",
			role: "Lic. Real Estate Broker\nRivertown Rose, Inc",
			testimonial:
				"Thank you Keith for researching and preparing the historical snapshot of my home! The piece enhances the value of my property as it sheds light on the humanity engrained in the place we love!",
		},
	];

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 10000,
	};

	return (
		<Box bg="brand.900" py={20}>
			<Box maxW="7xl" mx="auto" px={{ base: 4, lg: 8 }}>
				<Heading as="h2" textAlign="center" color="white" mb={10}>
					Some of the clients we have worked with
				</Heading>
				<Slider {...settings}>
					{testimonials.map((testimonial, index) => (
						<Box key={index} textAlign="center">
							<Icon as={ImQuotesLeft} color="white" fontSize="4xl" mb={4} />
							<Text whiteSpace="pre-line" color="white" fontSize="xl" mb={8}>
								{testimonial.testimonial}
							</Text>
							<Avatar name={testimonial.name} size="xl" mb={4} mx="auto" bg="gray.300" />
							<Text color="white" fontWeight="bold" mb={1}>
								{testimonial.name}
							</Text>
							<Text color="gray.400">{testimonial.role}</Text>
							<Icon as={ImQuotesRight} color="white" fontSize="4xl" mb={4} />
						</Box>
					))}
				</Slider>
			</Box>
		</Box>
	);
};

export default TestimonialCarousel;
