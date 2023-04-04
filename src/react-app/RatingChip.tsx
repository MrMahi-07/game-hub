import { Chip } from "@mui/material";
import React from "react";

const RatingChip = () => {
	return (
		<Chip
			label="98"
			color="success"
			variant="outlined"
			sx={{ borderRadius: 2, fontSize: 15 }}
		/>
	);
};

export default RatingChip;
