import { createStore } from "vuex";
import axios from "axios";

export default createStore({
	state: {
		userData: {
			firstName: "",
			lastName: "",
			phone: "",
			email: "",
			username: "",
			password: "",
		},
	},
	mutations: {
		setUserData(state, { firstName, lastName, phone, email, username, password }) {
			state.userData = { firstName, lastName, phone, email, username, password };
			console.log(state.userData);
		},
	},
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
		async loginUser(context, { username, password }) {
			try {
				const res = await axios.post("/api/auth/user", {
					username,
					password,
				});

				return { error: null, response: res };
			} catch (error) {
				return { error: error.response, response: null };
			}
		},
		async getUserData(context) {
			try {
				const res = await axios.get("/api/user");

				context.commit("setUserData", res.data);
				return { error: null, response: res };
			} catch (error) {
				return { error: error.response, response: null };
			}
		},
	},
	modules: {},
});
