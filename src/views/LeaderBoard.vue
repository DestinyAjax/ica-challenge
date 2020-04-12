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
                <h4>Leaderboard</h4>
                <div class="tab-menu">
                  <a @click="handleTab('web')" :class="web_active" href="#">Web Development</a>
                  <a @click="handleTab('ui')" :class="ui_active" href="#">UI/UX Design</a>
                  <a @click="handleTab('tech')" :class="tech_active" href="#">Technical Writing</a>
                </div>
                <div class="header">
                  <div class="header-row">
                    <a href="#" class="column column1">Rank</a>
                    <a href="#" class="column column2"></a>
                    <a href="#" class="column column3">Name</a>
                    <a href="#" class="column column4">Score</a>
                    <a href="#" class="column column5"></a>
                  </div>
                </div>
                <div class="body">
                  <div v-show="show_web">
                    <div v-if="webArr.length > 0">
                      <player-card v-for="(player,index) of webArr" 
                        :name="player.name" 
                        :score="player.score"
                        :image="player.image"
                        :index="++index"
                        :trophy="`${player.trophy}`"
                        v-bind:key="index"
                      />
                    </div>
                    <div class="no-value" v-else>
                      <span><i class="fa fa-ban"></i></span>
                      <p style="text-align: center">There are currently no players</p>
                    </div>
                  </div>
                  <div v-show="show_ui">
                    <div v-if="uiArr.length > 0">
                      <player-card v-for="(player,index) of uiArr" 
                        :name="player.name" 
                        :score="player.score"
                        :image="player.image"
                        :index="++index"
                        :trophy="`${player.trophy}`"
                        v-bind:key="index"
                      />
                    </div>
                    <div class="no-value" v-else>
                      <span><i class="fa fa-ban"></i></span>
                      <p style="text-align: center">There are currently no players</p>
                    </div>
                  </div>
                  <div v-show="show_tech">
                    <div v-if="techArr.length > 0">
                      <player-card v-for="(player,index) of techArr" 
                        :name="player.name" 
                        :score="player.score"
                        :image="player.image"
                        :index="++index"
                        :trophy="`${player.trophy}`"
                        v-bind:key="index"
                      />
                    </div>
                    <div class="no-value" v-else>
                      <span><i class="fa fa-ban"></i></span>
                      <p style="text-align: center">There are currently no players</p>
                    </div>
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
import { allSubmissions, allTracks } from "@/services/TrackService";
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
      show_web: false,
      show_ui: false,
      show_tech: false,
      web_active: '',
      ui_active: '',
      tech_active: '',
      loading: false,
      webArr: [],
      uiArr: [],
      techArr: [],
      error: null
    }
  },
  created() {
    this.fetchData();
    this.show_web = true;
    this.web_active = 'active';
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    async fetchData() {
      try {
        this.loading = true;
        const {data} = await allTracks();
        const web = data.data.filter(record => record.name === 'Web Development');
        const ui = data.data.filter(record => record.name === 'UI/UX Design');
        const tech = data.data.filter(record => record.name === 'Technical Writing');
        const web_sub = await allSubmissions(web[0].id);
        const ui_sub = await allSubmissions(ui[0].id);
        const tech_sub = await allSubmissions(tech[0].id);
        web_sub.data.data.map(data => {
          this.webArr.push({
            name: data.player_name,
            image: data.image_url,
            score: data.score,
            trophy: ''
          })
        });
        ui_sub.data.data.map(data => {
          this.uiArr.push({
            name: data.player_name,
            image: data.image_url,
            score: data.score,
            trophy: ''
          });
        });
        tech_sub.data.data.map(data => {
          this.techArr.push({
            name: data.player_name,
            image: data.image_url,
            score: data.score,
            trophy: ''
          });
        });
      }
      catch (err) {
        this.error = err.toString();
      }
      finally {
        this.loading = false;
      }
    },
    handleTab(type) {
      switch (type) {
        case 'web':
          this.web_active = 'active';
          this.show_web = true;
          this.ui_active = '';
          this.show_ui = false;
          this.tech_active = '';
          this.show_tech = false;
          break;
        case 'ui':
          this.web_active = '';
          this.show_web = false;
          this.ui_active = 'active';
          this.show_ui = true;
          this.tech_active = '';
          this.show_tech = false;
          break;
        case 'tech':
          this.web_active = '';
          this.show_web = false;
          this.ui_active = '';
          this.show_ui = false;
          this.tech_active = 'active';
          this.show_tech = true;
          break;
        default:
          break;
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

.tab-menu {
  background-color: #1b1c21;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: stretch;
}

.tab-menu a {
  display: inline-block;
  color: #e5e5e5;
  padding: 10px 30px 10px 30px;
  text-decoration: none;
  font-size: 14px;
}

.tab-menu a:hover {
  background-color: #f57c00;
}

.active {
  background-color: #f57c00;
}

.active-tab {
  background: #f57c00;
  color: #fff;
}

#leader .section .leaderboard h4 {
  font-size: 30px;
  margin-bottom: 20px;
  color: #fff;
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
  font-size: 14px;
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
  display: block;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 5px;
  color: #ffffff;
}

#leader .h3 {
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

.tab-menu {
  background-color: #1b1c21;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: stretch;
}

.tab-menu a {
  display: inline-block;
  color: #e5e5e5;
  padding: 10px 30px 10px 30px;
  text-decoration: none;
  font-size: 14px;
}

.tab-menu a:hover {
  background-color: #f57c00;
}

.active {
  background-color: #f57c00;
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
    display: block;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 5px;
    color: #ffffff;
  }

  #leader .h3 {
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
