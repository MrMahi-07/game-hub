import { Game } from "../hooks/useGames";
import useYtTrailer from "../hooks/useYtTrailer";

import Link from "@mui/joy/Link";
import Launch from "@mui/icons-material/Launch";
import { YtProps } from "../hooks/useYtTrailer";
import { Box } from "@mui/material";

interface Props {
	game: Game;
	isLoading: boolean;
}

function YtVideo({ game, isLoading }: Props) {
	const { data, error } = useYtTrailer(game);

	return (
		<Box
			component="iframe"
			allowFullScreen
			src={data.url}
			border={0}
			width="100%"
		/>
	);
}

export default YtVideo;
