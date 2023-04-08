import {
	Box,
	Collapse,
	Divider,
	Link,
	ListItem,
	ListItemText,
	Stack,
} from "@mui/material";
import { useState } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface Props {
	game: Game;
}

import { Checkbox } from "@mui/material";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Platform from "./Platforms";
import RatingChip from "./RatingChip";
import Recommended from "./Recommended";
import ButtonJoy from "@mui/joy/Button";
import Add from "@mui/icons-material/Add";
import { Game } from "../hooks/useGames";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import imageDecompress from "../services/image-url";
export default function ExpandableSlider({ game }: Props) {
	const [checked, setChecked] = useState(false);

	let LocaleConfig: Intl.DateTimeFormatOptions = { dateStyle: "medium" };
	let released = new Date(game.released).toLocaleDateString(
		"en-US",
		LocaleConfig
	);

	return (
		<Card
			sx={{ borderRadius: 10, boxShadow: "lg" }}
			onMouseEnter={() => setChecked(!true)}
			onMouseLeave={() => setChecked(!false)}
		>
			<CardMedia
				component={"img"}
				sx={{ aspectRatio: "16/9", width: 1 }}
				image={imageDecompress(game.background_image)}
				title="green iguana"
				loading="lazy"
			/>
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
			<CardActions
				sx={{
					p: 2,
					flexDirection: "column",
				}}
			>
				<Stack direction={"row"} width={1}>
					<ButtonJoy
						aria-label="Like"
						startDecorator={<Add sx={{ fontSize: 35 }} />}
						variant="outlined"
						color="neutral"
						sx={{ fontSize: 18 }}
					>
						{game.added}
					</ButtonJoy>
					<Checkbox
						sx={{ color: "red", fontSize: 30 }}
						icon={<FavoriteBorder />}
						checkedIcon={<Favorite sx={{ color: "red" }} />}
					/>
				</Stack>
				<Collapse in={!checked} sx={{ width: 1, ml: "0 !important" }}>
					<ListItem>
						<ListItemText
							sx={{ display: "flex", justifyContent: "space-between" }}
							primary="Release date:"
							secondary={released}
						/>
					</ListItem>
					<Divider variant="middle" />
					<ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
						<Typography>Genre:</Typography>
						<Typography
							variant="caption"
							sx={{
								"& *::after": { content: `","`, mr: "4px" },
								"& *:last-child::after": { content: `""`, mr: "4px" },
							}}
						>
							{game.genres.map((d) => (
								<Link key={d.id} color={"inherit"} href="#">
									{d.name}
								</Link>
							))}
						</Typography>
					</ListItem>
					<Divider variant="middle" />
					<ListItem>
						<ListItemText
							sx={{ display: "flex", justifyContent: "space-between" }}
							primary="Chart:"
							secondary="#1 Top 2021"
						/>
					</ListItem>
					<Divider variant="middle" />

					<Button
						fullWidth
						variant="contained"
						color="secondary"
						endIcon={<ChevronRightIcon />}
						sx={{
							justifyContent: "space-between",
							textTransform: "none",
							bgcolor: "grey",
							"&:hover": {
								color: "gold",
								bgcolor: "grey",
							},
						}}
					>
						See more like this
					</Button>
				</Collapse>
			</CardActions>
		</Card>
	);
}
