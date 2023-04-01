import AlertButton from "./assets/components/AlertButton";

const App = () => {
	const text = "Lorem ipsum, dolor sit amet.";

	return (
		<AlertButton alertColor="danger" button="Show Alert?">
			{text}
		</AlertButton>
	);
};

export default App;
