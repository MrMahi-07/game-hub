import { Box, makeStyles } from "@mui/material";
import ytApi from "../services/yt-api";
import { useState } from "react";

interface Props {
	videoId: string;
}

function YtVideo({ videoId }: Props) {
	const [myData, setMyData] = useState<any>(
		JSON.parse(localStorage.getItem("gameTrailer") || "{}")
	);
	ytApi
		.get("/search", {
			params: {
				q: videoId + " video game trailer",
			},
		})
		.then(({ data: { items } }) => {
			let info = {
				id: 4200,
				name: "Portal 2",
				slug: "portal-2",
				title: items[0].snippet.title,
				description: items[0].snippet.description,
				videoId: items[0].id.videoId,
				thumbnails: items[0].snippet.thumbnails,
			};

			localStorage.setItem("gameTrailer", JSON.stringify(info));

			console.log(myData);
		})
		.catch((e) => {
			console.log(e);
		});

	return <div>{myData.name}</div>;
}

export default YtVideo;
