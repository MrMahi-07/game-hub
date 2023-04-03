import apiClient from "./api-client";

export interface User {
	id: number;
	name: string;
}

class UserService {
	getAllUsers() {
		const controller = new AbortController();

		const request = apiClient.get<User[]>("/users", {
			signal: controller.signal,
		});

		return { request, close: () => controller.abort() };
	}

	deleteUser(userId: number) {
		return apiClient.delete("/users/" + userId);
	}

	updateUser(user: User) {
		return apiClient.patch("/users/" + user.id, user);
	}

	addUser(user: User) {
		return apiClient.post("/users/", user);
	}
}

export default new UserService();
