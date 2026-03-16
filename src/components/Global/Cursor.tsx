import React, { useEffect, useRef } from "react";
import Image from "next/image";
import cursor from "@/assets/cursor.svg";

const Cursor = () => {
	const cursorRef = useRef<HTMLImageElement>(null); // use ref to directly manipulate the DOM element
	const glowRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// function to move the cursor
		const moveCursor = (e: MouseEvent) => {
			if (cursorRef.current) {
				const x = e.clientX;
				const y = e.clientY;

				// update cursor position and ensure it's visible
				cursorRef.current.style.left = `${x}px`;
				cursorRef.current.style.top = `${y}px`;
				cursorRef.current.style.display = "block";
				if (glowRef.current) {
					glowRef.current.style.left = `${x}px`;
					glowRef.current.style.top = `${y}px`;
					glowRef.current.style.display = "block";
				}
			}
		};

		// function to hide the cursor on mouse out
		const handleMouseOut = (e: MouseEvent) => {
			if (cursorRef.current && (!e.relatedTarget || e.relatedTarget === null)) {
				cursorRef.current.style.display = "none";
				if (glowRef.current) {
					glowRef.current.style.display = "none";
				}
			}
		};

		// add event listeners if the device does not support touch events
		if (!("ontouchstart" in window || navigator.maxTouchPoints)) {
			document.addEventListener("mousemove", moveCursor);
			document.addEventListener("mouseout", handleMouseOut);
		}

		return () => {
			// clean up event listeners
			document.removeEventListener("mousemove", moveCursor);
			document.removeEventListener("mouseout", handleMouseOut);
		};
	}, []);

	return (
		<>
			<div
				ref={glowRef}
				style={{
					position: "fixed",
					left: "0px",
					top: "0px",
					transform: "translate(-50%, -50%)",
					zIndex: 18,
					pointerEvents: "none",
					display: "none",
					width: "120px",
					height: "120px",
					borderRadius: "9999px",
					background: "radial-gradient(circle, rgba(125, 211, 252, 0.2) 0%, rgba(56, 189, 248, 0.1) 42%, rgba(15, 23, 42, 0) 78%)",
				}}
			/>
			<Image
				ref={cursorRef}
				src={cursor}
				alt="cursor"
				width={32}
				height={32}
				style={{
					position: "fixed",
					left: "0px",
					top: "0px",
					zIndex: 20,
					pointerEvents: "none",
					display: "none",
				}}
			/>
		</>
	);
};

export default Cursor;
