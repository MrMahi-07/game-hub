import { Game } from "../hooks/useGames";
import useYtTrailer from "../hooks/useYtTrailer";

import Link from "@mui/joy/Link";
import Launch from "@mui/icons-material/Launch";
import { YtProps } from "../hooks/useYtTrailer";
import { Box } from "@mui/material";
import data from "../data/game-trailer.json";
import { log } from "console";
import { Button, CircularProgress, Stack } from "@mui/joy";
import NewsCard2Demo from "./NewsCard2Demo";
import { useState } from "react";

interface Props {
	// game: Game;
	isLoading: () => void;
}

// function YtVideo({ game, isLoading }: Props) {
function YtVideo() {
	let [isLoaded, setLoaded] = useState(false);
	const [play, setPlay] = useState(false);
	let urUrl = "https://www.youtube-nocookie.com/embed/YrtCnL62pB8?controls=0";

	let url = play ? urUrl : urUrl + "&amp;autoplay=1";
	// const { data, error } = useYtTrailer(game);
	console.log(123);

	return (
		<>
			{/* {isLoaded ? ( */}
			{/* // <NewsCard2Demo /> */}
			<Box
				position={"absolute"}
				component="iframe"
				allowFullScreen
				src={url}
				allow="autoplay;"
				border={0}
				width="100%"
				sx={{
					aspectRatio: "16/9",
				}}
			/>
			<Button onClick={() => setPlay(!play)}>play</Button>
		</>
	);
}

export default YtVideo;
