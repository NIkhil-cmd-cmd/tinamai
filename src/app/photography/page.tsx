"use client";

import Gallery from "@/components/Photography/Gallery";
import Link from "@/components/Global/Link";
import { motion } from "framer-motion";

const photographyImages = [
	{ src: "/media/photography/11V1.jpg", alt: "Urban Geometry" },
	{ src: "/media/photography/ALONE.jpg", alt: "Solitude" },
	{ src: "/media/photography/GOLDENRED.jpg", alt: "Golden Hour" },
	{ src: "/media/photography/LIGHTSPEED.jpg", alt: "Motion" },
	{ src: "/media/photography/OCULUS.jpeg", alt: "Eye Study" },
	{ src: "/media/photography/SIGNATURE.jpg", alt: "Signature" },
	{ src: "/media/photography/dog.jpg", alt: "Companion" },
	{ src: "/media/photography/ny.jpg", alt: "New York City" },
	{ src: "/media/photography/wheel.jpg", alt: "Circular" },
];

export default function Photography() {
	return (
		<main className="min-h-screen p-8 sm:p-14 bg-slate-950">
			<div className="mx-auto w-full max-w-7xl space-y-12">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="space-y-4"
				>
					<div className="flex items-center justify-between gap-4">
						<div className="space-y-2">
							<h1 className="font-serif2 text-4xl sm:text-5xl leading-tight">photography</h1>
							<p className="body text-slate-400 max-w-2xl">
								canon eos 6d | sony a7c
							</p>
						</div>
						<Link text="← back" href="/" />
					</div>
				</motion.div>

				{/* Divider */}
				<div className="border-t border-slate-800" />

				{/* Gallery */}
				<Gallery images={photographyImages} />
			</div>
		</main>
	);
}
