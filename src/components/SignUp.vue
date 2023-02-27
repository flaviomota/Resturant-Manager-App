<template>
	<img class="logo" src="../assets/rest-logo.png" />
	<h1>Sign Up</h1>
	<div class="register">
		<input type="text" placeholder="Enter Name" />
		<input type="text" placeholder="Enter Email" />
		<input type="password" placeholder="Enter Password" />
		<button>Sign Up</button>
	</div>
</template>

<script>
export default {
	name: 'SignUp',
}
</script>

<style>
.logo {
	width: 100px;
	border-radius: 50px;
}

.register input {
	width: 300px;
	height: 40px;
	padding-left: 20px;
	display: block;
	margin-bottom: 30px;
	margin-right: auto;
	margin-left: auto;
	border: 1px solid skyblue;
}

.register button {
	width: 320px;
	height: 40px;
	border: 1px solid skyblue;
	background-color: skyblue;
	color: #fff;
	cursor: pointer;
}
</style>