<template>
	<div id="main-home-container">
		<div id="view-container">
			<router-view></router-view>
		</div>
		<div id="button-navbar"></div>
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
		...mapActions(["getUserData", "getUserNotes"]),
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

		const notes = await this.getUserNotes();
	},
};
</script>

<style scoped>
#main-home-container {
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-rows: auto 80px;
}
#view-container {
	width: 100%;
	height: 100%;

	background-color: #f7f7f7;
	color: #383838;
	overflow-y: auto;
}

#button-navbar {
	height: 100%;
	background-color: #6200ee;

	bottom: 0px;
	left: 0px;
}
</style>
