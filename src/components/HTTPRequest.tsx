import {
	Button,
	List,
	ListItemButton,
	ListItemText,
	Typography,
} from "@mui/material";
import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import userService, { User } from "../services/user-service";

const HTTPRequest = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [error, setError] = useState("");

	useEffect(() => {
		const { request, close } = userService.getAllUsers();
		request
			.then((res) => {
				console.log(res);
				// setUsers(res.data);
			})
			.catch((e) => {
				if (e instanceof CanceledError) return;
				setError(e.message);
			});

		return close();
	}, []);

	function deleteUser(id: number) {
		const originalUsers = [...users];
		setUsers(users.filter((user) => id !== user.id));

		userService.deleteUser(id).catch((e) => {
			setUsers(originalUsers);
			setError(e.message);
		});
	}

	function updateUser(user: User) {
		const originalUsers = [...users];

		const userUpdate = { ...user, name: user.name + " !!" };

		setUsers(users.map((u) => (user.id == u.id ? userUpdate : u)));

		userService.updateUser(user).catch((e) => {
			setError(e.message);
			setUsers(originalUsers);
		});
	}

	function addUser() {
		const originalUsers = [...users];
		const newUser = { id: 0, name: "Mahesh" };

		setUsers([newUser, ...users]);

		userService
			.addUser(newUser)
			.then(({ data }) => setUsers([data, ...users]))
			.catch((e) => {
				setError(e.message);
				setUsers(originalUsers);
			});
	}

	return (
		<>
			<Typography color={error ? "error" : "none"} variant="h5" gutterBottom>
				{error ? error : "Users Profile"}
			</Typography>
			<Button onClick={() => addUser()} variant="contained">
				Create new User
			</Button>
			<List>
				{users.map((user) => (
					<ListItemButton key={user.id}>
						<ListItemText primary={user.id + " " + user.name} />
						<Button
							sx={{ mr: 3 }}
							onClick={() => updateUser(user)}
							variant="outlined"
						>
							Update
						</Button>
						<Button
							color="error"
							onClick={() => deleteUser(user.id)}
							variant="outlined"
						>
							Delete
						</Button>
					</ListItemButton>
				))}
			</List>
		</>
	);
};

export default HTTPRequest;
