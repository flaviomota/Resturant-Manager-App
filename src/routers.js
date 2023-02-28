import Home from './components/Home.vue'
import SingUp from './components/SignUp.vue'
import {createRouter, createWebHistory} from 'vue-router'
import LoginPage from './components/LoginPage.vue'
import AddRest from './components/AddRest.vue'
import UpdateRest from './components/UpdateRest.vue'


const routes = [
	{
		name: "Home",
		component: Home,
		path: "/"
	},
	{
		name: "SignUp",
		component: SingUp,
		path: "/sign-up"
	},
	{
		name: "LoginPage",
		component: LoginPage,
		path: "/login"
	},
	{
		name: "AddRest",
		component: AddRest,
		path: "/add"
	},
	{
		name: "UpdateRest",
		component: UpdateRest,
		path: "/update/:id"
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router;