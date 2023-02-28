<template>
	<HeaderPage />
	<h1>Hello User, Welcome on Update Restaurant Page</h1>
</template>

<script>
import HeaderPage from './HeaderMenu.vue'
export default {
	name: 'UpdateRest',
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
