import { number } from "zod";
import { useData } from "./useData";
import { Platform } from "./usePlatform";

export interface Game {
	id: number;
	name: string;
	slug: string;
	rating: number;
	parent_platforms: { platform: Platform }[];
	background_image: string;
	rating_top: number;
	metacritic: number;
	added: number;
	short_screenshots: { image: string }[];
}

export interface GameQuery {
	genre: number | null;
	platform: number | null;
	sort: string;
	search: string;
}

const useGames = (gameQuery: GameQuery) =>
	useData<Game>(
		"/games",
		{
			params: {
				genres: gameQuery.genre,
				parent_platforms: gameQuery.platform,
				ordering: gameQuery.sort,
				search: gameQuery.search,
			},
		},
		[gameQuery]
	);

export default useGames;
