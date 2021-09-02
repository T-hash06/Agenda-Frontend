<template>
	<button>{{ content }}</button>
</template>

<script>
export default {
	props: ["content"],
	data() {
		return {};
	},
};
</script>

<style scoped>
button {
	width: 100%;
	height: 80px;

	border: none;
	outline: none;
	cursor: pointer;

	background-color: #8c00ff;
	color: #fff;
}
</style>
