<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="number" v-model="numberOfPlayers" >
    <button @click="addPlayers">continue</button>

    <div  class="playerInputsList">
    <li v-for="(player, index) in newPlayers" v-bind:key="index">
<p>player, index: {{index -1}}</p>
<!-- <input type="text" >poner dentro de este input que envie al metodo que sea son v.bind o lo que sea el index y dentro que le asigne al player con se index ese nommbre -->
      </li></div>
      <button @click="addPlayers">Set Matches
      </button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return{
      numberOfPlayers: "",
      newPlayers: []
  }},
  methods:{
    addPlayers() {

      console.log("adding number of players", this.numberOfPlayers )
      const newPlayers = [];

      for (let i = 0; i < this.numberOfPlayers; i++) {
        const newPlayer = {
        name: "",
        playerIndex: i,
        skills: 0,
        points: 0,
        }
      this.newPlayers.push(newPlayer);
      console.log(newPlayer.playerIndex, "index")
      }

  console.table(newPlayers);
  return newPlayers;
      }
    }
  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.playerInputsList{
  display: flex;
  flex-direction: column;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
