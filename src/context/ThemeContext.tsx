"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Theme = "dark" | "nord" | "light";

interface ThemeContextType {
	theme: Theme;
	setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const defaultTheme: Theme = "dark";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setThemeState] = useState<Theme>(defaultTheme);
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

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<div className={mounted ? getThemeClass(theme) : getThemeClass(defaultTheme)}>
				{children}
			</div>
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const context = useContext(ThemeContext);
	if (!context) {
		// Return default theme for SSR/build time
		return { theme: defaultTheme, setTheme: () => {} };
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
