<template>
    <div id="top-nav">
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand href="#">ICA</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-navbar-nav>
                        <router-link to="/leaderboard">
                            <span class="link">Leaderboard</span>
                        </router-link>
                        <router-link to="/register">
                            <span class="link">Register</span>
                        </router-link>
                    </b-navbar-nav>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
  name: "TopNavigation",
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
</style>
