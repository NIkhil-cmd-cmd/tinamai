"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Theme = "dark" | "nord" | "light";

interface ThemeContextType {
	theme: Theme;
	setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setThemeState] = useState<Theme>("dark");
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		const stored = localStorage.getItem("theme") as Theme | null;
		if (stored && ["dark", "nord", "light"].includes(stored)) {
			setThemeState(stored);
		}
	}, []);

	const setTheme = (newTheme: Theme) => {
		setThemeState(newTheme);
		localStorage.setItem("theme", newTheme);
	};

	// Always return with context provider, even before mounted
	// This prevents useTheme errors during SSR/initial render
	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<div className={getThemeClass(theme)} suppressHydrationWarning>
				{children}
			</div>
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within ThemeProvider");
	}
	return context;
}

export function getThemeClass(theme: Theme): string {
	const baseClasses = "min-h-screen transition-colors duration-300";
	
	switch (theme) {
		case "nord":
			// Black bg with green text
			return `${baseClasses} bg-black text-green-400`;
		case "light":
			// White bg with dark text
			return `${baseClasses} bg-white text-slate-900`;
		case "dark":
		default:
			// Default dark theme (existing style)
			return `${baseClasses} bg-slate-950 text-slate-100`;
	}
}
