import { IconButton } from "@mui/material";
// import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness2Icon from "@mui/icons-material/Brightness2";
//
export interface Props {
	status: boolean;
	onToggle: () => void;
}
const Theme = ({ onToggle, status }: Props) => {
	return (
		<IconButton aria-label="delete" onClick={onToggle}>
			{!status ? (
				<Brightness2Icon
					sx={{
						color: "white",
					}}
				/>
			) : (
				<Brightness7Icon />
			)}
		</IconButton>
	);
};

export default Theme;
