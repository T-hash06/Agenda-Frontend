import { createStore } from "vuex";
import axios from "axios";

export default createStore({
	state: {},
	mutations: {},
	actions: {
		async createUser(context, { firstName, lastName, phone, email, username, password }) {
			try {
				const res = await axios.post("/api/user", {
					firstName,
					lastName,
					phone,
					email,
					username,
					password,
				});

				return { error: null, response: res };
			} catch (error) {
				return { error: error.response, response: null };
			}
		},
	},
	modules: {},
});
