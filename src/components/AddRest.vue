<template>
	<HeaderPage />
	<h1>Hello User, Welcome on Add Restaurant Page</h1>

	<form class="add">
		<input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name" />
		<input type="text" name="address" placeholder="Enter Address" v-model="restaurant.address" />
		<input type="text" name="contact" placeholder="Enter Contact" v-model="restaurant.contact" />
		<button type="button" v-on:click="addRestaurant">Add new Restaurant</button>
	</form>
</template>

<script>
import HeaderPage from './HeaderMenu.vue'
export default {
	name: 'AddRest',
	components: {
		HeaderPage,
	},
	data () {
		return {
			restaurant: {
				name: '',
				address: '',
				contact: ''
			}
		}
	},
	methods: {
		addRestaurant() {
			console.warn(this.restaurant);
		}
	},
	mounted() {
		let user = localStorage.getItem('user-info');
		
		if (!user) {
			this.$router.push({name:'SignUp'});
		}
	}
}
</script>
