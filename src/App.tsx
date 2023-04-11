import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import deepMergeMui from "./react-app/deepMergeMui";
import { GameQuery } from "./hooks/useGames";
import { useRef, useState } from "react";
import GenreList from "./react-app/GenreList";
import Grid from "@mui/joy/Grid";
import Main from "./react-app/Main";
import NavBar from "./react-app/NavBarApp";
import PlatformFilter from "./react-app/PlatformFilter";
import Sort from "./react-app/Sort";
import { Stack } from "@mui/joy";

export default function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

	return (
		<CssVarsProvider theme={deepMergeMui}>
			<CssBaseline />
			<br />
			<Grid
				maxWidth={1880}
				alignItems={"flex-start"}
				mx={"auto"}
				container
				gap={2}
				sx={{ flexGrow: 1 }}
			>
				<Grid xs={12}>
					<NavBar
						onSearch={(search) =>
							setGameQuery({ ...gameQuery, search: search })
						}
						onClick={(id) => setGameQuery({ ...gameQuery, genre: id + "" })}
					/>
				</Grid>
				<Grid
					sx={{ width: 220, display: { sm: "none", xs: "none", md: "inline" } }}
				>
					<GenreList
						onSelect={(id) => {
							setGameQuery({ ...gameQuery, genre: id + "" });
						}}
					/>
				</Grid>
				<Grid xs={12} sm={12} md container mt={3} gap={1}>
					<Grid xs={12}>
						<Stack direction={"row"} spacing={2}>
							<PlatformFilter
								onSelect={(id) => setGameQuery({ ...gameQuery, platform: id })}
							/>
							<Sort
								onSelect={(sort) => {
									setGameQuery({ ...gameQuery, sort });
								}}
							/>
						</Stack>
					</Grid>
					<Main
						gameQuery={gameQuery}
						onSelected={(id) =>
							setGameQuery({ ...gameQuery, genre: id.join() })
						}
					/>
				</Grid>
			</Grid>
		</CssVarsProvider>
	);
}
