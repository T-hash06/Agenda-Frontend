<template>
	<div id="main-div">
		<router-view />
	</div>
</template>

<style>
@font-face {
	font-family: "Nunito";
	src: url("./assets/fonts/Nunito/Nunito-Regular.ttf");
}
@font-face {
	font-family: "Nunito-Light";
	src: url("./assets/fonts/Nunito/Nunito-Light.ttf");
}
@font-face {
	font-family: "Nunito-Bold";
	src: url("./assets/fonts/Nunito/Nunito-Bold.ttf");
}
@font-face {
	font-family: "Roboto";
	src: url("./assets/fonts/Roboto/Roboto-Regular.ttf");
}
@font-face {
	font-family: "Roboto-Light";
	src: url("./assets/fonts/Roboto/Roboto-Light.ttf");
}
@font-face {
	font-family: "Roboto-Bold";
	src: url("./assets/fonts/Roboto/Roboto-Bold.ttf");
}

* {
	padding: 0px;
	margin: 0px;

	font-family: Roboto;
}

#main-div {
	display: flex;
	justify-content: center;
	align-items: center;

	width: 100vw;
	height: 100vh;

	background: linear-gradient(30deg, #161616 50%, #303030 50%);
}
</style>
