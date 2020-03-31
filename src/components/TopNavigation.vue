<template>
    <div id="top-nav">
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand href="#">ICA</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-navbar-nav>
                        <router-link to="/leaderboard">
                            <span :class="current === 'leaderboard' ? `link active` : `link`">Leaderboard</span>
                        </router-link>
                        <router-link to="/register">
                            <span :class="current === 'register' ? `link active` : `link`">Register</span>
                        </router-link>
                        <router-link v-if="this.$route.path !== '/dashboard'" to="/dashboard">
                            <span :class="current === 'admin' ? `link active` : `link`">Admin</span>
                        </router-link>
                        <button type="button" class="btn btn-sm" v-if="this.$route.path === '/dashboard'" @click="logout">
                            <span :class="current === 'admin' ? `link active` : `link`">Logout</span>
                        </button>
                    </b-navbar-nav>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
import { auth } from "../firebase";

export default {
  name: "TopNavigation",
  props: {
    current: String,
  },
  methods: {
    logout () {
        auth.signOut().then(() => {
            this.$router.replace("login");
        });
    }
  }
};
</script>

<style scoped>
    #nav-collapse .link {
        padding: 10px;
        color: #c5c5c5;
    }

    #nav-collapse .link:hover {
        text-decoration: none;
        color: #3fe277;
    }

    #nav-collapse .active {
        text-decoration: none;
        color: #3fe277;
    }
</style>
