import { type Theme } from "@/context/ThemeContext";

export const themeColors = {
	dark: {
		bg: "bg-slate-950",
		text: "text-slate-100",
		textMuted: "text-slate-400",
		textMutedAlt: "text-slate-300",
		border: "border-white/10",
		borderBright: "border-white/30",
		panelBg: "bg-white/8",
		panelBorder: "border-white/20",
		linkBg: "hover:bg-white/10",
		accentBg: "bg-slate-900",
	},
	nord: {
		bg: "bg-black",
		text: "text-green-400",
		textMuted: "text-green-700",
		textMutedAlt: "text-green-500",
		border: "border-green-700",
		borderBright: "border-green-500",
		panelBg: "bg-green-950/20",
		panelBorder: "border-green-600",
		linkBg: "hover:bg-green-900/30",
		accentBg: "bg-green-950",
	},
	light: {
		bg: "bg-white",
		text: "text-slate-900",
		textMuted: "text-slate-500",
		textMutedAlt: "text-slate-600",
		border: "border-slate-200",
		borderBright: "border-slate-400",
		panelBg: "bg-slate-100",
		panelBorder: "border-slate-300",
		linkBg: "hover:bg-slate-200",
		accentBg: "bg-slate-200",
	},
};

export function getThemeColors(theme: Theme) {
	return themeColors[theme];
}
