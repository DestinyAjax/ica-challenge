<template>
  <div id="player-card">
    <span class="column column1">{{index}}</span>
    <div class="column column2">
      <img v-if="image === ''"  src="../assets/images/avatar.jpg" />
      <img v-else :src="image" />
    </div>
    <span class="column column3">{{ name }}</span>
    <span class="column column4">{{ score }}</span>
    <div class="column column5">
      <img src="../assets/images/group-1.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayerCard",
  props: {
    name: String,
    image: String,
    score: Number,
    index: Number
  }
};
</script>

<style scoped>
  #player-card {
    background-color: #E0E0E0;
    border-radius: 3px;
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    align-items: center;
  }

  #player-card .column {
    text-transform: uppercase; 
    padding: 10px;
  }

  #player-card .column.column1 {
    flex: 0.5
  }

  #player-card .column.column2 {
    flex: 1;
  }

  #player-card .column.column2 img {
    border: 3px solid #C5C5C5;
    background-color: #fff;
    border-radius: 50%;
    width: 50px;
    text-align: left;
  }

  #player-card .column.column3 {
    flex: 5
  }

  #player-card .column.column4 {
    flex: 0.5
  }

  #player-card .column.column5 {
    flex: 1
  }

  #player-card:hover {
    cursor: pointer;
  }
</style>
