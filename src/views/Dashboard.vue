<template>
    <transition name="fade">
        <div id="dashboard">
            <top-navigation current="admin"></top-navigation>
            <div class="section">
                <b-container>
                    <div v-if="error" class="alert alert-danger">{{ error }}</div>
                    <div v-if="loading" class="text-center">
                        <img src="../assets/images/loader.png" />
                    </div>
                    <b-row v-else>
                        <b-col></b-col>
                        <b-col cols="9" class="players">
                            <div class="header">
                                <span class="h2">All Players</span>
                                <span class="h3">Here you have the list of all participating players.</span>
                            </div>
                            <div class="body">
                                <div class="overflow-auto">
                                    <b-table
                                        id="my-table"
                                        :items="items"
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
                        </b-col>
                        <b-col></b-col>
                    </b-row>
                </b-container>
            </div>
        </div>
    </transition>
</template>

<script>
import TopNavigation from "@/components/TopNavigation";
import { playersCollection } from "../firebase";

export default {
    name: "dashboard",
    components: {
        TopNavigation
    },
    data() {
        return {
            perPage: 5,
            currentPage: 1,
            loading: false,
            error: null,
            items: []
        }
    },
    computed: {
      rows() {
        return this.items.length
      }
    },
    created() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            this.loading = true;
            try {
                const result = await playersCollection.get();
                if (result.docs.length > 0) {
                this.items = [];
                result.docs.map(doc => {
                    if (doc.data().name !== "") {
                        this.items.push({
                            name: doc.data().name,
                            email: doc.data().email,
                            telephone: doc.data().telephone,
                            details: ''
                        });
                    }
                });
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