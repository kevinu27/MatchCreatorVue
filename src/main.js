import { createApp } from 'vue'
import App from './App.vue'
import {createStore} from 'vuex'


const store = createStore ({
    state(){
        return {
            numberOfPlayers: "",
            newPlayers: [],
            typeOfGame: "pingPong",
            matches: []
        }
    },
    mutations:{
        addPlayers() {
console.log("mutation")
    //         console.log("adding number of players", this.numberOfPlayers )
    //         const newPlayers = [];
  
    //        for (let i = 0; i < this.numberOfPlayers; i++) {
    //             const newPlayer = {
    //             name: "",
    //             playerIndex: i,
    //             skills: 0,
    //             points: 0,
    //             }
    //         this.newPlayers.push(newPlayer);
    //         console.log(newPlayer.playerIndex, "index")
    //         }
  
    // console.table(newPlayers);
    // console.log("mutation de vuex")
    // return newPlayers;
        },
}

})
console.log(store)

const app = createApp(App)
app.use(store)
app.mount('#app')

// createApp(App).use(store)
// createApp(App).mount('#app')
