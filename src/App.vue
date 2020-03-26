<template>
  <div id="app">
    <top-navigation></top-navigation>
    <div class="section">
      <b-container>
        <b-row>
          <b-col></b-col>
          <b-col cols="8" class="leaderboard">
            <div class="header">
              <span class="h2">ICA CHALLENGE</span>
              <span class="h3">LEADERBOARD</span>
            </div>
            <div class="body">
              <player-card name="Mark William" score="50.4"></player-card>
              <player-card name="Proper John" score="45.8"></player-card>
              <player-card name="Fatima Ahmed" score="30.2"></player-card>
              <player-card name="John Winner" score="25.7"></player-card>
              <player-card name="Gift Okafor" score="18.4"></player-card>
            </div>
          </b-col>
          <b-col></b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import TopNavigation from "@/components/TopNavigation";
import PlayerCard from "@/components/PlayerCard";
export default {
  name: "App",
  components: {
    TopNavigation,
    PlayerCard
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app .section {
  margin-top: 50px;
  padding: 20px;
}

#app .section .leaderboard .header {
  background-color: #1D1E20;
  padding: 30px;
  color: #fff;
}

#app .section .leaderboard .body {
  background-color: #000000;
  border: 1px solid #404040;
  padding: 10px;
  height: 600px;
  overflow-x: scroll;
}

#app .h2 {
  font-family: Lato;
  display: block;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 5px;
  color: #FFFFFF;
}

#app .h3 {
  font-family: Courier;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 10px;
  letter-spacing: 0.4em;
}
</style>
