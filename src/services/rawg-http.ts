import rawgApi from "./rawg-api";

class RawgHtml {
	endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	getAll<T>() {
		const controller = new AbortController();

		const request = rawgApi.get<T>(this.endpoint, {
			signal: controller.signal,
		});

		return { request, cancel: () => controller.abort() };
	}
}

const create = (endpoint: string) => new RawgHtml(endpoint);

export default create;
