import Masonry from "@mui/lab/Masonry";
import GameCard from "./GameCard";
import SkeletonCard from "./SkeletonCard";
import Typography from "@mui/material/Typography";
import useGames, { Game } from "../hooks/useGames";
import { GameQuery } from "../hooks/useGames";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";

interface Props {
	gameQuery: GameQuery;
	onSelected: (id: number[]) => void;
	onPageEnd: (page: number) => void;
}

const Main = ({ gameQuery, onSelected, onPageEnd }: Props) => {
	const { error, isLoading, gameData, nextPage } = useGames(gameQuery);
	const [page, setPage] = useState(1);

	if (error)
		return (
			<Typography color={"error"} gutterBottom variant="h3" component="div">
				{error}
			</Typography>
		);

	// useEffect(() => {
	// 	setState([...data]);

	// 	return () => setState([]);
	// }, [gameQuery]);

	const [state, setState] = useState<Game[]>([]);

	const limit = 60;

	const HandleFetch = () => {
		setPage(page + 1);
		onPageEnd(page + 1);
	};

	return (
		<Box width={1}>
			<InfiniteScroll
				dataLength={gameData.length}
				next={HandleFetch}
				hasMore={gameData.length < limit}
				loader={<h4>Loading...</h4>}
				endMessage={<h4>Thankyou...</h4>}
			>
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
						: gameData.map((d, i) => (
								<GameCard
									key={i}
									game={d}
									onSelected={(id) => onSelected(id)}
								/>
						  ))}
				</Masonry>
			</InfiniteScroll>
		</Box>
	);
};

export default Main;
