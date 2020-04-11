<template>
        <div id="dashboard">
            <top-navigation current="admin"></top-navigation>
            <div class="section">
                <b-container>
                    <div v-if="error" class="alert alert-danger">{{ error }}</div>
                    <div v-if="loading" class="text-center">
                        <img src="../assets/images/loader.png" />
                    </div>
                    <div class="row" v-else>
                        <div class="col-md-3 col-lg-3 col-sm-12 col-xs-12">
                            <side-menu active_page="dashboard" is_track />
                        </div>
                        <div class="col-md-9 col-lg-9 col-sm-12 col-xs-12 players">
                            <div class="body">
                                <div class="overflow-auto p-2">
                                    <h4>Participants: <small>Showing list of participants under a track</small></h4><hr/>
                                    
                                    <b-table
                                        id="my-table"
                                        :items="players"
                                        :per-page="perPage"
                                        :current-page="currentPage"
                                        small
                                        class="custom-table"
                                        striped 
                                        responsive="sm"
                                    >
                                        <template v-slot:cell(details)>
                                            <router-link to="#" size="sm" class="mr-2">View Details</router-link>
                                        </template>
                                    </b-table>
                                    <b-pagination
                                        v-model="currentPage"
                                        :total-rows="rows"
                                        :per-page="perPage"
                                        aria-controls="my-table"
                                        pills
                                        align="center"
                                    ></b-pagination>

                                    <p class="mt-3">Current Page: {{ currentPage }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-container>
            </div>
        </div>
</template>

<script>
import TopNavigation from "@/components/TopNavigation";
import SideMenu from "@/components/SideMenu";
import { allTracks } from "@/services/TrackService";

export default {
    name: "dashboard",
    components: {
        TopNavigation,
        SideMenu
    },
    data() {
        return {
            perPage: 5,
            currentPage: 1,
            loading: false,
            error: null,
            players: [],
        }
    },
    computed: {
      rows() {
        return this.players.length
      }
    },
    created() {
        // this.fetchData();
    },
    methods: {
        async fetchData() {
            this.loading = true;
            try {
                this.tracks = [];
                const {data} = await allTracks();
                if (data.data.length > 0) {
                    this.tracks = data.data;
                }
            }
            catch (err) {
                this.error = err.message;
            }
            finally {
                this.loading = false;
            }
        }
    }
}
</script>

<style scoped>

p {
    text-align: center;
    color: #404040;
}

#dashboard .section {
  margin-top: 50px;
  padding: 20px;
}

#dashboard .section .players .header {
  background-color: #1d1e20;
  padding: 30px;
  color: #fff;
  text-align: center;
}

#dashboard .section .players .body {
  background-color: #fff;
  border: 1px solid #404040;
  padding: 10px;
}

#dashboard .h2 {
  font-family: Lato;
  display: block;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 5px;
  color: #ffffff;
}

#dashboard .h3 {
  font-family: Courier;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 10px;
}

.custom-table {
    color: #404040;
    border: 0.5 solid #404040;
    margin-bottom: 40px;
}
</style>