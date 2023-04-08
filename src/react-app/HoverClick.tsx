import React, { useRef, useEffect } from "react";

const HoverClick = () => {
	const buttonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		const button = buttonRef.current;
		if (button) {
			const handleMouseEnter = () => {
				button.click();
			};
			button.addEventListener("mouseenter", handleMouseEnter);
			return () => {
				button.removeEventListener("mouseenter", handleMouseEnter);
			};
		}
	}, []);

	return <button ref={buttonRef}>Hover over me</button>;
};

export default HoverClick;
