import rawgApi from "./rawg-api";

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
}

export interface FetchGameResponse {
	count: number;
	results: Game[];
}

class RawgHtml {
	endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	getAll() {
		const controller = new AbortController();

		const request = rawgApi.get<FetchGameResponse>(this.endpoint, {
			signal: controller.signal,
		});

		return { request, cancel: () => controller.abort() };
	}
}

const create = (endpoint: string) => new RawgHtml(endpoint);

export default create;
