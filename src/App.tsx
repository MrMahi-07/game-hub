import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";

import ButtonAppBar from "./mui/ButtonAppBar";
import { List, ListItem, ListItemButton, Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import GameCard from "./react-app/GameCard";
import Main from "./react-app/Main";
import NavBar from "./react-app/NavBarApp";
import { useGames } from "./hooks/useGames";
import { CircularProgress } from "@mui/joy";

function App() {
	const [darkMode, setDarkMode] = useState(true);
	const { error, isLoading, games } = useGames();

	const darkTheme = createTheme({
		palette: {
			mode: darkMode ? "dark" : "light",
		},
	});

	const arr = [1, 2, 3, 4, 5, 6, 7];
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Grid maxWidth={1824} mx={"auto"} container gap={2} sx={{ flexGrow: 1 }}>
				<Grid xs={12}>
					<NavBar status={darkMode} onToggle={() => setDarkMode(!darkMode)} />
				</Grid>
				<Grid
					sx={{ width: 200, display: { sm: "none", xs: "none", md: "inline" } }}
				>
					<List>
						<ListItem>
							<ListItemButton>Home</ListItemButton>
						</ListItem>
						<ListItem>
							<ListItemButton>Projects</ListItemButton>
						</ListItem>
						<ListItem>
							<ListItemButton>Settings hahahha</ListItemButton>
						</ListItem>
					</List>
				</Grid>
				<Grid xs container spacing={2} mx={2}>
					{/* {isLoading && <CircularProgress size="lg" />} */}
					{/* <Main /> */}
					{games.map((game) => (
						<GameCard key={game.id} game={game} />
					))}
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}

export default App;
