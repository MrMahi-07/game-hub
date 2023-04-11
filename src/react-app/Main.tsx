import Masonry from "@mui/lab/Masonry";
import GameCard from "./GameCard";
import SkeletonCard from "./SkeletonCard";
import Typography from "@mui/material/Typography";
import useGames from "../hooks/useGames";
import { GameQuery } from "../hooks/useGames";

interface Props {
	gameQuery: GameQuery;
	onSelected: (id: number[]) => void;
}

const Main = ({ gameQuery, onSelected }: Props) => {
	const { error, isLoading, data } = useGames(gameQuery);

	if (error)
		return (
			<Typography color={"error"} gutterBottom variant="h3" component="div">
				{error}
			</Typography>
		);

	return (
		<>
			<Masonry
				columns={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 4 }}
				spacing={4}
				sx={{
					alignContent: { sm: "center", md: "flex-start" },
					mx: "auto",
				}}
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
					: data.map((d) => (
							<GameCard
								key={d.id}
								game={d}
								onSelected={(id) => onSelected(id)}
							/>
					  ))}
			</Masonry>
		</>
	);
};

export default Main;
