import { Box, LinearProgress, Stack } from "@mui/joy";
import { ImageListItem, ImageListItemBar } from "@mui/material";
import React, { MouseEvent, useState } from "react";
import imageDecompress from "../services/image-url";

interface Props {
	ss: { image: string }[];
}

function MouseEvents({ ss }: Props) {
	const [percentage, setPercentage] = useState(0);
	function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
		setPercentage(
			(e.clientX - e.currentTarget.offsetLeft) / e.currentTarget.offsetWidth
		);
	}

	return (
		<div onMouseMove={handleMouseMove} onMouseLeave={() => setPercentage(0)}>
			<Stack mx={2} direction={"row"} spacing={2}>
				{
					// ss.map((v, i) => (
					<ImageListItem>
						<img src={} alt={"Screen Shots"} />
						<ImageListItemBar
							actionIcon={
								<Box
									width={"100%"}
									key={i}
									sx={{
										height: 5,
										background:
											Math.floor(percentage * 4) == i ? "red" : "grey",
									}}
								/>
							}
						/>
					</ImageListItem>
					// ))
				}
			</Stack>
		</div>
	);
}

export default MouseEvents;
