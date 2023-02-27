<template>
	<div class="nav">
		<a href="/">Home</a>
		<a href="/sign-up">Add Restaurant</a>
		<a href="/login">Update Restaurant</a>
		<a @click="$router.push('/sign-up')">Logout</a>
	</div>
</template>

<script>
export default {
	name: 'HeaderMenu',
	
}
</script>
<style>
.nav {
	background-color: #333;
	overflow: hidden;
}

.nav a {
	float: left;
	color: #f2f2f2;
	padding: 16px 14px;
	text-align: center;
	font-size: 17px;
	text-decoration: none;
	margin-right: 5px;
}

.nav a:hover {
	background-color: #ddd;
	color: #333;
}

</style>
