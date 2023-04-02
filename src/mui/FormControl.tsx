import { TextField, Button, FormHelperText } from "@mui/material";
import { useForm } from "react-hook-form";

interface FormData {
	name: string;
	age: number;
	email: string;
}

const FormControl = () => {
	let sxForm = { mb: 3 };

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	return (
		<form
			onSubmit={handleSubmit((data) => {
				console.log(data);
			})}
		>
			<TextField
				label="Name"
				variant="outlined"
				fullWidth
				helperText={
					errors.name?.type === "required"
						? "Name field Required"
						: errors.name?.type === "minLength"
						? "Name field most be at least 3 characters."
						: null
				}
				sx={sxForm}
				error={errors.name && true}
				{...register("name", { required: true, minLength: 3 })}
			/>

			<TextField
				label="Email"
				variant="outlined"
				fullWidth
				sx={sxForm}
				{...register("email", { pattern: /\w+@\w+\.\w{2,}/g })}
				error={errors.email && true}
				helperText={
					errors.email?.type === "required"
						? "Email field Required"
						: errors.email?.type === "pattern"
						? "Invalid Email Field."
						: null
				}
			/>
			<TextField
				label="Age"
				variant="outlined"
				fullWidth
				type="number"
				sx={sxForm}
				{...register("age", { valueAsNumber: true, min: 18 })}
				error={errors.age && true}
				helperText={
					errors.age?.type === "required"
						? "Age field Required"
						: errors.age?.type === "min"
						? "Age Field must be at least 18."
						: null
				}
			/>
			<Button variant="contained" type="submit">
				Submit
			</Button>
		</form>
	);
};

export default FormControl;
