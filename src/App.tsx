import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import Container from "@mui/material/Container";
import ButtonAppBar from "./mui/ButtonAppBar";
import FormControl from "./mui/FormControl";
import ExpenseList, { ItemCart } from "./components/ExpenseTracker/ExpenseList";
import ExpenseFilter from "./components/ExpenseTracker/ExpenseFilter";
import ExpenseForm from "./components/ExpenseTracker/ExpenseForm";
import { Typography } from "@mui/material";

// interface Props {
// 	expenseList: ItemCart[];
// }

function App() {
	const [darkMode, setDarkMode] = useState(true);

	const darkTheme = createTheme({
		palette: {
			mode: darkMode ? "dark" : "light",
		},
	});

	const [expenses, setExpenses] = useState<ItemCart[]>([
		{ id: 1, description: "Screwdriver", category: "Utility", amount: 10 },
		{ id: 2, description: "Chair", category: "Furniture", amount: 30 },
		{ id: 3, description: "T-Shirt", category: "Cloths", amount: 20 },
		{ id: 4, description: "Hammer", category: "Utility", amount: 5 },
		{ id: 5, description: "Sofa", category: "Furniture", amount: 40 },
	]);
	const [filter, setFilter] = useState("");

	const visibility = filter
		? expenses.filter((expense) => expense.category === filter)
		: expenses;

	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<ButtonAppBar status={darkMode} onToggle={() => setDarkMode(!darkMode)} />
			<Container>
				<Typography align="center" variant="h4" gutterBottom>
					Expense Calculator
				</Typography>
				<ExpenseForm
					onSubmit={(expense) =>
						setExpenses([{ ...expense, id: expenses.length + 1 }, ...expenses])
					}
				/>
				<ExpenseFilter
					expensesLength={expenses.length}
					onFilter={(category) => setFilter(category)}
				/>
				<ExpenseList
					onClear={() => setExpenses([])}
					expenses={visibility}
					onDelete={(id) =>
						setExpenses(expenses.filter((expense) => expense.id !== id))
					}
				/>
			</Container>
		</ThemeProvider>
	);
}

export default App;
