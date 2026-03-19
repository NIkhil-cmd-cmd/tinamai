import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Inter } from "next/font/google";
import CodeBackdrop from "@/components/Global/CodeBackdrop";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const title = "Nikhil Krishnaswamy";
const description = "Incoming Stanford freshman building wearable neurotechnology across bioengineering, hardware, and machine learning.";

export const metadata: Metadata = {
	title: {
		default: title,
		template: `%s | ${title}`,
	},
	description: description,
	keywords: ["nikhil krishnaswamy", "nikhil", "stanford", "incoming freshman", "bioengineering", "biomechanical engineering", "computer science", "symbolic systems", "eeg", "fnirs", "hardware", "machine learning"],
	authors: [{ name: "Nikhil Krishnaswamy" }],
	creator: "Nikhil Krishnaswamy",
	publisher: "Nikhil Krishnaswamy",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	openGraph: {
		title: title,
		description: description,
		siteName: title,
		type: "website",
		locale: "en_US",
		images: [
			{
				url: "/opengraph-image.png",
				width: 1200,
				height: 630,
				alt: "Nikhil Krishnaswamy",
				type: "image/png",
			},
		],
		url: "https://tinabmai.com",
	},
	twitter: {
		title: title,
		description: description,
		images: [
			{
				url: "/twitter-image.png",
				width: 1200,
				height: 630,
				alt: "Nikhil Krishnaswamy",
				type: "image/png",
			},
		],
		card: "summary_large_image",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	icons: {
		icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
		apple: [{ url: "/apple-icon.png", type: "image/png" }],
	},
	metadataBase: new URL("https://tinabmai.com"),
	alternates: {
		canonical: "https://tinabmai.com",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<CodeBackdrop />
				<div className="relative z-30">{children}</div>
				<Analytics />
			</body>
		</html>
	);
}
