import React from "react";
import {
	SiNintendo,
	SiXbox,
	SiLinux,
	SiApple,
	SiPlaystation,
	SiWindows,
} from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { AiFillAndroid } from "react-icons/ai";
import { Icon, Stack } from "@mui/material";
import { Platform } from "../services/rawg-http";

interface Props {
	platform: Platform[];
}
//
const Platforms = ({ platform }: Props) => {
	const platforms = [
		{ id: 1, name: "PC", slug: "pc", icon: <SiWindows /> },
		{
			id: 2,
			name: "PlayStation",
			slug: "playstation",
			icon: <SiPlaystation />,
		},
		{ id: 3, name: "Xbox", slug: "xbox", icon: <SiXbox /> },
		{ id: 4, name: "iOS", slug: "ios", icon: <MdPhoneIphone /> },
		{ id: 8, name: "Android", slug: "android", icon: <AiFillAndroid /> },
		{ id: 5, name: "Apple Macintosh", slug: "mac", icon: <SiApple /> },
		{ id: 6, name: "Linux", slug: "linux", icon: <SiLinux /> },
		{ id: 7, name: "Nintendo", slug: "nintendo", icon: <SiNintendo /> },
	];

	return (
		<Stack direction={"row"} spacing={1}>
			{platforms
				.filter((p) => platform.some((x) => x.id == p.id))
				.map((p) => (
					<span key={p.id}>{p.icon}</span>
				))}
		</Stack>
	);
};

export default Platforms;
