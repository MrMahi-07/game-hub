import { useState } from "react";

import React from "react";

const YoutubePlayer = () => {
	let urEmbeddedUrl =
		"https://www.youtube-nocookie.com/embed/YrtCnL62pB8?controls=0&amp;autoplay=1";
	const [play, setPlay] = useState(false);
	const url = play ? "urEmbeddedUrl?autoplay=1" : urEmbeddedUrl;
	return (
		<>
			<iframe
				src={url}
				title={""}
				height="100%"
				width="100%"
				allow="autoplay;"
			/>
			<button onClick={() => setPlay(true)}>play</button>
		</>
	);
};

export default YoutubePlayer;
