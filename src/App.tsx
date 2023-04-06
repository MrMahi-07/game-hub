import Main from "./react-app/Main";
import Grid from "@mui/joy/Grid";

import NavBar from "./react-app/NavBarApp";

import { deepmerge } from "@mui/utils";
import type {} from "@mui/material/themeCssVarsAugmentation";
import {
	experimental_extendTheme as extendMuiTheme,
	PaletteColor,
	TypeText,
	TypeAction,
	Overlays,
	PaletteColorChannel,
	PaletteAlert,
	PaletteAppBar,
	PaletteAvatar,
	PaletteChip,
	PaletteFilledInput,
	PaletteLinearProgress,
	PaletteSlider,
	PaletteSkeleton,
	PaletteSnackbarContent,
	PaletteSpeedDialAction,
	PaletteStepConnector,
	PaletteStepContent,
	PaletteSwitch,
	PaletteTableCell,
	PaletteTooltip,
	Shadows,
	ZIndex,
} from "@mui/material/styles";
import colors from "@mui/joy/colors";
import {
	extendTheme as extendJoyTheme,
	CssVarsProvider,
	FontSize,
	Theme as JoyTheme,
	ThemeVars as JoyThemeVars,
	ThemeCssVar as JoyThemeCssVar,
} from "@mui/joy/styles";

// Joy UI components
import CssBaseline from "@mui/joy/CssBaseline";
import { CommonColors } from "@mui/material/styles/createPalette";
import { TypeBackground } from "@mui/material";
import GenreList from "./react-app/GenreList";
import { useState } from "react";
import PlatformFilter from "./react-app/PlatformFilter";

// extends Joy theme to include tokens from Material UI
declare module "@mui/joy/styles" {
	interface Palette {
		secondary: PaletteColorChannel;
		error: PaletteColorChannel;
		dividerChannel: string;
		action: TypeAction;
		Alert: PaletteAlert;
		AppBar: PaletteAppBar;
		Avatar: PaletteAvatar;
		Chip: PaletteChip;
		FilledInput: PaletteFilledInput;
		LinearProgress: PaletteLinearProgress;
		Skeleton: PaletteSkeleton;
		Slider: PaletteSlider;
		SnackbarContent: PaletteSnackbarContent;
		SpeedDialAction: PaletteSpeedDialAction;
		StepConnector: PaletteStepConnector;
		StepContent: PaletteStepContent;
		Switch: PaletteSwitch;
		TableCell: PaletteTableCell;
		Tooltip: PaletteTooltip;
	}
	interface PalettePrimary extends PaletteColor {}
	interface PaletteInfo extends PaletteColor {}
	interface PaletteSuccess extends PaletteColor {}
	interface PaletteWarning extends PaletteColor {}
	interface PaletteCommon extends CommonColors {}
	interface PaletteText extends TypeText {}
	interface PaletteBackground extends TypeBackground {}

	interface ThemeVars {
		// attach to Joy UI `theme.vars`
		shadows: Shadows;
		overlays: Overlays;
		zIndex: ZIndex;
	}
}

type MergedThemeCssVar = { [k in JoyThemeCssVar]: true };

declare module "@mui/material/styles" {
	interface Theme {
		// put everything back to Material UI `theme.vars`
		vars: JoyTheme["vars"];
	}

	// makes Material UI theme.getCssVar() sees Joy theme tokens
	interface ThemeCssVarOverrides extends MergedThemeCssVar {}
}

declare module "@mui/material/SvgIcon" {
	interface SvgIconPropsSizeOverrides extends Record<keyof FontSize, true> {}

	interface SvgIconPropsColorOverrides {
		danger: true;
		neutral: true;
	}
}

const muiTheme = extendMuiTheme({
	cssVarPrefix: "joy",
	colorSchemes: {
		light: {
			palette: {
				primary: {
					main: colors.blue[500],
				},
				grey: colors.grey,
				error: {
					main: colors.red[500],
				},
				info: {
					main: colors.purple[500],
				},
				success: {
					main: colors.green[500],
				},
				warning: {
					main: colors.yellow[200],
				},
				common: {
					white: "#FFF",
					black: "#09090D",
				},
				divider: colors.grey[200],
				text: {
					primary: colors.grey[800],
					secondary: colors.grey[600],
				},
			},
		},
		dark: {
			palette: {
				primary: {
					main: colors.blue[600],
				},
				grey: colors.grey,
				error: {
					main: colors.red[600],
				},
				info: {
					main: colors.purple[600],
				},
				success: {
					main: colors.green[600],
				},
				warning: {
					main: colors.yellow[300],
				},
				common: {
					white: "#FFF",
					black: "#09090D",
				},
				divider: colors.grey[800],
				text: {
					primary: colors.grey[100],
					secondary: colors.grey[300],
				},
			},
		},
	},
});

const joyTheme = extendJoyTheme();

const mergedTheme = {
	...muiTheme,
	...joyTheme,
	colorSchemes: deepmerge(muiTheme.colorSchemes, joyTheme.colorSchemes),
	typography: {
		...muiTheme.typography,
		...joyTheme.typography,
	},
} as unknown as ReturnType<typeof extendJoyTheme>;

mergedTheme.generateCssVars = (colorScheme) => ({
	css: {
		...muiTheme.generateCssVars(colorScheme).css,
		...joyTheme.generateCssVars(colorScheme).css,
	},
	vars: deepmerge(
		muiTheme.generateCssVars(colorScheme).vars,
		joyTheme.generateCssVars(colorScheme).vars
	) as unknown as JoyThemeVars,
});
mergedTheme.unstable_sxConfig = {
	...muiTheme.unstable_sxConfig,
	...joyTheme.unstable_sxConfig,
};

import { GameQuery } from "./hooks/useGames";
import Sort from "./react-app/Sort";

export default function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

	return (
		<CssVarsProvider theme={mergedTheme}>
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
