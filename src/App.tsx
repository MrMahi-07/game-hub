import ListGroup from "./assets/components/ListGroup";

const App = () => {
	let items = ["One", "Two", "Three", "Four", "Five"];

	return (
		<div>
			<ListGroup name="List of Items" items={items} />
		</div>
	);
};

export default App;
