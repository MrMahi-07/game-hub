import Main from "./react-app/Main";
import Grid from "@mui/joy/Grid";

import NavBar from "./react-app/NavBarApp";

// import type {} from "@mui/material/themeCssVarsAugmentation";
import { CssVarsProvider } from "@mui/joy/styles";

// Joy UI components
import CssBaseline from "@mui/joy/CssBaseline";
import GenreList from "./react-app/GenreList";
import { useState } from "react";
import PlatformFilter from "./react-app/PlatformFilter";

import { GameQuery } from "./hooks/useGames";
import Sort from "./react-app/Sort";

import deepMergeMui from "./react-app/deepMergeMui";

export default function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

	return (
		<CssVarsProvider theme={deepMergeMui}>
			<CssBaseline />
			<br />
			<Grid maxWidth={1880} mx={"auto"} container gap={2} sx={{ flexGrow: 1 }}>
				<Grid xs={12}>
					<NavBar />
				</Grid>
				<Grid
					sx={{ width: 220, display: { sm: "none", xs: "none", md: "inline" } }}
				>
					<GenreList
						onSelect={(id) => setGameQuery({ ...gameQuery, genre: id })}
					/>
				</Grid>
				<Grid
					xs={12}
					sm={12}
					md
					container
					mt={3}
					justifyContent={"center"}
					overflow={"hidden"}
				>
					<PlatformFilter
						onSelect={(id) => setGameQuery({ ...gameQuery, platform: id })}
					/>
					<Sort
						onSelect={(sort) => {
							console.log(sort);

							setGameQuery({ ...gameQuery, sort });
						}}
					/>
					<Main {...gameQuery} />
				</Grid>
			</Grid>
		</CssVarsProvider>
	);
}
