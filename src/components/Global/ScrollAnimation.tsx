"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { getThemeColors } from "@/utils/themeColors";

const waveFrames = [
	"~ ~ ~ ~ ~ ~ ~ ~",
	"  ~ ~ ~ ~ ~ ~ ~",
	"~ ~ ~ ~ ~ ~ ~ ~",
	"  ~ ~ ~ ~ ~ ~ ~",
];

export default function ScrollAnimation() {
	const [frameIndex, setFrameIndex] = useState(0);
	const [isVisible, setIsVisible] = useState(false);
	const { theme } = useTheme();
	const colors = getThemeColors(theme);

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			setIsVisible(scrollY > 300);
		};

		window.addEventListener("scroll", handleScroll);

		const interval = setInterval(() => {
			setFrameIndex((prev) => (prev + 1) % waveFrames.length);
		}, 200);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			clearInterval(interval);
		};
	}, []);

	if (!isVisible) return null;

	return (
		<div
			className={`fixed right-8 bottom-32 z-10 font-mono text-xs ${colors.textMuted} transition-opacity duration-300`}
			style={{
				opacity: isVisible ? 0.6 : 0,
			}}
		>
			<pre className="whitespace-pre">{waveFrames[frameIndex]}</pre>
		</div>
	);
}
