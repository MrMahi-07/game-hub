import {
	Box,
	Breadcrumbs,
	Divider,
	Link,
	ListItem,
	ListItemText,
} from "@mui/material";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Game } from "../hooks/useGames";

interface Props {
	game: Game;
	isActive: boolean;
}

const CardCollapsible = ({ game, isActive }: Props) => {
	let LocaleConfig: Intl.DateTimeFormatOptions = { dateStyle: "medium" };
	let released = new Date(game.released).toLocaleDateString(
		"en-US",
		LocaleConfig
	);

	return (
		<Box
			sx={{
				pt: 2,
				display: "none",
				transition: "all .05s",
				...(isActive && { display: "block" }),
			}}
			className="cardCollapsible"
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
	);
};

export default CardCollapsible;
