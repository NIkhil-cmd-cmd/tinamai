import { useEffect, useRef } from "react";

const Cursor = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const cursorRef = useRef<HTMLDivElement>(null);
	const rafRef = useRef<number>();
	const isMouseDownRef = useRef(false);
	const mouseXRef = useRef(0);
	const mouseYRef = useRef(0);
	const isVisibleRef = useRef(false);
	type TrailPoint = { x: number; y: number; opacity: number; isOrange: boolean };
	const trailRef = useRef<TrailPoint[]>([]);

	useEffect(() => {
		if (window.matchMedia("(pointer: coarse)").matches || navigator.maxTouchPoints > 0) {
			return;
		}

		const canvas = canvasRef.current;
		const cursor = cursorRef.current;
		if (!canvas || !cursor) return;

		const context = canvas.getContext("2d");
		if (!context) return;

		const TRAIL_LENGTH = 8;
		const TRAIL_WIDTH = 2;
		const FADE_SPEED = 0.9;

		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		const handleMouseMove = (e: MouseEvent) => {
			mouseXRef.current = e.clientX;
			mouseYRef.current = e.clientY;

			if (!isVisibleRef.current) {
				isVisibleRef.current = true;
				cursor.style.opacity = "1";
			}

			cursor.style.left = `${mouseXRef.current}px`;
			cursor.style.top = `${mouseYRef.current}px`;

			trailRef.current.push({
				x: mouseXRef.current,
				y: mouseYRef.current,
				opacity: 1,
				isOrange: isMouseDownRef.current,
			});

			if (trailRef.current.length > TRAIL_LENGTH) {
				trailRef.current.shift();
			}
		};

		const handleMouseDown = () => {
			isMouseDownRef.current = true;
			cursor.style.transform = "translate(-50%, -50%) scale(0.85)";
		};

		const handleMouseUp = () => {
			isMouseDownRef.current = false;
			cursor.style.transform = "translate(-50%, -50%) scale(1)";
		};

		const handleMouseLeave = () => {
			cursor.style.opacity = "0";
			isVisibleRef.current = false;
		};

		const drawTrail = () => {
			context.clearRect(0, 0, canvas.width, canvas.height);

			trailRef.current = trailRef.current
				.map((point) => ({ ...point, opacity: point.opacity * FADE_SPEED }))
				.filter((point) => point.opacity > 0.02);

			for (let index = 0; index < trailRef.current.length - 1; index++) {
				const point = trailRef.current[index];
				const nextPoint = trailRef.current[index + 1];
				const positionFade = (index / trailRef.current.length) * 0.7 + 0.3;
				const finalOpacity = point.opacity * positionFade;

				const colors = {
					outer: `rgba(255, 255, 255, ${finalOpacity * 0.18})`,
					middle: `rgba(255, 255, 255, ${finalOpacity * 0.36})`,
					inner: `rgba(255, 255, 255, ${finalOpacity * 0.9})`,
				};

				context.beginPath();
				context.moveTo(point.x, point.y);
				context.lineTo(nextPoint.x, nextPoint.y);
				context.strokeStyle = colors.outer;
				context.lineWidth = TRAIL_WIDTH * 6;
				context.lineCap = "round";
				context.lineJoin = "round";
				context.stroke();

				context.beginPath();
				context.moveTo(point.x, point.y);
				context.lineTo(nextPoint.x, nextPoint.y);
				context.strokeStyle = colors.middle;
				context.lineWidth = TRAIL_WIDTH * 3;
				context.lineCap = "round";
				context.lineJoin = "round";
				context.stroke();

				context.beginPath();
				context.moveTo(point.x, point.y);
				context.lineTo(nextPoint.x, nextPoint.y);
				context.strokeStyle = colors.inner;
				context.lineWidth = TRAIL_WIDTH;
				context.lineCap = "round";
				context.lineJoin = "round";
				context.stroke();
			}

			rafRef.current = requestAnimationFrame(drawTrail);
		};

		resizeCanvas();
		drawTrail();

		window.addEventListener("resize", resizeCanvas);
		window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("mousedown", handleMouseDown);
		window.addEventListener("mouseup", handleMouseUp);
		window.addEventListener("mouseout", handleMouseLeave);

		return () => {
			window.removeEventListener("resize", resizeCanvas);
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("mousedown", handleMouseDown);
			window.removeEventListener("mouseup", handleMouseUp);
			window.removeEventListener("mouseout", handleMouseLeave);
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
		};
	}, []);

	return (
		<>
			<canvas
				ref={canvasRef}
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					width: "100vw",
					height: "100vh",
					pointerEvents: "none",
					zIndex: 21,
					mixBlendMode: "screen",
				}}
			/>
			<div
				ref={cursorRef}
				aria-hidden
				style={{
					position: "fixed",
					left: 0,
					top: 0,
					width: "32px",
					height: "32px",
					transform: "translate(-50%, -50%)",
					zIndex: 9999,
					pointerEvents: "none",
					opacity: 0,
					transition: "transform 0.1s ease-out, opacity 0.15s ease-out",
				}}
			>
				<div
					style={{
						position: "absolute",
						top: "50%",
						left: "50%",
						width: "32px",
						height: "32px",
						border: "2px solid rgba(255, 255, 255, 0.4)",
						borderRadius: "9999px",
						transform: "translate(-50%, -50%)",
						boxShadow: "0 0 12px rgba(255, 255, 255, 0.55), inset 0 0 10px rgba(255, 255, 255, 0.25)",
					}}
				/>
				<div
					style={{
						position: "absolute",
						top: "50%",
						left: "50%",
						width: "16px",
						height: "16px",
						border: "1.5px solid rgba(255, 255, 255, 0.7)",
						borderRadius: "9999px",
						transform: "translate(-50%, -50%)",
						boxShadow: "0 0 10px rgba(255, 255, 255, 0.6)",
					}}
				/>
				<div
					style={{
						position: "absolute",
						top: "50%",
						left: "50%",
						width: "4px",
						height: "4px",
						borderRadius: "9999px",
						transform: "translate(-50%, -50%)",
						background: "radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.85) 100%)",
						boxShadow: "0 0 8px rgba(255, 255, 255, 0.9)",
					}}
				/>
			</div>
		</>
	);
};

export default Cursor;
