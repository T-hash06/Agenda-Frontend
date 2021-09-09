<template>
	<div id="header-container">
		<h1>{{ content }}</h1>
	</div>
</template>

<script>
export default {
	props: ["content"],
};
</script>

<style scoped>
#header-container {
	display: flex;
	align-items: center;
	width: 100%;
	height: 100%;

	background-color: #6200ee;

	box-shadow: 0px 2px 6px #8d8d8d;
}
#header-container h1 {
	font-size: 28px;
	font-family: Roboto-bold;
	color: white;
	margin-left: 35px;
}
</style>
