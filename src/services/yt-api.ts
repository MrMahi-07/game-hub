import axios from "axios";

const KEY = "AIzaSyAh0gsTzOgV73tPVhQbkeE9iprkc8aQ35Q";

export default axios.create({
	baseURL: "https://youtube.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		maxResults: 1,
		key: KEY,
	},
});
