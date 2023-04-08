import { MouseEvent, useState } from "react";
import imageDecompress from "../services/image-url";
import { Box, Stack } from "@mui/material";

interface Props {
	ss: { image: string }[];
}

function ScreenShotPreview({ ss }: Props) {
	const [percentage, setPercentage] = useState(0);
	const [isActive, setActive] = useState(true);
	function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
		let set = 10;
		let left = e.currentTarget.offsetLeft;
		let width = e.currentTarget.offsetWidth;

		if (e.clientX - set > left && e.clientX + set < left + width) {
			setPercentage((e.clientX - left) / width);
		}
	}

	let imageIndex = Math.floor(percentage * ss.length);

	return (
		<div
			onMouseMove={(e) => {
				handleMouseMove(e);
				setActive(true);
			}}
			style={{ position: "relative" }}
			onMouseLeave={() => {
				setPercentage(0);
				setActive(false);
			}}
		>
			<Box
				component="img"
				src={imageDecompress(ss[imageIndex].image)}
				alt={"game name"}
				sx={{
					objectFit: "cover",
					width: "100%",
					aspectRatio: "16/9",
					transition: "all .4s",
				}}
			/>
			<Stack
				width={"100%"}
				spacing={1}
				p={2}
				direction={"row"}
				sx={{
					visibility: isActive ? "visible" : "hidden",
					position: "absolute",
					bottom: 0,
				}}
			>
				{ss.map((_, i) => (
					<Box
						width={"100%"}
						key={i}
						sx={{
							height: 5,
							background: imageIndex == i ? "white" : "grey",
							borderRadius: 10,
						}}
					/>
				))}
			</Stack>
		</div>
	);
}

export default ScreenShotPreview;
