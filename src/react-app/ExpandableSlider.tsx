import {
	Box,
	Breadcrumbs,
	Collapse,
	Divider,
	Link,
	ListItem,
	ListItemText,
	Stack,
	emphasize,
} from "@mui/material";
import { ReactNode, useEffect, useRef, useState } from "react";

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
import YtVideo from "./YtVideo";
import link from "../data/game-trailer.json";
import SSPreview from "./SSPreview";
import { relative } from "path";

export default function ExpandableSlider({ game }: Props) {
	let LocaleConfig: Intl.DateTimeFormatOptions = { dateStyle: "medium" };
	let released = new Date(game.released).toLocaleDateString(
		"en-US",
		LocaleConfig
	);

	const change = useRef<HTMLDivElement>(null);
	const [height, setHeight] = useState(0);
	const [active, setActive] = useState(false);

	useEffect(() => {
		change.current?.offsetHeight && setHeight(change.current?.offsetHeight);

		function handleResize() {
			change.current?.offsetHeight && setHeight(change.current?.offsetHeight);
		}
		window.addEventListener("resize", handleResize);
		console.log(change.current?.offsetHeight);
	}, []);

	function doSomething(): ReactNode {
		if (link.some((x) => Math.round(Math.random()) && x.id == game.id))
			return <YtVideo />;
		if (game.short_screenshots.length > 1)
			return <SSPreview ss={game.short_screenshots.filter((_, i) => i != 0)} />;
	}

	return (
		<Box height={height}>
			<Card
				ref={change}
				sx={{
					borderRadius: 10,
					transformOrigin: "top center",
					transition: "transform .1s ease",
					position: "relative",
					boxShadow: "lg",

					"&:hover .text": {
						maxHeight: "100vh",
						transition: "all .05s ease",
						opacity: 1,
					},
					"&:hover": { transform: "scale(1.03)", zIndex: 1 },
				}}
				onMouseEnter={(e) => setActive(true)}
				onMouseLeave={(e) => setTimeout(() => setActive(false), 200)}
			>
				{active && doSomething()}
				<CardMedia
					component={"img"}
					sx={{
						aspectRatio: "16/9",
						width: 1,
					}}
					image={imageDecompress(game.background_image)}
					title={game.name}
					loading="lazy"
				/>
				<CardContent sx={{ zIndex: 5 }}>
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
				<Box p={2}>
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
					<Box
						sx={{
							opacity: 0.3,
							maxHeight: 0,
							transition: "all .3s ease",
							overflow: "hidden",
						}}
						className="text"
					>
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
							<Breadcrumbs>
								{game.genres.map((d) => (
									<Link key={d.id} color={"inherit"} href="#">
										{d.name}
									</Link>
								))}
							</Breadcrumbs>
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
							onClick={() =>
								console.log(
									game.genres.filter((_, i) => i < 3).map((x) => x.id)
								)
							}
							sx={{
								justifyContent: "space-between",
								textTransform: "none",
								bgcolor: "grey",
								"&:hover": {
									color: "gold",
								},
							}}
						>
							See more like this
						</Button>
					</Box>
				</Box>
			</Card>
		</Box>
	);
}
