<template>
	<div class="text-input-container" :style="{ width: width + '%' }">
		<input
			:type="password == null ? 'text' : 'password'"
			v-model="modelValue"
			@update:modelValue="$emit('update:modelValue', this.modelValue)"
		/>
		<label :class="{ filled: filled }">{{ placeholder }}</label>
	</div>
</template>

<script>
export default {
	props: ["placeholder", "modelValue", "width", "password"],
	data() {
		return {};
	},
	computed: {
		filled() {
			return this.modelValue.length != 0;
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

	text-indent: 16px;
	font-size: 16px;
	font-family: Nunito;
}

.text-input-container label {
	position: absolute;

	left: 18px;
	top: calc(50% - 9px);

	font-size: 16px;
	color: #c9c9c9;

	pointer-events: none;

	transition-property: all;
	transition-duration: 200ms;

	background-color: rgb(255, 255, 255);
}

.text-input-container:focus-within label {
	left: 10px;
	top: -10px;

	color: #8400ff;

	font-size: 14px;
	padding: 0px 6px;
}

.text-input-container label.filled {
	left: 10px;
	top: -10px;

	font-size: 14px;
	padding: 0px 6px;
}
</style>
