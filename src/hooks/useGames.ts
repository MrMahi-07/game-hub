import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import create, { Game } from "../services/rawg-http";

export const useGames = () => {
	const [games, setGames] = useState<Game[]>([]);
	const [error, setError] = useState("");
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		const { request, cancel } = create("/games").getAll();
		request
			.then(({ data }) => {
				{
					setGames(data.results);
					setLoading(false);
				}
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setLoading(false);
				setError(err.message);
			});

		return () => cancel();
	}, []);
	return { games, error, isLoading };
};
