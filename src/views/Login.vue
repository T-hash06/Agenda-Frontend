<template>
	<div id="main-container">
		<TitleHeader content="Login"></TitleHeader>
		<div id="inputs-container">
			<div class="input-container">
				<TextInput
					placeholder="username"
					v-model="username"
					:modelValue="username"
					@update:modelValue="username = $event"
				></TextInput>
			</div>
			<div class="input-container">
				<TextInput placeholder="password" v-model="password"></TextInput>
			</div>
		</div>
		<div id="buttons-container">
			<div class="button-container">
				<RectButton content="login" main></RectButton>
			</div>
			<div class="button-container">
				<RectButton content="signup"></RectButton>
			</div>
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
			username: "thomas",
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
