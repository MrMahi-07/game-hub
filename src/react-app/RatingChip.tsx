import Chip from "@mui/joy/Chip";

interface Props {
	critic: number;
}

const RatingChip = ({ critic }: Props) => {
	return (
		<Chip color="success" size="md" variant="soft" sx={{ borderRadius: 5 }}>
			{critic}
		</Chip>
	);
};

export default RatingChip;
