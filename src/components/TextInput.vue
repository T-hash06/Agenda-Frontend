<template>
	<div class="text-input-container">
		<input type="text" v-model="text" :modelValue="text" @update:modelValue="supUpdate" />
		<label :class="{ filled: filled }">{{ placeholder }}</label>
	</div>
</template>

<script>
export default {
	props: ["placeholder", "modelValue"],
	data() {
		return {
			text: this.modelValue,
		};
	},
	computed: {
		filled() {
			return this.text.length != 0;
		},
	},
	methods: {
		supUpdate() {
			this.$emit("update:modelValue", this.text);
		},
	},
};
</script>

<style scoped>
.text-input-container {
	position: relative;

	margin-top: 25px;
	outline: 1px solid #d6d6d6;

	transition-property: all;
	transition-duration: 50ms;
}

.text-input-container:focus-within {
	outline: 2px solid #8400ff;
}

.text-input-container input {
	width: 100%;
	height: 55px;

	border: none;
	outline: none;

	text-indent: 10px;
	font-size: 16px;
	font-family: Nunito;
}

.text-input-container label {
	position: absolute;

	left: 12px;
	top: calc(50% - 9px);

	font-size: 16px;
	color: #c9c9c9;

	pointer-events: none;

	transition-property: all;
	transition-duration: 200ms;

	background-color: rgb(255, 255, 255);
	padding: 0px 6px;
}

.text-input-container:focus-within label {
	left: 10px;
	top: -10px;

	color: #8400ff;

	font-size: 14px;
}

.text-input-container label.filled {
	left: 10px;
	top: -10px;

	font-size: 14px;
}
</style>
