import React, { useRef, useEffect } from "react";

const HoverClick = () => {
	const buttonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		const button = buttonRef.current;
		if (button) {
			const handleClick = () => {
				// do something on click
			};
			const handleMouseEnter = () => {
				button.click();
			};
			button.addEventListener("click", handleClick);
			button.addEventListener("mouseenter", handleMouseEnter);
			return () => {
				button.removeEventListener("click", handleClick);
				button.removeEventListener("mouseenter", handleMouseEnter);
			};
		}
	}, []);

	return <button ref={buttonRef}>Hover over me</button>;
};

export default HoverClick;
