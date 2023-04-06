import Toolbar from "@mui/material/Toolbar";
import ModeToggler from "./ModeToggler";
import Input from "@mui/joy/Input";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Stack } from "@mui/material";
import logo from "../assets/logo.svg";

export default function NavBar() {
	return (
		<Stack sx={{ flexGrow: 1, backgroundColor: "none" }}>
			<Toolbar>
				<Avatar
					alt={logo}
					src={logo}
					sx={{ display: "inline-flex", width: 150, ml: 1, height: 50 }}
				/>

				<Input
					sx={{ mx: 1, "--Input-minHeight": "46px", "--Input-radius": "50px" }}
					fullWidth
					placeholder="Search..."
					startDecorator={<SearchIcon />}
				/>

				<ModeToggler />
			</Toolbar>
		</Stack>
	);
}
