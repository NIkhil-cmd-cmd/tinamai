"use client";

import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { getThemeColors } from "@/utils/themeColors";

const glitchFrames = [
	`
    ╔════╗
    ║ >_ ║
    ╚════╝
  `,
	`
    ╔════╗
    ║ _< ║
    ╚════╝
  `,
	`
    ╔════╗
    ║ <_ ║
    ╚════╝
  `,
];

export default function ASCIIGlitch() {
	const [isHovering, setIsHovering] = useState(false);
	const [frameIndex, setFrameIndex] = useState(0);
	const { theme } = useTheme();
	const colors = getThemeColors(theme);

	const handleHover = () => {
		setIsHovering(true);
		let frame = 0;
		const interval = setInterval(() => {
			frame = (frame + 1) % glitchFrames.length;
			setFrameIndex(frame);
		}, 200);

		setTimeout(() => {
			clearInterval(interval);
			setIsHovering(false);
			setFrameIndex(0);
		}, 1200);
	};

	return (
		<button
			onMouseEnter={handleHover}
			className={`relative p-4 rounded-lg border ${colors.border} ${colors.panelBg} cursor-pointer transition-all hover:scale-105 active:scale-95`}
			title="Glitch art easter egg!"
		>
			<pre
				className={`font-mono text-xs whitespace-pre select-none ${isHovering ? colors.text : colors.textMuted}`}
			>
				{isHovering ? glitchFrames[frameIndex] : `
    ░ ░ ░
    ░ ★ ░
    ░ ░ ░
  `}
			</pre>
		</button>
	);
}
