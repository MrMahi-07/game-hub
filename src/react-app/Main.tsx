import Masonry from "@mui/lab/Masonry";
import useGames, { Game } from "../hooks/useGames";
import GameCard from "./GameCard";
import SkeletonCard from "./SkeletonCard";
import { GameQuery } from "../hooks/useGames";
import useTrailer from "../hooks/useTrailer";
import { useEffect, useState } from "react";
import axios from "axios";
import rawgApi from "../services/rawg-api";
import { Trailer } from "../hooks/useTrailer";

interface Props {
	id: number;
	link: string;
}

// const getTrailer = (data: number[]) => {
// 	const requests = data.map((x) => rawgApi.get(`/games/${x}/movies`));
// 	const [trailer, setTrailer] = useState();

// 	Promise.all(requests)
// 		.then((res) => {
// 			let lst = res
// 				.filter(({ data }) => data.results.length > 0)
// 				.map(({ data }) => {
// 					if (data.results.length > 0)
// 						return {
// 							id: data.results[0].id,
// 							link: data.results[0].data[480],
// 						};
// 				});
// 		})
// 		.catch((error) => {
// 			console.log(error);
// 		});
// 	// useEffect(() => {
// 	// 	getTrailer;
// 	// }, []);

// 	// return ab;
// };

const Main = (gameQuery: GameQuery) => {
	const { error, isLoading, data } = useGames(gameQuery);
	// let d = data.map((x) => x.id);
	// console.log(d);

	// getTrailer(d);

	return (
		<>
			<Masonry
				columns={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 4 }}
				spacing={3.5}
				sx={{ alignContent: { sm: "center", md: "flex-start" }, mx: "auto" }}
			>
				{isLoading
					? Array(20)
							.fill(0)
							.map((v, i) => (
								<SkeletonCard
									isLoading={isLoading}
									count={i}
									key={i}
								></SkeletonCard>
							))
					: data.map((d) => <GameCard key={d.id} game={d} />)}
			</Masonry>
		</>
	);
};

export default Main;
