import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import Container from "@mui/material/Container";
import ButtonAppBar from "./mui/ButtonAppBar";
import FormControl from "./mui/FormControl";

function App() {
	const [darkMode, setDarkMode] = useState(true);

	const darkTheme = createTheme({
		palette: {
			mode: darkMode ? "dark" : "light",
		},
	});

	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<ButtonAppBar status={darkMode} onToggle={() => setDarkMode(!darkMode)} />

			<Container>
				<FormControl />
			</Container>
		</ThemeProvider>
	);
}

export default App;
