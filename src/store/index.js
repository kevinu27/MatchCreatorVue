import {createStore} from 'vuex'
import rootMutation from './mutations.js'
import rootGetters from './getters.js'
import rootActions from './actions.js'
const store = createStore ({
    state(){
        return {
            numberOfPlayers: 0,
            newPlayers: [],
            typeOfGame: "",
            matches: [],
            currentPage: 0,
            selectedMatchVS: "",
            skillsFilter: 0,
            showModal: false,
        }     
    },
    actions: rootActions,
    mutations: rootMutation,
    getters: rootGetters,
})

export default store;