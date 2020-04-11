<template>
    <div id="top-nav">
        <b-navbar toggleable="lg" style="background-color: #1B1C21">
            <div class="container">
                <b-navbar-brand href="/leaderboard">
                    <img src="/images/logo.png" alt="" />
                </b-navbar-brand>
                <b-navbar-toggle target="nav-collapse" class="toggle"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav class="ml-auto">
                        <b-navbar-nav>
                            <router-link to="/leaderboard">
                                <span :class="current === 'leaderboard' ? `link active` : `link`">Leaderboard</span>
                            </router-link>
                            <router-link to="/submission">
                                <span :class="current === 'submission' ? `link active` : `link`">Submission</span>
                            </router-link>
                            <router-link to="/register">
                                <button type="button" :class="current === 'register' ? `btn register-active` : `btn register`">Register</button>
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
        display: inline-block;
    }

    #nav-collapse .link:hover {
        text-decoration: none;
        text-decoration-color: none;
        color: #fff;
    }

    #nav-collapse .active {
        text-decoration: none;
        padding: 10px;
        color: #f57c00;
    }

    #nav-collapse .register {
        background-color: #f57c00;
        padding: 10px;
        color: #fff;
        margin-left: 30px;
        width: 150px;
        border-radius: 0;
    }

    #nav-collapse .register-active {
        background-color: #ffd2a5;
        padding: 10px;
        color: #fff;
        margin-left: 30px;
        width: 150px;
        border-radius: 0;
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
        text-decoration-color: none;
        display: block;
        text-align: center;
        color: #fff;
    }

    #nav-collapse .active {
        text-decoration: none;
        padding: 10px;
        color: #f57c00;
    }

    #nav-collapse .register {
        background-color: #f57c00;
        padding: 10px;
        color: #fff;
        display: block;
        width: 100%;
        margin-top: 20px;
        border-radius: 0;
    }

    #nav-collapse .register-active {
        background-color: #ffd2a5;
        padding: 10px;
        color: #fff;
        border-radius: 0;
        display: block;
        margin-top: 20px;
        width: 100%;
    }

    .toggle {
        background-color: #fff !important;
    }
}
</style>
