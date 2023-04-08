import {
	makeStyles,
	Card,
	CardMedia,
	CardActionArea,
	CardContent,
	Box,
	Typography,
	CircularProgress,
} from "@mui/material";

export const NewsCard2Demo = () => {
	return (
		<Box
			sx={{
				backgroundImage:
					"url(https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80)",
				aspectRatio: "16/9",
				backgroundSize: "cover",
				backgroundPosition: "center",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				cursor: "none",
			}}
		>
			<CircularProgress size={100} color="inherit" />
		</Box>
	);
};

export default NewsCard2Demo;
