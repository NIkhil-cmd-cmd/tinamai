export const generateStructuredData = () => {
	return {
		"@context": "https://schema.org",
		"@type": "Person",
		name: "Nikhil Krishnaswamy",
		url: "https://tinabmai.com",
		jobTitle: "Incoming Stanford Freshman",
		description: "Nikhil Krishnaswamy is an incoming Stanford freshman building wearable neurotechnology at the intersection of bioengineering and machine learning.",
		image: {
			"@type": "ImageObject",
			url: "https://tinabmai.com/profile.jpg",
			width: "135",
			height: "180",
			caption: "Nikhil Krishnaswamy",
		},
	};
};
