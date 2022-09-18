<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

<SportType></SportType>

<input type="text" v-model="typeOfGame" >
<br>
<hr>  
    <input type="number" v-model="numberOfPlayers" >
    

    <div  class="playerInputsList">
      <button @click="addPlayers">Set players inputs
      </button>
    <li v-for="(player, index) in $store.state.newPlayers" v-bind:key="index" class="playerInputRow">
<p>player, index: {{index -1}}</p>
<input type="text" placeholder="Player name" v-on:input="setNames($event, index)">
      </li></div>
      <button @click="makeMatches">display matches</button>
  
      <li v-for="(match, index) in $store.state.matches" v-bind:key="index" class="PlayerNameList">
        <p>{{match.teams[0].members[0].name}} - {{match.teams[0].members[1].name}} <span> VS</span>  {{match.teams[1].members[0].name}} - {{match.teams[1].members[1].name}}</p>
        <p>{{}}</p>
        </li>
        <button @click="makeMatches">c</button>
  </div>
</template>

<script>
import SportType from "./SportType.vue";
export default {
    name: "HelloWorld",
    props: {
        msg: String
    },
    data() {
        return {
            numberOfPlayers: "",
        };
    },
    watch: {
        numberOfPlayers() {
            console.log("entrando en el watch");
            this.$store.commit("setNumberOfPlayers", this.numberOfPlayers);
        }
    },
    methods: {
        addPlayers() {
            this.$store.commit("addPlayers");
        },
        setNames(event, id) {
            this.$store.commit("setNames", { event: event, id: id });
        },
        makeMatches() {
            this.$store.commit("makeMatches");
        }
    },
    components: { SportType }
}


</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .PlayerNameList{
display: flex;
flex-direction: column;
border: 2px solid red;
  }
  .playerInputRow{
    display: flex;
    justify-content: center;
  }

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
