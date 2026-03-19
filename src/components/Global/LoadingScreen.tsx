"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { getThemeColors } from "@/utils/themeColors";

const asciiFrames = [
	`
  ◜ ◝
  ◟ ◞
    `,
	`
  ◡ ◠
  ◞ ◟
    `,
	`
  ◠ ◡
  ◝ ◜
    `,
	`
  ◢ ◣
  ◤ ◥
    `,
];

export default function LoadingScreen() {
	const [frame, setFrame] = useState(0);
	const [isVisible, setIsVisible] = useState(true);
	const { theme } = useTheme();
	const colors = getThemeColors(theme);

	const getLoadingBgColor = () => {
		switch (theme) {
			case "nord":
				return "bg-black";
			case "light":
				return "bg-white";
			case "dark":
			default:
				return "bg-slate-950";
		}
	};

	const getLoadingTextColor = () => {
		switch (theme) {
			case "nord":
				return "text-green-400";
			case "light":
				return "text-slate-900";
			case "dark":
			default:
				return "text-green-400";
		}
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setFrame((prev) => (prev + 1) % asciiFrames.length);
		}, 150);

		const timer = setTimeout(() => {
			setIsVisible(false);
		}, 2000);

		return () => {
			clearInterval(interval);
			clearTimeout(timer);
		};
	}, []);

	if (!isVisible) return null;

	return (
		<div className={`fixed inset-0 z-50 flex items-center justify-center ${getLoadingBgColor()} transition-opacity duration-500 pointer-events-none`}>
			<div className="text-center">
				<pre className={`${getLoadingTextColor()} font-mono text-sm mb-4 animate-pulse`}>
					{asciiFrames[frame]}
				</pre>
				<pre className={`${getLoadingTextColor()} font-mono text-xs whitespace-pre`}>
					{`
  ╔═══════════════════╗
  ║   n1kh1l   ░▒▓█  ║
  ╚═══════════════════╝
          `}
				</pre>
				<div className={`mt-4 ${getLoadingTextColor()} font-mono text-xs flex gap-1 justify-center`}>
					<div className={`w-1 h-1 ${getLoadingTextColor()} animate-bounce`}></div>
					<div className={`w-1 h-1 ${getLoadingTextColor()} animate-bounce`} style={{ animationDelay: "0.1s" }}></div>
					<div className={`w-1 h-1 ${getLoadingTextColor()} animate-bounce`} style={{ animationDelay: "0.2s" }}></div>
				</div>
			</div>
		</div>
	);
}
