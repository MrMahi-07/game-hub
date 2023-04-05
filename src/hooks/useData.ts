import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import create from "../services/rawg-http";

export interface FetchResponse<T> {
	count: number;
	results: T[];
}

export const useData = <T>(endpoint: string) => {
	const [data, setData] = useState<T[]>([]);
	const [error, setError] = useState("");
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		const { request, cancel } = create(endpoint).getAll<FetchResponse<T>>();
		request
			.then(({ data }) => {
				{
					setLoading(false);
					setData(data.results);
				}
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setLoading(false);
				setError(err.message);
			});

		return () => cancel();
	}, []);
	return { data, error, isLoading };
};
