const imageDecompress = (imageUrl: string) => {
	const idx = imageUrl.indexOf("media/") + 6;

	return `${imageUrl.substring(0, idx)}crop/600/400/${imageUrl.substring(idx)}`;
};

export default imageDecompress;
