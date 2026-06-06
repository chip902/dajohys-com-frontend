import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://dajohys.com",
			lastModified: new Date(),
			changeFrequency: "daily",
			priority: 0.7,
		},
		{
			url: "https://dajohys.com/about",
			lastModified: new Date(),
			changeFrequency: "daily",
			priority: 0.7,
		},
		{
			url: "https://dajohys.com/services",
			lastModified: new Date(),
			changeFrequency: "daily",
			priority: 0.7,
		},
		{
			url: "https://dajohys.com/contact",
			lastModified: new Date(),
			changeFrequency: "daily",
			priority: 0.7,
		},
		{
			url: "https://dajohys.com/privacy-policy",
			lastModified: new Date(),
			changeFrequency: "daily",
			priority: 0.7,
		},
	];
}
