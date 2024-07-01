import Hero from "./components/Hero";
import Spotlight from "./components/Spotlight";
import HomeSubhero from "./components/HomeSubhero";

export default function Home() {
	const spotlight1 =
		"Experience the highest standards of cleanliness with our comprehensive range of services. From meticulous house cleaning that keeps your home spotless and inviting to professional commercial cleaning that maintains a pristine work environment, we’ve got you covered. Our expert team ensures streak-free windows that let in more light, deep carpet cleaning that revitalizes your floors, and thorough move-in/move-out cleaning that makes transitions seamless. We also specialize in post-construction clean-up, clearing all dust and debris to leave your space safe and tidy, and powerful steam cleaning that sanitizes and refreshes surfaces, eliminating dirt and allergens. Contact us today to discover the difference our professional cleaning services can make, and enjoy a revitalized and welcoming space like never before!";
	const spotlight2 =
		"We are driven by your satisfaction, providing a comprehensive range of cleaning services tailored to meet your needs. Our dedicated team delivers meticulous house cleaning, ensuring your home is always spotless and welcoming. For businesses, we offer professional commercial cleaning that maintains a pristine and productive work environment. Enjoy streak-free windows that brighten your space, deep carpet cleaning that restores your floors, and thorough move-in/move-out cleaning for seamless transitions. Post-construction clean-up is our specialty, clearing all dust and debris to leave your property safe and tidy. Additionally, our powerful steam cleaning services sanitize and refresh surfaces, eliminating dirt and allergens. Your satisfaction is our priority, and we strive to exceed your expectations with every service. Contact us today to experience unparalleled cleanliness and a revitalized space!";
	return (
		<>
			<Hero imageAddress="url('/home_hero.webp')" />
			<HomeSubhero />
			<Spotlight title="Professional Cleaning" description={spotlight1} image="/pro_cleaning.jpg" link="/services" first="image" />
			<Spotlight title="Family Run Business" description={spotlight2} image="/team.jpg" link="/about" first="text" />
		</>
	);
}
