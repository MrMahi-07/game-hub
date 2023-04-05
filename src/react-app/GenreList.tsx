import React from "react";
import useGenres from "../hooks/useGenre";
import { List, ListItem } from "@mui/joy";

const GenreList = () => {
	const { data } = useGenres();
	return (
		<List>
			{data.map((d) => (
				<ListItem key={d.id}>{d.name}</ListItem>
			))}
		</List>
	);
};

export default GenreList;
