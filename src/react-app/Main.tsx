import { Box, Grid, List, ListItem, ListItemButton } from "@mui/material";
import MediaCard from "./MediaCard";
import Masonry from "@mui/lab/Masonry";
import Joy from "./Joy";
import { CircularProgress } from "@mui/joy";
import { useGames } from "../hooks/useGames";
import GameCard from "./GameCard";

const Main = () => {
	const heights = [
		150, 50, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80,
	];

	const { error, isLoading, games } = useGames();

	return (
		<>
			{/* {isLoading && <CircularProgress size="lg" />} */}
			<Masonry
				columns={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 4 }}
				spacing={2}
				sx={{ alignContent: "center" }}
			>
				{games.map((game) => (
					<GameCard key={game.id} game={game} />
				))}
			</Masonry>
		</>
	);
};

export default Main;
