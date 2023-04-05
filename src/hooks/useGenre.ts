import { useData } from "./useData";

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

export interface genre {
	id: number;
	name: string;
	slug: string;
	image_background: string;
}

const useGenres = () => useData<genre>("/genres");

export default useGenres;
