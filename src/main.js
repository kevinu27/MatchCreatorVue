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
}

})
console.log(store)

const app = createApp(App)
app.use(store)
app.mount('#app')

// createApp(App).use(store)
// createApp(App).mount('#app')
