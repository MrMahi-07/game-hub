import { useData } from "./useData";

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

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
}

const useGames = () => useData<Game>("/games");

export default useGames;
