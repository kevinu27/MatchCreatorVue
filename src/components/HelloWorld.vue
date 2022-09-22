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
  
  
        <li v-for="(match, index) in $store.state.matches" v-bind:key="index" class="PlayerNameList">
      <div class="matchCard"> <p>{{match.teams[0].members[0].name}} - {{match.teams[0].members[1].name}} <span> VS</span>  {{match.teams[1].members[0].name}} - {{match.teams[1].members[1].name}}</p> <div class="inputScore"><input type="text" v-on:input="setMatchScore($event, match.id)"> <input type="text" v-on:input="setMatchScore2($event, match.id)"> </div></div>
      
        </li>
        <button @click="makeMatches" class="btn btn-primary">display matches</button>

       <div class="rankingNames" v-for="(newPlayers, index) in $store.state.newPlayers" v-bind:key="index" ><h2>{{newPlayers.name}} ----- {{newPlayers.points}}</h2></div>
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
        },


    },
    methods: {        
      onInputScoreAlert(){ 
         this.$store.commit("onInputScoreAlert");
        },
        addPlayers() {
            this.$store.commit("addPlayers");
        },
        setNames(event, id) {
            this.$store.commit("setNames", { event: event, id: id });
        },
        makeMatches() {
            this.$store.commit("makeMatches");
        },
        setMatchScore(event, id){
          this.$store.commit("setMatchScore", { event: event, id: id });
       

          // console.log("id del match",id)
        },
        setMatchScore2(event, id){
          this.$store.commit("setMatchScore2", { event: event, id: id });
        

          // console.log("id del match",id)
        },
    },
    components: { SportType }
}


</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rankingNames{
  display: flex;
  flex-direction: column;
}
.rankingNames h2{
border: 2px solid red;
margin: 0px;
margin-top: 1.5rem;
}


.inputScore{
  display: flex;
  /* border: 2px solid red; */
  align-items: center;
  margin-right: 4rem;
}

.inputScore input{
height: 25px;
margin-left: 2rem;
}


  .matchCard{
    display: flex;
    background-color: rgb(240,240,240);
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
font-size: 2rem;
margin-bottom: 1rem;
margin-top: 1rem;
border: 3px solid green;
  }
  .PlayerNameList{
display: flex;

/* border: 2px solid red; */
width: 100%;
justify-content: center;
align-items: center;
/* height: 100px; */
/* margin-bottom: 3rem; */
  }
  .PlayerNameList p{
/* border: 2px solid green; */
width: 70%;
margin-left: 4rem;
margin-right: 5rem;
/* background-color: rgb(240,240,240);
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
font-size: 2rem; */
  }
  .PlayerNameList span{
    font-size: 2.8rem;
    margin-left: 4rem;
    margin-right: 4rem;
  }

  .playerInputRow{
    display: flex;
    justify-content: center;
    border: 2px solid blue;
  }

.playerInputsList{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
