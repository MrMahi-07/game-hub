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

const useGames = (genreId: number | null, platformId: number | null) =>
	useData<Game>(
		"/games",
		{ params: { genres: genreId, parent_platforms: platformId } },
		[genreId, platformId]
	);

export default useGames;
