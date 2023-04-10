import { IconButton, Drawer } from "@mui/material";
import { useState } from "react";
import GenreList from "./GenreList";
import MenuIcon from "@mui/icons-material/Menu";

const SwipeableDrawer = () => {
	const [open, setOpen] = useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};
	return (
		<>
			<IconButton
				color="inherit"
				aria-label="open drawer"
				edge="end"
				onClick={handleDrawerOpen}
				sx={{ display: { sm: "block", md: "none" } }}
			>
				<MenuIcon />
			</IconButton>
			<Drawer anchor="left" open={open} onClose={handleDrawerClose}>
				<GenreList onSelect={handleDrawerClose} />
			</Drawer>
		</>
	);
};

export default SwipeableDrawer;
