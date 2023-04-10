import { Masonry } from "@mui/lab";
import { Card, CardContent, Slide, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { log } from "console";
import { MouseEvent, useEffect, useRef, useState } from "react";

const card = (i: number, v: number) => {
	const change = useRef<HTMLDivElement>(null);
	const [height, setHeight] = useState(0);
	const [active, setActive] = useState(false);

	useEffect(() => {
		change.current?.offsetHeight && setHeight(change.current?.offsetHeight);

		function handleResize() {
			change.current?.offsetHeight && setHeight(change.current?.offsetHeight);
		}
		window.addEventListener("resize", handleResize);
		console.log(change.current?.offsetHeight);
	}, []);

	return (
		<Box key={i} height={height}>
			<Card
				ref={change}
				sx={{
					position: "relative",
					transition: "transform .3s ease",
					...(active && { zIndex: 2 }),
					boxShadow: "lg",

					"&:hover .text": {
						maxHeight: "100vh",
						transition: "all .5s ease",
						transitionDelay: ".2s",
						opacity: 1,
					},
					"&:hover": { transform: "scale(1.01)" },
				}}
				onMouseLeave={() => setTimeout(() => setActive(false), 300)}
				onMouseEnter={() => setActive(true)}
			>
				<CardContent>
					<Box sx={{ aspectRatio: "16/9", bgcolor: "steelblue", width: 1 }} />
					<Typography variant="body1">
						{v}Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
						eligendi
					</Typography>

					<Typography
						sx={{
							maxHeight: 0,
							opacity: 0.3,
							transition: "all .3s ease",
							overflow: "hidden",
						}}
						className="text"
					>
						Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur
						adipisicing elit. Dicta maxime consectetur ipsam ipsa vero aperiam
						mollitia facere id qui sapiente corporis quasi voluptatibus,
						laudantium ad in, rem amet omnis porro?
					</Typography>
				</CardContent>
			</Card>
		</Box>
	);
};

const Test = () => {
	const size = [200, 100, 150, 90, 90];
	return (
		<Masonry columns={2} sx={{ zIndex: -2 }} spacing={2}>
			{size.map((v, i) => card(i, v))}
		</Masonry>
	);
};

export default Test;
