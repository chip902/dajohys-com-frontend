import { useState, useEffect } from "react";
import styles from "../styles/PhotoSlideShow.module.css";

interface PhotoSlideShowProps {
	width: "full" | "container";
}

const PhotoSlideShow = ({ width }: PhotoSlideShowProps) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const images = ["/images/photo1.jpg", "/images/photo2.jpg", "/images/photo3.jpg"];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className={`${styles.slideShow} ${width === "full" ? styles.fullWidth : styles.containerWidth}`}>
			{images.map((image, index) => (
				<img key={index} src={image} alt={`Slide ${index + 1}`} style={{ display: currentIndex === index ? "block" : "none" }} />
			))}
		</div>
	);
};

export default PhotoSlideShow;
