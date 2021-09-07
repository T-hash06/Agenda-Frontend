<template>
	<div id="main-container">
		<TitleHeader content="Signup"></TitleHeader>
		<div id="inputs-container">
			<TextInput placeholder="username" v-model="firstName" width="80"></TextInput>
			<TextInput placeholder="lastname" v-model="lastName" width="80"></TextInput>
			<TextInput placeholder="phone" v-model="phone" width="80"></TextInput>
			<TextInput placeholder="email" v-model="email" width="80"></TextInput>
			<TextInput placeholder="username" v-model="username" width="80"></TextInput>
			<TextInput placeholder="password" v-model="password" width="80"></TextInput>
		</div>
		<div id="buttons-container">
			<RectButton content="signup" width="80" main></RectButton>
			<RectButton content="login" width="80" @click="this.$router.push('login')"></RectButton>
		</div>
	</div>
</template>

<script>
import RectButton from "@/components/RectButton.vue";
import TitleHeader from "@/components/TitleHeader.vue";
import TextInput from "@/components/TextInput.vue";

export default {
	data() {
		return {
			firstName: "",
			lastName: "",
			phone: "",
			email: "",
			username: "",
			password: "",
		};
	},
	components: {
		RectButton,
		TitleHeader,
		TextInput,
	},
};
</script>

<style scoped>
#main-container {
	display: grid;
	grid-template-rows: 80px auto auto;

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

#buttons-container {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-content: flex-start;
}
</style>
