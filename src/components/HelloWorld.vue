<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
<h4>What are you playing?</h4>
<h4>{{$store.state.typeOfGame}}</h4>

<input type="text" v-model="typeOfGame" >
<br>
<hr>  
    <input type="number" v-model="numberOfPlayers" >
    

    <div  class="playerInputsList">
      <button @click="$store.mutations.addPlayers">Set players inputs
      </button>
    <li v-for="(player, index) in newPlayers" v-bind:key="index" class="playerInputRow">
<p>player, index: {{index -1}}</p>
<input type="text" placeholder="Player name" v-on:input="setNames($event, index)">
<!-- <input type="text" >poner dentro de este input que envie al metodo que sea son v.bind o lo que sea el index y dentro que le asigne al player con se index ese nommbre -->
      </li></div>
      <button @click="addPlayers">display matches</button>
  
      <li v-for="(match, index) in matches" v-bind:key="index" class="PlayerNameList">
        <p>{{match.teams[0].members[0].name}} - {{match.teams[0].members[1].name}} <span> VS</span>  {{match.teams[1].members[0].name}} - {{match.teams[1].members[1].name}}</p>
        <p>{{}}</p>
        </li>
        <button @click="makeMatches">c</button>
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
      newPlayers: [],
      typeOfGame: "",
      matches: []
  }},
  methods:{
    addPlayers() {
        this.$store.commit('addPlayers')
  //     console.log("adding number of players", this.numberOfPlayers )
  //     const newPlayers = [];

  //     for (let i = 0; i < this.numberOfPlayers; i++) {
  //       const newPlayer = {
  //       name: "",
  //       playerIndex: i,
  //       skills: 0,
  //       points: 0,
  //       }
  //     this.newPlayers.push(newPlayer);
  //     console.log(newPlayer.playerIndex, "index")
  //     }

  // console.table(newPlayers);
  // return newPlayers;
      },
      setNames(event, id){
        console.log("id", id)
        console.log("event", event.target.value)
       
        this.newPlayers[id].name = event.target.value
         console.log("this.newPlayers", this.newPlayers)
      },
      makeMatches(){
        console.log("displaying matches....", this.newPlayers)
        const teams = []
   
        for (let i = 0; i < this.newPlayers.length; i++) {
          for (let j = 0; j < this.newPlayers.length; j++) {
            if (i === j) {
              continue;
              }
              const team = [this.newPlayers[j], this.newPlayers[i]];
              teams.push(team);
    }
   }
   console.log("teams",teams)
   for (let i = 0; i < teams.length; i++) {
    const player1 = teams[i][0];
    const player2 = teams[i][1];
    ///mirar si es necesario o lo puedo quitar/////////////////////////////////////////////////////////////////////
    for (let j = 0; j < teams.length; j++) {
      if (i === j) {
        continue;
      }
      if (player1 === teams[j][1] && player2 === teams[j][0]) {
        if (i < j) {
          teams.splice(j, 1);
        }
        break;
      }
    }
  }
  /////////////////
  console.log("teams2", teams)
  const matches = [];
  for (let i = 0; i < teams.length; i++) {
    for (let j = 0; j < teams.length; j++) {
      if (i === j) {
        continue;
      }
      const matchTeams = [
        { members: teams[j], points: 0 },
        { members: teams[i], points: 0 },
      ];
      matches.push({
        teams: matchTeams,
        id: `${i}${j}`,
      });
    }
  }
  console.log("matches", matches)
  for (let i = 0; i < matches.length; i++) {
    const element1 = matches[i].teams[0].members[0];
    const element2 = matches[i].teams[0].members[1];

    if (
      element1 === matches[i].teams[1].members[1] ||
      element1 === matches[i].teams[1].members[0] ||
      element2 === matches[i].teams[1].members[0] ||
      element2 === matches[i].teams[1].members[1]
    ) {
      matches.splice(i, 1);
      i = i - 1;
    }
  }
  console.log("matches2", matches)
  for (let i = 0; i < matches.length; i++) {
    const player1 = matches[i].teams[0].members[0].name;
    const player2 = matches[i].teams[0].members[1].name;
    for (let j = 0; j < matches.length; j++) {
      if (i === j) {
        continue;
      }
      if (
        player1 === matches[j].teams[1].members[0].name &&
        player2 === matches[j].teams[1].members[1].name
      ) {
        matches.splice(j, 1);
        j = j - 1;
        break;
      }
    }
  }
  console.log("matches final", matches)
  this.matches= matches
  console.log(this.matches)
      }
    }
    
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
