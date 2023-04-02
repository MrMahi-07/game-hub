import { TextField, Button } from "@mui/material";
import { FormEvent, useRef } from "react";
import { useForm } from "react-hook-form";

const FormControl = () => {
	let sxForm = { mb: 3 };
	const nameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const ageRef = useRef<HTMLInputElement>(null);

	const person = { name: "", age: 0 };

	const { register } = useForm();
	console.log(register);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (nameRef.current && ageRef.current) {
			person.name = nameRef.current.value;
			person.age = parseInt(ageRef.current.value);
		}
		console.log(person);
	};

	return (
		<form onSubmit={handleSubmit}>
			<TextField
				id="outlined-basic"
				label="Name"
				variant="outlined"
				fullWidth
				helperText="Please select your currency"
				sx={sxForm}
				inputRef={nameRef}
			/>
			<TextField
				// id="outlined-basic"
				label="Email"
				variant="outlined"
				fullWidth
				type="email"
				helperText="Please select your currency"
				sx={sxForm}
				inputRef={emailRef}
			/>
			<TextField
				// id="outlined-basic"
				label="Age"
				variant="outlined"
				fullWidth
				type="number"
				helperText="Please select your currency"
				sx={sxForm}
				inputRef={ageRef}
			/>
			<Button variant="contained" type="submit">
				Submit
			</Button>
		</form>
	);
};

export default FormControl;
