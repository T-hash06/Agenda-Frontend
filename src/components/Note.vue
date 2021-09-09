<template>
	<div class="single-note-container">
		<h1>{{ title }}</h1>
		<p>{{ content }}</p>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	props: ["content", "title"],
};
</script>

<style scoped>
.single-note-container {
	width: calc(100% - 18px);
	min-height: 150px;

	background-color: rgb(255, 255, 255);
	box-shadow: 2px 2px 5px rgb(192, 192, 192);

	margin-top: 15px;
}
.single-note-container h1 {
	height: 40px;

	font-size: 20px;
	margin: 10px;

	color: rgb(82, 82, 82);
	border: solid rgb(189, 189, 189);
	border-width: 0px 0px 1px 0px;

	text-transform: capitalize;
}

.single-note-container p {
	font-size: 16px;
	margin: 20px;

	color: #999999;
}
</style>
