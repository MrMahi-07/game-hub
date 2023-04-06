import { useState } from "react";
import useGenres from "../hooks/useGenre";
import { Avatar, List, ListItemButton, ListItemDecorator } from "@mui/joy";
import imageDecompress from "../services/image-url";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

interface Props {
	onSelect: (id: number) => void;
}

const GenreList = ({ onSelect }: Props) => {
	const { isLoading, data } = useGenres();
	const [selectedGenre, setGenre] = useState(0);

	if (isLoading) {
		return (
			<>
				{Array(20)
					.fill(0)
					.map((x, i) => (
						<Stack key={i} p={1} direction={"row"} spacing={2} width="100%">
							<Skeleton
								variant="circular"
								width={50}
								height={50}
								sx={{ borderRadius: 10 }}
							/>
							<Skeleton animation="wave" variant="text" sx={{ width: "70%" }} />
						</Stack>
					))}
			</>
		);
	}

	return (
		<List
			sx={{
				"--ListItemDecorator-size": "60px",
				"--ListItem-paddingY": "10px",
			}}
		>
			{data
				.sort((a, b) => (a.name > b.name ? 1 : -1))
				.map((d) => (
					<ListItemButton
						key={d.id}
						variant={d.id == selectedGenre ? "solid" : "plain"}
						onClick={(e) => {
							setGenre(d.id);
							onSelect(d.id);
						}}
					>
						<ListItemDecorator>
							<Avatar
								size="lg"
								sx={{ borderRadius: 10 }}
								src={imageDecompress(d.image_background)}
							/>
						</ListItemDecorator>
						{d.name}
					</ListItemButton>
				))}
		</List>
	);
};

export default GenreList;
