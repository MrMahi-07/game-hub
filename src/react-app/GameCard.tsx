import {
	CardActions,
	Typography,
	CardContent,
	Card,
	Box,
	Checkbox,
	Stack,
} from "@mui/material";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Platform from "./Platforms";
import RatingChip from "./RatingChip";
import Recommended from "./Recommended";
import { Game } from "../hooks/useGames";
import Button from "@mui/joy/Button";
import Add from "@mui/icons-material/Add";
import imageDecompress from "../services/image-url";
import { useState } from "react";
import YtVideo from "./YtVideo";
import Banner from "./Banner";

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	let [isActive, setActive] = useState(false);

	return (
		<Card sx={{ borderRadius: 10, boxShadow: "lg" }}>
			<Box
				position={"relative"}
				sx={{
					aspectRatio: "16/9",
				}}
				onMouseLeave={() => {
					setActive(false);
				}}
				onMouseOver={(e) => {
					setActive(true);
				}}
			>
				{isActive && <YtVideo />}
				<Banner
					id={game.id}
					name={game.name}
					image={imageDecompress(game.background_image)}
				/>
			</Box>
			<CardContent>
				<Stack direction={"row"} justifyContent={"space-between"}>
					<Platform platform={game.parent_platforms} />
					<RatingChip critic={game.metacritic} />
				</Stack>
				<Typography
					gutterBottom
					variant="h4"
					sx={{ fontWeight: "bold", pt: 2 }}
					component="div"
				>
					{game.name}
					<Recommended rating={game.rating_top} />
				</Typography>
			</CardContent>
			<CardActions sx={{ p: 2 }}>
				<Button
					aria-label="Like"
					startDecorator={<Add sx={{ fontSize: 35 }} />}
					variant="outlined"
					color="neutral"
					sx={{ fontSize: 18 }}
				>
					{game.added}
				</Button>
				<Checkbox
					sx={{ color: "red", fontSize: 30 }}
					icon={<FavoriteBorder />}
					checkedIcon={<Favorite sx={{ color: "red" }} />}
				/>
			</CardActions>
		</Card>
	);
};

export default GameCard;
