<template>
	<div>
		<h1>{{ content }}</h1>
	</div>
</template>

<script>
export default {
	props: ["content"],
};
</script>

<style scoped>
div {
	display: flex;
	align-items: center;
	width: 100%;
	height: 100%;

	background-color: #8c00ff;
}

h1 {
	font-size: 28px;
	font-family: Roboto;
	color: white;
	margin-left: 50px;
}
</style>
