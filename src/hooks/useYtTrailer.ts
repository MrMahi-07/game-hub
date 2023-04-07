import { Box, makeStyles } from "@mui/material";
import ytApi from "../services/yt-api";
import { useEffect, useState } from "react";
import { Game } from "../hooks/useGames";
import { log } from "console";
import { CanceledError } from "axios";

export interface YtProps {
	id: number;
	name: string;
	slug: string;
	title: string;
	description: string;
	videoId: string;
	url: string;
	thumbnails: any;
}

function useYtTrailer(game: Game) {
	const [data, setData] = useState({} as YtProps);
	const [error, setError] = useState("");

	useEffect(() => {
		const controller = new AbortController();

		ytApi
			.get("/search", {
				params: {
					q: game.name + " video game trailer",
				},
				signal: controller.signal,
			})
			.then(({ data: { items } }) => {
				let info = {
					id: game.id,
					name: game.name,
					slug: game.slug,
					title: items[0].snippet.title,
					description: items[0].snippet.description,
					videoId: items[0].id.videoId,
					url: `https://www.youtube.com/embed/${items[0].id.videoId}?controls=0&amp;start=7`,
					thumbnails: items[0].snippet.thumbnails,
				};
				setData(info);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
			});

		return () => controller.abort();
	}, [game]);

	return { data, error };
}

export default useYtTrailer;

// <iframe
// 	width="560"
// 	height="315"
// 	src="https://www.youtube.com/embed/YrtCnL62pB8?controls=0&amp;start=7"
// 	title="YouTube video player"
// 	frameborder="0"
// 	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
// 	allowfullscreen
// ></iframe>;
