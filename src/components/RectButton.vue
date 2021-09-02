<template>
	<button :class="{ main: main != null }">{{ content }}</button>
</template>

<script>
export default {
	props: ["content", "main"],
	data() {
		return {};
	},
};
</script>

<style scoped>
button {
	width: 100%;
	height: 55px;

	font-size: 18px;
	text-transform: capitalize;

	margin-top: 15px;

	background-color: #fff;
	color: #8c00ff;

	outline: 1px #8c00ff solid;
	border: none;
	cursor: pointer;
}
button.main {
	outline: none;

	background-color: #8c00ff;
	color: #fff;
}
</style>
