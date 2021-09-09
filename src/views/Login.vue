<template>
	<div id="main-container">
		<TitleHeader content="Login"></TitleHeader>
		<div id="inputs-container">
			<TextInput placeholder="username" v-model="username" width="80"></TextInput>
			<TextInput placeholder="password" v-model="password" width="80" password></TextInput>
		</div>
		<div id="buttons-container">
			<RectButton content="login" width="80" main @click="loginAuthUser"></RectButton>
			<RectButton content="signup" width="80" @click="this.$router.push('signup')"></RectButton>
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
			title: "Hola",
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
		...mapActions(["loginUser"]),
		async loginAuthUser() {
			if (!(this.checkValid("username") && this.checkValid("password"))) return;

			const res = await this.loginUser({ username: this.username.content, password: this.password.content });
			if (res.error) {
				switch (res.error.status) {
					case 404: {
						this.username.errors = ["User not found"];
						break;
					}
					case 403: {
						this.password.errors = ["Incorrect password"];
						break;
					}
				}
			} else {
				this.$router.push("/");
			}
		},
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
	},
};
</script>

<style scoped>
#main-container {
	display: grid;
	grid-template-rows: 80px 180px auto;

	width: 100%;
	height: 100%;

	background-color: #fff;
}

#inputs-container {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-content: flex-start;
}

.input-container {
	width: 80%;
	height: fit-content;
}
#buttons-container {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-content: flex-start;
}
.button-container {
	width: 80%;
}

@media screen and (min-width: 815px) {
	#main-container {
		width: 650px;
		height: 600px;
		overflow: hidden;
	}
}
</style>
