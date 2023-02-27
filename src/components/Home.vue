<template>
	<HeaderPage />
	<h1>Hello User, Welcome on Home Page</h1>
</template>

<script>
import HeaderPage from './HeaderMenu.vue'
export default {
	// eslint-disable-next-line vue/multi-word-component-names
	name: 'Home',
	components: {
		HeaderPage,
	},
	mounted() {
		let user = localStorage.getItem('user-info');
		
		if (!user) {
			this.$router.push({name:'SignUp'});
		}
	}
}
</script>
