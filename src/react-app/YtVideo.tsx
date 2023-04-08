import { Box } from "@mui/material";
import data from "../data/game-trailer.json";
import { CircularProgress } from "@mui/joy";
import { useRef } from "react";

function YtVideo() {
	const buttonRef = useRef<HTMLButtonElement>(null);

	return (
		<>
			<Box
				width={1}
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					position: "absolute",
					aspectRatio: "16/9",
					zIndex: 2,
					"&:hover .progress": {
						opacity: 0,
						transition: `opacity 5s`,
					},
					"&:hover .video": {
						opacity: 1,
						transition: `opacity 5s`,
					},
				}}
			>
				<CircularProgress size="lg" className="progress" />
				<Box
					ref={buttonRef}
					className="video"
					position={"absolute"}
					component="iframe"
					allowFullScreen
					src={data.url}
					border={0}
					loading="lazy"
					width="100%"
					sx={{
						aspectRatio: "16/9",
						opacity: 0,
					}}
				/>
			</Box>
		</>
	);
}

export default YtVideo;
