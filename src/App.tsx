import ListGroup from "./assets/components/ListGroup";

const App = () => {
	let items = ["One", "Two", "Three", "Four", "Five"];
	const handleSelectedItem = (item: string) => {
		console.log(item);
	};

	return (
		<div>
			<ListGroup
				name="List of Items"
				items={items}
				onSelectedItem={(item) => handleSelectedItem(item)}
			/>
		</div>
	);
};

export default App;
