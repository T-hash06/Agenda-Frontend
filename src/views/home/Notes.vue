<template>
	<div id="main-notes-container">
		<div class="header-container">
			<TitleHeader content="Notes"></TitleHeader>
		</div>
		<div id="notes-container">
			<Note v-for="note of userNotes" :key="note.id" :title="note.title" :content="note.content"></Note>
		</div>
	</div>
</template>

<script>
import Note from "@/components/Note.vue";
import TitleHeader from "@/components/TitleHeader.vue";
import { mapState } from "vuex";
export default {
	data() {
		return {};
	},
	computed: {
		...mapState(["userNotes"]),
	},
	components: { Note, TitleHeader },
};
</script>

<style scoped>
#main-notes-container {
	display: grid;
	grid-template-rows: 80px auto;

	height: 100%;
	width: 100%;
}
#header-container {
	height: 100%;
	width: 100%;
}
#notes-container {
	display: flex;
	justify-content: center;
	align-content: flex-start;
	flex-wrap: wrap;
	height: 100%;
	width: 100%;

	overflow-y: auto;
}
</style>
