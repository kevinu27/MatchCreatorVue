import { createApp } from 'vue'
import App from './App.vue'
import {createStore} from 'vuex'


const store = createStore ({
state(){
    return {
        numberOfPlayers: "",
        newPlayers: [],
        typeOfGame: "",
        matches: []
    }
}

})
console.log(store)

createApp(App).use(store)
createApp(App).mount('#app')
