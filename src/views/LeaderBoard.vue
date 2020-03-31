<template>
    <transition name="slide">
    <div id="leader">
      <top-navigation current="leaderboard"></top-navigation>
        <div class="section">
          <b-container>
            <div v-if="error" class="alert alert-danger">
              {{ error }}
            </div>
            <div v-if="loading" class="text-center">
                <img src="../assets/images/loader.png" />
              </div>
            <b-row v-else>
              <b-col></b-col>
              <b-col cols="8" class="leaderboard">
                <div class="header">
                  <span class="h2">ICA CHALLENGE</span>
                  <span class="h3">LEADERBOARD</span>
                </div>
                <div class="body">
                  <div v-if="players.length > 0">
                    <player-card v-for="(player,index) in players" 
                      :name="player.name" 
                      :score="player.score"
                      :image="player.image"
                      v-bind:key="index"
                    />
                  </div>
                  <div class="no-value" v-else>
                    <span><i class="fa fa-ban"></i></span>
                    <p style="text-align: center">There are currently no players</p>
                    <router-link to="/register">
                      <button type="button" class="btn btn-sm">Register</button>
                    </router-link>
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
import { playersCollection } from "../firebase";
import TopNavigation from "@/components/TopNavigation";
import PlayerCard from "@/components/PlayerCard";

export default {
  name: "leaderboard",
  components: {
    TopNavigation,
    PlayerCard
  },
  data() {
    return {
      players: [],
      loading: false,
      error: null
    }
  },
  created() {
    this.fetchData();
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    async fetchData() {
      try {
        this.loading = true;
        const result = await playersCollection.get();
        if (result.docs.length > 0) {
          this.players = [];
          result.docs.map(doc => {
            if (doc.data().name !== "") {
              this.players.push({
                key: doc.id,
                name: doc.data().name,
                image: doc.data().image_url,
                score: doc.data().score
              });
            }
          });
        }
      }
      catch (err) {
        this.error = err.toString();
      }
      finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style>
#leader .section {
  margin-top: 50px;
  padding: 20px;
}

#leader .section .leaderboard .header {
  background-color: #1d1e20;
  padding: 30px;
  color: #fff;
}

#leader .section .leaderboard .body {
  background-color: #000000;
  border: 1px solid #404040;
  padding: 10px;
  /* height: 600px;
  overflow-x: scroll; */
}

#leader .h2 {
  font-family: Lato;
  display: block;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 5px;
  color: #ffffff;
}

#leader .h3 {
  font-family: Courier;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 10px;
  letter-spacing: 0.4em;
}

#leader .no-value {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  padding: 20px;
}

#leader .no-value p {
  font-size: 16px;
}

#leader .no-value span {
  font-size: 50px;
}

#leader .no-value button {
  border: 1px solid #2c3e50;
  width: 150px;
  padding: 10px;
  color: #2c3e50;
}

#leader .no-value button:hover {
  border: 0.5px solid #3fe277;
  color: #3fe277;
}
</style>
