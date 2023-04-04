import AspectRatio from "@mui/joy/AspectRatio";
import { useGames } from "../hooks/useGames";
import Image from "../assets/lizard.webp";
import AddIcon from "@mui/icons-material/Add";

import {
	CardMedia,
	CardActions,
	Typography,
	Button,
	CardContent,
	Card,
	Box,
	Checkbox,
	Stack,
} from "@mui/material";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Platform from "./Platforms";
import { Chip, CircularProgress, Divider } from "@mui/joy";
import RatingChip from "./RatingChip";
import Recommended from "./Recommended";
import { Game } from "../services/rawg-http";

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<Card sx={{ borderRadius: 4 }}>
			<Box
				component="img"
				src={game.background_image}
				alt={game.name}
				sx={{
					objectFit: "cover",
					width: "100%",
					aspectRatio: "16/9",
				}}
			/>
			<CardContent>
				<Stack direction={"row"} justifyContent={"space-between"}>
					<Platform platform={game.parent_platforms} />
					<RatingChip />
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
				<Button variant="outlined" startIcon={<AddIcon fontSize="large" />}>
					1235
				</Button>
				<Checkbox
					sx={{ color: "red" }}
					icon={<FavoriteBorder />}
					checkedIcon={<Favorite sx={{ color: "red" }} />}
				/>
			</CardActions>
		</Card>
	);
};

export default GameCard;
