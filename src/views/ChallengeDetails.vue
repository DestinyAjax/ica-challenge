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
                                        <form @submit.prevent="handleUpdate">
                                            <div class="form-group">
                                                <labal>Title</labal>
                                                <input type="text" class="form-control" v-model="title" />
                                            </div>
                                            <div class="form-group">
                                                <labal>Date</labal>
                                                <input type="date" class="form-control" v-model="date" />
                                            </div>
                                            <div class="form-group">
                                                <b-form-group label="Status">
                                                    <b-form-radio v-model="status" name="some-radios" :value="true">Activate</b-form-radio>
                                                    <b-form-radio v-model="status" name="some-radios" :value="false">Deactivate</b-form-radio>
                                                </b-form-group>
                                            </div><br/>
                                            <div class="form-group">
                                                <button v-if="processing" class="btn btn-md btn-secondary" disabled>
                                                    <i class="fa fa-spinner fa-spin"></i> Processing...
                                                </button>
                                                <button v-else type="submit" class="btn btn-md btn-success">Update</button>
                                            </div>
                                        </form>
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
import { view, update } from "@/services/ChallengeService";

export default {
    name: "challengedetails",
    components: {
        TopNavigation,
        SideMenu
    },
    data() {
        return {
            title: '',
            date: '',
            status: false,
            loading: false,
            processing: false,
            error: null,
            players: [],
        }
    },
    created() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            this.loading = true;
            try {
                const challenge_id = this.$route.params.challenge_id;
                const {data} = await view(challenge_id);
                this.title = data.data.title;
                this.date = data.data.date;
                this.status = data.data.status;
            }
            catch (err) {
                this.error = err.message;
            }
            finally {
                this.loading = false;
            }
        },
        async handleUpdate() {
            this.processing = true;
            try {
                const challenge_id = this.$route.params.challenge_id;
                await update(challenge_id, {
                    date: this.date,
                    title: this.title,
                    status: this.status
                });

                this.$swal('Updated successfully', 'This challenge has been updated successfully', 'success');
                window.location.reload();
            }
            catch (err) {
                console.log(err);
            }
            finally {
                this.processing = false;
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