"use client";

import { useTheme, type Theme } from "@/context/ThemeContext";

export default function ThemeToggle() {
	const { theme, setTheme } = useTheme();

	const themes: { value: Theme; label: string }[] = [
		{ value: "dark", label: "Dark" },
		{ value: "nord", label: "Nord" },
		{ value: "light", label: "Light" },
	];

	return (
		<div className="fixed bottom-8 left-8 z-40 flex gap-2">
			{themes.map((t) => (
				<button
					key={t.value}
					onClick={() => setTheme(t.value)}
					className={`px-3 py-2 rounded text-xs font-semibold transition-all duration-200 border ${
						theme === t.value
							? "opacity-100 border-current"
							: "opacity-50 hover:opacity-75 border-current/50"
					}`}
					title={`Switch to ${t.label} theme`}
				>
					{t.label}
				</button>
			))}
		</div>
	);
}
