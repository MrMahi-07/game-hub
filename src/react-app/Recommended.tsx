import { Avatar } from "@mui/material";
import React from "react";
import skip from "../assets/skip.webp";

const Recommended = () => {
	return (
		<Avatar
			alt="skip"
			src={skip}
			sx={{ display: "inline-flex", width: 28, ml: 1, height: 28 }}
		/>
	);
};

export default Recommended;
