import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Theme from "./Theme";
import { Props } from "./Theme";

export default function ButtonAppBar({ onToggle, status }: Props) {
	return (
		<Box sx={{ flexGrow: 1, mb: 3 }} margin={"dense"}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1 }}
					>
						News
					</Typography>
					<Theme status={status} onToggle={onToggle}></Theme>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
