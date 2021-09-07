<template>
	<div :class="{ error: errors.length != 0 }" class="text-input-container" :style="{ width: width + '%' }">
		<input
			:type="password == null ? 'text' : 'password'"
			v-model="modelValue.content"
			@update:modelValue="$emit('update:modelValue', this.modelValue)"
			@focus="this.modelValue.errors = []"
			:id="placeholder + '-input'"
		/>
		<label :class="{ filled: filled }" class="placeholder-label">{{ placeholder }}</label>
		<label class="error-label" v-if="errors.length != 0" :class="{ filled: filled }">{{ errors.slice(-1)[0] }}</label>
	</div>
</template>

<script>
export default {
	props: ["placeholder", "modelValue", "width", "password", "email", "validate"],
	data() {
		return {};
	},
	computed: {
		filled() {
			return this.modelValue.content.length != 0;
		},
		errors() {
			let currentContent = this.modelValue.content;

			let inheritErrors = this.modelValue.errors ? this.modelValue.errors : [];
			let ownErrors = [];

			let isPassword = this.password != null;
			let isEmail = this.email != null;
			let checkValid = this.validate != null;

			if (isPassword && currentContent.length != 0 && checkValid) {
				if (currentContent.length < 8 || currentContent.toLowerCase() == currentContent || !/\d/.test(currentContent)) {
					ownErrors.push("Insafety password");
				}
			}

			if (isEmail && currentContent.length != 0 && checkValid) {
				if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(currentContent)) {
					ownErrors.push("Invalid email");
				}
			}

			this.modelValue.errorCount = [...ownErrors, ...inheritErrors].length;

			return [...ownErrors, ...inheritErrors];
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
.text-input-container.error {
	outline: 2px solid #bb0020;
}
.text-input-container.error:focus-within .error-label {
	display: none;
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

.text-input-container.error input {
	color: #860016;
}

.text-input-container.error:focus-within input {
	color: #000;
}

.text-input-container .placeholder-label {
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

.text-input-container.error .placeholder-label {
	color: #bb0020;
}

.text-input-container:focus-within .placeholder-label {
	left: 10px;
	top: -10px;

	color: #8400ff;

	font-size: 14px;
	padding: 0px 6px;
}

.text-input-container .placeholder-label.filled {
	left: 10px;
	top: -10px;

	font-size: 14px;
	padding: 0px 6px;
}

.error-label {
	position: absolute;
	left: 14px;
	top: 102%;
	font-size: 12px;
	color: #bb0020;

	animation: 80ms spawn-error;
}

@keyframes spawn-error {
	0% {
		transform: translateX(0px);
	}
	25% {
		transform: translateX(4px);
	}
	50% {
		transform: translateX(0px);
	}
	75% {
		transform: translateX(-4px);
	}
	100% {
		transform: translateX(0px);
	}
}
</style>
