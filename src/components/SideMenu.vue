<template>
  <div id="sidemenu">
    <b-list-group>
        <router-link to="/dashboard">
            <b-list-group-item :active="active_page === 'dashboard'">Tracks</b-list-group-item>
        </router-link> 
        <router-link to="/challenges">
            <b-list-group-item :active="active_page === 'challenges'">Challenges (Days)</b-list-group-item>
        </router-link>
        <router-link to="/submissions" v-show="is_track">
            <b-list-group-item>Submissions</b-list-group-item>
        </router-link>
        <router-link to="/settings">
            <b-list-group-item>Settings</b-list-group-item>
        </router-link>
        <router-link @click="logout" to="#">
            <b-list-group-item>Logout</b-list-group-item>
        </router-link>
    </b-list-group>
  </div>
</template>

<script>
import { auth } from "../firebase";

export default {
    name: "sidemenu",
    props: {
        active_page: String,
        is_track: Boolean
    },
    methods: {
        logout () {
            auth.signOut().then(() => {
                this.$router.replace("login");
            });
        }
    }
}
</script>

<style>

</style>