<template>
    <div>
        <select v-model="selected">
            <option>1vs1</option>
            <option>2vs2</option>
        </select>
        <div class="buttonInput">
            <div>
                <p>Number of players:</p>
            <input type="number" class="numer" v-model="numberOfPlayers" >
        </div>
            <button @click="addPlayers" v-if="getNumberOfPlayers > 0" class="showPlayerButton">Show players </button>
            <p class="tooltips">This button will display the text inputs where you will have to insert the players names</p>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'NumberOfPlayers',
  data() {
        return {
            numberOfPlayers: "",
            selected: ""
        };
    },
    watch: {
        numberOfPlayers() {
            this.$store.dispatch("setNumberOfPlayers", this.numberOfPlayers);
        },
        selected(){
            console.log("selected", this.selected)
            this.$store.dispatch("selected", this.selected)
        }
    },
    computed: {
        ...mapGetters(['getNumberOfPlayers'])
    },
    methods: {        
        addPlayers() {
            this.$store.dispatch("setAddPlayers");
            this.$store.dispatch('setPageForward');
        },
    }
  }
</script>

<style scoped>
.showPlayerButton:hover + .tooltips{
visibility: visible;
}

.tooltips{
background-color: rgba(0,0,0,0.8) ;
color: white;
padding:1rem;
border-radius: 0.5rem;
visibility: hidden;
margin-top: 0px;
}
/* .tooltip:hover .tooltiptext {
  visibility: visible;
} */
.buttonInput{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.buttonInput input{
    height: 1.8rem;
    margin-bottom: 1rem;
}
.buttonInput button{
    font-weight: bold;
    margin-bottom: 1rem;
   border-style: none;
   height: 3rem;
   border-radius: 3px;
   padding-left: 2rem;
   padding-right: 2rem;
   margin-bottom: 1rem;
}

select{
    height: 2rem;
    margin-bottom: 1rem;
}

</style>