<template>
	<div id="main-container">
		<h1>Hola desde home {{ userData.firstName }}</h1>
	</div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
	data() {
		return {};
	},
	computed: {
		...mapState(["userData"]),
	},
	methods: {
		...mapActions(["getUserData"]),
	},
	async created() {
		const res = await this.getUserData();
		if (res.error) {
			switch (res.error.status) {
				case 401: {
					this.$router.push("/login");
					break;
				}
			}
		}
	},
};
</script>

<style scoped>
#main-container {
	width: 100%;
	height: 100%;

	background-color: #fff;
	color: #383838;
}
</style>
