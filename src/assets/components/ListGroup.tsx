import { MouseEvent, useState } from "react";

interface Props {
	name: string;
	items: string[];
}

const ListGroup = ({ name, items }: Props) => {
	// let items = ["One", "Two", "Three", "Four"];
	const [selectedIndex, setSelectedIndex] = useState(-1);

	const getMessages = () => {
		return (
			items.length === 0 && <p className="text-danger">No items found</p>
		);
	};

	const handleClick = (idx: number) => {
		setSelectedIndex(idx);
		console.log(selectedIndex);
	};

	return (
		<>
			<h3>List Group Static</h3>

			<ul className="list-group ">
				<li className="list-group-item ">An item</li>
				<li className="list-group-item list-group-item-dark">
					A second item
				</li>
				<li className="list-group-item">A third item</li>
				<li className="list-group-item">A fourth item</li>
				<li className="list-group-item">And a fifth one</li>
			</ul>
			<h3 className="mt-4">{name}</h3>
			{getMessages()}
			<ul className="list-group">
				{items.map((item, idx) => (
					<li
						role="button"
						className={`list-group-item list-group-item-action ${
							idx == selectedIndex && "active"
						}`}
						key={item}
						onClick={() => handleClick(idx)}
					>
						{item}
					</li>
				))}
			</ul>
			<button className="btn btn-primary mt-3">Check out</button>
		</>
	);
};

export default ListGroup;
