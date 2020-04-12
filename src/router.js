import Vue from "vue";
import Router from "vue-router";
import firebase from "firebase";

const LeaderBoard = () => import("@/views/LeaderBoard");
const Dashboard = () => import("@/views/Dashboard");
const Register = () => import("@/views/Register");
const Login = () => import("@/views/Login");
const Submission = () => import("@/views/Submission");
const Challenge = () => import("@/views/Challenges");
const Players = () => import("@/views/Players");
const Submissions = () => import("@/views/TrackSubmission");

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
            component: Dashboard,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/challenges",
            name: "Challenge",
            component: Challenge,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/players/:track_id",
            name: "Players",
            component: Players,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/submissions/:track_id",
            name: "Submissions",
            component: Submissions,
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
        {
            path: "/submission",
            name: "Submission",
            component: Submission
        }
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