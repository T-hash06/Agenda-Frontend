<template>
	<div id="main-container">
		<TitleHeader content="Login"></TitleHeader>
		<div id="inputs-container">
			<TextInput placeholder="username" v-model="username" width="80"></TextInput>
			<TextInput placeholder="password" v-model="password" width="80" password></TextInput>
		</div>
		<div id="buttons-container">
			<RectButton content="login" width="80" main></RectButton>
			<RectButton content="signup" width="80" @click="this.$router.push('signup')"></RectButton>
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
};
</script>

<style scoped>
#main-container {
	display: grid;
	grid-template-rows: 80px 180px auto;

	width: 100%;
	height: 100%;

	max-width: 800px;
	max-height: 800px;

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
</style>
