"use client";

import Image from "next/image";
import ScrambleText from "../Global/ScrambleText";
import Link from "../Global/Link";
import { useTheme } from "@/context/ThemeContext";
import { getThemeColors } from "@/utils/themeColors";

const Intro = () => {
	const { theme } = useTheme();
	const colors = getThemeColors(theme);
	return (
		<div className="flex flex-col-reverse sm:flex-row gap-6 sm:gap-8 items-start max-w-5xl">
			<div className="space-y-6 flex-1">
				<h1 className={`font-serif2 text-3xl sm:text-5xl leading-tight ${colors.text}`}>hi, i&apos;m nikhil.</h1>
				<ScrambleText
					text="biomechanical engineering & computer science @ Stanford, building wearable neurotechnology at the intersection of bioengineering, hardware, and machine learning."
					settings={{ speed: 0.5 }}
					className="text-base sm:text-lg"
					replayOn={false}
				/>
				<div className="pt-4 space-y-2">
					<p className={colors.textMutedAlt}>contact</p>
					<div className="flex flex-wrap gap-x-3 gap-y-2">
						<Link text="email" href="mailto:krishnaswamynikhil@gmail.com" />
						<Link text="resume" href="/resume.pdf" />
						<Link text="github" href="https://github.com/" />
						<Link text="linkedin" href="https://linkedin.com/" />
						<Link text="photography" href="/photography" />
					</div>
				</div>
			</div>
			<div className="sm:flex-shrink-0 inline-block overflow-hidden rounded-lg">
				<Image
					src="/profile.jpg"
					alt="Nikhil Krishnaswamy"
					height={280}
					width={210}
					quality={90}
					priority
					itemProp="image"
					className="rounded-lg transition-transform duration-300 hover:scale-[1.03]"
				/>
			</div>
		</div>
	);
};

export default Intro;
