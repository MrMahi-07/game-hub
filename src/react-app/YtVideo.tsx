import { Game } from "../hooks/useGames";
import useYtTrailer from "../hooks/useYtTrailer";

import Link from "@mui/joy/Link";
import Launch from "@mui/icons-material/Launch";
import { YtProps } from "../hooks/useYtTrailer";
import { Box } from "@mui/material";
import data from "../data/game-trailer.json";
import { log } from "console";

interface Props {
	// game: Game;
	isLoading: boolean;
}

// function YtVideo({ game, isLoading }: Props) {
function YtVideo({ isLoading }: Props) {
	// const { data, error } = useYtTrailer(game);
	console.log(data);

	function abc() {
		console.log(1123);
	}

	return (
		<Box
			component="iframe"
			allowFullScreen
			src={data.url}
			border={0}
			width="100%"
			fontSize={1}
			onMouseOut={}
			sx={{
				aspectRatio: "16/9",
				opacity: 0,
				"&:hover": {
					opacity: 1,
				},
			}}
		/>
	);
}

export default YtVideo;
