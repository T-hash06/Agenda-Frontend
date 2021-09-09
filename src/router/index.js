import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "/",
		name: "AliasHome",
		redirect: (to) => {
			return { path: "/home" };
		},
	},
	{
		path: "/home",
		name: "Home",
		component: () => import(/* webpackChunkName: "Home" */ "../views/Home.vue"),
		children: [
			{
				path: "",
				name: "AliasNotes",
				redirect: (to) => {
					return { path: "/home/notes" };
				},
			},
			{
				path: "notes",
				name: "Notes",
				component: () => import(/* webpackChunkName: "Notes" */ "../views/home/Notes.vue"),
			},
			{
				path: "contacts",
				name: "Contacts",
				component: () => import(/* webpackChunkName: "Contacts" */ "../views/home/Contacts.vue"),
			},
			{
				path: "profile",
				name: "Profile",
				component: () => import(/* webpackChunkName: "Profile" */ "../views/home/Profile.vue"),
			},
		],
	},
	{
		path: "/login",
		name: "Login",
		component: () => import(/* webpackChunkName: "Login" */ "../views/Login.vue"),
	},
	{
		path: "/signup",
		name: "Signup",
		component: () => import(/* webpackChunkName: "Login" */ "../views/Signup.vue"),
	},
	{
		path: "/:pathMatch(.*)*",
		name: "PageNotFound",
		component: () => import(/* webpackChunkName: "Login" */ "../views/PageNotFound.vue"),
	},
	//   {
	//     path: '/about',
	//     name: 'About',
	//     // route level code-splitting
	//     // this generates a separate chunk (about.[hash].js) for this route
	//     // which is lazy-loaded when the route is visited.
	//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	//   }
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
