import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import { Button, IconButton, Stack, TextField } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import BasicAlerts from "./mui/BasicAlerts";

function App() {
	const [darkMode, setDarkMode] = useState(false);

	const darkTheme = createTheme({
		palette: {
			mode: darkMode ? "dark" : "light",
		},
	});

	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<IconButton
				aria-label="delete"
				onClick={() => setDarkMode(!darkMode)}
			>
				{darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
			</IconButton>
			<BasicAlerts />
			<Stack direction={"row"} spacing={2} margin={2}>
				<TextField
					id="outlined-basic"
					label="Name"
					variant="outlined"
				/>
				<Button variant="outlined">Outlined</Button>
			</Stack>
		</ThemeProvider>
	);
}

export default App;
