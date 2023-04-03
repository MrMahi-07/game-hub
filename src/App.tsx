import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";

import ButtonAppBar from "./mui/ButtonAppBar";
import { Home } from "@mui/icons-material";
import { List, ListItem, ListItemButton, Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import MediaCard from "./react-app/MediaCard";

function App() {
	const [darkMode, setDarkMode] = useState(true);

	const darkTheme = createTheme({
		palette: {
			mode: darkMode ? "dark" : "light",
		},
	});

	const arr = [1, 2, 3, 4, 5, 6];
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Grid container spacing={2} sx={{ flexGrow: 1 }}>
				<Grid xs={12}>
					<ButtonAppBar
						status={darkMode}
						onToggle={() => setDarkMode(!darkMode)}
					/>
				</Grid>
				<Grid sx={{ width: 200, display: { sm: "none", md: "inline" } }}>
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
				<Grid sm>
					<Stack
						spacing={{ xs: 1, sm: 2 }}
						sx={{ "& > *": { md: { flexGrow: 1 } } }}
						useFlexGap
						flexWrap="wrap"
						direction="row"
						justifyContent="center"
					>
						{arr.map((i) => (
							<MediaCard key={i} />
						))}
					</Stack>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}

export default App;
