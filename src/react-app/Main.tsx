import { Box, Grid, List, ListItem, ListItemButton } from "@mui/material";
import MediaCard from "./MediaCard";
import Masonry from "@mui/lab/Masonry";
import Joy from "./Joy";

const Main = () => {
	const heights = [
		150, 50, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80,
	];

	return (
		<>
			<Masonry
				columns={{ xs: 1, sm: 2, md: 3, lg: 5 }}
				spacing={2}
				sx={{ alignContent: "center" }}
			>
				{heights.map((h, index) => (
					<Box
						key={index}
						sx={{ backgroundColor: "red", height: h, maxWidth: 450 }}
					>
						{index + 1}
					</Box>
				))}
			</Masonry>
		</>
	);
};

export default Main;
