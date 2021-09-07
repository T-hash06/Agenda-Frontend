<template>
	<button :class="{ main: main != null }" :style="{ width: width + '%' }">{{ content }}</button>
</template>

<script>
export default {
	props: ["content", "main", "width"],
	data() {
		return {};
	},
};
</script>

<style scoped>
button {
	height: 55px;

	font-size: 18px;
	text-transform: capitalize;

	margin-top: 15px;

	background-color: transparent;
	color: #8c00ff;

	outline: none;
	border: 1px #8c00ff solid;
	cursor: pointer;
}
button.main {
	outline: none;

	background-color: #8c00ff;
	color: #fff;
}
</style>
