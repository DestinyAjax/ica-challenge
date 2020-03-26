<template>
    <div id="top-nav">
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand href="#">ICA</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-navbar-nav>
                    <b-nav-item href="#">Register</b-nav-item>
                    <b-nav-item href="#" disabled>Leaderboard</b-nav-item>
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
    #top-nav {

    }
</style>
