<template>
    <div id="top-nav">
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <div class="container">
                <b-navbar-brand href="#">
                    <img src="/images/logo.png" alt="" />
                </b-navbar-brand>
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
            </div>
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
@media only screen and (min-width : 992px) {
    #nav-collapse .link {
        padding: 10px;
        color: #c5c5c5;
        margin-left: 20px;
    }

    #nav-collapse .link:hover {
        text-decoration: none;
        text-decoration-color: none;
        color: #fff;
    }

    #nav-collapse .active {
        text-decoration: none;
        background-color: #F57C00;
        padding: 10px;
        color: #fff;
    }
}

@media only screen and (max-width : 768px) {
    #nav-collapse .link {
        padding: 10px;
        color: #c5c5c5;
        display: block;
        text-align: center;
        margin-top: 20px;
    }

    #nav-collapse .link:hover {
        text-decoration: none;
        color: #fff;
    }

    #nav-collapse .active {
        text-decoration: none;
        background-color: #F57C00;
        padding: 10px;
        color: #fff;
    }
}
</style>
