import Masonry from "@mui/lab/Masonry";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import SkeletonCard from "./SkeletonCard";
import { GameQuery } from "../hooks/useGames";

interface Props {
	id: number;
	link: string;
}

const Main = (gameQuery: GameQuery) => {
	const { error, isLoading, data } = useGames(gameQuery);

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
