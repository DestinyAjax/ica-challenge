<template>
        <div id="dashboard">
            <top-navigation current="admin"></top-navigation>
            <div class="section">
                <b-container>
                    <div v-if="error" class="alert alert-danger">{{ error }}</div>
                    <div class="row">
                        <div class="col-md-3 col-lg-3 col-sm-12 col-xs-12">
                            <side-menu active_page="dashboard" />
                        </div>
                        <div class="col-md-9 col-lg-9 col-sm-12 col-xs-12 players">
                            <div class="body">
                                <div v-if="loading" class="text-center">
                                    <i class="fa fa-spinner fa-spin"></i> loading...
                                </div>
                                <div v-else>
                                    <div class="overflow-auto p-2">
                                        <h4>All Tracks: <small>Select a track and view participants under each track</small></h4><hr/>

                                        <b-table
                                            id="my-table"
                                            :items="tracks"
                                            small
                                            class="custom-table"
                                            striped 
                                            responsive="sm"
                                        >
                                            <template v-slot:cell(track_id)="data">
                                                <button class="btn btn-sm btn-secondary" @click="viewPlayers(data.item.track_id)" type="button">Manage</button>
                                            </template>
                                        </b-table>
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
import { allTracks } from "@/services/TrackService";

export default {
    name: "dashboard",
    components: {
        TopNavigation,
        SideMenu
    },
    data() {
        return {
            loading: false,
            error: null,
            tracks: []
        }
    },
    created() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            this.loading = true;
            try {
                this.tracks = [];
                const {data} = await allTracks();
                if (data.data.length > 0) {
                    data.data.map((record,index) => {
                        this.tracks.push({
                            id: ++index,
                            name: record.name,
                            description: record.description,
                            track_id: record.id
                        });
                    });
                }
            }
            catch (err) {
                this.error = err.message;
            }
            finally {
                this.loading = false;
            }
        },
        viewPlayers(id) {
            this.$router.push(`/players/${id}`);
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