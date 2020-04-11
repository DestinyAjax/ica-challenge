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
                        <side-menu active_page="challenges" />
                    </div>
                    <div class="col-md-9 col-lg-9 col-sm-12 col-xs-12 players">
                        <div class="body">
                            <div class="overflow-auto p-2">
                                <div class="row">
                                    <div class="col-md-9 col-lg-9 col-sm-12 col-xs-12">
                                        <h4>All Challenge Days: <small>Showing list of all challenge days</small></h4>
                                    </div>
                                    <div class="col-md-3 col-lg-3 col-sm-12 col-xs-12">
                                        <button class="btn btn-sm btn-primary pull-right" type="button" v-b-modal.modal-1>Create Challenge</button>
                                    </div>
                                </div><hr/>

                                <b-table
                                    v-if="challenges.length > 0"
                                    id="my-table"
                                    :items="challenges"
                                    small
                                    class="custom-table"
                                    striped 
                                    responsive="sm"
                                >
                                    <template v-slot:cell(status)="data">
                                        <span class="badge badge-success" v-if="data.item.status === true">Active</span>
                                        <span class="badge badge-danger" v-else>Not Active</span>
                                    </template>
                                    <template v-slot:cell(action)>
                                        <button class="btn btn-sm btn-secondary" type="button">Edit</button>
                                    </template>
                                </b-table>
                                <p class="text-center" v-else>There are challenges</p>
                            </div>
                        </div>
                    </div>
                </div>
            </b-container>
        </div>
        <b-modal id="modal-1" title="Create New Challenge Day" hide-footer>
            <form @submit.prevent="handleSubmit">
                <div class="form-group">
                    <label>Title</label>
                    <input type="text" class="form-control" v-model="title" placeholder="Ex. Challenge Day 1" required/>
                </div>
                <div class="form-group">
                    <label>Date</label>
                    <input type="date" class="form-control" v-model="date" placeholder="Challenge day date" required/>
                    <span style="font-size: 12px;color: red">Please note that this must be an accurate date of the challenge day.</span>
                </div>
                <b-button variant="success" v-if="submitting" class="mt-3" block disable>
                    <i class="fa fa-spinner fa-spin"></i> processing ...
                </b-button>
                <b-button v-else variant="success" type="submit" class="mt-3" block>Submit</b-button>
            </form>
        </b-modal>
    </div>
</template>

<script>
import TopNavigation from "@/components/TopNavigation";
import SideMenu from "@/components/SideMenu";
import { all, create } from "@/services/ChallengeService";

export default {
    name: "challenges",
    components: {
        TopNavigation,
        SideMenu
    },
    data() {
        return {
            loading: false,
            error: null,
            title: '',
            date: '',
            challenge_id: '',
            submitting: false,
            chalenges: []
        }
    },
    created() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            this.loading = true;
            try {
                this.challenges = [];
                const {data} = await all();
                if (data.data.length > 0) {
                    data.data.map((record,index) => {
                        this.challenges.push({
                            id: ++index,
                            title: record.title,
                            date: record.date,
                            status: record.status,
                            action: ''
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
        async handleSubmit() {
            this.submitting = true;
            try {
                await create({
                    title: this.title,
                    date: this.date
                });
                this.$bvModal.hide('modal-1');
                this.$swal('Created Successfully!','Challenge day has bee successfully set.','success');
                
                window.location.reload();
            }
            catch({response: {data}}) {
                this.$swal('Something went wrong',`${data.message}`,'error');
            }
            finally {
                this.submitting = false;
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
  color: #ffffff;
}

#dashboard .h3 {
  font-family: Courier;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  display: block;
}

.custom-table {
    color: #404040;
    border: 0.5 solid #404040;
    margin-bottom: 40px;
}
</style>