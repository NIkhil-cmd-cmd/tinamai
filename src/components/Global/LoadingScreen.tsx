"use client";

import { useEffect, useState } from "react";

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
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950 transition-opacity duration-500 pointer-events-none">
			<div className="text-center">
				<pre className="text-green-400 font-mono text-sm mb-4 animate-pulse">
					{asciiFrames[frame]}
				</pre>
				<pre className="text-green-400 font-mono text-xs whitespace-pre">
					{`
  ╔═══════════════════╗
  ║   n1kh1l   ░▒▓█  ║
  ╚═══════════════════╝
          `}
				</pre>
				<div className="mt-4 text-green-400 font-mono text-xs flex gap-1 justify-center">
					<div className="w-1 h-1 bg-green-400 animate-bounce"></div>
					<div className="w-1 h-1 bg-green-400 animate-bounce" style={{ animationDelay: "0.1s" }}></div>
					<div className="w-1 h-1 bg-green-400 animate-bounce" style={{ animationDelay: "0.2s" }}></div>
				</div>
			</div>
		</div>
	);
}
