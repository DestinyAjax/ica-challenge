import Vue from "vue";
import Router from "vue-router";
import firebase from "firebase";

const LeaderBoard = () => import("@/views/LeaderBoard");
const Register = () => import("@/views/Register");
const Login = () => import("@/views/Login");

Vue.use(Router);

const router = new Router({
    mode: "hash", 
    routes: [
        {
            path: "*",
            redirect: "/leaderboard"
        },
        {
          path: "/leaderboard",
          name: "Leaderboard",
          component: LeaderBoard
        },
        {
            path: "/dashboard",
            name: "Dashboard",
            component: LeaderBoard,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/register",
            name: "Register",
            component: Register
        },
        {
            path: "/login",
            name: "Login",
            component: Login
        },
    ]
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
    const currentUser = firebase.auth().currentUser

    if (requiresAuth && !currentUser) {
        next("/login");
    } else if (requiresAuth && currentUser) {
        next();
    } else {
        next();
    }
});

export default router;