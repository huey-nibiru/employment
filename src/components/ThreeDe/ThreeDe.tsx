import { useEffect, useRef } from "react";
import anime from "animejs";
import "./ThreeDE.css"; // Import CSS file

interface ThreeDEProps {
	size?: number;
	color?: string;
	animationSpeed?: number;
}

export const ThreeDE = ({
	size = 100,
	color = "#00ff88",
	animationSpeed = 3000,
}: ThreeDEProps) => {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!containerRef.current) return;

		const animation = anime({
			targets: containerRef.current,
			rotateY: 360,
			rotateX: 360,
			rotateZ: 360,
			duration: animationSpeed * 3,
			easing: "linear",
			loop: true,
		});

		const handleMouseMove = (e: MouseEvent) => {
			if (!containerRef.current) return;
			const rect = containerRef.current.getBoundingClientRect();
			const centerX = rect.left + rect.width / 2;
			const centerY = rect.top + rect.height / 2;

			anime({
				targets: containerRef.current,
				rotateY: ((e.clientX - centerX) / 10) * -1,
				rotateX: (e.clientY - centerY) / 10,
				duration: 1000,
				easing: "easeOutQuad",
			});
		};

		document.addEventListener("mousemove", handleMouseMove);
		return () => document.removeEventListener("mousemove", handleMouseMove);
	}, [animationSpeed]);

	return (
		<div
			className="e-container"
			style={{
				width: `${size * 2}px`,
				height: `${size * 2}px`,
			}}
		>
			<div
				ref={containerRef}
				className="e-3d"
				style={
					{
						"--size": `${size}px`,
						"--color": color,
					} as React.CSSProperties
				}
			>
				<div className="e-face e-front" />
				<div className="e-face e-back" />
				<div className="e-face e-top" />
				<div className="e-face e-bottom" />
				<div className="e-face e-middle" />
				<div className="e-face e-left" />
			</div>
		</div>
	);
};
