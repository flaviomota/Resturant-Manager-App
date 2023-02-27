import Home from './components/Home.vue'
import SingUp from './components/SignUp.vue'
import {createRouter, createWebHistory} from 'vue-router'
import LoginPage from './components/LoginPage.vue'

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
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router;