<template>
  <div id="player-card">
    <img src="images/pix.jpg" />
    <div class="name"><p>{{name}}</p></div>
    <div class="score"><p>{{score}}</p></div>
  </div>
</template>

<script>
export default {
  name: "PlayerCard",
  props: {
    name: String,
    image: String,
    score: String
  }
};
</script>

<style scoped>
    #player-card {
        padding: 10px;
        background-color: #404040;
        box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.25);
        border-radius: 3px;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 10px;
    }

    #player-card:hover {
        cursor: pointer;
    }

    #player-card img {
        border: 8px solid #C5C5C5;
        box-sizing: border-box;
        background-color: #fff;
        border-radius: 50%;
        width: 80px;
        margin-right: 30px;
    }

    #player-card .name {
        padding: 10px;
    }

    #player-card .name p {
        font-family: Lato;
        font-style: normal;
        font-weight: bold;
        font-size: 23px;
        line-height: 28px;
        letter-spacing: 0.1em;
        margin-top: 10px;
        color: #C5C5C5;
    }

    #player-card .score {
        text-align: right;
        padding: 10px;
    }

    #player-card .score p {
        font-family: Arial Black;
        font-style: normal;
        font-weight: 900;
        font-size: 30px;
        line-height: 42px;
        color: #3FE277;
        margin-left: 250px;
    }
</style>
