"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

type GalleryImage = {
	src: string;
	alt: string;
};

interface GalleryProps {
	images: GalleryImage[];
}

export default function Gallery({ images }: GalleryProps) {
	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	return (
		<>
			{/* Main Gallery Grid */}
			<div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
				{images.map((image, idx) => (
					<motion.div
						key={image.src}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: idx * 0.05 }}
						onClick={() => setSelectedImage(image.src)}
						className="group cursor-pointer break-inside-avoid"
					>
						<div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-white/30 transition-all duration-300">
							<Image
								src={image.src}
								alt={image.alt}
								width={400}
								height={500}
								className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
								priority={idx < 3}
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
								<p className="text-white text-sm font-medium">{image.alt}</p>
							</div>
						</div>
					</motion.div>
				))}
			</div>

			{/* Lightbox */}
			{selectedImage && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onClick={() => setSelectedImage(null)}
					className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
				>
					<motion.div
						initial={{ scale: 0.9, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.9, opacity: 0 }}
						onClick={(e) => e.stopPropagation()}
						className="relative max-w-4xl max-h-[90vh] w-full"
					>
						<Image
							src={selectedImage}
							alt="Full size"
							width={1200}
							height={800}
							className="w-full h-auto object-contain rounded-lg"
						/>
						<button
							onClick={() => setSelectedImage(null)}
							className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
							aria-label="Close"
						>
							<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</motion.div>
				</motion.div>
			)}
		</>
	);
}
