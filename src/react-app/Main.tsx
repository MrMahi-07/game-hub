import Masonry from "@mui/lab/Masonry";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import { CircularProgress, Stack } from "@mui/joy";
import SkeletonCard from "./SkeletonCard";
import MouseEvents from "./MouseEvents";

interface Props {
	genreId: number | null;
}

const Main = ({ genreId }: Props) => {
	const { error, isLoading, data } = useGames(genreId);

	return (
		<Masonry
			columns={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 4 }}
			spacing={3.5}
			sx={{ alignContent: "center" }}
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
	);
};

export default Main;
