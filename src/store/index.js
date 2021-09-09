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
		userNotes: {},
	},
	mutations: {
		setUserData(state, { firstName, lastName, phone, email, username, password }) {
			state.userData = { firstName, lastName, phone, email, username, password };
		},
		setUserNotes(state, { notes }) {
			state.userNotes = notes;
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
		async getUserNotes(context) {
			try {
				const res = await axios.get("/api/user/notes");
				context.commit("setUserNotes", { notes: res.data });

				return { error: null, response: res };
			} catch (error) {
				return { error: error.response, response: null };
			}
		},
	},
	modules: {},
});
