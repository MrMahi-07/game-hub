import Toolbar from "@mui/material/Toolbar";
import ModeToggler from "./ModeToggler";
import Input from "@mui/joy/Input";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import logo from "../assets/logo.svg";
import Box from "@mui/joy/Box";
import { useForm } from "react-hook-form";

interface Props {
	onSearch: (search: string) => void;
}
export default function NavBar({ onSearch }: Props) {
	const { register, handleSubmit } = useForm();

	return (
		<Toolbar>
			<Avatar
				alt={logo}
				src={logo}
				sx={{ display: "inline-flex", width: 150, ml: 1, height: 50 }}
			/>

			<Box sx={{ width: "100%", mx: 3 }}>
				<form onSubmit={handleSubmit((data) => onSearch(data.search))}>
					<Input
						{...register("search", { required: true })}
						sx={{
							mx: 1,
							"--Input-minHeight": "55px",
							"--Input-radius": "50px",
						}}
						fullWidth
						placeholder="Search..."
						startDecorator={<SearchIcon />}
					/>
				</form>
			</Box>

			<ModeToggler />
		</Toolbar>
	);
}
