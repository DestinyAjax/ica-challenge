<template>
    <div id="leader">
      <top-navigation current="leaderboard"></top-navigation>
        <div class="section">
          <div class="container">
            <div v-if="error" class="alert alert-danger">
              {{ error }}
            </div>
            <div v-if="loading" class="text-center">
                <img src="../assets/images/loader.png" />
              </div>
            <div class="row" v-else>
              <div class="col-md-2 col-lg-2 col-sm-12 col-xs-12"></div>
              <div class="col-md-8 col-lg-8 col-sm-12 col-xs-12 leaderboard">
                <div class="header">
                  <h4>Leaderboard</h4>
                  <div class="header-row">
                    <a href="#" class="column column1">Rank</a>
                    <a href="#" class="column column2"></a>
                    <a href="#" class="column column3">Name</a>
                    <a href="#" class="column column4">Score</a>
                    <a href="#" class="column column5"></a>
                  </div>
                </div>
                <div class="body">
                  <div v-if="players.length > 0">
                    <player-card v-for="(player,index) in players" 
                      :name="player.name" 
                      :score="player.score"
                      :image="player.image"
                      :index="++index"
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
              </div>
              <div class="col-md-2 col-lg-2 col-sm-12 col-xs-12"></div>
            </div>
          </div>
        </div>
    </div>
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
      players: [
        {
          name: 'Destiny Ajax',
          score: 12,
          image: '',
        },
        {
          name: 'Tito Akanbi',
          score: 12,
          image: '',
        },
        {
          name: 'Abdul Musa',
          score: 18,
          image: '',
        },
        {
          name: 'John Doe',
          score: 12,
          image: '',
        },
        {
          name: 'Adeniran Opeyemi',
          score: 12,
          image: '',
        }
      ],
      loading: false,
      error: null
    }
  },
  created() {
    //this.fetchData();
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

<style scoped>
@media only screen and (min-width : 992px) {
#leader .section {
  margin-top: 50px;
  padding: 20px;
}

#leader .section .leaderboard .header {
  color: #fff;
  text-align: left;
} 

#leader .section .leaderboard .header h4 {
  font-size: 30px;
}

#leader .section .leaderboard .header .header-row {
  background-color: #F57C00;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-items: center;
  border-radius: 5px;
  margin-bottom: 10px;
}

#leader .section .leaderboard .header .header-row .column {
  text-transform: uppercase;
}

#leader .section .leaderboard .header .header-row a {
  color: #fff;
  text-decoration-color: none;
  text-decoration: none;
  padding: 5px;
}

#leader .section .leaderboard .header .header-row .column.column1 {
  flex: 1;
}

#leader .section .leaderboard .header .header-row .column.column2 {
  flex: 1;
}

#leader .section .leaderboard .header .header-row .column.column3 {
  flex: 5;
}

#leader .section .leaderboard .header .header-row .column.column4 {
  flex: 1;
}

#leader .section .leaderboard .header .header-row .column.column5 {
  flex: 1;
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
}

@media only screen and (max-width : 768px) {
  #leader .section {
  margin-top: 50px;
  padding: 20px;
}

#leader .section .leaderboard .header {
  color: #fff;
  text-align: left;
}

#leader .section .leaderboard .header h4 {
  font-size: 30px;
}

#leader .section .leaderboard .header .header-row {
  background-color: #F57C00;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-items: center;
  border-radius: 5px;
  margin-bottom: 10px;
}

#leader .section .leaderboard .header .header-row .column {
  text-transform: uppercase;
}

#leader .section .leaderboard .header .header-row a {
  color: #fff;
  text-decoration-color: none;
  text-decoration: none;
  padding: 5px;
}

#leader .section .leaderboard .header .header-row .column.column1 {
  flex: 1;
}

#leader .section .leaderboard .header .header-row .column.column2 {
  flex: 1;
}

#leader .section .leaderboard .header .header-row .column.column3 {
  flex: 5;
}

#leader .section .leaderboard .header .header-row .column.column4 {
  flex: 1;
}

#leader .section .leaderboard .header .header-row .column.column5 {
  flex: 1;
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
    color: #fff;
  }

  #leader .no-value span {
    font-size: 50px;
    color: #fff;
  }

  #leader .no-value button {
    border: 1px solid #fff;
    width: 150px;
    padding: 10px;
    color: #fff;
  }

  #leader .no-value button:hover {
    border: 0.5px solid #F57C00;
    color: #F57C00;
  }
}
</style>
