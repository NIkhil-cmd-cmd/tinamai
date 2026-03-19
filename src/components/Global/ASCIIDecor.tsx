"use client";

import { useState, useEffect } from "react";

const asciiArt = {
	network: `
    ◇——◇
    |  |
    ◇——◇
  `,
	pulse: `
    [◯]
    ~~~
  `,
	matrix: `
    ▓░▒░▓
    ░▒▓▒░
    ▒░▓░▒
  `,
	wave: `
    ∽∿∽∿∽
    ∿∽∿∽∿
  `,
	nodes: `
    ○ ○ ○
     \\|/
    —○—
     /|\\
    ○ ○ ○
  `,
};

interface ASCIIDecorProps {
	type: keyof typeof asciiArt;
	animated?: boolean;
	className?: string;
}

export default function ASCIIDecor({ type, animated = false, className = "" }: ASCIIDecorProps) {
	const [opacity, setOpacity] = useState(1);

	useEffect(() => {
		if (!animated) return;

		const interval = setInterval(() => {
			setOpacity((prev) => (prev === 1 ? 0.4 : 1));
		}, 1500);

		return () => clearInterval(interval);
	}, [animated]);

	return (
		<pre
			className={`font-mono text-xs whitespace-pre transition-opacity duration-1000 ${className}`}
			style={{ opacity }}
		>
			{asciiArt[type]}
		</pre>
	);
}
