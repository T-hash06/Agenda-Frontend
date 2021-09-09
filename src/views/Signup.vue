<template>
	<div id="main-container">
		<TitleHeader content="Signup"></TitleHeader>
		<div id="inputs-container">
			<TextInput placeholder="firstname" v-model="firstName" width="80"></TextInput>
			<TextInput placeholder="lastname" v-model="lastName" width="80"></TextInput>
			<TextInput placeholder="phone" v-model="phone" width="80"></TextInput>
			<TextInput placeholder="email" v-model="email" width="80" email validate></TextInput>
			<TextInput placeholder="username" v-model="username" width="80"></TextInput>
			<TextInput placeholder="password" v-model="password" width="80" password validate></TextInput>
		</div>
		<div id="buttons-container">
			<RectButton content="signup" width="80" main @click="signupCreateUser"></RectButton>
			<RectButton content="login" width="80" @click="this.$router.push('login')"></RectButton>
		</div>
	</div>
</template>

<script>
import RectButton from "@/components/RectButton.vue";
import TitleHeader from "@/components/TitleHeader.vue";
import TextInput from "@/components/TextInput.vue";

import { mapActions } from "vuex";

export default {
	data() {
		return {
			firstName: { content: "" },
			lastName: { content: "" },
			phone: { content: "" },
			email: { content: "" },
			username: { content: "" },
			password: { content: "" },
		};
	},
	components: {
		RectButton,
		TitleHeader,
		TextInput,
	},
	methods: {
		checkValid(prop) {
			if (this[prop].content.length == 0) {
				this[prop].errors = ["Required field"];
				return false;
			}
			if (this[prop].errorCount) {
				if (this[prop].errorCount != 0) {
					return false;
				} else {
					return true;
				}
			}
			return true;
		},
		async signupCreateUser() {
			if (
				!(
					this.checkValid("firstName") &&
					this.checkValid("lastName") &&
					this.checkValid("phone") &&
					this.checkValid("email") &&
					this.checkValid("username") &&
					this.checkValid("password")
				)
			)
				return;

			const res = await this.createUser({
				firstName: this.firstName.content,
				lastName: this.lastName.content,
				phone: this.phone.content,
				email: this.email.content,
				username: this.username.content,
				password: this.password.content,
			});

			if (res.error) {
				switch (res.error.status) {
					case 409: {
						let conflictParam = res.error.data.conflictParam;
						conflictParam = conflictParam == "userName" ? "username" : conflictParam;
						this[conflictParam].errors = ["Already exist"];
						break;
					}
				}
			} else {
				this.$router.push("/login");
			}
		},

		...mapActions(["createUser"]),
	},
};
</script>

<style scoped>
#main-container {
	display: grid;
	grid-template-rows: 80px auto auto;

	width: 100%;
	height: 100%;
	overflow-x: hidden;

	background-color: #fff;
}

#inputs-container {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-content: flex-start;
}

#buttons-container {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-content: flex-start;
}

@media screen and (min-width: 815px) {
	#main-container {
		width: 650px;
		height: 850px;
	}
}
</style>
