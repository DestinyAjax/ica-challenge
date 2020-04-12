<template>
        <div id="dashboard">
            <top-navigation current="admin"></top-navigation>
            <div class="section">
                <b-container>
                    <div v-if="error" class="alert alert-danger">{{ error }}</div>
                    <div class="row">
                        <div class="col-md-3 col-lg-3 col-sm-12 col-xs-12">
                            <side-menu active_page="submissions" is_track />
                        </div>
                        <div class="col-md-9 col-lg-9 col-sm-12 col-xs-12 players">
                            <div class="body">
                                <div class="overflow-auto p-2">
                                    <div v-if="loading" class="text-center">
                                        <i class="fa fa-spinner fa-spin"></i> loading...
                                    </div>
                                    <div v-else>
                                        <h4>Submissions: <small>Showing list of all submissions under a track</small></h4><hr/>
                                        <p v-if="players.length < 1" class="text-center">There are no submissions yet</p>
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
                                            <template v-slot:cell(submission_link)="data">
                                                <a :href="data.item.submission_link" target="_blank">{{data.item.submission_link}}</a>
                                            </template>
                                            <template v-slot:cell(action)>
                                                <router-link to="#" size="sm" class="mr-2">Update</router-link>
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
                    </div>
                </b-container>
            </div>
        </div>
</template>

<script>
import TopNavigation from "@/components/TopNavigation";
import SideMenu from "@/components/SideMenu";
import { allSubmissions } from "@/services/TrackService";

export default {
    name: "tracksubmission",
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
        this.fetchData();
    },
    methods: {
        async fetchData() {
            this.loading = true;
            try {
                const track_id = this.$route.params.track_id;
                const {data} = await allSubmissions(track_id);
                data.data.map((data,index) => {
                    this.players.push({
                        SN: ++index,
                        name: data.player_name,
                        submission_link: data.submission_link,
                        score: data.score,
                        action: ''
                    });
                });
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