import { createApp } from 'vue'
import App from './App.vue'
import {createStore} from 'vuex'


const store = createStore ({
    state(){
        return {
            numberOfPlayers: 0,
            newPlayers: [],
            typeOfGame: "pingPong",
            matches: []
        }
    },
    mutations:{
        setNumberOfPlayers(state, payload){
            console.log(state)
            state.numberOfPlayers = payload

        },
        addPlayers(state) {
            console.log("mutation", state)
            console.log("adding number of players", state.numberOfPlayers )
            const newPlayers = [];
  
           for (let i = 0; i < state.numberOfPlayers; i++) {
            console.log("for")
                const newPlayer = {
                name: "",
                playerIndex: i,
                skills: 0,
                points: 0,
                }
            state.newPlayers.push(newPlayer);
            console.log(newPlayer.playerIndex, "index")
            }
  
 
    console.log("state.newPlayers", state.newPlayers)
    return newPlayers;
        },
        setNames(state, payload){
            console.log(state)
            console.log("id", payload.id)
            console.log("event", payload.event.target.value)
           
            state.newPlayers[payload.id].name = payload.event.target.value
             console.log("this.newPlayers", state.newPlayers)
          },
    makeMatches(state){
    const teams = []
    for (let i = 0; i < state.newPlayers.length; i++) {
      for (let j = 0; j < state.newPlayers.length; j++) {
        if (i === j) {
          continue;
          }
          const team = [state.newPlayers[j], state.newPlayers[i]];
          teams.push(team);
           }
                }
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
state.matches= matches
console.log("state.matches",state.matches)
  
    }
}

})
console.log(store)

const app = createApp(App)
app.use(store)
app.mount('#app')

// createApp(App).use(store)
// createApp(App).mount('#app')
