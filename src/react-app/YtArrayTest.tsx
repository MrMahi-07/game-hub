import { TypeOf } from "zod";
import gameData from "../data/GameData.json";
import data from "../data/RawTrailersData.json";
import { Game } from "../hooks/useGames";
import { YtProps } from "../hooks/useYtTrailer";

interface Data {
	id: {
		videoId: string;
	};
	snippet: {
		title: string;
		description: string;
		thumbnails: { any: any };
	};
	params: {
		q: string;
	};
}

const YtJson = (dat: Data[]) => {
	let ytData: YtProps[] = [];
	data.forEach((x) => {
		let params = x.config.params;
		let items = x.data.items;
		let len = " video game trailer";
		let search = params.q.substring(0, params.q.length - len.length);

		let info = gameData.forEach((g) => {
			if (g.name === search) {
				ytData.push({
					id: g.id,
					name: g.name,
					slug: g.slug,
					title: items[0].snippet.title,
					description: items[0].snippet.description,
					videoId: items[0].id.videoId,
					url: `https://www.youtube.com/embed/${items[0].id.videoId}?controls=0&amp;start=7`,
					thumbnails: items[0].snippet.thumbnails,
				});
			}
		});
	});
	console.log(ytData);
};

const YtArrayTest = () => {
	return <div>YtArrayTest</div>;
};

export default YtArrayTest;
