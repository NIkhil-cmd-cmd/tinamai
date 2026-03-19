"use client";
import Home from "@/components/Home/Home";
import Cursor from "@/components/Global/Cursor";
import ThemeToggle from "@/components/Global/ThemeToggle";
import { ThemeProvider } from "@/context/ThemeContext";
import { generateStructuredData } from "./structured-data";

export default function Index() {
	return (
		<ThemeProvider>
			<div style={{ cursor: "none" }}>
				<Cursor />
				<ThemeToggle />
				<Home />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(generateStructuredData()),
					}}
				/>
			</div>
		</ThemeProvider>
	);
}
