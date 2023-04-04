import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "3b58331ad3a4408f9ab519164672db72",
	},
});
